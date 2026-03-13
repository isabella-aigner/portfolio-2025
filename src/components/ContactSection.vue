<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const handleSubmit = () => {
  const el = document.querySelector("#contact-form") as HTMLFormElement;
  const data = new FormData(el);
  const subject = encodeURIComponent("Kontaktanfrage Portfolio");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nE-Mail: ${data.get("email")}\n\n${data.get("message")}`
  );
  window.location.href = `mailto:isabella.aigner@gmail.com?subject=${subject}&body=${body}`;
};
</script>

<template>
  <section id="contact" class="contact-section bg-[#0D1A2C] pb-[110px] max-md:pb-[60px] scroll-mt-[70px]">
    <div class="page-inner">
      <div class="contact-head flex flex-col items-center gap-4 text-center mb-[60px] pt-[110px] max-md:pt-[60px] max-md:mb-9">
        <span class="section-tag">{{ t('contact.sectionTag') }}</span>
        <h2 class="section-h2">{{ t('contact.heading') }}</h2>
      </div>
      <div class="contact-cols grid grid-cols-2 gap-5 items-start max-[900px]:grid-cols-1">
        <div class="contact-form-wrap bg-[#253349] rounded flex flex-col py-10 px-[30px] max-md:py-6 max-md:px-5">
          <form id="contact-form" class="flex flex-col gap-4" @submit.prevent="handleSubmit">
            <div class="flex flex-col gap-2">
              <label class="text-[0.9375rem] font-medium text-[rgba(216,235,255,0.75)]">{{ t('contact.nameLabel') }}</label>
              <input
                name="name" type="text" :placeholder="t('contact.namePlaceholder')" required
                class="bg-[#D9ECFF] border-none rounded-[6px] py-4 px-[17px] text-[#1F2E42] text-base [font-family:inherit] outline-none w-full transition-opacity duration-200 placeholder:text-[rgba(31,46,66,0.55)] focus:opacity-90"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-[0.9375rem] font-medium text-[rgba(216,235,255,0.75)]">{{ t('contact.emailLabel') }}</label>
              <input
                name="email" type="email" :placeholder="t('contact.emailPlaceholder')" required
                class="bg-[#D9ECFF] border-none rounded-[6px] py-4 px-[17px] text-[#1F2E42] text-base [font-family:inherit] outline-none w-full transition-opacity duration-200 placeholder:text-[rgba(31,46,66,0.55)] focus:opacity-90"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-[0.9375rem] font-medium text-[rgba(216,235,255,0.75)]">{{ t('contact.messageLabel') }}</label>
              <textarea
                name="message" :placeholder="t('contact.messagePlaceholder')" required
                class="bg-[#D9ECFF] border-none rounded-[6px] py-4 px-[17px] text-[#1F2E42] text-base [font-family:inherit] outline-none w-full transition-opacity duration-200 placeholder:text-[rgba(31,46,66,0.55)] focus:opacity-90 resize-y min-h-[141px]"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full mt-2 py-[14px] px-6 bg-[linear-gradient(180deg,#EBF3FA_0%,#DFEDFA_100%)] text-[#1F2E42] border-none rounded-lg text-base font-semibold [font-family:inherit] cursor-pointer flex items-center justify-center gap-2 transition-opacity duration-200 hover:opacity-[0.88]"
            >
              {{ t('contact.sendBtn') }}
            </button>
          </form>
        </div>
        <div class="contact-img-wrap rounded-[20px] overflow-hidden max-[900px]:h-[300px]">
          <img src="/assets/images/contact-form-bg.jpg" alt="Isabella Aigner" class="w-full h-full object-cover block" />
        </div>
      </div>
    </div>
  </section>
</template>
