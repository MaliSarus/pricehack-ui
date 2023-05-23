import type { Meta, StoryObj } from '@storybook/vue3';
import UiDropdownAvatar from './ui.vue';
import AvatarImage from '@/assets/img/ui/avatar.png';
import { ElDropdownItem } from 'element-plus';
type StoryProps = typeof UiDropdownAvatar;

const meta = {
  title: 'UI/Аватар с выпадающим меню',
  component: UiDropdownAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [undefined, 'xs', 'm', 'l', 'xl']
    }
  },
  args: {
    user: {
      name: 'Габелко Александр',
      subtext: 'пользователь',
      image: AvatarImage
    },
    size: undefined
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { UiDropdownAvatar, ElDropdownItem },
    setup: () => ({ args }),
    template: /* HTML */ `<UiDropdownAvatar v-bind="args">
      <el-dropdown-item>Action 3</el-dropdown-item>
      <el-dropdown-item>Action 4</el-dropdown-item>
      <el-dropdown-item>Action 5</el-dropdown-item>
    </UiDropdownAvatar>`
  })
};

export const Default: Story = {
  name: 'По умолчанию',
  ...Template
};
export const DefaultNoSubtext: Story = {
  name: 'По умолчанию (Без подписи)',
  args: {
    user: {
      name: 'Габелко Александр',
      image: AvatarImage
    },
    size: undefined
  },
  ...Template
};
export const Xs: Story = {
  args: {
    user: {
      name: 'Габелко Александр',
      subtext: 'пользователь',
      image: AvatarImage
    },
    size: 'xs'
  },
  ...Template
};
export const XsNoSubtext: Story = {
  name: 'Xs (Без подписи)',
  args: {
    user: {
      name: 'Габелко Александр',
      image: AvatarImage
    },
    size: 'xs'
  },
  ...Template
};
export const L: Story = {
  args: {
    user: {
      name: 'Габелко Александр',
      subtext: 'пользователь',
      image: AvatarImage
    },
    size: 'l'
  },
  ...Template
};
export const LNoSubtext: Story = {
  name: 'L (Без подписи)',
  args: {
    user: {
      name: 'Габелко Александр',
      image: AvatarImage
    },
    size: 'l'
  },
  ...Template
};
export const Xl: Story = {
  args: {
    user: {
      name: 'Габелко Александр',
      subtext: 'пользователь',
      image: AvatarImage
    },
    size: 'xl'
  },
  ...Template
};
export const XlNoSubtext: Story = {
  name: 'Xl (Без подписи)',
  args: {
    user: {
      name: 'Габелко Александр',
      image: AvatarImage
    },
    size: 'xl'
  },
  ...Template
};
