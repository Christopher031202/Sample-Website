<script setup>
import { Head } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import HeroSection from '@/Components/DashboardComponents/HeroSection.vue';
import StatsSection from '@/Components/DashboardComponents/StatsSection.vue';
import ServicesSection from '@/Components/DashboardComponents/ServicesSection.vue';
import AppointmentSection from '@/Components/DashboardComponents/AppointmentSection.vue';
import TestimonialsSection from '@/Components/DashboardComponents/TestimonialsSection.vue';
import FooterSection from '@/Components/DashboardComponents/FooterSection.vue';
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>

        <!-- HERO SECTION -->
        <HeroSection />

        <!-- STATS SECTION -->
        <StatsSection />

        <!-- SERVICES SECTION -->
        <ServicesSection />

        <!-- APPOINTMENT SECTION -->
        <AppointmentSection />

        <!--  TESTIMONIALS SECTION -->
        <TestimonialsSection />

        <!-- FOOTER SECTION -->
        <FooterSection />

    </AuthenticatedLayout>
</template>

<style>
/* custom color gradient for the Services Section container */
.overlay-gradient::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 95, 204, 0.5), rgba(240, 244, 248, 0.3)); /* Updated blues */
    border-radius: 20px;
    z-index: 0;
}
</style>
