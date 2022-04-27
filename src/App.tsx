// React, Hooks, Context
import { useState, useEffect, useRef } from 'react';
import { ThemeContext, RouteContext } from './context';
// Reveal
import { Slide } from 'react-reveal';
// Components
import Navbar, { style } from '@/components/Navbar';
import Viewport from '@/components/Viewport';
import Info from '@/pages/Info';

function App() {
  // 🏆 Single source of truth 🏆
  const [route, setRoute] = useState<routes>('.info' as routes);
  const [theme, setTheme] = useState<themes>('dark' as themes);

  // State
  const [show, setShow] = useState(false);

  const [w, setW] = useState(window.innerWidth);
  const [h, setH] = useState(window.innerHeight);

  useEffect(() => {
    setShow(true);

    // if window resizes
    function onWindowResize() {
      setW(window.innerWidth);
      setH(window.innerHeight);
    }
    return window.addEventListener('resize', () => onWindowResize(), false);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <RouteContext.Provider value={{ route, setRoute }}>
        <div className='w-screen h-screen antialiased text-white font-mont items-center flex flex-col overflow-x-hidden '>
          <div className='border-x border-white/[0.15] items-center flex flex-col h-full w-full max-w-md mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1600px] px-5 py-2'>
            <div className='inline-flex h-fit p-5 w-full items-center whitespace-nowrap font-medium text-sm sm:text-base justify-center sm:justify-start '>
              <button className='p-5 hover:text-white text-white/90'>
                Download CV
              </button>
              <button className='p-5 hover:text-white text-white/90'>
                Github
              </button>
              <button className='p-5 hover:text-white text-white/90'>
                Twitter
              </button>
            </div>
            <div className='px-8 py-4 sm:py-8 md:py-12 w-full '>
              <div className='flex flex-col h-fit w-full py-10 md:p-10 gap-4'>
                <div
                  className={` h-fit inline-flex items-center justify-center gap-4 w-fit overflow-hidden transition-all duration-300 ${
                    show ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <Slide left zoom when={show}>
                    <div className='bg-blue-500 h-[1px] w-6 md:w-12 transition-all' />
                  </Slide>

                  <Slide bottom cascade when={show}>
                    <a
                      className={`font-medium text-sm sm:text-md md:text-lg transition-all duration-300 uppercase ${
                        show ? 'text-blue-500/95' : 'text-blue-500/0'
                      }`}>
                      Jacob Bergholtz
                    </a>
                  </Slide>
                </div>

                <div
                  className={` h-fit  w-fit overflow-hidden transition-all duration-300 ${
                    show ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <Slide bottom cascade when={show}>
                    <h1
                      className={` font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-300 ${
                        show ? 'text-white/95' : 'text-white/[0]'
                      }`}>
                      Cuppachino
                    </h1>
                  </Slide>
                </div>
              </div>
              {/* <button
                className='fixed bottom-20 bg-blue-500 rounded p-2 w-fit text-white font-bold uppercase hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0'
                onClick={() => setShow(!show)}>
                reveal
              </button> */}
            </div>

            {/* <div className='page w-full h-full'>
              <div className='flex flex-col h-fit w-full py-10 md:p-10 gap-4'>
                <h2 className='text-blue-500 font-medium flex items-center gap-4 text-sm sm:text-md md:text-lg transition-all duration-200 uppercase'>
                  <div className='bg-blue-500 h-[1px] w-6 md:w-12 transition-all duration-500' />
                  Jacob Bergholtz
                </h2>
                <h1 className='text-[#f5f5ff] font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-200'>
                  Cuppachino
                </h1>
              </div>
            </div>

              */}

            {/* <Info /> */}
            {/* <h1 className='font-bold text-6xl'>Cuppachino</h1> */}
            {/* <canvas className='w-full' id='ThreeJsCanvas' /> */}
            {/* </div> */}
          </div>
          <Viewport />
        </div>
      </RouteContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
