import { render, screen } from '@testing-library/react';

import { LinkIcon } from '.';

describe('LinkIcon', () => {
  it('renders with correct text and link', () => {
    render(<LinkIcon link='/test' name='withdrawal' text='Withdraw' />);
    const linkElement = screen.getByText('Withdraw');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/test');
  });

  it('applies correct class based on name prop', () => {
    render(<LinkIcon link='#' name='qr' text='Scan QR' />);
    const linkElement = screen.getByText('Scan QR');
    expect(linkElement).toHaveClass('main-acc__link');
    expect(linkElement).toHaveClass('main-acc__link--qr');
  });
});
