import alias from '@rollup/plugin-alias';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';

const projectRootDir = resolve(__dirname);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), alias({ entries: [{ find: '@', replacement: resolve(projectRootDir, 'src') }] })],
  server: {
    port: 3000,
  },
});
