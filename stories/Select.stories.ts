import type { Meta, StoryObj } from '@storybook/vue3';
import { ElForm, ElFormItem, ElOption, ElSelect } from 'element-plus';
import { ArrowDownIcon16 } from '@/assets/icons';
type StoryProps = typeof ElSelect & {
  itemText?: string;
  errorText?: string;
  subtext?: string;
};

const meta = {
  title: 'UI/Селект',
  component: ElSelect,
  tags: ['autodocs'],
  argTypes: {
    errorText: {
      control: 'text',
      if: { arg: 'disabled', neq: true }
    },
    itemText: {
      control: 'text'
    },
    subtext: {
      control: 'text'
    }
  },
  args: {
    modelValue: '1',
    disabled: false,
    suffixIcon: ArrowDownIcon16,
    errorText: undefined,
    itemText: undefined,
    subtext: undefined
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { ElSelect, ElOption, ArrowDownIcon16, ElForm, ElFormItem },
    setup: () => ({ args }),
    template: /* HTML */ ` <el-form label-position="top">
      <el-form-item :label="$attrs.itemText" :error="$attrs.errorText">
        <el-select
          v-bind="args"
          v-model="args.modelValue"
          :validate-event="false"
        >
          <el-option :key="i" :label="i" :value="i" v-for="i in 10" />
        </el-select>
        <div class="el-form-item__subtext" v-if="$attrs.subtext">
          {{$attrs.subtext}}
        </div>
      </el-form-item>
    </el-form>`
  })
};

export const Primary: Story = {
  ...Template
};
export const SelectLabel: Story = {
  name: 'С названием поля',
  args: {
    itemText: 'Название поля'
  },
  ...Template
};
export const SelectDisabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true
  },
  ...Template
};
export const SelectError: Story = {
  name: 'Error',

  args: {
    errorText: 'Ошибка'
  },
  ...Template
};
export const SelectSmallDisabled: Story = {
  name: 'Small(Disabled)',
  args: {
    disabled: true,
    size: 'small'
  },
  ...Template
};
export const SelectSmallError: Story = {
  name: 'Small(Error)',

  args: {
    errorText: 'Ошибка',
    size: 'small'
  },
  ...Template
};
