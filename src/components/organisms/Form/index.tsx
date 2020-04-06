import FormButton from './FormButton/FormButton';
import FormTextField from './FormTextField/FormTextField';
import FormCheckboxField from './FormCheckboxField/FormCheckboxField';
import FormCheckboxGroupField from './FormCheckboxGroupField/FormCheckboxGroupField';
import FormRadioGroupField from './FormRadioGroupField/FormRadioGroupField';
import FormDropdownField from './FormDropdownField/FormDropdownField';
import FormDropdownFilteredField from './FormDropdownFilteredField/FormDropdownFilteredField';

interface IFormStatic {
  Button: typeof FormButton;
  CheckboxField: typeof FormCheckboxField;
  CheckboxGroupField: typeof FormCheckboxGroupField;
  DropdownField: typeof FormDropdownField;
  DropdownFilteredField: typeof FormDropdownFilteredField;
  RadioGroupField: typeof FormRadioGroupField;
  TextField: typeof FormTextField;
}

export const Form: IFormStatic = {
  Button: FormButton,
  CheckboxField: FormCheckboxField,
  CheckboxGroupField: FormCheckboxGroupField,
  DropdownField: FormDropdownField,
  DropdownFilteredField: FormDropdownFilteredField,
  RadioGroupField: FormRadioGroupField,
  TextField: FormTextField,
};
