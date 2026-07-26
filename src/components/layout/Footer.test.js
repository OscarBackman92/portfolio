import { render, screen } from '@testing-library/react';
import Footer from './Footer';

jest.mock(
  'react-router-dom',
  () => ({
    Link: ({ children, to, ...rest }) => (
      <a href={to} {...rest}>
        {children}
      </a>
    ),
  }),
  { virtual: true }
);

test('renders brand and social links', () => {
  render(<Footer />);
  expect(screen.getByText('Business Operations · Full Stack')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
});
