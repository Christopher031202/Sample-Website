<script setup>
import { onMounted } from 'vue';
import ScrollReveal from 'scrollreveal';

onMounted(() => {
    const revealOptions = {
        origin: 'bottom',
        distance: '60px',
        duration: 3000,
    };
    ScrollReveal().reveal('.appointment__title', {
        ...revealOptions,
        delay: 600,
    });
    ScrollReveal().reveal('.appointment__sub', {
        ...revealOptions,
        delay: 700,
    });
    ScrollReveal().reveal('.appointment__form', {
        ...revealOptions,
        delay: 800,
    });
});
</script>

<template>
    <!-- APPOINTMENT SECTION -->
    <section class="appointment section px-8 xl:px-[150px]">
        <!-- TITLE -->
        <h2 class="appointment__title h2 mb-0 xl:mb-2 text-center">Book An Appointment</h2>
        <p class="appointment__sub text-lg text-center mb-8 xl:mb-[36px]">Select a Department and Your Doctor</p>
        <!-- FORM -->
        <form class="appointment__form flex flex-col gap-y-5">
            <!-- SELECT WRAPPER -->
            <div class="select relative items-center flex flex-col xl:flex-row gap-5">
                <!-- SELECT DEPARTMENT -->
                <select
                    class="appearance-none outline-none h-full w-full rounded-md bg-transparent py-3 px-4 border border-gray-300">
                    <option value="1">Select Department</option>
                    <option value="2">Maternity</option>
                    <option value="3">Pediatrics</option>
                    <option value="4">Hematology</option>
                    <option value="4">Urology</option>
                </select>

                <!-- SELECT A DOCTOR -->
                <select
                    class="appearance-none outline-none h-full w-full rounded-md bg-transparent py-3 px-4 border border-gray-300">
                    <option value="1">Select A Doctor</option>
                    <option value="2">Dr. John Smith</option>
                    <option value="3">Dr. Debra Corrin</option>
                    <option value="4">Dr. William Brown</option>
                </select>
            </div>

            <!-- INPUT WRAPPER -->
            <div class="flex flex-col xl:flex-row gap-5">
                <input type="text"
                    class="appearance-none outline-none h-full w-full rounded-md bg-transparent py-3 px-4 border border-gray-300"
                    placeholder="Patient's Full Name" required />
                <input type="text"
                    class="appearance-none outline-none h-full w-full rounded-md bg-transparent py-3 px-4 border border-gray-300"
                    placeholder="Phone Number" required />
            </div>

            <!-- DATE AND TIME WRAPPER -->
            <div class="flex flex-col xl:flex-row gap-5">
                <input
                    class="input appearance-none outline-none h-full w-full rounded-md bg-transparent py-3 px-4 border border-gray-300"
                    type="date" required />
                <input
                    class="input appearance-none outline-none h-full w-full rounded-md bg-transparent py-3 px-4 border border-gray-300"
                    type="time" required />
            </div>

            <!-- NEXT BUTTON -->
            <button
                class="btn btn-sm cursor-pointer justify-center items-center text-center self-end rounded-md border border-transparent bg-accent px-4 py-3 text-xs font-semibold uppercase tracking-widest text-customWhite transition duration-150 ease-in-out hover:bg-accent-secondary focus:bg-accent-secondary focus:outline-none focus:ring-2 focus:ring-accent-secondary focus:ring-offset-2 active:bg-accent-secondary">Submit</button>
            </form>
    </section>
</template>