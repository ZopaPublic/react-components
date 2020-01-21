import { createContext } from 'react';

import { IUseFormValues } from '../../../hooks/useForm/useForm';

const FormContext = createContext<IUseFormValues | undefined>(undefined);

export default FormContext;
