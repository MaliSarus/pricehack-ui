import type { Meta, StoryObj } from '@storybook/vue3';
import UiRating from './ui.vue';
type StoryProps = typeof UiRating;

const meta = {
  title: 'UI/Рейтинг',
  component: UiRating,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [undefined, 'small', 'large']
    }
  },
  args: {
    modelValue: 0,
    size: undefined,
    disabled: false,
    clearable: false
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { UiRating },
    setup: () => ({ args }),
    template: /* HTML */ `<UiRating v-model="args.modelValue" />`
  })
};

export const Default: Story = {
  ...Template
};
