### Summary

`<FormCheckboxGroupField>` is just a small wrapper around the [`<CheckboxGroupField />`](#/Components/Molecules/CheckboxGroupField) component.
It is meant to be used **ONLY** inside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components.
Thanks to the form data passed down through context, `<FormCheckboxGroupField>` already handles value change.

### Example

```tsx
import { Formik, Form } from 'formik';
import { CheckboxGroupField, FormButton } from '@zopauk/react-components';

<Formik initialValues={{ music: { jazz: false, rock: false } }} onSubmit={values => alert(JSON.stringify(values))}>
  <Form>
    <div style={{ marginBottom: '16px' }}>
      <CheckboxGroupField
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
    <FormButton disabled={false}>Submit</FormButton>
  </Form>
</Formik>;
```
