import { useContext, useEffect, useState } from 'react';
import { RouteContext, ThemeContext } from '../context/index';

import Moon from '@/assets/icons/Moon';
import Sun from '@/assets/icons/Sun';

export const style = {
  dark: {
    text: {
      inactive: 'text-white/50',
      active: 'text-white',
    },
    button: {
      theme:
        'text-rose-500 group-hover:text-indigo-500 active:text-teal-500 transition-all duration-150',
    },
    bg: 'bg-black',
  },
  light: {
    text: {
      inactive: 'text-black/50',
      active: 'text-black',
    },
    button: {
      theme:
        'text-indigo-500 group-hover:text-rose-500 transition-all duration-150',
    },
    bg: 'bg-white',
  },
};

const Navbar = () => {
  const { route, setRoute } = useContext(RouteContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [nextTheme, setNextTheme] = useState('light');

  const Link = (props: { route: routes; alt?: any; textStyle?: string }) => {
    function handleClick() {
      if (props.route !== '.theme') {
        setRoute(props.route);
        return;
      }
      // ✏️ TODO: This could get tedious. Should store themes
      // ✏️ --::: in an array and then just shift through it onClick
      switch (theme) {
        case 'dark':
          setTheme('light');
          setNextTheme('dark');
          break;
        case 'light':
          setTheme('dark');
          setNextTheme('light');
          break;
      }
    }

    return (
      <div
        className={`font-medium text-base cursor-pointer pointer-events-auto select-none p-1 sm:text-lg group  ${
          props.route === route
            ? `${style[theme].text.active} decoration-indigo-500 decoration-2 underline hover:decoration-teal-400 transition-all duration-300`
            : `${style[theme].text.inactive} hover:decoration-violet-600 decoration-transparent decoration-2 underline transition-all duration-300`
        }`}
        onClick={handleClick}>
        <p className={` pointer-events-none ${props.textStyle}`}>
          {props.alt ? props.alt : props.route}
        </p>
      </div>
    );
  };

  return (
    <div className='w-full h-fit flex flex-col space-y-2 mx-auto sm:inline-flex sm:flex-row sm:justify-between items-center max-w-7xl'>
      <div
        className={`w-full select-none text-4xl font-bold sm:text-4xl  ${style[theme].text.active}`}>
        cuppachino
      </div>
      <div className='w-full inline-flex items-center justify-between sm:justify-end space-x-8'>
        <div className='w-fit  inline-flex items-center gap-4 relative'>
          <Link route='.info' />
          <Link route='.blog' />
          <Link route='.contact' />
        </div>
        <Link
          alt={
            theme === 'dark' ? (
              <Moon className='h-full w-8' />
            ) : (
              <Sun className='h-full w-8' />
            )
          }
          route='.theme'
          textStyle={style[theme].button.theme}
        />
      </div>
    </div>
  );
};

export default Navbar;
