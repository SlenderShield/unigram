import { Link } from "react-router-dom";

function ServiceCard({ id, image, title, desc }) {
  return (
    <Link to={`/service/${id}`} >
      <div className="flex flex-col items-center text-center bg-white rounded-2xl p-4 m-2 w-48 h-48 md:w-56 md:h-56  lg:w-60 lg:h-60 mb-12 xl:mb-0">
        <div className="flex items-center justify-center ">
          <img src={image} alt="Your Image" className="relative -top-12 rounded-2xl w-20 h-20 lg:w-32 lg:h-32 md:w-24 md:h-24" />
        </div>
        <div className="relative -pt-10">
          <h2 className="text-md lg:text-lg font-bold mb-1 sm:text-sm">{title}</h2>
          <p className="text-gray-600 text-xs sm:text-sm">{desc}</p>
        </div>
      </div>
    </Link >
  )
}

export default ServiceCard