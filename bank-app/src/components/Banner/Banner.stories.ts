import { Meta, StoryObj } from '@storybook/react';

import { Banner } from '.';

const data = {
  title: 'Want some money?',
  description: "You can start apply 'Clare'",
  image: 'https://dummyimage.com/54x54/999/fff',
};

const meta = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data,
  },
};
