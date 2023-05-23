import type { Meta, StoryObj } from '@storybook/vue3';
import UiSliderInput from './ui.vue';
import { ref } from 'vue';
type StoryProps = typeof UiSliderInput;

const meta = {
  title: 'UI/Инпут со слайдером',
  component: UiSliderInput,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [undefined, 'small', 'large']
    }
  },
  args: {
    min: 0,
    max: 10,
    minText: 'от',
    maxText: 'до'
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { UiSliderInput },
    setup: () => {
      const value = ref([0, 10]);
      return {
        args,
        value
      };
    },
    template: /* HTML */ `<UiSliderInput v-model="value" v-bind="args" />`
  })
};

export const Default: Story = {
  ...Template
};
