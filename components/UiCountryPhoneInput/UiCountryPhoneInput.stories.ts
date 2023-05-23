import type { Meta, StoryObj } from '@storybook/vue3';
import UiCountyPhoneInput from './ui.vue';
import { ref } from 'vue';
type StoryProps = typeof UiCountyPhoneInput;

const meta = {
  title: 'UI/Инпут телефона с выбором региона',
  component: UiCountyPhoneInput,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['default', 'small']
    }
  },
  args: {}
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { UiCountyPhoneInput },
    setup: () => {
      const value = ref('');
      return {
        args,
        value
      };
    },
    template: /* HTML */ `<UiCountyPhoneInput v-bind="args" v-model="value" />`
  })
};

export const Small: Story = {
  args: {
    size: 'small'
  },
  ...Template
};
export const Default: Story = {
  ...Template
};
