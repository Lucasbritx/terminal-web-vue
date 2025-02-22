import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Terminal from '../Terminal.vue'

describe('Terminal', () => {
  it('renders properly', () => {
    const wrapper = mount(Terminal, { props: { } })
    expect(wrapper.html()).toContain('Terminal')
  })
})
