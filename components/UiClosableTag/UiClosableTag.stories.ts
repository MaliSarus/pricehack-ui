import type { Meta, StoryObj } from '@storybook/vue3';
import UiClosableTag from './ui.vue';
import { ElIcon } from 'element-plus';
type StoryProps = typeof UiClosableTag;

const meta = {
  title: 'UI/Закрывающийся тег',
  component: UiClosableTag,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [undefined, 'xs', 's']
    },
    type: {
      control: 'inline-radio',
      options: [undefined, 'plain']
    }
  },
  args: {
    size: undefined,
    notClosed: false,
    type: undefined
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { UiClosableTag, ElIcon },
    setup: () => {
      return {
        args
      };
    },
    template: /* HTML */ `<UiClosableTag v-bind="args">
      Название тега
    </UiClosableTag>`
  })
};
const CloseTemplate: Story = {
  render: (args) => ({
    components: { UiClosableTag, ElIcon },
    setup: () => {
      return {
        args
      };
    },
    template: /* HTML */ `<UiClosableTag v-bind="args">
      <span class="color_text-primary" style="font-weight:500"
        >Сбросить все</span
      >
    </UiClosableTag>`
  })
};

export const Default: Story = {
  ...Template
};
export const DefaultXs: Story = {
  name: 'Default(Xs)',
  args: {
    size: 'xs'
  },
  ...Template
};
export const DefaultS: Story = {
  name: 'Default(S)',
  args: {
    size: 's'
  },
  ...Template
};
export const DefaultNotClosed: Story = {
  name: 'Default(NotClosed)',
  args: {
    notClosed: true
  },
  ...Template
};
export const Plain: Story = {
  args: {
    type: 'plain'
  },
  ...Template
};
export const PlainXs: Story = {
  name: 'Plain(Xs)',
  args: {
    size: 'xs',
    type: 'plain'
  },
  ...Template
};
export const PlainS: Story = {
  name: 'Plain(S)',
  args: {
    size: 's',
    type: 'plain'
  },
  ...Template
};
export const PlainNotClosed: Story = {
  name: 'Plain(NotClosed)',
  args: {
    notClosed: true,
    type: 'plain'
  },
  ...Template
};
export const Clear: Story = {
  args: {
    type: 'plain',
    notClosed: true
  },
  ...CloseTemplate
};
