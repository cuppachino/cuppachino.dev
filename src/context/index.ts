import { createContext, Dispatch, SetStateAction } from 'react';

type _type = string;

export const DefaultContext = createContext({
  state: '' as _type,
  setState: {} as Dispatch<SetStateAction<_type>>,
});
