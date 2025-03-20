import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactSection from '../ContactCard.vue'
import { createI18n } from 'vue-i18n'

// Create i18n instance for testing
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      contact: {
        title: 'Get in Touch',
        message: "I'm always interested in hearing about new projects and opportunities."
      }
    }
  }
})

describe('ContactSection', () => {
  it('renders properly', () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('displays correct social links', () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    const socialLinks = wrapper.findAll('.social-links .p-button')
    expect(socialLinks.length).toBe(3) // GitHub, LinkedIn, Email
  })

  it('renders contact message from i18n', () => {
    const wrapper = mount(ContactSection, {
      global: {
        plugins: [i18n]
      }
    })
    expect(wrapper.text()).toContain("I'm always interested in hearing about new projects and opportunities")
  })
})