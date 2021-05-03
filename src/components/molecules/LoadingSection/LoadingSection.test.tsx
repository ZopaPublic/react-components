import React from 'react';
import { render } from '@testing-library/react';
import LoadingSection from './LoadingSection';

describe('<LoadingSection />', () => {
  it('renders the component as expected', () => {
    const { getByText } = render(
      <LoadingSection>
        <LoadingSection.PrimaryText> Primary Text</LoadingSection.PrimaryText>
        <LoadingSection.SecondaryText>Secondary Text</LoadingSection.SecondaryText>
      </LoadingSection>,
    );
    expect(getByText(/primary text/i)).toBeInTheDocument();
    expect(getByText(/secondary text/i)).toBeInTheDocument();
  });
});
