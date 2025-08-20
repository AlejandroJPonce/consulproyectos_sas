<script setup>
const props = defineProps(["direction"]);
</script>

<template>
  <div
    class="'z-10 w-full flex items-center justify-center gap-10 p-10 bg-[#3d7dbd]/50 rounded-3xl'"
    :style="{ flexDirection: props.direction == 'reverse' ? 'row-reverse' : 'row' }"
  >
    <img
      class="min-w-[440px] h-auto rounded-2xl invert"
      src="../../assets/placeholder-1.png"
      alt=""
    />

    <div class="flex flex-col gap-3">
      <span
        class="text-[#6caae8] text-center text-xl md:text-3xl lg:text-3xl font-bold"
        >NUESTROS SERVICIOS</span
      >
      <span class="text-2xl font-light text-justify"
        >Ofrecemos asesoramiento legal especializado para empresas y proyectos,
        garantizando decisiones informadas y protección de sus intereses.
        Nuestro equipo jurídico cubre áreas como estrategias legales,
        elaboración y revisión de contratos, cumplimiento normativo y resolución
        de conflictos.</span
      >
    </div>
  </div>
</template>
