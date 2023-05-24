import svgLoader from "vite-svg-loader";
import checker from "vite-plugin-checker";
import { resolve } from "path";

const lifecycle = process.env.npm_lifecycle_event;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  modules: ["@element-plus/nuxt"],
  elementPlus: {
    importStyle: false,
  },
  css: ["element-plus/dist/index.css", "@/assets/styles/index.scss"],
  build: {
    transpile: ["primevue", ...(lifecycle === "build" ? ["element-plus"] : [])],
  },
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
      }),
      checker({
        vueTsc: true,
        // eslint: {
        //   lintCommand:
        //     'eslint ./**/*.{ts,vue,d.ts} --ignore-pattern "./**/*.test.ts" --ignore-pattern "./**/*.stories.ts"',
        // },
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname),
      },
    },
  },
});
