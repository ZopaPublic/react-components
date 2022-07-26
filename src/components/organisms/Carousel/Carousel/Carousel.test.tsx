import { fireEvent, render, screen } from '@testing-library/react';
import axe from '../../../../../axe-helper';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { Carousel } from '..';
import { SlideProps } from '../CarouselSlide/CarouselSlide';
import { useCarouselContext } from '../context/CarouselContext';

const TestSlide = ({ index }: SlideProps) => {
  const { activeSlide } = useCarouselContext();
  return <div data-automation={String(index)}>{activeSlide === index ? 'ACTIVE' : 'INACTIVE'}</div>;
};

describe('<Carousel />', () => {
  it('updates active slide when clicking next arrow', () => {
    const { getByTestId } = render(
      <Carousel>
        <TestSlide />
        <TestSlide />
        <TestSlide />
      </Carousel>,
    );
    const nextArrow = screen.getByTitle('next');

    expect(getByTestId('0').innerHTML).toEqual('INACTIVE');
    expect(getByTestId('1').innerHTML).toEqual('ACTIVE');
    expect(getByTestId('2').innerHTML).toEqual('INACTIVE');

    act(() => {
      fireEvent.click(nextArrow);
    });

    expect(getByTestId('0').innerHTML).toEqual('INACTIVE');
    expect(getByTestId('1').innerHTML).toEqual('INACTIVE');
    expect(getByTestId('2').innerHTML).toEqual('ACTIVE');

    act(() => {
      fireEvent.click(nextArrow);
    });

    expect(getByTestId('0').innerHTML).toEqual('ACTIVE');
    expect(getByTestId('1').innerHTML).toEqual('INACTIVE');
    expect(getByTestId('2').innerHTML).toEqual('INACTIVE');

    act(() => {
      fireEvent.click(nextArrow);
    });
  });

  it('updates active slide when clicking previous arrow', () => {
    const { getByTestId } = render(
      <Carousel>
        <TestSlide />
        <TestSlide />
        <TestSlide />
      </Carousel>,
    );
    const previousArrow = screen.getByTitle('previous');

    expect(getByTestId('0').innerHTML).toEqual('INACTIVE');
    expect(getByTestId('1').innerHTML).toEqual('ACTIVE');
    expect(getByTestId('2').innerHTML).toEqual('INACTIVE');

    act(() => {
      fireEvent.click(previousArrow);
    });

    expect(getByTestId('0').innerHTML).toEqual('ACTIVE');
    expect(getByTestId('1').innerHTML).toEqual('INACTIVE');
    expect(getByTestId('2').innerHTML).toEqual('INACTIVE');

    act(() => {
      fireEvent.click(previousArrow);
    });

    expect(getByTestId('0').innerHTML).toEqual('INACTIVE');
    expect(getByTestId('1').innerHTML).toEqual('INACTIVE');
    expect(getByTestId('2').innerHTML).toEqual('ACTIVE');
  });

  it('renders with no a11y violations', async () => {
    const { container } = render(
      <Carousel>
        <TestSlide />
        <TestSlide />
        <TestSlide />
      </Carousel>,
    );
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });
});
