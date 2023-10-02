<template>
  <div class="fixed left-0 top-0 z-40 w-full mix-blend-difference">
    <AtomsWrapper class="text-white">
      <AtomsFlex class="justify-between">
        <AtomsLogo />
        <div class="text-right">
          <AtomsSmallText>
            <AtomsContactItem
              title="general.personal.phone.title"
              to="general.personal.phone.to"
              name="general.personal.phone.name"
            />
          </AtomsSmallText>
          <AtomsSmallText>
            <AtomsContactItem
              title="general.personal.email.title"
              to="general.personal.email.to"
              name="general.personal.email.name"
            />
          </AtomsSmallText>
        </div>
      </AtomsFlex>
    </AtomsWrapper>
  </div>
</template>
<script setup lang="ts"></script>
