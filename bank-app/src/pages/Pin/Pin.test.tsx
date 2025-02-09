import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';

import Pin from '@/pages/Pin';
import { handleLogin } from '@/store/auth/action';

const mockStore = configureStore([]);
const mockNavigate = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}));

describe('Pin Page', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({ auth: { isAuth: false } });
    store.dispatch = jest.fn();
  });

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Pin />
        </MemoryRouter>
      </Provider>
    );

  it('renders all necessary elements', () => {
    renderComponent();
    expect(screen.getByText('Interview User')).toBeInTheDocument();
    expect(screen.getByTestId('pin-dots')).toBeInTheDocument();
    expect(screen.getByText('Login with ID / Password')).toBeInTheDocument();
    expect(screen.getByText('Powered by TestLab')).toBeInTheDocument();
    for (let i = 0; i <= 9; i++) {
      expect(screen.getByTestId(`key-${i}`)).toBeInTheDocument();
    }
    expect(screen.getByTestId('key-X')).toBeInTheDocument();
  });

  it('updates pin dots when numbers are clicked', () => {
    renderComponent();
    fireEvent.click(screen.getByText('1'));
    const dots = screen.getByTestId('pin-dots').getElementsByClassName('pin__dot');
    expect(dots[0].classList.contains('is-filled')).toBeTruthy();
  });

  it('deletes pin number when delete button is clicked', () => {
    renderComponent();

    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('X'));

    const dots = screen.getByTestId('pin-dots').getElementsByClassName('pin__dot');
    expect(dots[0].classList.contains('is-filled')).toBeTruthy();
    expect(dots[1].classList.contains('is-filled')).toBeFalsy();
  });

  it('calls handleLogin when 6 digits are entered', () => {
    renderComponent();
    const keys = ['1', '2', '3', '4', '5', '6'];
    keys.forEach((num) => fireEvent.click(screen.getByText(num)));
    expect(store.dispatch).toHaveBeenCalledWith(handleLogin());
  });

  it('navigates to home when isAuth becomes true', () => {
    store = mockStore({
      auth: { isAuth: true },
    });

    renderComponent();
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
