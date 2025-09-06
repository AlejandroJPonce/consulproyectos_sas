<script setup>
import ProfileCard from "../cards/ProfileCard.vue";
import company from "../../assets/balance_icon.png";

const companies = [
  { id: 1, icon: company },
  { id: 2, icon: company },
  { id: 3, icon: company },
  { id: 5, icon: company },
  { id: 6, icon: company },
  { id: 7, icon: company },
  { id: 8, icon: company },
  { id: 9, icon: company },
  { id: 10, icon: company },
];
</script>
<template>
  <div
    class="relative w-full px-20 min-h-[600px] h-auto flex items-center justify-center flex-col bg-[#f3f3f3] gap-15 pt-10"
  >
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

    <!-- Title -->
    <div>
      <span
        class="font-bold text-dark text-[var(--primary-color)] text-2xl lg:text-5xl"
      >
        CLIENTES
      </span>
    </div>

    <!-- Clients list -->
    <div
      class="w-full flex flex-row items-center justify-center gap-5 flex-wrap"
    >
      <div v-for="value in companies" :key="value" class="hover:scale-110">
        <img :src="value.icon" class="h-20 sm:h-30" />
      </div>
    </div>
  </div>
</template>

<style>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 15s linear infinite;
}

.animate-marquee-none {
   display: flex;
  width: max-content;
  animation: 15s linear infinite;
}
</style>
