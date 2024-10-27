<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { TransitionChild, TransitionRoot } from '@headlessui/vue';
</script>

<template>
    <div
        class="grid md:grid-cols-2 grid-cols-1 min-h-screen bg-dots-darker bg-center bg-slate-800 dark:bg-dots-light dark:bg-slate-100">
        <TransitionRoot appear show as="template">
            <TransitionChild as="template" enter="transform transition ease-in duration-200 sm:duration-300"
                enter-from="-translate-y-[5%] opacity-0" enter-to="translate-y-0 opacity-100">
                
                <div class="hidden md:flex justify-center items-center min-h-screen">
                    <ApplicationLogo class="w-4/6"/>
                </div>
            </TransitionChild>
        </TransitionRoot>

        <!-- Right Section for Form -->
        <div class="flex flex-col justify-center items-center w-full sm:pt-0 px-[20px] py-8">
            <div class="w-full md:max-w-md px-8 py-9 bg-gray-100 shadow-md overflow-hidden sm:rounded-lg">
                <slot />
            </div>
        </div>
    </div>
</template>
