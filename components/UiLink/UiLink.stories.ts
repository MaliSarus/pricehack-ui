import type { Meta, StoryObj } from '@storybook/vue3';
import UiLink from './ui.vue';
import { AddIcon24 } from '@/assets/icons';
type StoryProps = typeof UiLink;

const meta = {
  title: 'UI/Ссылка',
  component: UiLink,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'default']
    },
    icon: {
      control: 'select',
      options: [undefined, AddIcon24]
    },
    rightIcon: {
      control: 'select',
      options: [undefined, AddIcon24]
    }
  },
  args: {
    size: 'default',
    icon: undefined,
    rightIcon: undefined,
    disabled: false,
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { UiLink },
    setup: () => ({ args }),
    template: /* HTML */ `<UiLink v-bind="args" href="/">Ссылка</UiLink>`
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

