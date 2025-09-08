<script setup>
const props = defineProps(["icon", "title", "size"]);
</script>
<template>
  <div
    class="w-auto sm:w-[280px] h-auto sm:h-[241px] bg-white rounded-2xl flex flex-col items-center justify-center p-3 pb-7"
  >
    <div class=" h-20 md:h-[160px] sm:h-[160px] flex items-center justify-center">
      <img
        class="w-[60px] sm:w-[130px]"
        :src="props.icon"
        alt=""
      />
    </div>
    <div class="w-[120px] sm:w-full text-center">
      <span class="text-black font-semibold text-center text-sm sm:text-lg">{{
        props.title
      }}</span>
    </div>
  </div>
</template>
