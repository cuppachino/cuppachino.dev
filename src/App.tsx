// React, Hooks, Context
import { useState } from 'react';
import { ThemeContext, RouteContext } from './context';
// Components
import Navbar, { style } from '@/components/Navbar';

function App() {
  // 🏆 Single source of truth 🏆
  const [route, setRoute] = useState<routes>('.info' as routes);
  const [theme, setTheme] = useState<themes>('dark' as themes);

  const Page = () => {
    switch (route) {
      case '.info':
        return <div className={`${style[theme].text} `}>INFO</div>;
        break;
      case '.blog':
        return <div className={`${style[theme].text} `}>BLOG</div>;
        break;
      case '.contact':
        return <div className={`${style[theme].text} `}>CONTACT</div>;
        break;

      default:
        return <div className={`${style[theme].text} `}>INFO</div>;
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouteContext.Provider value={{ route, setRoute }}>
        <div
          className={`${style[theme].bg} ${style[theme].text.active} transition-all duration-300 text-white w-screen h-screen p-7 space-y-4 font-mont`}>
          <Navbar />
          <div className='w-full h-[1px] bg-white/25' />
          {/* <p className={`${style[theme].text.active} `}>{route}</p> */}
          <Page />
        </div>
      </RouteContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
