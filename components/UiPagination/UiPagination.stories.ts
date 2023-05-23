import type { Meta, StoryObj } from '@storybook/vue3';
import UiPagination from './ui.vue';
import { ref } from 'vue';
type StoryProps = typeof UiPagination;

const meta = {
  title: 'UI/Пагинация',
  component: UiPagination,
  tags: ['autodocs'],

  args: {
    currentPage: 1,
    totalPages: 40
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { UiPagination },
    setup: () => {
      const page = ref(args.currentPage);
      return {
        args,
        page
      };
    },
    template: /* HTML */ `<UiPagination v-bind="args" v-model="page"/>`
  })
};

export const Default: Story = {
  ...Template
};
