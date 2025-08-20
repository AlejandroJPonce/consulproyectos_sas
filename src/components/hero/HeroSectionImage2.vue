<script setup></script>
<template>
  <section class="relative">
    <div
      class="flex flex-col gap-5 md:gap-15 lg:gap-20 md:flex-row lg:flex-row w-full md:h-[calc(100vh-44px) lg:h-[calc(100vh-44px)] items-center justify-start bg-white p-15"
    >
      <div class="p-10 z-10">
        <img
          class="w-auto rounded-2xl md:w-[1200px] lg:w-[1800px]"
          src="../../assets/placeholder-1.png"
          alt=""
        />
      </div>
      <div class="flex flex-col gap-5 lg:gap-8 z-10">
        <div>
          <span class="text-black text-2xl md:text-4xl lg:text-5xl font-bold"
            >¿QUIÉNES SOMOS?</span
          >
        </div>
        <div class="text-left">
          <span class="text-black text-1xl md:text-2xl lg:text-3xl font-light"
            >Empresa especializada en soluciones integrales para el sector
            público y privado, brindando asesoría, consultoría y logística con
            un equipo interdisciplinario comprometido con la calidad y la
            confianza.</span
          >
        </div>
        <button
          type="button"
          class="text-white bg-[#3d7dbd] w-fit font-semibold px-10 py-2 text-lg rounded-full hover:text-[#3d7dbd] hover:bg-gray-200"
        >
          Ver más
        </button>
      </div>
    </div>

    <div class="absolute w-full h-auto bottom-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 200 2000 219"
        style="fill: #162746; width: 100%; height: 100%; display: block"
        preserveAspectRatio="none"
      >
        <g
          transform="rotate(269.3 222.25 222.25) scale(3,-6) translate(-2,-434)"
        >
          <path
            d="M12.84,444.48c0.04,0,0.08,0,0.11,0c0.99,0,1.84-0.73,1.98-1.73L75.98,2.27c0.08-0.57-0.09-1.15-0.47-1.59 C75.13,0.25,74.58,0,74,0H2C1.46,0,0.94,0.22,0.57,0.6S-0.01,1.51,0,2.05l10.96,440.48C10.98,443.57,11.8,444.42,12.84,444.48z"
          />
        </g>
      </svg>
    </div>
  </section>
</template>
