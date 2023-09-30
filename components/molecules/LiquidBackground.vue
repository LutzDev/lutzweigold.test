<template>
  <div>
    <div ref="container" class="sticky top-0 h-screen w-screen bg-typo-800 brightness-100"></div>
  </div>
</template>

<script setup lang="ts">
import {
  SRGBColorSpace,
  Mesh,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  WebGLRenderer,
  DoubleSide,
  Vector2,
  Vector4,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

// TODO: https://github.com/nuxt/nuxt/issues/22994
const { $gsap: gsap, $Power4: Power4 } = useNuxtApp();
const { width: windowWidth, height: windowHeight } = useWindowSize();

const modalStore = useModalStore();
const { isModalOpen } = storeToRefs(modalStore);

let scene: Scene;
let camera: PerspectiveCamera;
let renderer: WebGLRenderer;
let time = 0;
let width: number | undefined;
let height: number | undefined;
let controls: OrbitControls;
let composer: EffectComposer;
let material: ShaderMaterial;
let geometry: SphereGeometry;
let plane: Mesh;
let ctx: gsap.Context;
let tl: gsap.core.Timeline;

const container = ref<HTMLDivElement | null>(null);

const initPost = () => {
  composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  const effect1 = new ShaderPass({
    uniforms: {
      tDiffuse: { value: null },
      tSize: { value: new Vector2(256, 256) },
      center: { value: new Vector2(0.5, 0.5) },
      angle: { value: 1.57 },
      scale: { value: 1.0 },
    },

    vertexShader: /* glsl */ `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

    fragmentShader: /* glsl */ `

		uniform vec2 center;
		uniform float angle;
		uniform float scale;
		uniform vec2 tSize;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		float pattern() {

			float s = sin( angle ), c = cos( angle );

			vec2 tex = vUv * tSize - center;
			vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;

			return ( sin( point.x ) * sin( point.y ) ) * 4.0;

		}


        float random(vec2 p) {
            vec2 k1 = vec2(
                23.14069263277926, // e^pi (Gelfond's constant)
                2.665144142690225 // 2^sqrt(2) (Gelfond–Schneider constant)
            );
            return fract(
                cos(dot(p, k1)) * 12345.6789
            );
        }



		void main() {

			vec4 color = texture2D( tDiffuse, vUv );

            vec2 uvrandom = vUv;
            uvrandom.y *= random(vec2(uvrandom.y, 0.4));

            color.rgb +=random(uvrandom)*0.1;


            gl_FragColor = color;

		}`,
  });
  effect1.uniforms.scale.value = 4;
  composer.addPass(effect1);
};

const addObjects = () => {
  material = new ShaderMaterial({
    side: DoubleSide,
    uniforms: {
      time: { value: 0 },
      resolution: { value: new Vector4() },
    },
    vertexShader: vertexShader(),
    fragmentShader: fragmentShader(),
    wireframe: false,
  });
  geometry = new SphereGeometry(1.5, 32, 32);
  plane = new Mesh(geometry, material);
  scene.add(plane);
};

const render = () => {
  time += 0.005;
  material.uniforms.time.value = time;
  composer.render();
  requestAnimationFrame(render);
};

onMounted(() => {
  width = container.value?.offsetWidth;
  height = container.value?.offsetHeight;

  if (width && height && container.value) {
    scene = new Scene();
    renderer = new WebGLRenderer();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0xeeeeee, 1);
    renderer.outputColorSpace = SRGBColorSpace;

    container.value.appendChild(renderer.domElement);

    camera = new PerspectiveCamera(100, width / height, 0.001, 1000);
    camera.position.set(0.5, 0, 1.3);
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = false;

    addObjects();
    initPost();
    render();
  }

  ctx = gsap.context(() => {
    tl = gsap.timeline({
      paused: true,
      defaults: { duration: 2, ease: Power4.easeInOut },
    });

    tl.to(camera.rotation, {
      y: -0.75,
    });

    tl.to(
      container.value,
      {
        filter: 'saturate(0.15)',
      },
      '<'
    );
    watch(
      () => isModalOpen.value,
      (newValue) => {
        if (newValue) {
          tl.play();
        } else {
          tl.reverse();
        }
      },
      { immediate: true }
    );

    watch(
      () => [windowWidth.value, windowHeight.value],
      () => {
        width = container.value?.offsetWidth;
        height = container.value?.offsetHeight;
        if (width && height) {
          renderer.setSize(width, height);
          composer.setSize(width, height);
          camera.aspect = width / height;
        }
        camera.updateProjectionMatrix();
      },
      { immediate: true }
    );
  });
});

onUnmounted(() => {
  ctx.revert();
  ctx.kill();
});

const vertexShader = () => {
  return `
  uniform float time;
  varying vec2 vUv;
  varying vec3 vPosition;
  uniform vec2 pixels;
  float PI = 3.141592653589793238;
  void main() {
  vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }`;
};

const fragmentShader = () => {
  return `uniform float time;
uniform float progress;
uniform sampler2D texture1;
uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;

// NOISE FUNCTION
float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}

float noise(vec3 p){
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * (1.0 / 41.0));
    vec4 o2 = fract(k4 * (1.0 / 41.0));

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

float createLines(vec2 uv, float offset){
    return smoothstep(
    0., .8 + offset*.5,
    0.5*abs((sin(uv.x*20.) + offset*2.))
    );
}

mat2 rotate2D(float angle){
    return mat2(
    cos(angle),-sin(angle),
    sin(angle),cos(angle)
    );
}

void main() {
    float n = noise(vPosition +time);

    vec3 highlight =  vec3(30./255., 5./255., 60./255.); // purple
    vec3 background =  vec3(255./255., 56./255., 110./255.); // red
    vec3 peak =  vec3(5./255., 0./255., 40./255.);
    vec3 accent =   vec3(100./255., 255./255., 0./255.); // green
    vec3 test =   vec3(75./255., 125./255., 0./255.);


    vec2 baseUV = rotate2D(n)*vPosition.xy*0.1; // rotation, edit 0.2
    float basePattern = createLines(baseUV, 0.6);
    float secondPattern = createLines(baseUV, 0.4);
    float thirdPatter = createLines(baseUV, 0.2);
    float fourthPattern = createLines(baseUV, 0.1);

    vec3 baseColor = mix(peak,highlight,basePattern);
    vec3 secondBaseColor = mix(baseColor,background,secondPattern);
    vec3 thirdBaseColor = mix(secondBaseColor,accent,thirdPatter);
    vec3 fourthBaseColor = mix(thirdBaseColor,test,fourthPattern);

    gl_FragColor = vec4( vec3(fourthBaseColor), 1.);
}`;
};
</script>
