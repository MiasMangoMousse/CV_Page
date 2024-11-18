import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: '_headers', // Path to the _headers file in your project
          dest: '.'        // Copy it to the root of the output directory
        }
      ]
    })
  ]
});