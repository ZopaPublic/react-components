### Summary

`<Form.RadioGroupField>` is just a small wrapper around the [`<RadioGroupField />`](#/Components/Molecules/RadioGroupField) component.
It is meant to be used **ONLY** inside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components.
Thanks to the form data passed down through context, `<Form.RadioGroupField>` already handles value change.

### Example

```tsx
import { Formik, Form } from 'formik';
import { Form as RCForm } from '@zopauk/react-components';

<Formik initialValues={{ employment: '' }} onSubmit={values => alert(JSON.stringify(values))}>
  <Form>
    <div style={{ marginBottom: '16px' }}>
      <RCForm.RadioGroupField
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
      />
    </div>
    <RCForm.Button disabled={false}>Submit</RCForm.Button>
  </Form>
</Formik>;
```
