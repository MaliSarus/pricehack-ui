import type { Meta, StoryObj } from '@storybook/vue3';
import { ElInput, InputProps, ElFormItem, ElForm } from 'element-plus';
import { MenuIcon16 } from '@/assets/icons';
type StoryProps = InputProps & {
  type?: 'text' | 'password';
  maxlength?: number;
  prepend?: string;
  itemText?: string;
  errorText?: string;
  subtext?: string;
};

const meta = {
  title: 'UI/Инпут',
  component: ElInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
      options: ['text', 'password']
    },
    maxlength: {
      control: 'number'
    },
    placeholder: {
      control: 'text'
    },
    prepend: {
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
    },
    size: {
      control: 'inline-radio',
      options: [undefined, 'small', 'large']
    },
    suffixIcon: {
      control: 'select',
      options: [undefined, MenuIcon16]
    },
    showPassword: { control: 'boolean', if: { arg: 'type', eq: 'password' } }
  },
  args: {
    type: 'text',
    modelValue: '',
    maxlength: undefined,
    placeholder: '',
    clearable: false,
    showPassword: false,
    disabled: false,
    size: undefined,
    // prefixIcon: undefined,
    suffixIcon: undefined,
    prepend: undefined,
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
        <el-form-item :label="$attrs.itemText" :error="$attrs.errorText" >
          <el-input
            v-bind="args"
            v-model="args.modelValue"
            :validate-event="false"
            :placeholder="$attrs.placeholder"
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
  name: 'Text(Disabled)',
  args: {
    disabled: true,
    modelValue: 'Какой то текст'
  },

  ...Template
};
export const PrimaryError: Story = {
  name: 'Text(Error)',
  args: {
    errorText: 'Ошибка',
    modelValue: 'Какой то текст'
  },
  ...Template
};
export const TextIconRight: Story = {
  name: 'Text+IconRight',
  args: {
    suffixIcon: MenuIcon16,
    modelValue: 'Какой то текст'
  },
  ...Template
};
export const TextIconRightDisabled: Story = {
  name: 'Text+IconRight(Disabled)',
  args: {
    disabled: true,
    modelValue: 'Какой то текст',
    suffixIcon: MenuIcon16
  },

  ...Template
};
export const TextIconRightError: Story = {
  name: 'Text+IconRight(Error)',
  args: {
    errorText: 'Ошибка',
    modelValue: 'Какой то текст',
    suffixIcon: MenuIcon16
  },
  ...Template
};
export const TextHelp: Story = {
  name: 'Text+Help',
  args: {
    modelValue: 'Какой то текст',
    prepend: 'от'
  },
  ...Template
};
export const TextHelpDisabled: Story = {
  name: 'Text+Help(Disabled)',
  args: {
    disabled: true,
    modelValue: 'Какой то текст',
    prepend: 'от'
  },

  ...Template
};
export const TextHelpError: Story = {
  name: 'Text+Help(Error)',
  args: {
    errorText: 'Ошибка',
    modelValue: 'Какой то текст',
    prepend: 'от'
  },
  ...Template
};
export const TextLabel: Story = {
  name: 'Text+Label',
  args: {
    modelValue: 'Какой то текст',
    itemText: 'Название поля'
  },
  ...Template
};
export const TextLabelDisabled: Story = {
  name: 'Text+Label(Disabled)',
  args: {
    disabled: true,
    modelValue: 'Какой то текст',
    itemText: 'Название поля'
  },

  ...Template
};
export const TextLabelError: Story = {
  name: 'Text+Label(Error)',
  args: {
    errorText: 'Ошибка',
    modelValue: 'Какой то текст',
    itemText: 'Название поля'
  },
  ...Template
};
export const TextLabelIconRight: Story = {
  name: 'Text+Label+IconRight',
  args: {
    modelValue: 'Какой то текст',
    itemText: 'Название поля',
    suffixIcon: MenuIcon16
  },
  ...Template
};
export const TextLabelIconRightDisabled: Story = {
  name: 'Text+Label+IconRight(Disabled)',
  args: {
    disabled: true,
    modelValue: 'Какой то текст',
    itemText: 'Название поля',
    suffixIcon: MenuIcon16
  },

  ...Template
};
export const TextLabelIconRightError: Story = {
  name: 'Text+Label+IconRight(Error)',
  args: {
    errorText: 'Ошибка',
    modelValue: 'Какой то текст',
    itemText: 'Название поля',
    suffixIcon: MenuIcon16
  },
  ...Template
};
export const TextLabelDescription: Story = {
  name: 'Text+Label+Description',
  args: {
    modelValue: 'Какой то текст',
    itemText: 'Название поля',
    subtext: 'Подпись'
  },
  ...Template
};
export const TextLabelDescriptionDisabled: Story = {
  name: 'Text+Label+Description(Disabled)',
  args: {
    disabled: true,
    modelValue: 'Какой то текст',
    itemText: 'Название поля',
    subtext: 'Подпись'
  },

  ...Template
};
export const TextLabelDescriptionError: Story = {
  name: 'Text+Label+Description(Error)',
  args: {
    errorText: 'Ошибка',
    modelValue: 'Какой то текст',
    itemText: 'Название поля',
    subtext: 'Подпись'
  },
  ...Template
};
export const TextLabelDescriptionIconRight: Story = {
  name: 'Text+Label+Description+IconRight',
  args: {
    modelValue: 'Какой то текст',
    itemText: 'Название поля',
    subtext: 'Подпись',
    suffixIcon: MenuIcon16
  },
  ...Template
};
export const TextLabelDescriptionIconRightDisabled: Story = {
  name: 'Text+Label+Description+IconRight(Disabled)',
  args: {
    disabled: true,
    modelValue: 'Какой то текст',
    itemText: 'Название поля',
    subtext: 'Подпись',
    suffixIcon: MenuIcon16
  },

  ...Template
};
export const TextLabelDescriptionIconRightError: Story = {
  name: 'Text+Label+Description+IconRight(Error)',
  args: {
    errorText: 'Ошибка',
    modelValue: 'Какой то текст',
    itemText: 'Название поля',
    subtext: 'Подпись',
    suffixIcon: MenuIcon16
  },
  ...Template
};
