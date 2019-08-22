```js
import { Form, Text } from '@zopauk/react-components';

const initialValues = {
  firstName: '',
  lastName: '',
  nationality: '',
  referal: '',
  terms: false,
  type: '',
};
const onSubmit = values => {
  alert(JSON.stringify(values));
};
const validate = values => {
  return Object.keys(values).reduce(
    (acc, key) => ({
      ...acc,
      ...(values[key] ? {} : { [key]: 'Field is required' }),
    }),
    {},
  );
};

const nationalities = [
  { alpha2: 'GB', value: 'British' },
  { alpha2: 'AO', value: 'Angolan' },
  { alpha2: 'AI', value: 'Anguillan' },
  { alpha2: 'AG', value: 'Antiguan/Barbudan' },
];

const FormExample = () => (
  <Form.Provider initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
    <Form.TextField label="First name" name="firstName" />
    <Form.TextField label="Last name" name="lastName" />
    <Form.DropdownFilteredField
      name="nationality"
      inputProps={{ placeholder: 'Select a nationality...' }}
      items={nationalities}
      label="Nationality"
    />
    <Form.DropdownField label="How did you hear about us?" name="referal">
      <option value="newspaper">Newspaper</option>
      <option value="socialMedia">Social media</option>
    </Form.DropdownField>
    <Text fw="bold">Type</Text>
    <Form.RadioField label="Investor" name="type" value="investor" />
    <Form.RadioField label="Borrower" name="type" value="borrower" />
    <Text fw="bold">Terms and conditions</Text>
    <Form.CheckboxField label="I accept" name="terms" />
    <Form.Button disabled={false}>Submit</Form.Button>
  </Form.Provider>
);

<FormExample />;
```
