import { render, screen } from '@testing-library/react';
import App from './App';

// App owns its BrowserRouter, so tests pick the route via the URL. Pages are
// lazy-loaded, hence the async findBy* queries.
const renderAt = (path) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

test('renders the landing page', async () => {
  renderAt('/');
  expect(await screen.findByText(/learning journey/i)).toBeInTheDocument();
});

test('renders a tutor profile from its URL', async () => {
  renderAt('/instructors/john');
  expect(await screen.findByRole('heading', { name: 'John' })).toBeInTheDocument();
  expect(await screen.findByText(/seasoned English teacher/i)).toBeInTheDocument();
});

test('shows a not-found message for an unknown tutor', async () => {
  renderAt('/instructors/nobody');
  expect(await screen.findByText(/tutor not found/i)).toBeInTheDocument();
});
