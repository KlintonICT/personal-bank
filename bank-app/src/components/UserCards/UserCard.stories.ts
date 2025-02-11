import { Meta, StoryObj } from '@storybook/react';

import { UserCard } from '.';

import { TUserCard } from '@/types';

const data = {
  name: 'My Salary',
  status: 'in-progress',
  issuer: 'TestLab',
  color: '#00a1e2',
} as TUserCard;

const meta = {
  title: 'Components/UserCards/Single',
  component: UserCard,
  tags: ['autodocs'],
  args: { ...data },
} satisfies Meta<typeof UserCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithWhiteBackground: Story = {
  args: {
    ...data,
    color: '#ffffff',
    borderColor: '#f2f3f7',
    number: '9440 7841 2222 3115',
  },
};
