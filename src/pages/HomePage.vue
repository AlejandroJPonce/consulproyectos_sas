<script setup>
import HeroSectionImage from "../components/hero/HeroSectionImage.vue";
import HeroSectionImage2 from "../components/hero/HeroSectionImage2.vue";
import HeroSectionCards from "../components/hero/HeroSectionCards.vue";
import Carousel1 from "../components/carousels/Carousel1.vue";
import HeroWhiteSection from "../components/hero/HeroWhiteSection.vue";
import Form1 from "../components/forms/Form1.vue";
</script>

<template>
  <HeroSectionImage />
  <HeroSectionImage2 />
  <HeroSectionCards />
  <Carousel1 />
  <HeroWhiteSection>
    <div class="w-full flex items-center justify-center">
      <div
        class="z-10 max-w-[650px] h-auto my-20 py-10 px-10 rounded-3xl lg:bg-gray-300/30 lg:backdrop-blur-sm"
      >
        <Form1 />
      </div>
    </div>
  </HeroWhiteSection>
</template>
