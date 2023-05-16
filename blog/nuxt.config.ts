// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    '@nuxt-themes/elements',
    '@nuxt-themes/typography',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  css: [
    '@/assets/styles/globals.postcss'
  ],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    }
  },
  experimental: {
    inlineSSRStyles: false
  }
})
