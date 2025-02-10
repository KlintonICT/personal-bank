import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './MainAccount.stories';

const { Default } = composeStories(stories);

describe('MainAccount', () => {
  it('renders with correct data', () => {
    render(<Default wrapperClassName='custom-class' />);
    expect(screen.getByText('Saving Account')).toBeInTheDocument();
    expect(screen.getByText('Smart account 568-2-81740-9')).toBeInTheDocument();
    expect(screen.getByText('Powered by TestLab')).toBeInTheDocument();
  });

  it('renders link icons correctly', () => {
    render(<Default wrapperClassName='' />);
    expect(screen.getByText('Withdrawal')).toBeInTheDocument();
    expect(screen.getByText('QR scan')).toBeInTheDocument();
    expect(screen.getByText('Add money')).toBeInTheDocument();
  });
});
