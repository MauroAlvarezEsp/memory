import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ImageResponseMapped } from "../types/ImageResponse.type";
import { flippedStatus, guessedStatus } from "../../../commons/constants/general.constans";
import { CardsContext } from "../contexts/CardsContext";
import FlippingCard from '../components/flipping-card.component';

const mockImage: ImageResponseMapped = {
  uuid: '123',
  url: 'https://example.com/image.jpg',
  status: 'unflipped',
  index: 0
};

const mockFlip = jest.fn();

const renderComponent = (image: ImageResponseMapped, cards: Array<ImageResponseMapped>) => {
  return render(
    <CardsContext.Provider value={cards}>
      <FlippingCard image={image} flip={mockFlip} />
    </CardsContext.Provider>
  );
};

describe('FlippingCard', () => {
  it('renders the cardNotFlipped component when status is not flipped or guessed', () => {
    renderComponent(mockImage, [mockImage]);

    const questionIcon = screen.getByText((content, element) => element?.tagName.toLowerCase() === 'svg');
    expect(questionIcon).toBeInTheDocument();
  });

  it('renders the cardFlipped component when status is flipped', async () => {
    const flippedImage = { ...mockImage, status: flippedStatus };
    renderComponent(flippedImage, [flippedImage]);

    const cardsFlipped = screen.queryAllByRole("card-flipped");
    expect(cardsFlipped[0].style.background).toBe(`url(${flippedImage.url}) no-repeat center`);
  });

  it('calls the flip function when cardNotFlipped is clicked and less than 2 cards are flipped', () => {
    renderComponent(mockImage, [mockImage]);

    const card = screen.getByRole('card-not-flipped');
    fireEvent.click(card);

    expect(mockFlip).toHaveBeenCalledWith(mockImage.index);
  });

  it('does not call the flip function when cardNotFlipped is clicked and 2 cards are flipped', () => {
    const flippedCards = [{ ...mockImage, status: flippedStatus }, { ...mockImage, status: flippedStatus }];
    renderComponent(mockImage, flippedCards);

    const card = screen.getByRole('card-not-flipped');
    fireEvent.click(card);

    expect(mockFlip).not.toHaveBeenCalled();
  });
});
