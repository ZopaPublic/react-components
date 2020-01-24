import { createContext } from 'react';

import { IUseFormValues } from './useForm';

export const FormContext = createContext<IUseFormValues | undefined>(undefined);
