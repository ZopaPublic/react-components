import React, { ChangeEvent, useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InputRange from './InputRange';
import { axe } from 'jest-axe';

describe('<InputRange />', () => {
  it('renders and updates as expected', async () => {
    const ControlledInputRange = () => {
      const [value, setValue] = useState(75);
      const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setValue(Number(event.target.value));

      return <InputRange value={value} onChange={onChangeHandler} />;
    };

    render(<ControlledInputRange />);

    const input = (await screen.findByRole('slider')) as HTMLInputElement;

    expect(input.value).toEqual('75');

    fireEvent.change(input, { target: { value: '25' } });

    expect(input.value).toEqual('25');
  });

  it('renders the component with no a11y violations', async () => {
    const { container } = render(<InputRange aria-label="slider" defaultValue={51} />);
    const results = await axe(container.innerHTML);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });
});
