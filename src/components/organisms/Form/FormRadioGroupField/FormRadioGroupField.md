### Summary

`<Form.RadioGroupField>` is just a small wrapper around the [`<RadioGroupField />`](#/Components/Molecules/RadioGroupField) component.
It is meant to be used **ONLY** inside [`<Form>`](#/Organisms/Form/Form) along with other [Form](#/Organisms/Form) components.
Thanks to the form data passed down through context, `<Form.RadioGroupField>` already handles value change.

### Example

```js
import { Form } from '@zopauk/react-components';

<Form initialValues={{ employment: '' }} onSubmit={values => alert(JSON.stringify(values))}>
  <Form.Form>
    <div style={{ marginBottom: '16px' }}>
      <Form.RadioGroupField
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
    <Form.Button disabled={false}>Submit</Form.Button>
  </Form.Form>
</Form>;
```
