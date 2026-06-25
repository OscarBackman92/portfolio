import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders system status and social links', () => {
  render(<Footer />);
  expect(screen.getByText(/SYSTEM OPERATIONAL/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /GitHub/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /LinkedIn/i })).toBeInTheDocument();
});
