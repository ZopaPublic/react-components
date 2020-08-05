### Summary

`<FormSection>` is a wrapper containing optional title and subtitle. It will wrap each child element with a div with class `mb-4`.
It should be used to group different sections within a form, e.g personal details

```tsx
import { Formik, Form } from 'formik';
import {
  FormSection,
  FormTextField,
  FormDropdownField,
  FormRadioGroupField,
  FormButton,
} from '@zopauk/react-components';

<Formik
  validateOnMount
  initialValues={{ yourName: '', yourSurname: '', ref: 'newspaper', employment: '' }}
  onSubmit={(values) => alert(JSON.stringify(values))}
>
  <Form>
    <FormSection title="section-1">
      <FormTextField label="Your name" name="yourName" />
      <FormTextField label="Your surname" name="yourSurname" />
    </FormSection>
    <FormSection title="section-2" subtitle="this has a subtitle">
      <FormDropdownField
        options={[
          {
            label: 'Select an option',
            value: '',
          },
          {
            label: 'Newspaper',
            value: 'newspaper',
          },
          {
            label: 'Social media',
            value: 'socialMedia',
          },
        ]}
        label="How did you hear about us?"
        name="ref"
      />
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
      />
    </FormSection>
    <FormButton>Submit</FormButton>
  </Form>
</Formik>;
```
