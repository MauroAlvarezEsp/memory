import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ScoreType } from '../types/score.type';
import { ScoreBar } from '../components/score-bar.component';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('ScoreBar', () => {
  const mockScore: ScoreType = {
    hits: 10,
    errors: 5,
  };

  it('renders the hits and errors correctly', () => {
    render(<ScoreBar score={mockScore} />);

    expect(screen.getByText('label.hits 10')).toBeInTheDocument();
    expect(screen.getByText('label.errors 5')).toBeInTheDocument();
  });
});
