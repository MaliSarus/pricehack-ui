import type { Meta, StoryObj } from '@storybook/vue3';
import { BadgeProps, ElBadge } from 'element-plus';
type StoryProps = BadgeProps;

const meta = {
  title: 'UI/Бэйдж',
  component: ElBadge,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['primary', 'success', 'warning', 'danger', 'info', 'plain', 'error']
    }
  },
  args: {
    value: 200,
    max: 99,
    isDot: false,
    type: undefined
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { ElBadge },
    setup: () => {
      args;
    },
    template: /* HTML */ `<el-badge v-bind="args"></el-badge>`
  })
};

export const Default: Story = {
  ...Template
};
