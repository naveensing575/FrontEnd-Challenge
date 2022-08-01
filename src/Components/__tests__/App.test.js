import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders frontend challenge app', () => {
  render(<App />);
  const linkElement = screen.queryByTestId('app');
  expect(linkElement).toBeDefined();
});
