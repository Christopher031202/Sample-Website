<script setup>
import { onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';

// Import service icons
import Icon1 from '@/Icons/services/Icon1.vue';
import Icon2 from '@/Icons/services/Icon2.vue';
import Icon3 from '@/Icons/services/Icon3.vue';
import Icon4 from '@/Icons/services/Icon4.vue';

onMounted(() => {
    const revealOptions = {
        origin: 'bottom',
        distance: '60px',
        duration: 3000,
        delay: 700,
    };
    ScrollReveal().reveal('.services', {
        ...revealOptions,
    });
    ScrollReveal().reveal('.services__top', {
        ...revealOptions,
    });
    ScrollReveal().reveal('.services__item', {
        origin: 'bottom',
        distance: '100px',
        interval: 100,
        delay: 600,
    });
});
</script>

<template>
    <!-- OUR SERVICES SECTION -->
    <section class="services">
        <div class="px-4 xl:px-[30px]"> <!-- Outer container for padding -->
            <!-- BACKGROUND -->
            <div
                class="relative bg-accent bg-no-repeat max-w-[1466px] mx-auto rounded-[20px] xl:pt-[60px] h-[368px] flex items-center xl:items-start -z-10">
                <div class="container mx-auto relative z-10">
                    <!-- TEXT -->
                    <div class="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]">
                        <h2 class="h2 text-customWhite flex-1 mb-4 xl:mb-0 text-center xl:text-left">
                            Our Healthcare Solutions
                        </h2>
                        <p class="text-customWhite flex-1 text-center xl:text-left max-w-2xl xl:max-w-none">
                            We offer a wide range of medical services, from routine check-ups to specialized
                            treatments, designed to meet your healthcare needs.
                        </p>
                    </div>
                </div>
            </div>

            <!-- GRID CONTAINER -->
            <div class="container mx-auto mt-8 xl:-mt-[170px]">
                <!-- GRIDS -->
                <div class="grid xl:grid-cols-4 gap-5">
                    <!-- GRID ITEM -->
                    <div
                        class="services__item bg-customWhite p-[30px] rounded-[10px] shadow-custom1 min-h-[288px] flex flex-col items-center text-center">
                        <!-- Grid ITEM ICON -->
                        <div class="mb-[15px]">
                            <Icon1 class="w-[40px] h-[40px] fill-accent" alt="" />
                        </div>
                        <!-- GRID ITEM TITLE -->
                        <h3 class="h3 mb-[10px]">Maternity Care</h3>
                        <p class="font-light leading-normal max-w-[300px]">Our Maternity Care team provides
                            comprehensive support for expectant mothers, offering personalized prenatal care, labor
                            and delivery services, and postpartum support to ensure a healthy journey for both
                            mother and baby.</p>
                    </div>

                    <!-- GRID ITEM -->
                    <div
                        class="services__item bg-customWhite p-[30px] rounded-[10px] shadow-custom1 min-h-[288px] flex flex-col items-center text-center">
                        <!-- Grid ITEM ICON -->
                        <div class="mb-[15px]">
                            <Icon2 class="w-[40px] h-[40px] fill-accent" alt="" />
                        </div>
                        <!-- GRID ITEM TITLE -->
                        <h3 class="h3 mb-[10px]">Pediatrics</h3>
                        <p class="font-light leading-normal max-w-[300px]">Our Pediatric Department is dedicated to
                            the health and well-being of children, offering specialized care for infants, children,
                            and adolescents, from routine check-ups to advanced treatments.</p>
                    </div>

                    <!-- GRID ITEM -->
                    <div
                        class="services__item bg-customWhite p-[30px] rounded-[10px] shadow-custom1 min-h-[288px] flex flex-col items-center text-center">
                        <!-- Grid ITEM ICON -->
                        <div class="mb-[15px]">
                            <Icon4 class="w-[40px] h-[40px] fill-accent" alt="" />
                        </div>
                        <!-- GRID ITEM TITLE -->
                        <h3 class="h3 mb-[10px]">Laboratory Services</h3>
                        <p class="font-light leading-normal max-w-[300px]">Our Laboratory Services deliver accurate
                            and timely diagnostic testing, including blood work and pathology, to support effective
                            treatment plans and enhance patient care.</p>
                    </div>

                    <!-- GRID ITEM -->
                    <div
                        class="services__item bg-customWhite p-[30px] rounded-[10px] shadow-custom1 min-h-[288px] flex flex-col items-center text-center">
                        <!-- Grid ITEM ICON -->
                        <div class="mb-[15px]">
                            <Icon3 class="w-[40px] h-[40px] fill-accent" alt="" />
                        </div>
                        <!-- GRID ITEM TITLE -->
                        <h3 class="h3 mb-[10px]">Pharmacy Services</h3>
                        <p class="font-light leading-normal max-w-[300px]">Our pharmacy services ensure safe and
                            effective medication management, providing personalized consultations and access to a
                            wide range of prescription and over-the-counter medications.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>