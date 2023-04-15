import { defineTheme } from 'pinceau'
import colors from 'tailwindcss/colors'

// See Typography config on https://github.com/nuxt-themes/typography/blob/main/tokens.config.ts
export default defineTheme({
  color: {
    primary: colors.teal
  },
  typography: {
    color: {
      secondary: colors.gray
    },
    font: {
      display: {
        value: 'Verdana, var(--font-sans)'
      },
      body: {
        value: 'Verdana, var(--font-sans)'
      },
    }
  },
  prose: {
    code: {
      block: {
        backgroundColor: {
          initial: colors.gray['50'],
          dark: colors.black
        }
      },
      inline: {
        backgroundColor: {
          initial: colors.gray['100'],
          dark: colors.black
        }
      }
    },
    hr: {
      color: {
        initial: colors.gray['300'],
        dark: colors.gray['50']
      }
    }
  }
})