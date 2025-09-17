import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 👈 Force Vite to run on 5173
    strictPort: true, // 👈 Fail if 5173 is busy instead of random port
  },
});
