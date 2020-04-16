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
  <Formik validateOnMount initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
    <Form>
      <FormTextField label="First name" name="firstName" />
      <div style={{ height: '16px' }} />
      <FormTextField label="Last name" name="lastName" />
      <div style={{ height: '16px' }} />
      <FormDropdownFilteredField
        name="nationality"
        inputProps={{ placeholder: 'Select a nationality...' }}
        items={nationalities}
        label="Nationality"
      />
      <div style={{ height: '16px' }} />
      <FormDropdownField
        label="How did you hear about us?"
        name="referral"
        options={[
          {
            label: 'Select an option',
            value: '',
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
      <div style={{ height: '16px' }} />
      <FormCheckboxGroupField
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
      <div style={{ height: '16px' }} />
      <FormRadioGroupField
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
      <div style={{ height: '24px' }} />
      <FormCheckboxField label="I accept terms and condtions" name="terms" />
      <div style={{ height: '16px' }} />
      <FormButton>Submit</FormButton>
    </Form>
  </Formik>
);

<FormExample />;
```
