// React, Hooks, Context
import { useState } from 'react';
import { DefaultContext } from './context';

function App() {
  // 🏆 Single source of truth 🏆
  const [state, setState] = useState('');

  return (
    <DefaultContext.Provider value={{ state, setState }}>
      <div className='bg-black text-white w-screen h-screen'>
        <div className='p-5'>
          <h1 className='text-2xl font-bold font-mono'>Hello World</h1>
        </div>
      </div>
    </DefaultContext.Provider>
  );
}

export default App;
