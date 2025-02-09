import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as stories from './Banner.stories';

const { Default } = composeStories(stories);

it('renders Banner component', () => {
  render(<Default />);

  expect(screen.getByAltText('Want some money?-banner')).toBeInTheDocument();
  expect(screen.getByText('Want some money?')).toBeInTheDocument();
  expect(screen.getByText("You can start apply 'Clare'")).toBeInTheDocument();
});
