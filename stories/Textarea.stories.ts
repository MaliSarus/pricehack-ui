import type { Meta, StoryObj } from '@storybook/vue3';
import { ElInput, InputProps, ElFormItem, ElForm } from 'element-plus';
type StoryProps = InputProps & {
  type?: 'text' | 'password';
  maxlength?: number;
  prepend?: string;
  itemText?: string;
  errorText?: string;
  subtext?: string;
};

const meta = {
  title: 'UI/Текстареа',
  component: ElInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text'
    },

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
    modelValue: '',
    maxlength: undefined,
    placeholder: '',
    disabled: false,
    // prefixIcon: undefined,
    errorText: undefined,
    itemText: undefined,
    subtext: undefined
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { ElInput, ElFormItem, ElForm },
    setup: () => {
      return { args };
    },
    template: /* HTML */ `
      <el-form label-position="top">
        <el-form-item :label="$attrs.itemText" :error="$attrs.errorText">
          <el-input
            v-bind="args"
            v-model="args.modelValue"
            :validate-event="false"
            :placeholder="$attrs.placeholder"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
          >
            <template v-if="args.prepend" #prepend>{{args.prepend}}</template>
          </el-input>
          <div class="el-form-item__subtext" v-if="$attrs.subtext">
            {{$attrs.subtext}}
          </div>
        </el-form-item>
      </el-form>
    `
  })
};

export const Primary: Story = {
  name: 'По умолчанию',
  args: {
    modelValue: 'Какой то текст'
  },
  ...Template
};
export const PrimaryDisabled: Story = {
  name: 'Disabled',
  args: {
    disabled: true,
    modelValue: 'Какой то текст'
  },

  ...Template
};
export const PrimaryError: Story = {
  name: 'Error',
  args: {
    modelValue: 'Какой то текст',
    errorText: 'Ошибка'
  },

  ...Template
};
export const TextareaDescription: Story = {
  name: 'Textarea+Description',
  args: {
    modelValue: 'Какой то текст',
    subtext: 'подпись'
  },
  ...Template
};
export const TextareaDescriptionDisabled: Story = {
  name: 'Textarea+Description(Disabled)',
  args: {
    disabled: true,
    modelValue: 'Какой то текст',
    subtext: 'подпись'
  },

  ...Template
};
export const TextareaDescriptionError: Story = {
  name: 'Textarea+Description(Error)',
  args: {
    modelValue: 'Какой то текст',
    errorText: 'Ошибка',
    subtext: 'подпись'
  },

  ...Template
};
export const TextareaLabelDescription: Story = {
  name: 'Textarea+Label+Description',
  args: {
    modelValue: 'Какой то текст',
    subtext: 'подпись',
    itemText: 'Название поля'
  },
  ...Template
};
export const TextareaLabelDescriptionDisabled: Story = {
  name: 'Textarea+Label+Description(Disabled)',
  args: {
    disabled: true,
    modelValue: 'Какой то текст',
    subtext: 'подпись',
    itemText: 'Название поля'
  },

  ...Template
};
export const TextareaLabelDescriptionError: Story = {
  name: 'Textarea+Label+Description(Error)',
  args: {
    modelValue: 'Какой то текст',
    errorText: 'Ошибка',
    subtext: 'подпись',
    itemText: 'Название поля'
  },

  ...Template
};
