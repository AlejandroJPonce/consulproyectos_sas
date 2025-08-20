<script setup>
import { ref } from "vue";
import imagen from "../../assets/placeholder-1.png"

const images = [
  imagen,
  imagen,
  imagen,
  imagen,
  imagen,
  imagen,
  imagen,
  imagen,
  imagen,
  imagen,
  
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
    class="relative w-full flex flex-col items-center gap-10 bg-[#162746] py-20"
  >
    <!-- Título -->
    <span class="text-white text-6xl font-bold">Galería</span>
    <span class="text-white text-2xl font-light text-center"
      >SOLUCIONES INTEGRALES, RESULTADOS CONFIABLES</span
    >

    <!-- Carrusel -->
    <div
      v-if="images.length"
      class="relative w-[700px] h-[400px] sm:flex md:flex lg:flex items-center justify-center perspective-[1200px] hidden sm:visible primary-carousel"
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
        class="absolute left-[-300px] top-1/2 -translate-y-1/2 text-white rounded-full z-10"
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
        class="absolute right-[-300px] top-1/2 -translate-y-1/2 text-white rounded-full z-10"
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
    <img
        :src="images[currentIndex]"
        alt="Imagen carrusel"
        class=" w-[300px] rounded-2xl sm:w-[600px] h-full object-cover transition-all duration-500 visible sm:hidden secondary-carousel"
      />

    <!-- Indicadores -->
    <div class="flex items-center gap-3 mt-4">
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
      class="mx-auto w-full overflow-auto flex flex-wrap sm:flex-nowrap items-center justify-center py-2 gap-5 px-2"
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

  .secondary-carousel{
    display: initial;
  }
}
</style>
