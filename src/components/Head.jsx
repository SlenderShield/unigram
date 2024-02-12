import HeadImg from '../assets/fwdserviceicon/head.jpg'

const Head = () => {
  return (
    <div className="relative h-[80vh] sm:h-[70vh] md:h-[60vh] lg:h-[100vh] text-left px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 flex items-center">
      {/* Add your background image */}
      <img
        src={HeadImg}
        alt="Background Image"
        className="object-cover w-full h-full absolute inset-0"
      />

      <div className="relative text-justify">
        <div className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
          <p className="mb-2 text-black">
            Let's build our</p>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 text-[#ECB602] tracking-wide">Gram Swaraj</h1>

          <p className="mb-2 text-black">
            system together</p>
          <p className="mb-2 text-black uppercase tracking-widest text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Unique and strong
          </p>

          {/* Button */}
          <button className="bg-[#ECB602] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-black py-1 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 tracking-[8px] uppercase hover:bg-black hover:text-[#ECB602] transition duration-300 mt-4">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Head;
