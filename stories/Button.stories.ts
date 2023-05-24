import type { Meta, StoryObj } from '@storybook/vue3';
import { ElButton, ButtonProps, ElIcon } from 'element-plus';
import { AddIcon24 } from '@/assets/icons';
import { FunctionalComponent, SVGAttributes } from 'vue';
type StoryProps = ButtonProps & {
  rightIcon: FunctionalComponent<SVGAttributes>;
};

const meta = {
  title: 'UI/Кнопки',
  component: ElButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['small', 'default', 'large']
    },
    type: {
      control: 'inline-radio',
      options: [undefined, 'primary']
    },
    icon: {
      control: 'select',
      options: [AddIcon24, undefined]
    },
    rightIcon: {
      control: 'select',
      options: [AddIcon24, undefined]
    }
  },
  args: {
    size: 'default',
    type: undefined,
    plain: false,
    text: false,
    round: false,
    circle: false,
    loading: false,
    loadingIcon: undefined,
    disabled: false,
    icon: undefined,
    rightIcon: undefined,
    autofocus: false,
    nativeType: 'button'
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { ElButton, ElIcon },
    setup: () => ({ args }),
    template: /* HTML */ `<el-button v-bind="args">
      Кнопка
      <el-icon class="el-icon--right" v-if="args.rightIcon">
        <component :is="args.rightIcon" />
      </el-icon>
    </el-button>`
  })
};
const TemplateWithoutSlot: Story = {
  render: (args) => ({
    components: { ElButton },
    setup: () => ({ args }),
    template: /* HTML */ `<el-button v-bind="args" />`
  })
};

export const Primary: Story = {
  args: {
    type: 'primary'
  },
  ...Template
};

export const Secondary: Story = {
  args: {
    plain: true
  },
  ...Template
};

export const Tertiary: Story = {
  ...Template
};

export const Quaternary: Story = {
  args: {
    text: true
  },
  ...Template
};

export const IconPrimary: Story = {
  args: {
    type: 'primary',
    icon: AddIcon24,
    circle: true
  },
  ...TemplateWithoutSlot
};

export const IconSecondary: Story = {
  args: {
    plain: true,
    icon: AddIcon24,
    circle: true
  },
  ...TemplateWithoutSlot
};

export const IconTertiary: Story = {
  args: {
    icon: AddIcon24,
    circle: true
  },
  ...TemplateWithoutSlot
};

export const IconQuaternary: Story = {
  args: {
    text: true,
    icon: AddIcon24,
    circle: true
  },
  ...TemplateWithoutSlot
};
