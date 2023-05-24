// import { URL, fileURLToPath } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      dts: true,
      directoryAsNamespace: true,
      resolvers: [
        ElementPlusResolver({
          importStyle: false
        })
      ]
    }),
    svgLoader({
      svgo: false
    })
  ],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./', import.meta.url))
      '@': resolve(__dirname)
      // Add any other aliases you use in your code base
      // https://nuxt.com/docs/api/configuration/nuxt-config/#alias
    }
  }
});
