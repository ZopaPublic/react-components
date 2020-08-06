import React from 'react';
import { render } from '@testing-library/react';
import { FormSection } from '..';

describe('<FormSection />', () => {
  it('renders the form section', () => {
    const container = render(
      <FormSection title="Form Section" subtitle="Subtitle">
        <div>Child 1</div>
        <div>Child 2</div>
      </FormSection>,
    );
    expect(container).toMatchSnapshot();
  });
});
