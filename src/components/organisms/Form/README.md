### Summary

`<Form>` is a top level form component holding its state and also serves as a namespace for all of the form components:

- [`<Form.TextField>`](#/Components/Organisms/Form/FormTextField)
- [`<Form.DropdownField>`](#/Components/Organisms/Form/FormDropdownField)
- [`<Form.DropdownFilteredField>`](#/Components/Organisms/Form/FormDropdownFilteredField)
- [`<Form.CheckboxField>`](#/Components/Organisms/Form/FormCheckboxField)
- [`<Form.RadioGroupField>`](#/Components/Organisms/Form/FormRadioGroupField)
- [`<Form.Button>`](#/Components/Organisms/Form/FormButton)

See the example below for more details.

### Example

```tsx
import { Formik, Form } from 'formik';
import { Form as RCForm } from '@zopauk/react-components';

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
      <RCForm.TextField label="First name" name="firstName" />
      <div style={{ height: '16px' }} />
      <RCForm.TextField label="Last name" name="lastName" />
      <div style={{ height: '16px' }} />
      <RCForm.DropdownFilteredField
        name="nationality"
        inputProps={{ placeholder: 'Select a nationality...' }}
        items={nationalities}
        label="Nationality"
      />
      <div style={{ height: '16px' }} />
      <RCForm.DropdownField label="How did you hear about us?" name="referral">
        <option disabled value="">
          Select a value
        </option>
        <option value="newspaper">Newspaper</option>
        <option value="socialMedia">Social media</option>
      </RCForm.DropdownField>
      <div style={{ height: '16px' }} />
      <RCForm.CheckboxGroupField
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
      <RCForm.RadioGroupField
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
      <RCForm.CheckboxField label="I accept terms and condtions" name="terms" />
      <div style={{ height: '16px' }} />
      <RCForm.Button>Submit</RCForm.Button>
    </Form>
  </Formik>
);

<FormExample />;
```
