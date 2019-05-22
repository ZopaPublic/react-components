import { axe } from 'jest-axe';
import React from 'react';
import { render } from 'react-testing-library';
import Button from './Button';

describe('Primary button', () => {
  it('renders the component with props with no a11y violations', async () => {
    const { container } = render(<Button styling="primary">Primary</Button>);
    expect(container.firstChild).toMatchSnapshot();
    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});

describe('Secondary button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button styling="secondary">Secondary</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Disabled button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button disabled={true}>Disabled</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Link button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button styling="link">Link</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Warning button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button styling="warning">Warning</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Alert button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button styling="alert">Alert</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Large button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button sizing="large">Large</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Small button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button sizing="small">Small</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Compact button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button sizing="compact">Compact</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Right icon button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button rightIcon={<div>My icon</div>}>Right icon</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Left icon button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button leftIcon={<div>My icon</div>}>Left icon</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Full width button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button fullWidth={true}>Full width</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Primary contrast button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button styling="contrastPrimary">Primary contrast</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Secondary contrast button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button styling="contrastSecondary">Secondary contrast</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('Link contrast button', () => {
  it('renders the component with props', () => {
    const { container } = render(<Button styling="contrastLink">Link contrast</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
