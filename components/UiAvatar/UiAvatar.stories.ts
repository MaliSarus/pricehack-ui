import type { Meta, StoryObj } from '@storybook/vue3';
import UiAvatar from './ui.vue';
import AvatarImage from '@/assets/img/ui/avatar.png';
type StoryProps = typeof UiAvatar;

const meta = {
  title: 'UI/Аватар',
  component: UiAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: [undefined, 'xs', 's', 'm', 'l', 'xl', 'xxl']
    }
  },
  args: {
    size: undefined,
    userName: 'Александр Габелко',
    image: AvatarImage
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { UiAvatar },
    setup: () => ({ args }),
    template: /* HTML */ `<UiAvatar v-bind="args" />`
  })
};

export const Default: Story = {
  ...Template
};
