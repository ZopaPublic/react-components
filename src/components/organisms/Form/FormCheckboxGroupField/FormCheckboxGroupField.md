### Summary

`<Form.CheckboxGroupField>` is just a small wrapper around the [`<CheckboxGroupField />`](#/Components/Molecules/CheckboxGroupField) component.
It is meant to be used **ONLY** inside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components.
Thanks to the form data passed down through context, `<Form.CheckboxGroupField>` already handles value change.

### Example

```tsx
import { Formik, Form } from 'formik';
import { Form as RCForm } from '@zopauk/react-components';

<Formik initialValues={{ music: { jazz: false, rock: false } }} onSubmit={values => alert(JSON.stringify(values))}>
  <Form>
    <div style={{ marginBottom: '16px' }}>
      <RCForm.CheckboxGroupField
        label="Pick music you like"
        name="music"
        items={[
          {
            name: 'jazz',
            label: 'Jazz',
          },
          {
            name: 'rock',
            label: 'Rock',
          },
        ]}
      />
    </div>
    <RCForm.Button disabled={false}>Submit</RCForm.Button>
  </Form>
</Formik>;
```
