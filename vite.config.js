import { defineConfig } from "vite";
import solid from "solid-start/vite";
import cloudflare from "solid-start-cloudflare-workers";
import path from 'path'

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    solid({
      // adapter: cloudflare(),
      preferStreaming: false
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
