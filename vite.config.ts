import { defineConfig, PluginOption } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react-swc';
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactScopedCssPlugin() as PluginOption],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@services': path.resolve(__dirname, 'src/services'),
    },
  },
});
