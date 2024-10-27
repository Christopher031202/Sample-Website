<script setup>
import ScrollReveal from 'scrollreveal';

import { onMounted } from 'vue';

onMounted(() => {
    ScrollReveal().reveal('.stats__item', {
        origin: 'top',
        distance: '100px',
        interval: 100,
        delay: 600,
    });
});
</script>

<template>
    <!-- STATS SECTION -->
    <section class="stats section">
        <div class="container mx-auto">
            <!-- WRAPPER -->
            <div class="flex flex-col xl:flex-row gap-y-6 justify-between">
                <!-- ITEMS -->
                <div class="stats__item flex-1 xl:border-r flex flex-col items-center">
                    <div class="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-6">
                        6,900 +
                    </div>
                    <div>Satisfied Patients</div>
                </div>

                <div class="stats__item flex-1 xl:border-r flex flex-col items-center">
                    <div class="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-6">
                        25
                    </div>
                    <div>Total Branches</div>
                </div>

                <div class="stats__item flex-1 xl:border-r flex flex-col items-center">
                    <div class="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-6">
                        80 +
                    </div>
                    <div>Doctors</div>
                </div>

                <div class="stats__item flex-1 flex flex-col items-center">
                    <div class="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-6">
                        10 +
                    </div>
                    <div>Years In Service</div>
                </div>
            </div>
        </div>
    </section>
</template>