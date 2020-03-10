### Summary

`<Form.CheckboxGroupField>` is just a small wrapper around the [`<CheckboxGroupField />`](#/Components/Molecules/CheckboxGroupField) component.
It is meant to be used **ONLY** inside [`<Form>`](#/Organisms/Form/Form) along with other [Form](#/Organisms/Form) components.
Thanks to the form data passed down through context, `<Form.CheckboxGroupField>` already handles value change.

### Example

```js
import { Form } from '@zopauk/react-components';

<Form initialValues={{ music: { jazz: false, rock: false } }} onSubmit={values => alert(JSON.stringify(values))}>
  <Form.Form>
    <div style={{ marginBottom: '16px' }}>
      <Form.CheckboxGroupField
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
    <Form.Button disabled={false}>Submit</Form.Button>
  </Form.Form>
</Form>;
```
