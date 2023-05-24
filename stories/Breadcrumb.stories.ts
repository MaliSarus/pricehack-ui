import type { Meta, StoryObj } from '@storybook/vue3';
import {
  ElBreadcrumb,
  BreadcrumbProps,
  ElBreadcrumbItem,
  ElIcon
} from 'element-plus';
import { LongArrowRightIcon12, HomeIcon12 } from '@/assets/icons';
type StoryProps = BreadcrumbProps;

const meta = {
  title: 'UI/Хлебные крошки',
  component: ElBreadcrumb,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    separatorIcon: LongArrowRightIcon12
  }
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

const Template: Story = {
  render: (args) => ({
    components: { ElBreadcrumb, ElBreadcrumbItem },
    setup: () => ({ args }),
    template: /* HTML */ `<el-breadcrumb v-bind="args">
      <el-breadcrumb-item :to="{ path: '/' }">Item 1</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">Item 2</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">Item 3</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">Item 4</el-breadcrumb-item>
    </el-breadcrumb>`
  })
};
const TemplateWithIcon: Story = {
  render: (args) => ({
    components: { ElBreadcrumb, ElBreadcrumbItem, ElIcon, HomeIcon12 },
    setup: () => ({ args }),
    template: /* HTML */ `<el-breadcrumb v-bind="args">
      <el-breadcrumb-item :to="{ path: '/' }">
        <el-icon>
          <HomeIcon12 />
        </el-icon>
        Item 1
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">Item 2</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">Item 3</el-breadcrumb-item>
      <el-breadcrumb-item>Item 4</el-breadcrumb-item>
    </el-breadcrumb>`
  })
};

export const Default: Story = {
  name: 'По умолчанию',
  ...Template
};
export const WithIcon: Story = {
  name: 'С иконкой у элемента',
  ...TemplateWithIcon
};
