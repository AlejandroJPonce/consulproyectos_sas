<script setup>
import HeroWhiteSection from "../components/hero/HeroWhiteSection.vue";
import foodPlate from "../assets/food_plate.webp";
import handIcon from "../assets/hand_icon.png";
import lightIcon from "../assets/light_icon.png";
import zoomIcon from "../assets/zoom_icon.png";
import socialIcon from "../assets/social_icon.png";

import service1 from "../assets/img_services/service_1.webp"
import service2 from "../assets/img_services/service_2.webp"
import service3 from "../assets/img_services/service_3.webp"
import service4 from "../assets/img_services/service_4.webp"
import service5 from "../assets/img_services/service_5.webp"
import service6 from "../assets/img_services/service_6.webp"
import service7 from "../assets/img_services/service_7.webp"
import service8 from "../assets/img_services/service_8.webp"

</script>

<template>
  <!-- uno -->
  <section
    class="relative flex flex-col gap-5 lg:gap-20 items-center justify-center w-full bg-[var(--primary-color)] px-10 sm:px-20 lg:px-50 pt-15"
  >
    <div>
      <span
        class="text-white text-center text-3xl sm:text-3xl lg:text-6xl font-bold"
        >NUESTROS SERVICIOS</span
      >
    </div>

    <div
      class="w-full flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 p-10 bg-[#3d7dbd]/50 rounded-3xl"
    >
      <img
        class="w-[300px] sm:w-full sm:max-w-[400px] h-auto rounded-2xl"
        :src="service1"
        alt=""
      />

      <div class="flex flex-col gap-3">
        <span class="text-[#6caae8] text-xl md:text-3xl lg:text-3xl font-bold"
          >CONSULTORÍA JURIDICA</span
        >
        <span
          class="text-md md:text-2xl lg:text-2xl font-normal text-left lg:text-justify"
          >Ofrecemos asesoramiento legal especializado para empresas y
          proyectos, garantizando decisiones informadas y protección de sus
          intereses. Nuestro equipo jurídico cubre áreas como estrategias
          legales, elaboración y revisión de contratos, cumplimiento normativo y
          resolución de conflictos.</span
        >
      </div>
    </div>
  </section>

  <section
    class="relative flex flex-col gap-5 lg:gap-20 items-center justify-center w-full bg-[var(--primary-color)] p-10 lg:p-0 md:pt-20 lg:pt-20 sm:px-20 lg:px-50"
  >
    <div
      class="z-10 w-full flex flex-wrap lg:flex-nowrap flex-row-reverse items-center justify-center gap-10 p-10 bg-[#3d7dbd]/50 rounded-3xl"
    >
      <img
        class="w-[300px] sm:w-full sm:max-w-[400px] h-auto rounded-2xl"
        :src="service2"
        alt=""
      />

      <div class="flex flex-col gap-3">
        <span
          class="text-[#6caae8] text-center sm:text-left text-lg md:text-3xl lg:text-3xl font-bold"
          >FORMULACIÓN DE PROYECTOS</span
        >
        <span
          class="text-md md:text-2xl lg:text-2xl font-normal text-left lg:text-justify"
          >Desarrollamos propuestas técnicas y financieras para la gestión,
          ejecución y financiamiento de proyectos. Nos encargamos del
          diagnóstico, diseño, planeación y estructuración de iniciativas,
          garantizando viabilidad, cumplimiento normativo y alineación con los
          objetivos de cada cliente.</span
        >
      </div>
    </div>
  </section>

  <!-- dos -->
  <section
    class="relative flex flex-col gap-5 lg:gap-20 items-center justify-center w-full bg-white p-10 lg:p-0 md:pt-20 lg:pt-20 sm:px-20 lg:px-50"
  >
    <div
      class="z-10 w-full flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 p-10 bg-[#3d7dbd]/50 rounded-3xl"
    >
      <img
        class="w-[300px] sm:w-full sm:max-w-[400px] h-auto rounded-2xl"
        :src="service3"
        alt=""
      />

      <div class="flex flex-col gap-3">
        <span
          class="text-[#2f669d] text-center sm:text-left text-lg md:text-3xl lg:text-3xl font-bold"
          >ASESORIA FINANCIERA</span
        >
        <span
          class="text-md md:text-2xl lg:text-2xl font-normal text-left lg:text-justify"
          >Brindamos acompañamiento integral en la gestión financiera de su
          empresa, optimizando recursos y maximizando beneficios. Incluye
          análisis financiero, planificación fiscal, estructuración de
          presupuestos y estrategias de inversión adaptadas a sus
          objetivos.</span
        >
      </div>
    </div>

    <div class="absolute w-full h-auto top-0 rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 197 2011 220"
        style="
          fill: var(--primary-color);
          width: 100%;
          height: 100%;
          display: block;
        "
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

  <!-- tres -->
  <section
    class="relative flex flex-col gap-5 lg:gap-20 items-center justify-center w-full bg-white pb-20 pt-10 p-10 lg:p-0 md:pt-20 lg:pt-20 sm:px-20 lg:px-50"
  >
    <div
      class="z-10 w-full flex flex-wrap lg:flex-nowrap md:flex-row-reverse lg:flex-row-reverse items-center justify-center gap-10 p-10 bg-[#3d7dbd]/50 rounded-3xl"
    >
      <img
        class="w-[300px] sm:w-full sm:max-w-[400px] h-auto rounded-2xl"
        :src="service4"
        alt=""
      />

      <div class="flex flex-col gap-3">
        <span
          class="text-[#2f669d] text-center sm:text-left text-lg md:text-3xl lg:text-3xl font-bold"
          >ASESORIA EN NEGOCIOS</span
        >
        <span
          class="text-md md:text-2xl lg:text-2xl font-normal text-left lg:text-justify"
          >Diseñamos estrategias efectivas para potenciar el crecimiento y la
          competitividad de su empresa. Ofrecemos análisis de mercado,
          optimización de procesos, desarrollo de modelos de negocio y planes
          estratégicos que impulsen resultados sostenibles.</span
        >
      </div>
    </div>

    <div class="absolute w-full h-auto bottom-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 197 2011 220"
        style="
          fill: var(--primary-color);
          width: 100%;
          height: 100%;
          display: block;
        "
        preserveAspectRatio="none"
      >
        <g
          transform="scale(-1,1) translate(-2011,0) rotate(269.3 222.25 222.25) scale(3,-6) translate(-2,-434)"
        >
          <path
            d="M12.84,444.48c0.04,0,0.08,0,0.11,0c0.99,0,1.84-0.73,1.98-1.73L75.98,2.27c0.08-0.57-0.09-1.15-0.47-1.59 C75.13,0.25,74.58,0,74,0H2C1.46,0,0.94,0.22,0.57,0.6S-0.01,1.51,0,2.05l10.96,440.48C10.98,443.57,11.8,444.42,12.84,444.48z"
          />
        </g>
      </svg>
    </div>
  </section>

  <!-- cuatro -->
  <section
    class="relative flex flex-col gap-5 lg:gap-20 items-center justify-center w-full bg-[var(--primary-color)] p-10 lg:p-0 md:pt-20 lg:pt-20 sm:px-20 lg:px-50"
  >
    <div
      class="z-10 w-full flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 p-10 bg-[#3d7dbd]/50 rounded-3xl"
    >
      <img
        class="w-[300px] sm:w-full sm:max-w-[400px] h-auto rounded-2xl"
        :src="service5"
        alt=""
      />

      <div class="flex flex-col gap-3">
        <span
          class="text-[#6caae8] text-center sm:text-left text-lg md:text-3xl lg:text-3xl font-bold"
          >APOYO TECNICO</span
        >
        <span
          class="text-md md:text-2xl lg:text-2xl font-normal text-left lg:text-justify"
          >Proveemos soluciones técnicas especializadas para garantizar el
          correcto funcionamiento y la eficiencia operativa de su organización.
          Incluye soporte en implementación de sistemas, mantenimiento
          especializado y asistencia técnica personalizada.</span
        >
      </div>
    </div>
  </section>

  <!-- cinco -->
  <section
    class="relative flex flex-col gap-5 lg:gap-20 items-center justify-center w-full bg-[var(--primary-color)] p-10 lg:p-0 md:pt-20 lg:pt-20 sm:px-20 lg:px-50"
  >
    <div
      class="z-10 w-full flex flex-wrap lg:flex-nowrap md:flex-row-reverse lg:flex-row-reverse items-center justify-center gap-10 p-10 bg-[#3d7dbd]/50 rounded-3xl"
    >
      <img
        class="w-[300px] sm:w-full sm:max-w-[400px] h-auto rounded-2xl"
        :src="service6"
        alt=""
      />

      <div class="flex flex-col gap-3">
        <span
          class="text-[#6caae8] text-center sm:text-left text-lg md:text-3xl lg:text-3xl font-bold"
          >CATERING PARA EVENTOS</span
        >
        <span
          class="text-md md:text-2xl lg:text-2xl font-normal text-left lg:text-justify"
          >Ofrecemos un servicio de catering de alta calidad para eventos
          corporativos, sociales y empresariales, cuidando cada detalle desde la
          selección de ingredientes hasta la presentación final. Diseñamos menús
          adaptados a cada ocasión, garantizando sabor, frescura y
          puntualidad.</span
        >
      </div>
    </div>
  </section>

  <!-- seis -->
  <section
    class="relative flex flex-col gap-5 lg:gap-20 items-center justify-center w-full bg-white p-10 lg:p-0 md:pt-20 lg:pt-20 sm:px-20 lg:px-50"
  >
    <div
      class="z-10 w-full flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 p-10 bg-[#3d7dbd]/50 rounded-3xl"
    >
      <img
        class="w-[300px] sm:w-full sm:max-w-[400px] h-auto rounded-2xl"
        :src="service7"
        alt=""
      />

      <div class="flex flex-col gap-3">
        <span
          class="text-[#2f669d] text-center sm:text-left text-lg md:text-3xl lg:text-3xl font-bold"
          >LOGISTICA DE EVENTOS</span
        >
        <span
          class="text-md md:text-2xl lg:text-2xl font-normal text-left lg:text-justify"
          >Planificamos y coordinamos todos los aspectos logísticos de sus
          eventos, asegurando que cada detalle se ejecute a la perfección.
          Gestionamos montaje, decoración, cronogramas, proveedores y personal
          para que su evento sea exitoso y sin contratiempos.</span
        >
      </div>
    </div>

    <div class="absolute w-full h-auto top-0 rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 197 2011 220"
        style="
          fill: var(--primary-color);
          width: 100%;
          height: 100%;
          display: block;
        "
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

  <!-- siete -->
  <HeroWhiteSection>
    <div class="sm:px-20 lg:px-50 lg:pt-20 py-5 px-10">
      <div
        class="w-full flex flex-wrap lg:flex-nowrap md:flex-row-reverse lg:flex-row-reverse items-center justify-center gap-10 p-10 bg-[#3d7dbd]/50 rounded-3xl"
      >
        <img
          class="w-[300px] sm:w-full sm:max-w-[400px] h-auto rounded-2xl"
          :src="service8"
          alt=""
        />

        <div class="flex flex-col gap-3">
          <span
            class="text-[#2f669d] text-md text-center sm:text-left md:text-3xl lg:text-3xl font-bold"
            >TRANSPORTE CORPORATIVO</span
          >
          <span
            class="text-md md:text-2xl lg:text-2xl font-normal text-left lg:text-justify"
            >Brindamos soluciones de transporte seguro, cómodo y puntual para
            traslados corporativos, eventos y actividades especiales. Contamos
            con vehículos adecuados, conductores capacitados y planes de
            movilidad adaptados a sus necesidades.</span
          >
        </div>
      </div>
    </div>
  </HeroWhiteSection>
</template>
