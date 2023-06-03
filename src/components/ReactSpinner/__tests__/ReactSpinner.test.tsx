import { render, screen } from '@testing-library/react';
import ReactSpinner from '..';


test('renders learn react link', () => {
  render(<ReactSpinner/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
