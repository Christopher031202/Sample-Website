<script setup>
import { onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';

onMounted(() => {
    const revealOptions = {
        distance: '60px',
        duration: 3000,
        delay: 600,
    };
    ScrollReveal().reveal('.hero__text', {
        ...revealOptions,
        origin: 'top',
    });
    ScrollReveal().reveal('.hero__img', {
        ...revealOptions,
        origin: 'bottom',
    });
});
</script>

<template>
    <!-- HERO SECTION -->
    <section class="hero bg-customColor rounded-b-[20px] py-12 xl:py-[68px] max-h-full xl:pb-0 overflow-hidden">
            <div class="container mx-auto h-full px-12">
                <div class="flex flex-col xl:flex-row items-center justify-between h-full">
                    <div class="hero__text xl:x-[48%] text-center xl:text-left">
                        <!-- BADGE -->
                        <div
                            class="flex items-center bg-white shadow-custom2 py-[10px] px-[14px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
                            <i class="ri-empathize-fill text-xl text-accent"></i>
                            <div class="text-sm font-medium text-[#9ab4b7] tracking-[2.24px]">
                                We Care, Always.
                            </div>
                        </div>
                        <!-- TITLE -->
                        <h1 class="h1 mb-6">A Healthier Tomorrow Starts Today</h1>
                        <!-- DESCRIPTION -->
                        <p class="mb-[42px] md:max-w-xl mx-auto xl:mx-0">Delivering quality healthcare with a focus on
                            patient-centered care and innovative medical solutions.</p>
                        <!-- BUTTTON -->
                        <button
                            class="btn btn-sm cursor-pointer justify-center items-center text-center lg:w-auto mx-auto xl:mx-0 rounded-md border border-transparent bg-accent px-4 py-3 text-xs font-semibold uppercase tracking-widest text-customWhite transition duration-150 ease-in-out hover:bg-accent-secondary focus:bg-accent-secondary focus:outline-none focus:ring-2 focus:ring-accent-secondary focus:ring-offset-2 active:bg-accent-secondary">Book Now</button>
                    </div>
                    <!-- IMAGE -->
                    <div class="hero__img hidden xl:flex max-w-[556px] self-end">
                        <img src="img/header_img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
</template>