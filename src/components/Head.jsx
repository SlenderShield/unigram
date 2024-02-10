import React from 'react';
import HeadImg from '../assets/fwdserviceicon/head.jpg'

const Head = () => {
  return (
    <div className="relative h-[80vh] text-left px-40 py-32 items-center">
      {/* Add your background image */}
      <img
        src={HeadImg}
        alt="Background Image"
        className="object-cover w-full h-full absolute inset-0"
      />

      <div className="relative z-10 text-justify">
        <div className='text-3xl'>
        <p className="mb-4 text-black">
          Let's build our</p>
        <h1 className="text-5xl font-bold mb-4 text-[#ECB602] tracking-wide">Gram Swaraj</h1>

        <p className="mb-4 text-black">
          system together</p>
          <p className="mb-4 text-black uppercase tracking-widest text-lg">
          Unique and strong
        </p>

        {/* Button */}
        <button className="bg-[#ECB602] text-sm text-black py-1 px-4 tracking-[10px] uppercase hover:bg-black hover:text-[#ECB602] transition duration-300">
          Explore
        </button>
        </div>
      </div>
    </div>
  );
};

export default Head;
