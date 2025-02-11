import { composeStories } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import * as singleCardStories from './UserCard.stories';
import * as stories from './UserCards.stories';

const { LessThanOrEqual4, MoreThan4 } = composeStories(stories);
const { Default } = composeStories(singleCardStories);

describe('UserCards component (List)', () => {
  it('renders all necessary elements', () => {
    render(<LessThanOrEqual4 />);

    expect(screen.getByText('My Salary')).toBeInTheDocument();
    expect(screen.getByText('For My Dream')).toBeInTheDocument();
    expect(screen.getByText('My Debit card')).toBeInTheDocument();
    expect(screen.getByText('My Debit card 2')).toBeInTheDocument();
    expect(screen.queryByText('My Debit card 3')).not.toBeInTheDocument();
    expect(screen.queryByText('See all')).not.toBeInTheDocument();
  });

  it("shows 'See all' button when more than 4 cards", () => {
    render(<MoreThan4 />);
    expect(screen.getByText('See all')).toBeInTheDocument();
  });
});

describe('UserCard component (Single)', () => {
  it('renders all necessary elements in Single Card', () => {
    render(<Default />);

    expect(screen.getByText('My Salary')).toBeInTheDocument();
    expect(screen.getByText('In Progress')).toBeInTheDocument();
    expect(screen.getByText('TestLab')).toBeInTheDocument();
  });
});
