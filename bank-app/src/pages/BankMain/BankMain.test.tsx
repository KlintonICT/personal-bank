import { render, screen } from '@testing-library/react';

import BankMain from '.';

describe('BankMain Component', () => {
  const renderComponent = () => render(<BankMain />);

  it('renders all necessary elements', () => {
    renderComponent();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });
});
