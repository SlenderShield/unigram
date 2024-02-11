// src/components/Services.jsx
import ServiceCard from './ServiceCard';

import logo from '../assets/IMG_3471.jpg'
const data = [
  {
    id: 1,
    image: logo,
    title: "Circular's Adda",
    desc: "Classified Collection Of Govt. Circulars, Guidelines, User Manuals …",
  }, {
    id: 2,
    image: logo,
    title: "R.T.I	",
    desc: "One Stop Solution For All Your Rti Related Queries",
  }, {
    id: 3,
    image: logo,
    title: "Engineering ",
    desc: "A Civil Engineering solutions",
  }, {
    id: 4,
    image: logo,
    title: "GP ASSISTANT",
    desc: "Assistant to day to day GP Queries",
  }
]

const Service = () => {
  return (
    <section className="container mx-auto mt-8 bg-[#ECB602] h-[80vh] w-full text-center flex flex-col justify-evenly items-center">
      <h2 className="text-3xl font-bold ">Services</h2>
      {/* Add more content as needed */}
      <div className="flex justify-evenly items-center gap-5 ">
        {data.map(({ id, title, desc, image }) => (
          <ServiceCard key={id} id={id} title={title} desc={desc} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Service;
