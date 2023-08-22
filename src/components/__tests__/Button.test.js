import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Buttons } from '../Buttons.js';

test('clicking button navigates to web address', () => {
  const handleButtonClickMock = jest.fn();
  render(<Buttons handleButtonClick={handleButtonClickMock} />);

  const youtubeButton = screen.getByText('YouTube');
  const redditButton = screen.getByText('Reddit');
  const bloombergButton = screen.getByText('Bloomberg');
  const wikipediaButton = screen.getByText('Wikipedia');
  const yahooButton = screen.getByText('Yahoo');
  const airbnbButton = screen.getByText('Airbnb');
  const buzzfeedButton = screen.getByText('Buzzfeed');
  const linkedInButton = screen.getByText('LinkedIn');

  fireEvent.click(youtubeButton);
  fireEvent.click(redditButton);
  fireEvent.click(bloombergButton);
  fireEvent.click(wikipediaButton);
  fireEvent.click(yahooButton);
  fireEvent.click(airbnbButton);
  fireEvent.click(buzzfeedButton);
  fireEvent.click(linkedInButton);

  expect(handleButtonClickMock).toHaveBeenCalledTimes(8);
  expect(handleButtonClickMock).toHaveBeenCalledWith('http://www.youtube.com');
  expect(handleButtonClickMock).toHaveBeenCalledWith('http://www.reddit.com');
  expect(handleButtonClickMock).toHaveBeenCalledWith('http://www.bloomberg.com');
  expect(handleButtonClickMock).toHaveBeenCalledWith('http://en.wikipedia.org/wiki/Main_Page');
  expect(handleButtonClickMock).toHaveBeenCalledWith('http://www.yahoo.com');
  expect(handleButtonClickMock).toHaveBeenCalledWith('http://www.airbnb.com');
  expect(handleButtonClickMock).toHaveBeenCalledWith('http://www.buzzfeed.com');
  expect(handleButtonClickMock).toHaveBeenCalledWith('http://www.linkedin.com');
});

