// import svgLoader from "vite-svg-loader";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const currentDir = dirname(fileURLToPath(import.meta.url));


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": join(currentDir),
  },
  
  // vite: {
  //   plugins: [
  //     svgLoader({
  //       svgo: false,
  //     }),
  //     // checker({
  //     //   vueTsc: true,
  //     //   // eslint: {
  //     //   //   lintCommand:
  //     //   //     'eslint ./**/*.{ts,vue,d.ts} --ignore-pattern "./**/*.test.ts" --ignore-pattern "./**/*.stories.ts"',
  //     //   // },
  //     // }),
  //   ],
  //   // resolve: {
  //   //   alias: {
  //   //     "@": resolve(__dirname),
  //   //   },
  //   // },
  // },
});
