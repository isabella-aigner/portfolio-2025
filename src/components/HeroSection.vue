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
    <section id="hero" class="relative overflow-hidden">
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
                <div class="hero-img bg-[url(/assets/header/landingpage-header.png)] bg-top-left bg-origin-content bg-no-repeat bg-cover">
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
                                <p class="hero-subtitle">Mit innovativen Ideen bringe ich Projekte zuverlässig zum Erfolg</p>
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

<style>
/* ---- Hero Layout ---- */
.hero-layout {
  position: relative;
  z-index: 10;
  margin-top: 2.5rem;
  height: 80vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

@media (min-width: 768px) {
  .hero-layout { margin-top: 1.5rem; height: 100dvh; }
}

@media (min-width: 1280px) {
  .hero-layout { margin-top: 0; align-items: center; }
}

.hero-text {
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 22px;
  position: relative;
  z-index: 10;
  pointer-events: none;
}

@media (min-width: 768px) { .hero-text { font-size: 48px; } }
@media (min-width: 1280px) { .hero-text { font-size: 52px; } }

.hero-text img {
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
}

@media (min-width: 768px) { .hero-text img { width: 2rem; height: 2rem; } }
@media (min-width: 1280px) { .hero-text img { width: 2.5rem; height: 2.5rem; } }

.hero-text .slide {
  position: absolute;
  padding-top: 0;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 20px;
  padding-top: 20px;
  height: 30px;
  transform: translateY(0);
  overflow: hidden;
}

@media (min-width: 768px) {
  .hero-text .slide {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    height: 48px;
    transform: translateY(0.25rem);
  }
}

.hero-text .big-text {
  font-size: 40px;
  color: var(--primary-color);
}

@media (min-width: 768px) { .hero-text .big-text { font-size: 72px; } }
@media (min-width: 1280px) { .hero-text .big-text { font-size: 80px; } }

.hero-description { font-size: 18px; }
@media (min-width: 768px) { .hero-description { font-size: 36px; } }
@media (min-width: 1280px) { .hero-description { font-size: 40px; } }

.hero-img {
  position: absolute;
  z-index: 35;
  left: 30vw;
  top: -5vh;
  overflow: hidden;
  height: 40vh;
  width: 100%;
}

@media (min-width: 1024px) { .hero-img { display: block; } }

@media (min-width: 1280px) {
  .hero-img {
    left: 0;
    top: 0;
    height: 100dvh;
    width: 44%;
  }
}

.hero-info {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10vw;
}

@media (min-width: 768px) { .hero-info { height: 100dvh; } }
@media (min-width: 1024px) { .hero-info { justify-content: flex-end; } }

.hero-btn {
  transition: all 300ms ease-in-out;
  cursor: pointer;
}

.hero-btn:hover {
  opacity: 0.6;
}

/* Hero section gradient background */
#hero {
  background: radial-gradient(ellipse at 25% 60%, rgba(66,158,200,0.18) 0%, transparent 55%),
              linear-gradient(180deg, #0a1420 0%, #0D1A2C 50%, #0a1420 100%);
}

/* Hero subtitle */
.hero-subtitle {
  font-size: 1.125rem;
  color: rgba(216,235,255,0.75);
  font-weight: 400;
  line-height: 1.5;
  margin-top: 1.25rem;
  pointer-events: none;
}

@media (min-width: 768px) {
  .hero-subtitle { font-size: 1.25rem; }
}


/* Hero text slider */
.slide {
  display: inline-block;
  flex-direction: column;
  transition: all cubic-bezier(0.71, 0.03, 0.34, 1);
}

.wrapper {
  display: flex;
  flex-direction: column;
  animation: wordSlider 12s infinite cubic-bezier(0.9, 0.01, 0.3, 0.99);
}

@keyframes wordSlider {
  0%    { transform: translateY(0.5%); }
  12.5% { transform: translateY(-12.5%); }
  25%   { transform: translateY(-25%); }
  37.5% { transform: translateY(-37.5%); }
  50%   { transform: translateY(-50%); }
  62.5% { transform: translateY(-62.5%); }
  75%   { transform: translateY(-75%); }
  87.5% { transform: translateY(-87.5%); }
}

.gradient-line {
  width: 2px;
  background: linear-gradient(
    0deg,
    rgba(69, 222, 196, 0) 0%,
    #62e0ff 25%,
    #52aeff 37.51%,
    #fd5c79 62.83%,
    #6d45ce 92.91%
  );
}

.gradient-edge:nth-of-type(1) {
  left: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
}

.gradient-edge:nth-of-type(2) {
  right: 0;
  background: linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
}
</style>