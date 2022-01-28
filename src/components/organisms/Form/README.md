### Summary

The following components are meant to be used with `formik` components and hooks:

- [`<FormTextField>`](#/Components/Organisms/Form/FormTextField)
- [`<FormDropdownField>`](#/Components/Organisms/Form/FormDropdownField)
- [`<FormDropdownFilteredField>`](#/Components/Organisms/Form/FormDropdownFilteredField)
- [`<FormCheckboxField>`](#/Components/Organisms/Form/FormCheckboxField)
- [`<FormRadioGroupField>`](#/Components/Organisms/Form/FormRadioGroupField)
- [`<FormButton>`](#/Components/Organisms/Form/FormButton)

See the example below for more details.

### Example

```tsx
import { Formik, Form } from 'formik';
import {
  FormTextField,
  FormDropdownFilteredField,
  FormDropdownField,
  FormCheckboxGroupField,
  FormRadioGroupField,
  FormCheckboxField,
  FormButton,
} from '@zopauk/react-components';

const initialValues = {
  firstName: '',
  lastName: '',
  nationality: '',
  referral: '',
  terms: false,
  type: '',
  products: {
    creditCard: false,
    debitCard: false,
    savingsAccount: false,
  },
};
const onSubmit = (values) => {
  alert(JSON.stringify(values));
};
const validate = (values) => {
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
  <Formik validateOnMount initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
    <Form>
      <FormTextField label="First name" name="firstName" className="mb-4" />
      <FormTextField label="Last name" name="lastName" className="mb-4" />
      <FormDropdownFilteredField
        name="nationality"
        className="mb-4"
        inputProps={{ placeholder: 'Select a nationality...' }}
        items={nationalities}
        label="Nationality"
      />
      <FormDropdownField
        label="How did you hear about us?"
        name="referral"
        className="mb-4"
        options={[
          {
            label: 'Select an option',
            value: '',
            disabled: true,
          },
          {
            label: 'Newspaper',
            value: 'newspaper',
          },
          {
            label: 'Social media',
            value: 'socialMedia',
          },
        ]}
      />
      <FormCheckboxGroupField
        className="mb-4"
        label="Which products are you interested in?"
        name="products"
        items={[
          {
            name: 'creditCard',
            label: 'Credit card',
          },
          {
            name: 'debitCard',
            label: 'Debit card',
          },
          {
            name: 'savingsAccount',
            label: 'Savings account',
          },
        ]}
      />
      <FormRadioGroupField
        className="mb-6"
        label="Type"
        name="type"
        items={[
          {
            value: 'investor',
            label: 'Investor',
          },
          {
            value: 'borrower',
            label: 'Borrower',
          },
        ]}
      />
      <FormCheckboxField label="I accept terms and condtions" name="terms" className="mb-4" />
      <FormButton>Submit</FormButton>
    </Form>
  </Formik>
);

<FormExample />;
```
