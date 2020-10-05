### Summary

`<FormRadioGroupField>` is just a thin wrapper around the [`<RadioGroupField />`](#/Components/Molecules/RadioGroupField) component.
It is meant to be used **ONLY** inside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components.
Thanks to the form data passed down through context, `<FormRadioGroupField>` already handles value change.

### Example

```tsx
import { Formik, Form } from 'formik';
import { FormRadioGroupField, FormButton } from '@zopauk/react-components';

<Formik
  initialValues={{ employment: '' }}
  onSubmit={(values) => alert(JSON.stringify(values))}
  validate={(values) => {
    let errors = {};
    if (!values.employment) {
      errors.employment = 'You have to pick one';
    }
    return errors;
  }}
>
  <Form>
    <div className="mb-4">
      <FormRadioGroupField
        label="Employment"
        name="employment"
        items={[
          {
            value: 'employed',
            label: 'Employed',
          },
          {
            value: 'unemployed',
            label: 'Unemployed',
          },
        ]}
        data-automation="testing2"
      />
    </div>
    <FormButton disabled={false}>Submit</FormButton>
  </Form>
</Formik>;
```
