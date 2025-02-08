import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import BankMain from '.';

const mockStore = configureStore([]);

describe('BankMain Component', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({ user: null });
  });

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <BankMain />
      </Provider>
    );

  it('renders all necessary elements', () => {
    store = mockStore({
      user: {
        userInfo: {
          greetingMessage: 'Have a nice day Clare',
        },
      },
    });

    renderComponent();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Have a nice day Clare')).toBeInTheDocument();
  });
});
