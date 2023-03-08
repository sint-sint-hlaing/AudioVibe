// import {loader } from '../assets'

const Loader = ({title}) => (
  <div className='flex h-screen w-full flex-col justify-center items-center'>
    {/* <img src={loader} alt="" className='w-32 h-32 object-contain'/> */}
    <h2 className='text-white font-bold text-2xl'>{title || "Loading..."}</h2>
  </div>
);

export default Loader;
