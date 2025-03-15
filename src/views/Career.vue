<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";
import ContactSection from "../components/ContactSection.vue";
import FullWidthHeader from "../components/FullWidthHeader.vue";
import ContentContainer from "../components/ContentContainer.vue";
import ScrollReveal from "../components/ScrollReveal.vue";

const { t, te } = useI18n();

const downloadCV = () => {
  // Replace this URL with the actual URL to your CV
  const cvUrl = "/cv-isabella-aigner.pdf";
  window.open(cvUrl, "_blank");
};
</script>

<template>
  <div class="career">
    <FullWidthHeader
      image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
    >
      <h1>{{ t("career.title") }}</h1>
      <p>{{ t("career.claim") }}</p>
    </FullWidthHeader>

    <ContentContainer>
      <ScrollReveal>
        <Card class="intro-card">
          <template #content>
            <p>{{ t("career.intro") }}</p>
            <div class="location">
              <i class="pi pi-map-marker"></i>
              <span>{{ t("career.location") }}</span>
            </div>
          </template>
        </Card>
      </ScrollReveal>

      <ScrollReveal>
        <div class="cv-section">
          <Card>
            <template #content>
              <div class="cv-content">
                <p>
                  {{ t("career.cvDownload") }}
                </p>
                <Button
                  icon="pi pi-download"
                  :label="t('career.download')"
                  class="p-button-outlined download-cv"
                  @click="downloadCV"
                />
              </div>
            </template>
          </Card>
        </div>
      </ScrollReveal>

      <section class="timeline-section">
        <ScrollReveal>
          <h2 class="text-center font-bold m-6 text-xl text-color-primary">
            {{ t("career.experience.title") }}
          </h2>
        </ScrollReveal>
        <div class="timeline">
          <ScrollReveal
            v-for="n in 15"
            :key="n"
            :delay="n * 50"
            direction="right"
            class="timeline-item"
          >
            <div class="timeline-icon relative">
              <img :src="t(`career.experience.elements.item${n}.icon`)" />
            </div>
            <Card class="timeline-content">
              <template #title>
                <div class="timeline-header">
                  <h3 class="timeline-title">
                    {{ t(`career.experience.elements.item${n}.company`) }}
                  </h3>
                  <span class="timeline-period">{{
                    t(`career.experience.elements.item${n}.period`)
                  }}</span>
                </div>
              </template>
              <template
                #content
                v-if="
                  te(`career.experience.elements.item${n}.position`) ||
                  te(`career.experience.elements.item${n}.description`)
                "
              >
                <div class="timeline-content">
                  <h4
                    v-if="te(`career.experience.elements.item${n}.position`)"
                    class="timeline-content-title"
                  >
                    {{ t(`career.experience.elements.item${n}.position`) }}
                  </h4>
                  <p
                    v-if="te(`career.experience.elements.item${n}.description`)"
                    class="timeline-content-description"
                  >
                    {{ t(`career.experience.elements.item${n}.description`) }}
                  </p>
                </div>
              </template>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <section class="timeline-section">
        <ScrollReveal>
          <h2 class="text-center font-bold m-6 text-xl text-color-primary">
            {{ t("career.education.title") }}
          </h2>
        </ScrollReveal>
        <div class="timeline">
          <ScrollReveal
            v-for="n in 9"
            :key="n"
            :delay="n * 50"
            direction="left"
            class="timeline-item"
          >
            <div class="timeline-icon">
              <img
                :src="t(`career.education.elements.item${n}.icon`)"
                alt="education icon"
              />
            </div>
            <Card class="timeline-content">
              <template #title>
                <div class="timeline-header">
                  <h3 class="timeline-title">
                    {{ t(`career.education.elements.item${n}.title`) }}
                  </h3>
                  <span class="timeline-period">{{
                    t(`career.education.elements.item${n}.period`)
                  }}</span>
                </div>
              </template>
              <template #content>
                <div
                  v-if="
                    te(`career.education.elements.item${n}.subtitle`) ||
                    te(`career.education.elements.item${n}.description`)
                  "
                  class="timeline-content"
                >
                  <h4
                    v-if="te(`career.education.elements.item${n}.subtitle`)"
                    class="timeline-content-title"
                  >
                    {{ t(`career.education.elements.item${n}.subtitle`) }}
                  </h4>
                  <p
                    v-if="te(`career.education.elements.item${n}.description`)"
                    class="timeline-content-description"
                  >
                    {{ t(`career.education.elements.item${n}.description`) }}
                  </p>
                </div>
              </template>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
    </ContentContainer>
  </div>
</template>
