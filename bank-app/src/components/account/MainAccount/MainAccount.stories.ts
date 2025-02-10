import { Meta, StoryObj } from '@storybook/react';

import { MainAccount as MainAccountComponent } from './';

import { UserAccount, UserAccountType } from '@/types';

const data: UserAccount = {
  type: UserAccountType.SAVING_ACCOUNT,
  title: 'Saving Account',
  amount: 62000.0,
  currency: 'THB',
  accountNumber: '568-2-81740-9',
  issuer: 'TestLab',
  color: '#24c875',
  isMainAccount: true,
};

const meta = {
  title: 'components/account',
  component: MainAccountComponent,
  args: {
    data,
    wrapperClassName: '',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MainAccountComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainAccount: Story = {};
