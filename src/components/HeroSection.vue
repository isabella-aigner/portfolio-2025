<script setup lang="ts">
import { ref } from 'vue';
import AppButton from './AppButton.vue';

import { HeroDynamicText } from '../models/HeroDynamicText';

defineProps<{
  title: string,
  dynamicText: HeroDynamicText[],
}>();

const dynamicText = ref<HeroDynamicText[]>([
    {
        text: 'Grafikdesign',
        imgLink: '/assets/images/graficdesign-icon.svg'
    },
    {
        text: 'Frontend-Development',
        imgLink: '/assets/images/development-icon.svg'
    },
    {
        text: 'Ui/UX-Design',
        imgLink: '/assets/images/ui-ux-icon.svg'
    },
])

const handleBtnClick = (url: string, type?: string) => {
  type ? window.open(url, type) : window.open(url);
};

</script>

<template>
    <section
      id="hero"
      class="relative overflow-hidden"
      :style="{ background: 'radial-gradient(ellipse at 25% 60%, rgba(66,158,200,0.18) 0%, transparent 55%), linear-gradient(180deg, #0a1420 0%, #0D1A2C 50%, #0a1420 100%)' }"
    >
        <!--quadrate hinter profilbild-->
        <div class="absolute top-0 left-0 z-30">
            <img src="/assets/images/bg.png" alt="background"/>
        </div>

        <!--linien rechts oben-->
        <div class="absolute top-[-50px] right-0 z-30">
            <img src="/assets/images/header-lines.svg" alt="background"/>
        </div>

        <!-- linie unten -->
        <div class="absolute bottom-[-8px] left-47 z-30 xl:block">
            <img src="/assets/images/header-linie-unten.svg" alt="background"/>
        </div>

        <!--social media section rechts-->
        <div class="hidden md:block absolute right-20 top-70 z-30">
            <div class="flex flex-col gap-5 justify-center items-center">
                <div class="flex flex-col gap-3">
                    <button
                        class="hero-btn transition-all duration-300 cursor-pointer hover:opacity-60"
                        @click.prevent="handleBtnClick('mailto:isabella.aigner@gmail.com', '_blank')">
                        <img src="/assets/images/header-mail-icon.svg" alt="mail icon" />
                    </button>
                    <button
                        class="hero-btn transition-all duration-300 cursor-pointer hover:opacity-60"
                        @click.prevent="handleBtnClick('https://www.linkedin.com/in/isabella-aigner', '_blank')">
                        <img src="/assets/images/header-linkedin-icon.svg" alt="linkedin icon" />
                    </button>
                    <button
                        class="hero-btn transition-all duration-300 cursor-pointer hover:opacity-60"
                        @click.prevent="handleBtnClick('https://linktr.ee/isabella.c.aigner')">
                        <img src="/assets/images/header-linktree-icon.svg" alt="linktree icon" />
                    </button>
                </div>
                <img class="w-[20px]" src="/assets/images/header-linie-rechts.svg" alt="background" />
            </div>
        </div>

            <div class="relative z-10 mt-10 h-[80vh] flex items-start justify-center md:mt-6 md:h-[100dvh] xl:mt-0 xl:items-center">
                <div class="hero-img absolute z-[35] left-[30vw] top-[-5vh] overflow-hidden h-[40vh] w-full xl:left-0 xl:top-0 xl:h-[100dvh] xl:w-[44%] bg-[url(/assets/header/landingpage-header.png)] bg-top-left bg-origin-content bg-no-repeat bg-cover">
                </div>
                <header class="justify-center h-full w-screen md:px-20 px-5
                    items-center align-center">
                    <div class="h-[80vh] flex justify-center items-center mr-[10vw] md:h-[100dvh] lg:justify-end">
                        <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                            <div class="hero-text col-start-2 relative z-10 flex flex-col justify-center text-[22px] pointer-events-none md:text-[48px] xl:text-[52px]">
                                <h1>
                                    <span class="block">
                                        Hi, I'm
                                        <span class="text-[40px] text-[var(--primary-color)] lisu-bosa-medium md:text-[72px] xl:text-[80px]">Isabella</span>
                                    </span>
                                    <span class="block">Mit Herz, Hirn und Hand</span>
                                    <span class="block text-[18px] md:text-[36px] xl:text-[40px]">
                                        für
                                        <span class="absolute px-2 py-5 h-[30px] overflow-hidden inline-block transition-all md:px-5 md:h-[48px] md:translate-y-1">
                                            <span class="flex flex-col animate-word-slider">
                                                <span
                                                    v-for="(text, index) in dynamicText"
                                                    :key="index"
                                                    class="flex items-center md:gap-3 gap-1 pb-2 flex-nowrap">
                                                    <img
                                                        :alt="text.text"
                                                        :src="text.imgLink"
                                                        class="xl:size-9 md:size-7 size-6 md:p-2 p-1 rounded-full bg-white object-contain" />
                                                    <span class="text-nowrap">{{ text.text }}</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </h1>
                                <p class="hero-subtitle text-[1.125rem] md:text-[1.25rem] text-[rgba(216,235,255,0.75)] font-normal leading-[1.5] mt-5 pointer-events-none">Mit innovativen Ideen bringe ich Projekte zuverlässig zum Erfolg</p>
                                <div>
                                    <AppButton variant="primary" class="mt-5 md:mt-7 lg:mt-10">
                                        Jetzt kontaktieren
                                    </AppButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
    </section>
</template>
