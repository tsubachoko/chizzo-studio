import type { Config } from 'tailwindcss'

export default {
  content: [
    './**/*.{ts,tsx,js,jsx}',
    './node_modules/@common/components/*.{ts,tsx,js,jsx}',
  ],
} satisfies Config
