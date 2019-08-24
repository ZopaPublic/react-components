`<Form.TextField>` is just a small wrapper around the [`<TextField />`](#/Components/Molecules/TextField) component. It is meant to be used **ONLY** inside [`<Form.Provider>`](#/Organisms/Form/FormProvider) along with other [Form](#/Organisms/Form) components. Thanks to the form data passed down through context, `<Form.TextField>` already handles the form submit callback and the disabled attribute for you.

```js
import { Form } from '@zopauk/react-components';

const validate = values => {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = 'This field is required';
  }
  return errors;
};

<Form.Provider initialValues={{ firstName: '' }} validate={validate} onSubmit={values => alert(JSON.stringify(values))}>
  <div style={{ marginBottom: '16px' }}>
    <Form.TextField label="First name" name="firstName" />
  </div>
  <Form.Button>Submit</Form.Button>
</Form.Provider>;
```
