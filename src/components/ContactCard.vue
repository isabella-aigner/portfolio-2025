<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const socialLinks = ref([
  {
    name: "LinkedIn",
    icon: "pi pi-linkedin",
    url: "https://www.linkedin.com/in/isabella-aigner",
  },
  {
    name: "Email",
    icon: "pi pi-envelope",
    url: "mailto:isabella.aigner@gmail.com"
  },
  {
    name: "Linktree",
    icon: "pi pi-external-link",
    url: "https://linktr.ee/isabella.c.aigner"
  },
]);

const handleBtnClick = (url: string) => {
  window.open(url, "_blank");
};
</script>

<template>
  <section class="contact-section py-16">
    <div class="bg-[#1D2B40] rounded-xl p-8 md:p-12">
      <div class="flex items-center gap-3 mb-4">
        <i class="pi pi-envelope text-[#429EC8] text-2xl"></i>
        <h2 class="text-2xl font-bold text-white">{{ t("contact.title") }}</h2>
      </div>
      <div>
        <p class="text-[#D8EBFF]/70 leading-relaxed mb-8">{{ t("contact.message") }}</p>
        <div class="flex flex-wrap gap-4">
          <button
            v-for="link in socialLinks"
            :key="link.name"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#D8EBFF]/20 text-[#D8EBFF]/70 font-medium text-base transition-all hover:border-[#429EC8] hover:text-[#D8EBFF] hover:bg-[#429EC8]/10 cursor-pointer"
            @click="handleBtnClick(link.url)"
          >
            <i :class="link.icon"></i>
            {{ link.name }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
