import { UserProfiles } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const profiles = [
  {
    name: 'Emily',
    image: 'https://dummyimage.com/54x54/999/fff',
    isBank: false,
  },
  {
    name: 'Jone Kiersten',
    image: 'https://dummyimage.com/54x54/999/fff',
    isBank: false,
  },
  {
    name: 'MarkYu Gonzales',
    image: 'https://dummyimage.com/54x54/999/fff',
    isBank: false,
  },
];

const meta = {
  title: 'Components/UserProfiles',
  component: UserProfiles,
  tags: ['autodocs'],
} satisfies Meta<typeof UserProfiles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserProfile: Story = {
  args: {
    profiles: [profiles[0]],
  },
};

export const UserProfileList: Story = {
  args: {
    profiles,
  },
};
