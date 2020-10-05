### Summary

`<FormCheckboxGroupField>` is just a thin wrapper around the [`<CheckboxGroupField />`](#/Components/Molecules/CheckboxGroupField) component.
It is meant to be used **ONLY** inside `<Formik>` and formik's `<Form />` along with other [Form](#/Organisms/Form) components.
Thanks to the form data passed down through context, `<FormCheckboxGroupField>` already handles value change.

### Example

```tsx
import { Formik, Form } from 'formik';
import { FormCheckboxGroupField, FormButton } from '@zopauk/react-components';

<Formik
  initialValues={{ music: { jazz: false, rock: false } }}
  onSubmit={(values) => alert(JSON.stringify(values))}
  validate={(values) => {
    let errors = {};
    if (values.music && !values.music.jazz && !values.music.rock) {
      errors.music = 'You have to pick at least one';
    }
    return errors;
  }}
>
  <Form>
    <div className="mb-4">
      <FormCheckboxGroupField
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
        data-automation="test"
      />
    </div>
    <FormButton disabled={false}>Submit</FormButton>
  </Form>
</Formik>;
```
