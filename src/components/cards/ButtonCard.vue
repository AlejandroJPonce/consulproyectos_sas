<script setup>
const props = defineProps(["icon", "title", "size"]);
</script>
<template>
  <div
    class="w-[280px] h-[241px] bg-white rounded-2xl flex flex-col items-center justify-center"
  >
    <div class="h-[140px] md:h-[160px] lg:h-[160px] flex items-center justify-center">
      <img
        class="w-[110px] md:w-[130px] lg:w-[130px]"
        :src="props.icon"
        alt=""
      />
    </div>
    <div class="w-full text-center">
      <span class="text-black font-semibold text-center text-lg">{{
        props.title
      }}</span>
    </div>
  </div>
</template>
