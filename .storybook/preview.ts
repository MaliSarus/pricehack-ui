import type { Preview } from '@storybook/vue3';
import 'element-plus/dist/index.css';
import 'swiper/swiper-bundle.min.css';
import '../assets/styles/index.scss';
import '../assets/styles/roboto-flex.scss';
import PrimeVue from 'primevue/config';
import { setup } from '@storybook/vue3';

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '360px',
      height: '667px'
    }
  },
  smallTablet: {
    name: 'Small Tablet',
    styles: {
      width: '768px',
      height: '1080px'
    }
  },
  bigTablet: {
    name: 'Big Tablet',
    styles: {
      width: '1024px',
      height: '1080px'
    }
  },
  smallDesktop: {
    name: 'Small Desktop',
    styles: {
      width: '1440px',
      height: '1080px'
    }
  },
  bigDesktop: {
    name: 'Big Desktop',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    viewport: { viewports: customViewports }
  }
};

setup((app) => {
  app.use(PrimeVue);
});

export default preview;
