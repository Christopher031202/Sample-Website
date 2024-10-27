<script setup>

import LocationIcon from '@/Icons/LocationIcon.vue';
import PhoneIcon from '@/Icons/PhoneIcon.vue';

</script>

<template>

    <div class="flex justify-center items-center gap-x-2 lg:justify-normal">
        <LocationIcon class="w-3 fill-primary" />123-456, Somewhere, PH
    </div>

    <div class="flex justify-center items-center gap-x-2 lg:justify-normal">
        <PhoneIcon class="w-3 fill-primary" />(+63) 912-345-6789
    </div>

    <button
        class="btn btn-sm cursor-pointer justify-center items-center text-center w-[240px] lg:w-auto mx-auto lg:mx-0 rounded-md border border-transparent bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-widest text-customWhite transition duration-150 ease-in-out hover:bg-cyan-500 focus:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 active:bg-cyan-600">
        Book Now
    </button>

</template>