import { createContext } from 'react';

import { TUseFormValues } from '../../hooks/useForm/useForm';

const FormContext = createContext<TUseFormValues | undefined>(undefined);

export default FormContext;
