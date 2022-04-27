import BG from '@/assets/gradients/bg-gradient.svg';

const Info = () => {
  const style = {
    filter: `100px`,
  };

  return (
    <div className='w-full h-full'>
      {/* <div className='fixed inset-0 bg-gradient-to-br from-blue-600 to-[#090909] opacity-10' />
      <div className='fixed inset-0 bg-gradient-to-tl from-rose-600 to-[#090909] opacity-10' /> */}
      {/*
       */}
      {/* <div className='radial fixed bg-blue-800 w-1/4 h-1/4 rounded-full  top-0 left-0 -translate-x-1/2 ' />
      <div className='radial fixed bg-rose-700 w-1/3 h-1/3 rounded-full  bottom-0 right-0 translate-x-1/2 translate-y-1/2' /> */}
      <div className='flex flex-col h-fit w-full  p-10 gap-10 md:gap-16 transition-all duration-200 border'></div>
    </div>
  );
};

export default Info;
