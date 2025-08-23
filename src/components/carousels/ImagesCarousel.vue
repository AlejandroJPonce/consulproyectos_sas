<script setup>
import { ref } from "vue";
import imagen1 from "../../assets/gallery/gallery_1.jpg";
import imagen2 from "../../assets/gallery/gallery_2.jpg";
import imagen3 from "../../assets/gallery/gallery_3.jpg";
import imagen4 from "../../assets/gallery/gallery_4.jpg";
import imagen5 from "../../assets/gallery/gallery_5.jpg";
import imagen6 from "../../assets/gallery/gallery_6.jpg";
import imagen7 from "../../assets/gallery/gallery_7.jpg";
import imagen8 from "../../assets/gallery/gallery_8.jpg";
import imagen9 from "../../assets/gallery/gallery_9.jpg";
import imagen10 from "../../assets/gallery/gallery_10.jpg";
import imagen11 from "../../assets/gallery/gallery_11.jpg";
import imagen12 from "../../assets/gallery/gallery_12.jpg";
import imagen13 from "../../assets/gallery/gallery_13.jpg";
import imagen14 from "../../assets/gallery/gallery_14.jpg";
import imagen15 from "../../assets/gallery/gallery_15.jpg";
import imagen16 from "../../assets/gallery/gallery_16.jpg";

const images = [
  imagen1,
  imagen2,
  imagen3,
  imagen4,
  imagen5,
  imagen6,
  imagen7,
  imagen8,
  imagen9,
  imagen10,
  imagen11,
  imagen12,
  imagen13,
  imagen14,
  imagen15,
  imagen16,
];

const currentIndex = ref(0);

function prev() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % images.length;
}

function goTo(index) {
  currentIndex.value = index;
}

function getTransform(index) {
  if (!images.length) return "";
  const position = (index - currentIndex.value + images.length) % images.length;
  if (position === 0) {
    return "translateX(-50%) scale(1) rotateY(0deg)";
  } else if (position === 1) {
    return "translateX(20%) scale(0.8) rotateY(-30deg)";
  } else if (position === images.length - 1) {
    return "translateX(-120%) scale(0.8) rotateY(30deg)";
  }
  return "translateX(-50%) scale(0.5) rotateY(0deg)";
}

function getZIndex(index) {
  return currentIndex.value === index ? 20 : 10;
}

function getOpacity(index) {
  if (!images.length) return 0;
  const position = (index - currentIndex.value + images.length) % images.length;
  return position === 0 || position === 1 || position === images.length - 1
    ? 1
    : 0;
}
</script>

<template>
  <div
    class="relative w-full flex flex-col items-center gap-10 bg-[var(--primary-color)] py-10"
  >
    <!-- Título -->
    <span class="text-white text-6xl font-bold">Galería</span>
    <span class="text-white text-2xl font-light text-center"
      >SOLUCIONES INTEGRALES, RESULTADOS CONFIABLES</span
    >

    <!-- Carrusel -->
    <div
      v-if="images.length"
      class="relative w-[660px] h-[350px] sm:flex md:flex lg:flex items-center justify-center perspective-[1200px] hidden sm:visible primary-carousel"
    >
      <div class="relative w-full h-full">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="absolute rounded-2xl top-0 left-1/2 sm:w-[75%] h-[100%] overflow-hidden transition-all duration-700 ease-in-out"
          :style="{
            transform: getTransform(index),
            zIndex: getZIndex(index),
            opacity: getOpacity(index),
          }"
        >
          <img :src="img" class="w-full h-full object-cover" />
        </div>
      </div>

      <!-- Flechas -->
      <button
        @click="prev"
        class="absolute left-[-300px] top-1/2 -translate-y-1/2 text-white rounded-full z-10 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-20"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        @click="next"
        class="absolute right-[-300px] top-1/2 -translate-y-1/2 text-white rounded-full z-10 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-20"
        >
          <path
            fill-rule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!-- Carrusel -->
    <div class="w-full h-full flex items-center justify-center">
      <img
        :src="images[currentIndex]"
        alt="Imagen carrusel"
        class="w-[300px] h-[250px] rounded-2xl sm:w-[600px] sm:h-[400px] object-cover transition-all duration-500 visible sm:hidden secondary-carousel"
      />
    </div>

    <!-- Indicadores -->
    <div class="flex items-center gap-3 mt-4 primary-carousel">
      <span
        v-for="(img, index) in images"
        :key="index"
        class="w-4 h-4 rounded-full cursor-pointer transition-all duration-300"
        :class="currentIndex === index ? 'bg-white scale-110' : 'bg-white/40'"
        @click="goTo(index)"
      />
    </div>

    <!-- Miniaturas inferiores -->
    <div
      class="mx-auto w-full overflow-auto max-w-[900px] flex flex-wrap items-center justify-center py-2 gap-5 px-2"
    >
      <div
        v-for="(img, index) in images"
        :key="index"
        class="w-18 h-18 cursor-pointer rounded-xl overflow-hidden transition-all duration-300"
        :class="
          currentIndex === index
            ? 'border-2 border-white scale-105'
            : 'opacity-70'
        "
        @click="goTo(index)"
      >
        <img :src="img" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (width < 1310px) {
  .primary-carousel {
    display: none;
  }

  .secondary-carousel {
    display: initial;
  }
}
</style>
