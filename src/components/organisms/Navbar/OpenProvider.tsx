import React, { createContext, Dispatch, FC, SetStateAction, useState } from 'react';

interface OpenContextType {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const OpenContext = createContext<OpenContextType>({
  open: false,
  setOpen: () => {
    /* Empty method to enable typing for useState */
  },
});

const OpenProvider: FC = ({ children }) => {
  const [open, setOpen] = useState(false);

  return <OpenContext.Provider value={{ open, setOpen }}>{children}</OpenContext.Provider>;
};

const useOpen = () => React.useContext(OpenContext);

export { OpenProvider, useOpen };
