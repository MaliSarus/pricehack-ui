import type { Meta, StoryObj } from '@storybook/vue3';
import { ElCheckbox, CheckboxProps } from 'element-plus';
type StoryProps = CheckboxProps;

const meta = {
  title: 'UI/Чекбокс',
  component: ElCheckbox,
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
    size: undefined
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { ElCheckbox },
    setup: () => ({ args }),
    template: /* HTML */ `<el-checkbox
      v-bind="args"
      v-model="args.modelValue"
      :validate-event="false"
    />`
  })
};

export const Primary: Story = {
  ...Template
};
