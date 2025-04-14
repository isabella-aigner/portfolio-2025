<script setup lang="ts">
import { Ref, ref } from 'vue';

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
    <section id="hero" class="relative overflow-hidden">
        <!--quadrate hinter profilbild-->
        <div class="absolute top-0 left-0 z-30">
            <img src="/assets/images/bg.png" alt="background"/>
        </div>

        <!--linien rechts oben-->
        <div class="absolute top-[-50px] right-0 z-30">
            <img src="/assets/images/header-lines.svg" alt="background"/>
        </div>

        <!--linie unten-->
        <div class="absolute bottom-[-8px] left-47 z-30 xl:block">
            <img src="/assets/images/header-linie-unten.svg" alt="background"/>
        </div>

        <!--social media section rechts-->
        <div class="absolute right-20 top-70 z-30">
            <div class="flex flex-col gap-5 justify-center items-center">
                <div class="flex flex-col gap-3">
                    <button 
                        class="hero-btn" 
                        @click.prevent="handleBtnClick('mailto:isabella.aigner@gmail.com', '_blank')">
                        <img src="/assets/images/header-mail-icon.svg" alt="mail icon" />
                    </button>
                    <button 
                        class="hero-btn" 
                        @click.prevent="handleBtnClick('https://www.linkedin.com/in/isabella-aigner', '_blank')">
                        <img src="/assets/images/header-linkedin-icon.svg" alt="linkedin icon" />
                    </button>
                    <button 
                        class="hero-btn" 
                        @click.prevent="handleBtnClick('https://linktr.ee/isabella.c.aigner')">
                        <img src="/assets/images/header-linktree-icon.svg" alt="linktree icon" />
                    </button>
                </div>
                <img class="w-[20px]" src="/assets/images/header-linie-rechts.svg" alt="background" />
            </div>
        </div>
         
            <div class="hero-layout relative">
                <div class="hero-img bg-[url(/assets/header/landingpage-header.jpg)] bg-top-left bg-origin-content bg-no-repeat bg-cover">
                </div>
                <header class="justify-center h-full w-screen md:px-20 px-5
                    items-center align-center">
                    <div class="hero-info">
                        <div class="grid grid-cols-1 xl:grid-cols-2 gap-7">
                            <div class="hero-text col-start-2">
                                <h1>
                                    <span class="block">
                                        Hi, I'm 
                                        <span class="big-text lisu-bosa-medium">Isabella</span>
                                    </span> 
                                    <span class="block">Mit Herz, Hirn und Hand</span>
                                    <span class="block hero-description">
                                        für
                                        <span class="slide">
                                            <span class="wrapper">
                                                <span 
                                                    v-for="(text, index) in dynamicText"
                                                    :key="index"
                                                    class="flex items-center md:gap-3 gap-1 pb-2 flex-nowrap">
                                                    <img
                                                        :alt="text.text"
                                                        :src="text.imgLink"
                                                        class="xl:size-9 md:size-7 size-6 md:p-2 p-1 rounded-full bg-white" />
                                                    <span class="text-nowrap">{{ text.text }}</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </h1>
                                <div>
                                    <button class="btn mt-5 md:mt-7 lg:mt-10">
                                        Jetzt kontaktieren
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
    </section>
</template>