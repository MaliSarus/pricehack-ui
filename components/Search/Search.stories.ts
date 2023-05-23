import type { Meta, StoryObj } from '@storybook/vue3';
import TheSearch from './ui.vue';
import { ref } from 'vue';
type StoryProps = typeof TheSearch;

const meta = {
  title: 'UI/Поиск',
  component: TheSearch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: [undefined, 'small'] }
  },
  args: {
    size: undefined
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { TheSearch },
    setup: () => {
      const search = ref('');
      return {
        args,
        search
      };
    },
    template: /* HTML */ `<TheSearch v-bind="args" v-model="search" />`
  })
};

export const Default: Story = {
  ...Template
};
