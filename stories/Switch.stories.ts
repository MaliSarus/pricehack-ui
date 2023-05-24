import type { Meta, StoryObj } from '@storybook/vue3';
import { ElSwitch, SwitchProps } from 'element-plus';
type StoryProps = SwitchProps;

const meta = {
  title: 'UI/Переключатель',
  component: ElSwitch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      controls: 'inline-radio',
      options: [undefined, 'small', 'large']
    }
  },
  args: {
    modelValue: false,
    disabled: false,
    size: undefined,
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { ElSwitch },
    setup: () => ({ args }),
    template: /* HTML */ `<el-switch
      v-bind="args"
      v-model="args.modelValue"
      :validate-event="false"
    />`
  })
};

export const Primary: Story = {
  ...Template
};
