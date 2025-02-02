import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Congrats from '../components/congrats.component';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('Congrats', () => {
  const mockRestart = jest.fn();

  it('renders the translated repeat button and calls restart function on click', () => {
    render(<Congrats restart={mockRestart} />);

    const button = screen.getByText('label.repeat');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(mockRestart).toHaveBeenCalled();
  });
});
