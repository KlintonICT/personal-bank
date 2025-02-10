import { Meta, StoryObj } from '@storybook/react';

import { LinkIcon } from '.';

const meta = {
  title: 'Components/common/LinkIcon',
  component: LinkIcon,
  args: {
    link: '#',
    text: 'Click me',
  },
  argTypes: {
    name: {
      control: 'select',
      options: ['withdrawal', 'qr', 'addmoney'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'withdrawal',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
