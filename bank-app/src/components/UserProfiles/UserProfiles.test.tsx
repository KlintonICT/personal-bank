import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './UserProfile.stories';

const { UserProfileList } = composeStories(stories);

it('renders UserProfiles from Storybook story', () => {
  render(<UserProfileList />);

  expect(screen.getByText('Emily')).toBeInTheDocument();
  expect(screen.getByText('Jone Kiersten')).toBeInTheDocument();
  expect(screen.getByText('MarkYu Gonzales')).toBeInTheDocument();
  expect(screen.getAllByRole('img')).toHaveLength(3);
});
