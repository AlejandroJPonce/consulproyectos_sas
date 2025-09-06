<script setup>
import HeroWhiteSection from "../components/hero/HeroWhiteSection.vue";
import foodPlate from "../assets/food_plate.webp";

import handIcon from "../assets/hand_icon.png";
import lightIcon from "../assets/light_icon.png";
import zoomIcon from "../assets/zoom_icon.png";
import socialIcon from "../assets/social_icon.png";

import imagen1 from "../assets/gallery/gallery1.jpg";
import imagen3 from "../assets/gallery/gallery3.jpg";
import imagen8 from "../assets/gallery/gallery8.jpg";
import imagen15 from "../assets/gallery/gallery15.jpg";
import imagen16 from "../assets/gallery/gallery16.jpg";
import { onMounted } from "vue";

const items = [
  {
    id: 1,
    title: "Transparencia y sinceridad",
    icon: zoomIcon,
  },
  {
    id: 2,
    title: "Innovación y creatividad",
    icon: lightIcon,
  },
  {
    id: 3,
    title: "Responsabilidad social",
    icon: handIcon,
  },
  {
    id: 4,
    title: "Trabajo en equipo",
    icon: socialIcon,
  },
];


onMounted(() => {
  window.scroll({
    top: 0, // Scroll to 500 pixels from the top
    left: 0,
    behavior: "smooth", // Add smooth scrolling animation
  });
})

</script>

<template>
  <section
    class="relative flex flex-col gap-5 lg:gap-10 items-center justify-start w-full h-[850p] md:h-[calc(90vh) lg:h-[calc(90vh)] bg-[var(--primary-color)] pb-40 pt-15 px-15 lg:pt-35 lg:px-20"
  >
    <div>
      <span class="text-white text-3xl md:text-8xl lg:text-8xl font-bold"
        >Quiénes somos</span
      >
    </div>
    <div class="w-full text-justify lg:text-center">
      <span class="text-white lg:text-2xl font-light"
        >Somos una empresa dedicada a brindar soluciones integrales que
        respondan a las necesidades visibles del mercado, tanto en el sector
        público como privado. Contamos con un equipo interdisciplinario que
        ofrece asesoría y acompañamiento en la estructuración de proyectos,
        consultoría jurídica, asesoría financiera, apoyo técnico, logística y
        servicios complementarios. Nuestro compromiso es garantizar calidad,
        eficiencia y confianza en cada uno de nuestros procesos.</span
      >
    </div>

    <div
      class="absolute w-full h-[90px] lg:h-[140px] bottom-0 bg-[#e5e5e5] z-10"
    >
      <div class="relative">
        <div
          class="absolute flex items-center justify-center p-10 w-full gap-1 lg:gap-5 top-[-65px] lg:top-[-150px]"
        >
          <img
            class="w-[102px] lg:w-[370px] rounded-xl"
            :src="imagen1"
            alt=""
          />
          <img class="w-[82px] lg:w-[320px] rounded-xl" :src="imagen3" alt="" />
          <img
            class="w-[102px] lg:w-[370px] rounded-xl"
            :src="imagen8"
            alt=""
          />
          <img
            class="w-[82px] lg:w-[320px] rounded-xl"
            :src="imagen16"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>

  <section
    class="relative flex flex-col gap-3 lg:gap-10 items-start justify-center w-full h-[650p] md:h-[calc(60vh) lg:h-[calc(60vh)] bg-[#e5e5e5] pt-5 pb-20 px-15 lg:pb-0 lg:py-15 lg:px-20"
  >
    <div>
      <span class="text-gray-600 text-2xl lg:text-5xl font-bold"
        >Nuestra Misión</span
      >
    </div>
    <div class="lg:w-[90%] text-justify lg:text-left">
      <span class="text-gray-600 text-1xl lg:text-3xl font-light"
        >Satisfacer de manera integral las necesidades de nuestros clientes,
        ofreciendo servicios especializados en consultoría, asesoría, logística
        y transporte, con altos estándares de calidad y un enfoque personalizado
        que impulse el éxito y crecimiento sostenible de sus proyectos y
        organizaciones.
      </span>
    </div>
  </section>

  <section
    class="flex flex-col-reverse lg:flex-row gap-10 items-center justify-evenly w-full h-[650p] md:h-[calc(75vh) lg:h-[calc(75vh)] bg-[#e5e5e5] pb-20 lg:pb-30 px-15 lg:py-15 lg:px-20"
  >
    <div class="relative flex items-center justify-center lg:w-[50%]">
      <iframe
        
        class="rounded-2xl w-80 h-55 sm:w-125 sm:h-85"
        :src="`https://www.youtube.com/embed/1n7N1D-AQbQ`"
        title="consulproyectos"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div
        class="absolute bg-white bottom-[-25px] lg:bottom-[-45px] rounded-2xl p-1 lg:p-3 max-w-[240px] lg:max-w-[400px] text-center align-middle"
      >
        <span class="text-bold text-[var(--primary-color)] text-1xl lg:text-3xl"
          >Soluciones integrales, resultados confiables</span
        >
      </div>
    </div>
    <div class="lg:w-[50%] flex flex-col gap-5">
      <div>
        <span class="text-gray-600 text-2xl lg:text-5xl font-bold"
          >Nuestra Visión</span
        >
      </div>
      <div class="lg:w-[90%] text-justify lg:text-left">
        <span class="text-gray-600 text-1xl lg:text-3xl font-light"
          >Ser reconocidos a nivel nacional como una empresa líder en soluciones
          integrales para empresas y proyectos, destacándonos por nuestra
          innovación, eficiencia, responsabilidad y capacidad de generar
          relaciones duraderas basadas en la confianza y la excelencia en el
          servicio.
        </span>
      </div>
    </div>
  </section>

  <HeroWhiteSection bg-color="#e5e5e5">
    <div
      class="flex flex-col items-center justify-center lg:justify-start w-full gap-10 lg:p-5 lg:gap-15"
    >
      <span
        class="text-[var(--primary-color)] font-bold text-center text-3xl lg:text-4xl"
      >
        VALORES CORPORATIVOS
      </span>

      <div
        class="lg:h-[60%] gap-4 lg:gap-20 flex lg:flex-row flex-wrap lg:flex-nowrap items-center justify-center"
      >
        <div
          v-for="info in items"
          class="flex flex-col w-[160px] lg:w-full items-center justify-center gap-3 lg:gap-5 h-auto text-center"
        >
          <div
            class="flex flex-col items-center justify-center w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] bg-[var(--primary-color)] rounded-full p-6 lg:p-10"
          >
            <img :src="info.icon" alt="" />
          </div>
          <span
            class="text-[var(--primary-color)] text-lg lg:text-2xl max-w-[120px] lg:max-w-[150px]"
          >
            {{ info.title }}
          </span>
        </div>
      </div>
    </div>
  </HeroWhiteSection>
</template>

<style scoped></style>
