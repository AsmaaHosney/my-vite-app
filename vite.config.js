import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/my-vite-app/",   // 👈 اسم المستودع على GitHub
  plugins: [react()],
})
