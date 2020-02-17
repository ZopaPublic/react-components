import { IField, IInput } from '../../types';

export interface IFormInputField extends Omit<IField<HTMLInputElement>, 'inputProps'> {
  inputProps?: IInput<HTMLInputElement>;
  name: string;
}
