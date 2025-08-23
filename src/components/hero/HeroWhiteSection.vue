<script setup>
const props = defineProps(["bgColor"]);
</script>
<template>
  <section
    class="relative w-full h-[900px] sm:h-100vh"
    :style="{ backgroundColor: props.bgColor ?? 'white' }"
  >
    <slot></slot>

    <!-- absolute base image -->
    <img
      class="absolute w-full bottom-0 left-0"
      src="../../assets/base_art.png"
      alt=""
    />
  </section>
</template>

<style scoped>
.image-cliped {
  clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 95%);
}
</style>
