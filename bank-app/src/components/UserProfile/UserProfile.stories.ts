import { UserProfile } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const data = {
  name: 'Emily',
  image: 'https://dummyimage.com/54x54/999/fff',
  isBank: false,
};

const meta = {
  title: 'Components/UserProfile',
  component: UserProfile,
  tags: ['autodocs'],
  args: { ...data },
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
