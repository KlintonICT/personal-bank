import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './UserProfile.stories';

const { Default } = composeStories(stories);

it('renders UserProfile component', () => {
  render(<Default />);
  expect(screen.getByText('Emily')).toBeInTheDocument();
});
