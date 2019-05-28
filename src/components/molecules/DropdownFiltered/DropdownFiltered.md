![BETA](https://img.shields.io/badge/BETA-0.0.4-yellow.svg)

Styled Dropdown component with typing filter.

This is a wrapper of 4 different components using [paypal/downshift](https://github.com/paypal/downshift):

- SizedContainer: Div container with size prop.
- InputText: Native input text.
- InputLabel: Label text. Only rendered if the prop `label` is filled in.
- SizedContainer: Error message. Only rendered if the prop `errorMessage` is filled in.

### TODO:

- Improve code readability
- Add tests for filter

### Features:

- Default value (see examples)
- Close options on click over
- Filter text: any case and any substring
- Extendable: all props from [paypal/downshift](https://github.com/paypal/downshift) can also
  be applied.

### How it works

Under the hood:

- It uses [paypal/downshift](https://github.com/paypal/downshift).
- The filtered text is always display in an input text.
- The selected item is passed to the onChange function.

Basic example:

```jsx
import { DropdownFiltered } from '@zopauk/react-components';

const items = [{ value: 'apple' }, { value: 'pear' }, { value: 'orange' }, { value: 'grape' }, { value: 'banana' }];

<DropdownFiltered
  label="Fruits"
  items={items}
  name="fruit"
  onChange={selection => selection && console.log(`You selected ${selection.value}`)}
  inputProps={{
    placeholder: 'Select a fruit...',
    name: 'fruits1',
  }}
/>;
```

#### With default value

```jsx
import { DropdownFiltered } from '@zopauk/react-components';

const items = [{ value: 'apple' }, { value: 'pear' }, { value: 'orange' }, { value: 'grape' }, { value: 'banana' }];

<DropdownFiltered
  label="Fruits"
  items={items}
  name="fruit-default"
  defaultSelectedItem={{ value: 'orange' }}
  onChange={selection => selection && console.log(`You selected ${selection.value}`)}
  inputProps={{
    placeholder: 'Select a fruit...',
    name: 'fruits2',
  }}
/>;
```

#### Long list and a optionsListMaxHeight

```jsx
import { DropdownFiltered } from '@zopauk/react-components';

const items = [
  { alpha2: 'GB', value: 'British' },
  { alpha2: 'AO', value: 'Angolan' },
  { alpha2: 'AI', value: 'Anguillan' },
  { alpha2: 'AG', value: 'Antiguan/Barbudan' },
  { alpha2: 'AR', value: 'Argentine' },
  { alpha2: 'AM', value: 'Armenian' },
  { alpha2: 'AW', value: 'Aruban/Dutch' },
  { alpha2: 'TD', value: 'Chadian' },
  { alpha2: 'GG', value: 'Channel Islander Guernsey' },
  { alpha2: 'CL', value: 'Chilean' },
  { alpha2: 'CD', value: 'Congolese Dem Rep Of Congo' },
  { alpha2: 'CG', value: 'Congolese Rep Of Congo' },
  { alpha2: 'CK', value: 'Cook Islander' },
  { alpha2: 'CZ', value: 'Czech' },
  { alpha2: 'DK', value: 'Danish' },
  { alpha2: 'DJ', value: 'Djiboutian' },
  { alpha2: 'DM', value: 'Dominican Dominica' },
  { alpha2: 'KN', value: 'Kittitian/Nevisian' },
  { alpha2: 'KP', value: 'Korean Dem People Rep' },
  { alpha2: 'KR', value: 'Korean Republic' },
  { alpha2: 'KW', value: 'Kuwaiti' },
  { alpha2: 'KG', value: 'Kyrgyzstani' },
  { alpha2: 'IT', value: 'Italian' },
  { alpha2: 'LA', value: 'Lao/Laotian' },
  { alpha2: 'MH', value: 'Marshallese' },
  { alpha2: 'MQ', value: 'Martinican' },
  { alpha2: 'MR', value: 'Mauritanian' },
  { alpha2: 'MU', value: 'Mauritian' },
  { alpha2: 'MX', value: 'Mexican' },
  { alpha2: 'ES', value: 'Spanish' },
  { alpha2: 'SZ', value: 'Swazi' },
  { alpha2: 'SE', value: 'Swedish' },
  { alpha2: 'CH', value: 'Swiss' },
  { alpha2: 'TJ', value: 'Tajikistani' },
  { alpha2: 'TZ', value: 'Tanzanian' },
  { alpha2: 'TH', value: 'Thai' },
  { alpha2: 'TL', value: 'Timorese' },
  { alpha2: 'TG', value: 'Togolese' },
  { alpha2: 'TK', value: 'Tokelauan' },
  { alpha2: 'TO', value: 'Tongan' },
  { alpha2: 'TN', value: 'Tunisian' },
  { alpha2: 'TR', value: 'Turkish' },
  { alpha2: 'TM', value: 'Turkmen' },
  { alpha2: 'TV', value: 'Tuvaluan' },
  { alpha2: 'UG', value: 'Ugandan' },
  { alpha2: 'UA', value: 'Ukrainian' },
  { alpha2: 'UY', value: 'Uruguayan' },
  { alpha2: 'UZ', value: 'Uzbekistani' },
  { alpha2: 'VE', value: 'Venezuelan' },
  { alpha2: 'VN', value: 'Vietnamese' },
  { alpha2: 'ZW', value: 'Zimbabwean' },
];

<DropdownFiltered
  label="Nationality"
  items={items}
  name="nationality-default"
  onChange={selection => selection && console.log(`You selected ${selection.alpha2}`)}
  optionsListMaxHeight="250px"
  inputProps={{
    placeholder: 'Select a nationality...',
    name: 'nationality1',
  }}
/>;
```

#### With errorMessage

```jsx
import { DropdownFiltered } from '@zopauk/react-components';

const items = [{ value: 'apple' }, { value: 'pear' }, { value: 'orange' }, { value: 'grape' }, { value: 'banana' }];

<DropdownFiltered
  label="Fruits"
  items={items}
  name="fruit-error"
  onChange={selection => selection && console.log(`You selected ${selection.value}`)}
  errorMessage="Ops! There is an error!"
  inputProps={{
    placeholder: 'Select a fruit...',
    name: 'fruits3',
  }}
/>;
```

#### isValid

```jsx
import { DropdownFiltered } from '@zopauk/react-components';

const items = [{ value: 'apple' }, { value: 'pear' }, { value: 'orange' }, { value: 'grape' }, { value: 'banana' }];

<DropdownFiltered
  label="Fruits"
  items={items}
  name="fruit-isValid"
  onChange={selection => selection && console.log(`You selected ${selection.value}`)}
  inputProps={{
    placeholder: 'Select a fruit...',
    name: 'fruits4',
  }}
  isValid={true}
/>;
```

#### disabled

```jsx
import { DropdownFiltered } from '@zopauk/react-components';

const items = [{ value: 'apple' }, { value: 'pear' }, { value: 'orange' }, { value: 'grape' }, { value: 'banana' }];

<DropdownFiltered
  label="Fruits"
  items={items}
  name="fruit-disabled"
  onChange={selection => selection && console.log(`You selected ${selection.value}`)}
  inputProps={{
    disabled: true,
    placeholder: 'Select a fruit...',
    name: 'fruits5',
  }}
  defaultSelectedItem={{ value: 'orange' }}
/>;
```

#### size is "short"

```jsx
import { DropdownFiltered } from '@zopauk/react-components';

const items = [{ value: 'apple' }, { value: 'pear' }, { value: 'orange' }, { value: 'grape' }, { value: 'banana' }];

<DropdownFiltered
  label="Fruits"
  items={items}
  name="fruit-sized"
  onChange={selection => selection && console.log(`You selected ${selection.value}`)}
  defaultSelectedItem={{ value: 'orange' }}
  inputProps={{
    disabled: true,
    placeholder: 'Select a fruit...',
    name: 'fruits6',
  }}
  size="short"
/>;
```
