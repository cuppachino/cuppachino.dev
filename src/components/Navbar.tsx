import { useContext, useEffect, useState } from 'react';
import { RouteContext, ThemeContext } from '../context/index';

export const style = {
  dark: {
    text: {
      inactive: 'text-white/50',
      active: 'text-white',
    },
    bg: 'bg-black',
  },
  light: {
    text: {
      inactive: 'text-black/50',
      active: 'text-black',
    },
    bg: 'bg-white',
  },
};

const Navbar = () => {
  const { route, setRoute } = useContext(RouteContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [nextTheme, setNextTheme] = useState('light');

  const Link = (props: { route: routes; alt?: string; textStyle?: string }) => {
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
        className={`font-medium text-base transition-all duration-100 pointer-events-auto p-1  ${
          props.route === route
            ? style[theme].text.active
            : style[theme].text.inactive
        }`}
        onClick={handleClick}>
        <p className={`select-none ${props.textStyle}`}>
          {props.alt ? `${props.alt}()` : props.route}
        </p>
      </div>
    );
  };

  return (
    <div className='w-full h-fit flex flex-col gap-5 mx-auto sm:inline-flex sm:flex-row sm:justify-between items-center '>
      <div className={`w-full text-3xl font-bold  ${style[theme].text.active}`}>
        cuppachino
      </div>
      <div className='w-full inline-flex items-center justify-between sm:justify-end gap-8'>
        <div className='w-fit  inline-flex items-center gap-2 relative'>
          <Link route='.info' />
          <Link route='.blog' />
          <Link route='.contact' />
        </div>
        <Link alt={`${nextTheme}`} route='.theme' textStyle='text-indigo-500' />
      </div>
    </div>
  );
};

export default Navbar;
