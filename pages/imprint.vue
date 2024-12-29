<template>
  <AtomsWrapper theme="light" is-full-screen html-tag="section" y-padding="lg" class="flex min-h-screen flex-col">
    <template #default="{ isFullScreen, theme }">
      <AtomsFlex :is-full-screen="isFullScreen" wrap y-gap="lg">
        <OrganismsOneComponentsRow>
          <AtomsHeadline html-tag="h1" class="col-span-full lg:col-span-8" :theme="theme">
            {{ $t('pages.imprint.name') }}
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
                    <AtomsBodyText>Lutz Weigold</AtomsBodyText>
                    <AtomsBodyText>Obere Hönggerstrasse 5</AtomsBodyText>
                    <AtomsBodyText>8103 Unterengstringen</AtomsBodyText>
                    <AtomsBodyText>Schweiz</AtomsBodyText>
                  </template>
                </AtomsInformationTextItem>
                <AtomsInformationTextItem>
                  <template #headline>
                    <AtomsHeadline html-tag="h4">Kontakt</AtomsHeadline>
                  </template>
                  <template #text>
                    <div>
                      <AtomsBodyText>
                        <NuxtLink
                          class="underline"
                          :to="$t('general.personal.email.to')"
                          :title="$t('general.personal.email.title')"
                          >{{ $t('general.personal.email.name') }}</NuxtLink
                        >
                      </AtomsBodyText>
                      <AtomsBodyText>
                        <NuxtLink
                          class="underline"
                          :to="$t('general.personal.phone.to')"
                          :title="$t('general.personal.phone.title')"
                          >{{ $t('general.personal.phone.name') }}</NuxtLink
                        >
                      </AtomsBodyText>
                      <AtomsBodyText>
                        {{ $t('general.personal.website.name') }}
                      </AtomsBodyText>
                    </div>
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
definePageMeta({
  layout: 'footerless',
});
</script>
