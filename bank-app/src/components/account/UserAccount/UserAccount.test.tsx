import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './UserAccount.stories';

const { Default, CreditLoad, GoalSavingAccount, WithFlags } = composeStories(stories);

describe('UserAccount', () => {
  it('renders the default account', () => {
    render(<Default />);
    expect(screen.getByText('Saving Account')).toBeInTheDocument();
    expect(screen.getByText('฿62,000.00')).toBeInTheDocument();
    expect(screen.getByText('Smart account 568-2-81740-9')).toBeInTheDocument();
    expect(screen.getByText('Powered by TestLab')).toBeInTheDocument();
  });

  it('renders the credit loan account', () => {
    render(<CreditLoad />);
    expect(screen.getByText('Credit Loan')).toBeInTheDocument();
    expect(screen.getByText('฿62,000.00')).toBeInTheDocument();
    expect(screen.getByText('Credit Loan 568-2-81740-9')).toBeInTheDocument();
  });

  it('renders the goal saving account with progress', () => {
    render(<GoalSavingAccount />);
    expect(screen.getByText('Travel New York')).toBeInTheDocument();
    expect(screen.getByText('Goal driven savings 568-2-81740-9')).toBeInTheDocument();
    expect(screen.getByText('Powered by TestLab')).toBeInTheDocument();
    expect(screen.getByTestId('acc-percent')).toHaveTextContent('24%');
  });

  it('renders account flags', () => {
    render(<WithFlags />);
    expect(screen.getByText('Disbursement')).toBeInTheDocument();
    expect(screen.getByText('Overdue')).toBeInTheDocument();
  });
});
