<script setup>
import ButtonCard from "../cards/ButtonCard.vue";
import balanceIcon from "../../assets/balance_icon.png";
import MetricsIcon from "../../assets/metrics_icon.png";
import analitycs from "../../assets/analitycs.webp";
import Assistant from "../../assets/assistant.webp";
import FoodPlate from "../../assets/food_plate.webp";
import Delivery from "../../assets/delivery.webp";

const services = [
  { id: 1, name: "CONSULTORÍA JURIDICA ", icon: balanceIcon, size: "90px" },
  { id: 2, name: "ASESORIA FINANCIERA", icon: MetricsIcon, size: "90px" },
  { id: 3, name: "ASESORIA EN NEGOCIOS", icon: analitycs, size: "100px" },
  { id: 4, name: "APOYO TÉCNICO", icon: Assistant, size: "100px" },
  { id: 5, name: "CATERING", icon: FoodPlate, size: "100px" },
  { id: 6, name: "LOGÍSTICA DE EVENTOS", icon: Delivery, size: "100px" },
];
</script>

<template>
  <section
    class="relative w-full flex flex-col items-center justify-center bg-[#162746] gap-8"
  >
    <div class="text-center mt-10">
      <span class="font-bold text-dark text-white text-2xl lg:text-4xl"
        >NUESTROS SERVICIOS</span
      >
    </div>

    <div
      class="relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 z-10 p-4 md:p-0 lg:p-0"
    >
      <div
        v-for="info in services"
        :key="info.id"
        class="flex justify-center hover:scale-[1.05] hover:cursor-pointer transition-transform duration-300"
      >
        <ButtonCard :title="info.name" :icon="info.icon" :size="info.size" />
      </div>
    </div>

    <div class="mb-10">
      <span class="font-semibold text-2xl text-[#3d7dbd]">VER MÁS</span>
    </div>

    <img
      class="absolute left-0 top-0 w-full h-full object-fill z-0"
      src="../../assets/line_arts.png"
      alt=""
    />
  </section>
</template>
