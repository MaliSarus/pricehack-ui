import type { Meta, StoryObj } from '@storybook/vue3';
import UiTag from './ui.vue';
import { FunctionalComponent, SVGAttributes } from 'vue';
import { ElIcon, TagProps } from 'element-plus';
import { FireIcon16 } from '@/assets/icons';
type StoryProps = typeof UiTag &
  TagProps & {
    rightIcon: FunctionalComponent<SVGAttributes>;
    icon: FunctionalComponent<SVGAttributes>;
  };

const meta = {
  title: 'UI/Теги',
  component: UiTag,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      controls: 'select',
      options: [undefined, FireIcon16]
    },
    rightIcon: {
      controls: 'select',
      options: [undefined, FireIcon16]
    },
    type: {
      control: 'inline-radio',
      options: [undefined, 'success', 'info', 'warning', 'danger', 'error']
    },
    effect: {
      control: 'inline-radio',
      options: ['light', 'plain']
    }
  },
  args: {
    icon: undefined,
    rightIcon: undefined,
    type: undefined,
    effect: 'light',
    round: true
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { UiTag, ElIcon },
    setup: () => {
      return {
        args
      };
    },
    template: /* HTML */ `<UiTag v-bind="args">
      <el-icon v-if="args.icon">
        <component :is="args.icon" />
      </el-icon>
      <span>Тег 1</span>
      <el-icon class="el-icon--right" v-if="args.rightIcon">
        <component :is="args.rightIcon" />
      </el-icon>
    </UiTag>`
  })
};
const TemplateWithoutText: Story = {
  render: (args) => ({
    components: { UiTag, ElIcon },
    setup: () => {
      return {
        args
      };
    },
    template: /* HTML */ `<UiTag v-bind="args">
      <el-icon v-if="args.icon">
        <component :is="args.icon" />
      </el-icon>
      <el-icon class="el-icon--right" v-if="args.rightIcon">
        <component :is="args.rightIcon" />
      </el-icon>
    </UiTag>`
  })
};

export const Default: Story = {
  ...Template
};
export const IconLeft: Story = {
  args: {
    icon: FireIcon16
  },
  ...Template
};
export const IconRight: Story = {
  args: {
    rightIcon: FireIcon16
  },
  ...Template
};
export const OnlyIcon: Story = {
  args: {
    icon: FireIcon16
  },
  ...TemplateWithoutText
};
