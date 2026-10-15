import { render, screen } from '@testing-library/react';
import App from './App';

// App owns its BrowserRouter, so tests pick the route via the URL.
const renderAt = (path) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

test('renders the landing page', () => {
  renderAt('/');
  expect(screen.getByText(/learning journey/i)).toBeInTheDocument();
});

test('renders a tutor profile from its URL', () => {
  renderAt('/instructors/john');
  expect(screen.getByRole('heading', { name: 'John' })).toBeInTheDocument();
  expect(screen.getByText(/seasoned English teacher/i)).toBeInTheDocument();
});

test('shows a not-found message for an unknown tutor', () => {
  renderAt('/instructors/nobody');
  expect(screen.getByText(/tutor not found/i)).toBeInTheDocument();
});
