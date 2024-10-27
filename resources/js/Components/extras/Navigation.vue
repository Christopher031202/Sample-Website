<script setup>
import { useForm } from '@inertiajs/vue3'
import UserMenuDropdown from '@/Components/extras/UserMenuDropdown.vue';
import SearchIcon from '@/Icons/SearchIcon.vue';
import CloseIcon from '@/Icons/CloseIcon.vue';
import PhoneIcon from '@/Icons/PhoneIcon.vue';
import LocationIcon from '@/Icons/LocationIcon.vue';
import { ref, onMounted } from 'vue';

// mobile nav toggle functionality
const isNavOpen = ref(false);

// function to open and close the nav
const toggleMobileNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

// DOM manipulation for toggling classes on buttons if needed
onMounted(() => {
  const closeBtn = document.querySelector('.mnav__close-btn');
  closeBtn.addEventListener('click', toggleMobileNav);
});

// Function to handle search term clearing (optional)
function clearSearch() {
  form.reset(); // Reset form data
}
const form = useForm({
  search: '',
});
</script>

<template>
  <!-- MOBILE VIEW NAVIGATION -->
  <nav :class="isNavOpen ? 'left-0' : '-left-[300px]'"
    class="mnav bg-customWhite fixed w-[300px] top-0 h-screen shadow-2xl lg:hidden transition-all duration-300 z-20">

    <!-- BUTTON FOR OPENING AND CLOSING NAVIGATION IN MOBILE -->
    <div
      class="mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all">
      <i :class="isNavOpen ? 'ri-arrow-left-s-line' : 'ri-arrow-right-s-line'"
        class="mnav__close-btn-icon text-2xl text-customWhite"></i>
    </div>

    <!-- USER MENU TOGGLE -->
    <div class="px-10 flex flex-col gap-y-5 h-full">
      <div class="justify-center border-b-2 border-gray-200">
        <div class="w-full mb-5 flex items-center justify-center">
          <UserMenuDropdown />
        </div>
      </div>

      <!-- SEARCH BAR FOR MOBILE NAVIGATION -->
      <form action="" class="w-full max-w-md top-0">
        <div class="flex items-center">
          <SearchIcon class="fill-accent w-4 h-4 absolute ml-4 pointer-events-none" />
          <input type="text" name="search"
            class="w-full items-center pl-11 px-5 border-2 border-gray-300 focus:ring-2 focus:ring-offset-none focus:border-accent focus:ring-accent-secondary rounded-lg placeholder:italic"
            v-model="form.search" @input="$emit('search-term', form.search)" autocomplete="off"
            placeholder="Search here" aria-label="Search here" />

          <div class="relative flex items-center">
            <CloseIcon v-if="form.search" @click="clearSearch"
              class="absolute ml-2 text-gray-400 hover:text-gray-600 stroke-2 focus:outline-none" />
          </div>
        </div>
      </form>

      <!-- NAVIGATION ITEMS WHEN IN MOBILE VIEW -->
      <ul class="flex flex-col gap-y-6 items-center">
        <li>
          <a :href="route('dashboard')"
            :class="{ 'text-accent': route().current('dashboard'), 'text-secondary': !route().current('dashboard') }"
            class="text-sm font-medium leading-5">
            Home
          </a>
        </li>
        <li>
          <a href="#" class="text-sm font-medium leading-5 text-secondary">Services</a>
        </li>
        <li>
          <a href="#" class="text-sm font-medium leading-5 text-secondary">Doctors</a>
        </li>
        <li>
          <a href="#" class="text-sm font-medium leading-5 text-secondary">About Us</a>
        </li>
      </ul>
    </div>
  </nav>

  <!-- DESKTOP NAVIGATION -->
  <div class="flex justify-center items-center gap-x-2 lg:justify-normal">
    <LocationIcon class="w-3 fill-primary" />123-456, Somewhere, PH
  </div>

  <div class="flex justify-center items-center gap-x-2 lg:justify-normal">
    <PhoneIcon class="w-3 fill-primary" />(+63) 912-345-6789
  </div>

  <button
    class="btn btn-sm cursor-pointer justify-center items-center text-center w-[240px] lg:w-auto mx-auto lg:mx-0 rounded-md border border-primary bg-none px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary transition duration-150 ease-in-out hover:bg-secondary hover:text-customWhite hover:border-secondary focus:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 active:bg-secondary">
    Contact Us
  </button>

  <!-- NAVIGATION ITEMS WHEN IN DESKTOP VIEW -->
  <nav
    class="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]">
    <ul class="flex gap-x-4">
      <li>
        <a :href="route('dashboard')"
          :class="{ 'text-accent font-semibold': route().current('dashboard'), 'text-secondary': !route().current('dashboard') }"
          class="border-r pr-4 text-sm font-medium leading-5 hover:text-accent transition-all duration-300">
          Home
        </a>
      </li>
      <li>
        <a href="#"
          class="border-r pr-4 text-sm font-medium leading-5 text-secondary hover:text-accent transition-all duration-300">
          Services
        </a>
      </li>
      <li>
        <a href="#"
          class="border-r pr-4 text-sm font-medium leading-5 text-secondary hover:text-accent transition-all duration-300">
          Doctors
        </a>
      </li>
      <li>
        <a href="#" class="text-sm font-medium leading-5 text-secondary hover:text-accent transition-all duration-300">
          About Us
        </a>
      </li>
    </ul>

    <!-- SEARCH BAR FOR DESKTOP NAVIGATION -->
    <div class="flex items-center gap-x-4">
      <form action="" class="relative flex gap-x-[10px] w-full max-w-md">
        <div class="flex items-center">
          <div class="flex items-center border-r border-gray-300 pr-3">
            <SearchIcon class="fill-accent w-4 h-4 pointer-events-none" />
          </div>
          <input type="text" name="search" id="search-input"
            class="w-[100px] pl-4 border-none focus:w-[200px] focus:ring-offset-none focus:border-accent focus:ring-accent-secondary rounded-lg placeholder:italic placeholder:text-sm transition-all duration-200"
            v-model="form.search" @input="$emit('search-term', form.search)" autocomplete="off" placeholder="Search..."
            aria-label="Search here" />
          <div class="relative flex items-center">
            <CloseIcon v-if="form.search" @click="clearSearch"
              class="absolute ml-2 text-gray-400 hover:text-gray-600 stroke-2 focus:outline-none" />
          </div>
        </div>
      </form>

      <!-- USER MENU TOGGLE FOR DESKTOP -->
      <div class="">
        <UserMenuDropdown />
      </div>
    </div>
  </nav>
</template>