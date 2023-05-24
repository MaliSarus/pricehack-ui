import type { Meta, StoryObj } from '@storybook/vue3';
import { ElRadio, ElRadioGroup, RadioProps } from 'element-plus';
import { ref } from 'vue';
type StoryProps = RadioProps;

const meta = {
  title: 'UI/Радиокнопки',
  component: ElRadio,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    disabled: false
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { ElRadio, ElRadioGroup },
    setup: () => {
      const modelValue = ref(3);
      return {
        args,
        modelValue
      };
    },
    template: /* HTML */ ` <el-radio-group
      v-model="modelValue"
      validate-event="false"
    >
      <el-radio :label="3" v-bind="args">Option A</el-radio>
      <el-radio :label="6" v-bind="args">Option B</el-radio>
      <el-radio :label="9" v-bind="args">Option C</el-radio>
    </el-radio-group>`
  })
};

export const Primary: Story = {
  ...Template
};
