<template>
  <AtomsWrapper class="h-screen bg-purple-500" html-tag="section" @click="console.log('Section 1')">
    <AtomsHeadlineText html-tag="h1">The quick brown fox jumps over the lazy dog</AtomsHeadlineText>
    <AtomsHeadlineText html-tag="h2">The quick brown fox jumps over the lazy dog</AtomsHeadlineText>
    <AtomsHeadlineText html-tag="h3">The quick brown fox jumps over the lazy dog</AtomsHeadlineText>
    <AtomsHeadlineText html-tag="h4">The quick brown fox jumps over the lazy dog</AtomsHeadlineText>
  </AtomsWrapper>
  <AtomsWrapper class="h-screen bg-purple-500" html-tag="section" @click="console.log('Section 1')">
    Section 2
  </AtomsWrapper>
  <AtomsWrapper class="h-screen bg-purple-500" html-tag="section" @click="console.log('Section 1')">
    Section 3
  </AtomsWrapper>
</template>

<script lang="ts" setup></script>
