import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import tailwindcss from 'tailwindcss'

export default defineConfig({
  root: "app/frontend",
  plugins: [
    RubyPlugin(),
    tailwindcss()
  ],
})
