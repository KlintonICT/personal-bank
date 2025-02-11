import { Meta, StoryObj } from '@storybook/react';

import { UserCards } from '.';

import { TUserCard } from '@/types';

const cards = [
  {
    name: 'My Salary',
    status: 'in-progress',
    issuer: 'TestLab',
    color: '#00a1e2',
  },
  {
    name: 'For My Dream',
    status: 'in-progress',
    issuer: 'TestLab',
    color: '#ff8300',
  },
  {
    name: 'My Debit card',
    status: 'Active',
    issuer: 'TestLab',
    color: '#ffffff',
    borderColor: '#f2f3f7',
    number: '9440 7841 2222 3115',
  },
  {
    name: 'My Debit card 2',
    status: 'Active',
    issuer: 'TestLab',
    color: '#91c9ee',
    number: '9440 7841 2222 2345',
  },
  {
    name: 'My Debit card 3',
    status: 'Active',
    issuer: 'TestLab',
    color: '#9100c9',
    number: '9440 7841 2222 2345',
  },
] as TUserCard[];

const meta = {
  title: 'Components/UserCards/List',
  component: UserCards,
  tags: ['autodocs'],
} satisfies Meta<typeof UserCards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LessThanOrEqual4: Story = {
  args: {
    cards: cards.slice(0, 4),
  },
};

export const MoreThan4: Story = {
  args: {
    cards,
  },
};
