import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContentContainer from '../ContentContainer.vue'

describe('ContentContainer', () => {
  it('renders properly', () => {
    const wrapper = mount(ContentContainer)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders slot content', () => {
    const wrapper = mount(ContentContainer, {
      slots: {
        default: '<div class="test-content">Test Content</div>'
      }
    })
    expect(wrapper.find('.test-content').exists()).toBe(true)
    expect(wrapper.text()).toContain('Test Content')
  })

  it('has correct CSS class', () => {
    const wrapper = mount(ContentContainer)
    expect(wrapper.classes()).toContain('content-container')
  })
})