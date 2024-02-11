import { Link } from "react-router-dom";

function ServiceCard({ id, image, title, desc }) {
  return (
    <Link
      to={`/service/${id}`}
      className="bg-white w-64 h-72 text-black rounded-3xl flex flex-col justify-center items-center relative border-2 "
    >
        <img src={image} alt={title} className="w-32 h-36 object-cover border-black border-1 rounded-xl  absolute -top-10" />
      
      <div className="pt-10">
        <h2 className="text-xl font-bold mb-2 capitalize">
          <span className="text-black">{title} </span>
        </h2>
        <p className="text-stone-600 capitalize">{desc}</p>
      </div>
    </Link>
  )
}

export default ServiceCard