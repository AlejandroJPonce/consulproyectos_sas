<script setup></script>
<template>
  <section
    class="isImage flex flex-row gap-25 w-full h-[550px] md:h-[calc(100vh-88px) lg:h-[calc(100vh-88px)] items-center justify-start p-15 sm:p-25 bg-[#f3f3f3]"
  >
    <!-- texts -->
    <div class="z-1 flex flex-col gap-5 md:gap-8 lg:gap-8 max-w-220">
      <div>
        <span class="text-white text-2xl md:text-5xl lg:text-7xl font-bold"
          >IMPULSAMOS EL ÉXITO DE SUS PROYECTOS</span
        >
      </div>
      <div class="max-w-200">
        <span class="text-white text-1xl md:text-2xl lg:text-3xl font-light"
          >Integramos consultoría jurídica, asesoría financiera, logística y
          apoyo técnico para que sus ideas se conviertan en proyectos
          exitosos.</span
        >
      </div>
      <button
        type="button"
        class="text-white bg-[#3d7dbd] w-fit font-semibold px-7 py-2 text-xs md:text-md lg:text-lg rounded-full hover:text-[#3d7dbd] hover:bg-white"
      >
        Contáctanos
      </button>
    </div>
  </section>
</template>

<style scoped>
.isImage {
  background-image: url("../../assets/gallery/gallery_9.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}

.isImage::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* capa oscura */
}
</style>
