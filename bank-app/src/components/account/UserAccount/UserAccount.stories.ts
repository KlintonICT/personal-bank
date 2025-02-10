import { Meta, StoryObj } from '@storybook/react';

import { UserAccount as UserAccountComponent } from '.';

import { UserAccountType } from '@/constants';
import { TUserAccount } from '@/types';

const data: TUserAccount = {
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
  title: 'components/account/UserAccount',
  component: UserAccountComponent,
  args: { ...data },
  tags: ['autodocs'],
} satisfies Meta<typeof UserAccountComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CreditLoad = {
  args: {
    ...data,
    type: UserAccountType.CREDIT_LOAN,
    title: 'Credit Loan',
    color: '#9366ed',
  },
};

export const GoalSavingAccount = {
  args: {
    ...data,
    type: UserAccountType.GOAL_SAVING_ACCOUNT,
    title: 'Travel New York',
    color: '#00a1e2',
    progress: 24,
  },
};

export const WithFlags = {
  args: {
    ...data,
    type: UserAccountType.CREDIT_LOAN,
    title: 'Need to repay',
    flags: ['Disbursement', 'Overdue'],
    color: '#15bbc7',
  },
};
