<script setup>
import { Link } from '@inertiajs/vue3'
import Navigation from '@/Components/extras/Navigation.vue';
</script>

<template>
    <main class="flex flex-col flex-1 font-mont">

        <header class="py-8 lg:pt-6 lg:pb-14 bg-customWhite">
            <div class="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
                <!--Brand Logo-->
                <div>
                    <Link :href="route('dashboard')" class="flex justify-center items-center lg:justify-normal">
                    <!-- <LogoIcon class="fill-accent w-[40px]" /> -->
                    <h1 class="flex justify-center lg:justify-normal text-3xl font-black text-primary">Med</h1>
                    <span
                        class="flex justify-center lg:justify-normal text-3xl bg-accent px-2 py-1 rounded-md font-black text-customWhite">Care</span>
                    </Link>
                </div>

                <!--NAVIGATION BAR-->
                <div class="flex flex-col gap-y-4 lg:flex-row lg:gap-x-8 lg:gap-y-3 lg:text-xs text-secondary">
                    <!-- logo, location, and contact number -->
                    <Navigation />
                </div>
            </div>
        </header>

        <div class="flex flex-1 flex-col">
            <slot />
        </div>

    </main>
</template>
