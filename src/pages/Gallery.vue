<script setup>
import ImagesCarousel from "../components/carousels/ImagesCarousel.vue";
import HeroArtSection from "../components/hero/HeroArtSection.vue";
</script>

<template>
  <ImagesCarousel />
  <HeroArtSection>
    <div class="w-full flex items-center justify-center py-10">
      <button
        type="button"
        class="flex items-center justify-centertext-white z-10 bg-[#3d7dbd] w-fit font-semibold px-9 py-4 text-xl md:text-4xl lg:text-4xl rounded-full hover:text-[#3d7dbd] hover:bg-white"
      >
        Contáctanos
      </button>
    </div>
  </HeroArtSection>
</template>
