<script setup>
import { onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ScrollReveal from 'scrollreveal';

onMounted(() => {
    const revealOptions = {
        origin: 'bottom',
        distance: '60px',
        duration: 3000,
        delay: 600,
    };
    ScrollReveal().reveal('.testimonial', revealOptions);
    ScrollReveal().reveal('.testimonial__container', revealOptions);
});

const swiperOptions = {
    loop: false,
    pagination: {
        dynamicBullets: true, 
        clickable: true,
    },
    modules: [Pagination],
};
</script>

<template>
    <!-- TESTIMONIALS SECTION -->
    <section
        class="testimonial rounded-[20px] relative py-12 overlay-gradient xl:min-h-[595px] xl:py-0">
        <div class="testimonial__container container mx-auto relative z-10">
            <div class="flex flex-col items-center gap-x-14 xl:flex-row">
                <!-- IMG -->
                <div class="hidden xl:flex">
                    <img src="img/img.png" alt="Testimonial" />
                </div>
                <!-- SLIDER -->
                <div class="max-w-[98%] xl:max-w-[710px]">
                    <!-- Swiper component -->
                    <swiper v-bind="swiperOptions">
                        <!-- Slide 1 -->
                        <SwiperSlide>
                            <div class="h-full flex flex-col justify-center items-start">
                                <div class="max-w-[680px] mx-auto text-center xl:text-left">
                                    <p
                                        class="font-light relative text-[20px] text-primary leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-7 before:h-7 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-7 after:h-7 after:bg-no-repeat after:bg-ml-3 mb-7">
                                        <!-- MESSAGE -->
                                        <span class="mx-2">
                                            I can't say enough about the wonderful care I received. From the moment
                                            I arrived, the staff made me feel comfortable and
                                            reassured. The doctors and nurses were incredibly attentive, explaining
                                            everything in detail and answering all my questions. My surgery went
                                            smoothly, and the follow-up care was exceptional. I truly felt like I
                                            was in the best hands. Thank you for making a stressful situation much
                                            easier to handle.
                                        </span>
                                    </p>
                                    <div class="text-[22px] text-[#4C5354] font-semibold">Sarah P.</div>
                                    <div class="text-[13px] text-[#9AB4B7] font-meduim uppercase tracking-[2.24px]">
                                        Recent Patient
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <!-- Slide 2 -->
                        <SwiperSlide>
                            <div class="h-full flex flex-col justify-center items-start">
                                <div class="max-w-[680px] mx-auto text-center xl:text-left">
                                    <p
                                        class="font-light relative text-[20px] text-primary leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-7 before:h-7 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-7 after:h-7 after:bg-no-repeat after:bg-ml-3 mb-7">
                                        <!-- MESSAGE -->
                                        <span class="mx-2">
                                            While the medical staff were skilled and professional, my
                                            overall experience left a bit to be desired. I had to wait a long time
                                            before being seen, even with a scheduled appointment. Additionally,
                                            communication could have been clearer—there were moments when I felt left
                                            out of the loop regarding my treatment. The care itself was fine, but the
                                            long wait times and lack of updates made the experience more stressful than
                                            it needed to be.
                                        </span>
                                    </p>
                                    <div class="text-[22px] text-[#4C5354] font-semibold">John D.</div>
                                    <div class="text-[13px] text-[#9AB4B7] font-meduim uppercase tracking-[2.24px]">
                                        Recent Patient
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <!-- Slide 3 -->
                        <SwiperSlide>
                            <div class="h-full flex flex-col justify-center items-start">
                                <div class="max-w-[680px] mx-auto text-center xl:text-left">
                                    <p
                                        class="font-light relative text-[20px] text-primary leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-7 before:h-7 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-7 after:h-7 after:bg-no-repeat after:bg-ml-3 mb-7">
                                        <!-- MESSAGE -->
                                        <span class="mx-2">
                                            My experience was amazing. The entire staff treated me
                                            with kindness and respect. I was seen quickly, and my treatment plan was
                                            well explained. The facility was clean and welcoming. I couldn’t have asked
                                            for better care during a difficult time.
                                        </span>
                                    </p>
                                    <div class="text-[22px] text-[#4C5354] font-semibold">Jasper L.</div>
                                    <div class="text-[13px] text-[#9AB4B7] font-meduim uppercase tracking-[2.24px]">
                                        Recent Patient
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <!-- Swiper pagination -->
                         <div class="pt-[50px]">
                            <div class="swiper-pagination"></div>
                         </div>
                        
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>
