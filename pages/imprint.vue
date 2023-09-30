<template>
  <div class="!h-[100dvh] h-screen bg-gray-600"><h1>IMPRINT SITE</h1></div>
  <div class="!h-[100dvh] h-screen bg-gray-200">Second section</div>
  <div class="!h-[100dvh] h-screen bg-gray-600">Third section</div>
  <div class="!h-[100dvh] h-screen bg-gray-200">Fourgh section</div>
</template>
<!--
<template>
  <AtomsWrapper
    theme="light"
    is-full-screen
    html-tag="section"
    y-padding="lg"
    class="flex min-h-screen flex-col bg-typo-100"
  >
    <template #default="{ isFullScreen, theme }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h1" class="col-span-full lg:col-span-8" :theme="theme">
            {{ $t('pages.imprint.title') }}
          </AtomsHeadline>
        </OrganismsOneComponentsRow>
        <OrganismsOneComponentsRow y-gap="none">
          <div class="col-span-full space-y-2xl">
            <MoleculesInformationText>
              <template #content>
                <AtomsInformationTextItem>
                  <template #headline>
                    <AtomsHeadline html-tag="h4">Angaben gemäß § 5 TMG</AtomsHeadline>
                  </template>
                  <template #text>
                    <AtomsBodyText>Lutz Weigold (Einzelunterehmen)</AtomsBodyText>
                    <AtomsBodyText>Hintergasse 8</AtomsBodyText>
                    <AtomsBodyText>69483 Wald-Michelbach</AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
                <AtomsInformationTextItem>
                  <template #headline>
                    <AtomsHeadline html-tag="h4">Kontakt</AtomsHeadline>
                  </template>
                  <template #text>
                    <AtomsBodyText>
                      <NuxtLink
                        class="underline"
                        :to="`mailto:${$t('general.personal.email.entry')}`"
                        :title="$t('general.personal.email.title')"
                        >{{ $t('general.personal.email.entry') }}</NuxtLink
                      >
                    </AtomsBodyText>
                    <AtomsBodyText>
                      <NuxtLink
                        class="underline"
                        :to="`tel:${$t('general.personal.phone.entry')}`"
                        :title="$t('general.personal.phone.title')"
                        >{{ $t('general.personal.phone.entry') }}</NuxtLink
                      >
                    </AtomsBodyText>
                    <AtomsBodyText>
                      <NuxtLink
                        class="underline"
                        target="_blank"
                        :to="`https://${$t('general.personal.website.entry')}`"
                        :title="$t('general.personal.website.title')"
                        >{{ $t('general.personal.website.entry') }}</NuxtLink
                      >
                    </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
                <AtomsInformationTextItem>
                  <template #headline>
                    <AtomsHeadline html-tag="h4">Gewerbeanmeldung</AtomsHeadline>
                  </template>
                  <template #text>
                    <AtomsBodyText
                      >Die Gewerbeanmeldung wurde am 02.07.2015 durch Gemeinde Wald-Michelbach erteilt.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
                <AtomsInformationTextItem>
                  <template #headline>
                    <AtomsHeadline html-tag="h4">EU-Streitschlichtung</AtomsHeadline>
                  </template>
                  <template #text>
                    <AtomsBodyText
                      >Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                      <NuxtLink
                        class="underline"
                        target="_blank"
                        :to="`https://${$t('pages.imprint.content.commission.website.entry')}`"
                        :title="$t('pages.imprint.content.commission.website.title')"
                        >{{ $t('pages.imprint.content.commission.website.entry') }}</NuxtLink
                      >
                    </AtomsBodyText>
                    <AtomsBodyText> Meine E-Mail-Adresse finden Sie oben im Impressum. </AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
                <AtomsInformationTextItem>
                  <template #headline>
                    <AtomsHeadline html-tag="h4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</AtomsHeadline>
                  </template>
                  <template #text>
                    <AtomsBodyText
                      >Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                      Verbraucherschlichtungsstelle teilzunehmen.</AtomsBodyText
                    >
                  </template>
                </AtomsInformationTextItem>
              </template>
            </MoleculesInformationText>
          </div>
        </OrganismsOneComponentsRow>
      </AtomsFlex>
    </template>
  </AtomsWrapper>
</template>

<script setup lang="ts">
const { t } = useI18n();

definePageMeta({
  layout: 'footerless',
});
</script>
-->
