import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/liuyuhui.github.io/', // Important: keeps paths relative to root for username.github.io
})
