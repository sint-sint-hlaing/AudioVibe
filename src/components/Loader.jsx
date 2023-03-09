const Loader = ({title}) => (
  <div className='flex h-screen w-full flex-col justify-center items-center'>
    <h2 className='text-white font-bold text-2xl'>{title || "Loading..."}</h2>
  </div>
);

export default Loader;
