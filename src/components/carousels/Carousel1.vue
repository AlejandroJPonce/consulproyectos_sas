<script setup>
import ProfileCard from "../cards/ProfileCard.vue";

const companies = [
  { id: 1, icon: "" },
  { id: 2, icon: "" },
  { id: 3, icon: "" },
  { id: 5, icon: "" },
  { id: 6, icon: "" },
  { id: 7, icon: "" },
  { id: 8, icon: "" },
  { id: 9, icon: "" },
  { id: 10, icon: "" },
];
</script>
<template>
  <div
    class="relative w-full lg:px-55 min-h-[500px] md:min-h-[calc(90vh-44px)] lg:min-h-[calc(90vh-44px)] flex items-center justify-center flex-col bg-[#f3f3f3] gap-8"
  >
    <div class="absolute w-full h-auto top-0 rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 197 2011 220"
        style="fill: var(--primary-color); width: 100%; height: 100%; display: block"
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
      <span class="font-bold text-dark text-[var(--primary-color)] text-2xl lg:text-4xl"> CLIENTES </span>
    </div>

    <!-- carousel -->
    <div
      class="z-10 w-full h-auto pl-26 pr-26 md:pl-11 md:pr-11 gap-10 flex flex-row justify-start md:justify-start lg:justify-start items-center overflow-x-auto overflow-y-hidden overflow-hidden"
    >
      <div v-for="company in companies" :key="company.id" class="">
        <ProfileCard />
      </div>
    </div>

    <!-- carousel controls -->
    <div
      class="absolute flex flex-row items-center justify-between w-full h-50 mt-20 px-20 collapse md:visible lg:visible"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="var(--primary-color)"
        stroke="var(--primary-color)"
        stroke-width="1"
        class="size-20 hover:cursor-pointer"
      >
        <path
          fill-rule="evenodd"
          d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
          clip-rule="evenodd"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="var(--primary-color)"
        stroke="var(--primary-color)"
        stroke-width="1"
        class="size-20 hover:cursor-pointer"
      >
        <path
          fill-rule="evenodd"
          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>
