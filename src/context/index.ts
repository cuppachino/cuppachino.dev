import { createContext, Dispatch, SetStateAction } from 'react';

export const RouteContext = createContext({
  route: '.info' as routes,
  setRoute: {} as Dispatch<SetStateAction<routes>>,
});

export const ThemeContext = createContext({
  theme: 'dark' as themes,
  setTheme: {} as Dispatch<SetStateAction<themes>>,
});
