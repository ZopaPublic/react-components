`<Form>` is just a small wrapper component around the `useForm` hook. It holds the form state and passes it down through context to other [Form](#/Organisms/Form) components.

```js
import { Form } from '@zopauk/react-components';

<Form initialValues={{ firstName: '' }} onSubmit={values => alert(JSON.stringify(values))}>
  <div style={{ marginBottom: '16px' }}>
    <Form.TextField label="First name" name="firstName" />
  </div>
  <Form.Button>Submit</Form.Button>
</Form>;
```
