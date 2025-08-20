<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 0;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navi.classList.add("backdrop-blur-md", "bg-white/30");
  } else {
    navi.classList.remove("backdrop-blur-md", "bg-white/30");
  }
});

const toggle_menu = ref(false);

function change_toggle_menu_status() {
  toggle_menu.value = !toggle_menu.value;
}

// mantener el estado de estilo al dar click a la etiqueta <a />
window.onload = function () {
    const links = document.querySelectorAll("nav a");

    // Recuperar el último enlace activo desde localStorage
    const activeLink =  localStorage.getItem("activeLink") == '' ? 'home' : localStorage.getItem("activeLink");

    if (activeLink) {
      const link = document.querySelector(`a[data-link="${activeLink}"]`);
      if (link) link.classList.add("active");
    }

    // Escuchar click en cada enlace
    links.forEach((link) => {
      link.addEventListener("click", () => {
        // Quitar clase "active" de todos
        links.forEach((l) => l.classList.remove("active"));

        // Agregar clase al clicado
        link.classList.add("active");

        // Guardar en localStorage
        localStorage.setItem("activeLink", link.dataset.link);
      });
    });
  };

</script>

<template>
  <nav
    :class="[
      'sticky top-0 left-0 transition-all duration-300 z-11 mx-h-[88px] w-full  after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10',
      isScrolled
        ? 'backdrop-blur-md bg-gradient-to-b bg-[#162746]/50'
        : 'bg-[#162746]',
    ]"
  >
    <div class="mx-auto w-full px-2 sm:px-6 lg:px-10">
      <div class="relative flex h-22 items-center justify-between">
        <div
          class="w-full flex items-center justify-center sm:items-stretch sm:justify-center md:justify-between lg:justify-between"
        >
          <!-- Mobile menu button-->
          <div
            class="absolute inset-y-0 right-0 flex items-center sm:hidden mr-5"
          >
            <button
              type="button"
              @click="change_toggle_menu_status"
              class="relative inline-flex items-center justify-center rounded-md text-white w-auto"
            >
              <span class="absolute -inset-0.5"></span>
              <svg
                v-if="!toggle_menu"
                viewBox="0 0 24 24"
                fill="none"
                :stroke="[isScrolled ? 'currentColor' : 'currentColor']"
                stroke-width="2"
                data-slot="icon"
                aria-hidden="true"
                class="size-7 in-aria-expanded:hidden"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <!-- logo img -->
          <div class="flex shrink-0 items-center">
            <img
              src="../assets/icon_cs.png"
              alt="Your Company"
              :class="['h-10 w-auto']"
            />
          </div>

          <!-- navigation routes -->
          <div class="hidden sm:ml-6 sm:block">
            <div
              :class="[
                'flex transition-all duration-300 h-full items-center space-x-4',
                isScrolled ? 'text-white' : 'text-white',
              ]"
            >
              <!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" -->
              <a
                href="/"
                aria-current="page"
                class="rounded-md px-3 py-2 text-sm lg:text-md font-bold"
                data-link="home"
                >Inicio</a
              >
              <a
                href="/conocenos"
                class="rounded-md px-3 py-2 text-sm lg:text-md font-bold"
                data-link="aboutUs"
                >¿Quienes somos?</a
              >
              <a
                href="/servicios"
                class="rounded-md px-3 py-2 text-sm lg:text-md font-bold"
                data-link="services"
                >Servicios</a
              >
              <a
                href="/galeria"
                class="rounded-md px-3 py-2 text-sm lg:text-md font-bold"
                data-link="gallery"
                >Galería</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="mobile-menu" :class="{ hidden: !toggle_menu }">
      <div
        :class="[
          'space-y-0 px-2 pt-2 pb-3 flex items-center justify-center',
          isScrolled ? 'text-white' : 'text-white',
        ]"
      >
        <a
          href="/"
          aria-current="page"
          class="rounded-md px-3 py-2 text-sm font-bold"
          >Inicio</a
        >
        <a href="/conocenos" class="rounded-md px-3 py-2 text-sm font-bold"
          >¿Quienes somos?</a
        >
        <a href="/servicios" class="rounded-md px-3 py-2 text-sm font-bold">Servicios</a>
        <a href="/galeria" class="rounded-md px-3 py-2 text-sm font-bold">Galería</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>

a {
  position: relative; /* Necesario para el ::after */
  padding: 5px 10px;
  text-decoration: none;
  color: white;
}

a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 0;
  height: 4px;
  border-radius: 10%;
  background-color: #3d7dbd;
  transition: width 0.4s ease;
}

a:hover::after,
a:focus::after,
a.active::after {
  width: 40%; /* Línea visible en hover, focus o si tiene la clase "active" */
}

</style>