<script setup>
import FacebookIcon from '@/Icons/FacebookIcon.vue';
import InstagramIcon from '@/Icons/InstagramIcon.vue';
import LinkedinIcon from '@/Icons/LinkedinIcon.vue';
import LocationIcon from '@/Icons/LocationIcon.vue';
import MailIcon from '@/Icons/MailIcon.vue';
import PhoneIcon from '@/Icons/PhoneIcon.vue';
import XIcon from '@/Icons/XIcon.vue';
import ScrollReveal from 'scrollreveal';
import { onMounted } from 'vue';

onMounted(() => {
    ScrollReveal().reveal('.footer__item', {
        origin: 'bottom',
        distance: '100px',
        interval: 100,
        delay: 600,
    });
});
</script>

<template>
    <!-- FOOTER SECTION -->
    <footer class="footer pt-12 xl:pt-[100px]">
        <div class="container mx-auto pb-12 xl:pb-[100px]">
            <div class="flex flex-col xl:flex-row gap-x-5 gap-y-10">
                <!-- Footer Contact Section -->
                <div class="footer__item flex-1">
                    <!-- LOGO -->
                    <Link :href="route('dashboard')"
                        class="flex justify-center items-center lg:justify-normal mb-[20px]">
                    <h1 class="flex justify-center lg:justify-normal text-3xl font-black text-primary">Med</h1>
                    <span
                        class="flex justify-center lg:justify-normal text-3xl bg-accent px-2 py-1 rounded-md font-black text-customWhite">Care</span>
                    </Link>
                    
                    <!-- LOCATION, EMAIL, AND PHONE -->
                    <div class="flex flex-col gap-y-3 mb-10">
                        <div class="flex justify-center items-center gap-x-3 lg:justify-normal">
                            <LocationIcon class="w-3 fill-accent" />123-456, Somewhere, PH
                        </div>

                        <div class="flex justify-center items-center gap-x-3 lg:justify-normal">
                            <MailIcon class="w-3 fill-accent" />med_care@email.com
                        </div>

                        <div class="flex justify-center items-center gap-x-3 lg:justify-normal">
                            <PhoneIcon class="w-3 fill-accent" />(+63) 912-345-6789
                        </div>
                    </div>

                    <!-- Socials -->
                    <div class="flex justify-center lg:justify-normal gap-[14px]">
                        <!-- FACEBOOK -->
                        <div
                            class="p-[10px] rounded-[10px] shadow-custom2 fill-accent-tertiary hover:fill-accent cursor-pointer transition all">
                            <FacebookIcon class="w-5 h-5" />
                        </div>
                        <!-- INSTAGRAM -->
                        <div
                            class="p-[10px] rounded-[10px] shadow-custom2 fill-accent-tertiary hover:fill-accent cursor-pointer transition all">
                            <InstagramIcon class="w-5 h-5" />
                        </div>
                        <!-- X/TWITTER -->
                        <div
                            class="p-[10px] rounded-[10px] shadow-custom2 fill-accent-tertiary hover:fill-accent cursor-pointer transition all">
                            <XIcon class="w-5 h-5" />
                        </div>
                        <!-- LINKEDIN -->
                        <div
                            class="p-[10px] rounded-[10px] shadow-custom2 fill-accent-tertiary hover:fill-accent cursor-pointer transition all">
                            <LinkedinIcon class="w-5 h-5" />
                        </div>
                    </div>
                </div>

                <!-- Footer Quick Links Section -->
                <div class="footer__item flex-1">
                    <h3 class="h3 mb-[20px]">Quick Links</h3>
                    <div class="flex gap-x-5">
                        <!-- List 1 -->
                        <ul class="flex-1 flex flex-col gap-y-4">
                            <li>
                                <a :href="route('dashboard')"
                                    :class="{ 'text-accent': route().current('dashboard'), 'text-secondary': !route().current('dashboard') }"
                                    class="text-sm font-base leading-5 hover:text-accent transition-all">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    class="text-sm font-base leading-5 text-secondary hover:text-accent transition-all">Services</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="text-sm font-base leading-5 text-secondary hover:text-accent transition-all">About
                                    Us</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="text-sm font-base leading-5 text-secondary hover:text-accent transition-all">My
                                    Appointments</a>
                            </li>
                        </ul>

                        <!-- List 2 -->
                        <ul class="flex-1 flex flex-col gap-y-4">
                            <li>
                                <a href="#"
                                    class="text-sm font-base leading-5 text-secondary hover:text-accent transition-all">Doctors</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="text-sm font-base leading-5 text-secondary hover:text-accent transition-all">Contact</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="text-sm font-base leading-5 text-secondary hover:text-accent transition-all">FAQs</a>
                            </li>
                            <li>
                                <a href="#"
                                    class="text-sm font-base leading-5 text-secondary hover:text-accent transition-all">Privacy
                                    Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Footer Opening Hours Section -->
                <div class="footer__item flex-1">
                    <h3 class="h3 mb-[30px]">Opening Hours</h3>
                    <!-- List -->
                     <div class="flex flex-col gap-6">
                        <!-- Item 1 -->
                         <div class="flex-1">
                            <div class="flex justify-between items-center border-b pb-[10px]">
                                <div>Mon - Thurs</div>
                                <div class="text-accent-secondary font-medium">8:00 - 20:00</div>
                            </div>
                         </div>

                         <!-- Item 2 -->
                         <div class="flex-1">
                            <div class="flex justify-between items-center border-b pb-[10px]">
                                <div>Fri - Sat</div>
                                <div class="text-accent-secondary font-medium">9:00 - 19:00</div>
                            </div>
                         </div>

                         <!-- Item 3 -->
                         <div class="flex-1">
                            <div class="flex justify-between items-center border-b pb-[10px]">
                                <div>Sun</div>
                                <div class="text-accent-secondary font-medium">10:00 - 17:00</div>
                            </div>
                         </div>
                     </div>
                </div>
            </div>
        </div>
        <div class="py-[30px] border-t">
            <div class="container mx-auto text-center">
                <div class="font-light text-base">
                    &copy; 2024, Web_DevGroup. All Rights Reserved.
                </div>
            </div>
        </div>
    </footer>
</template>