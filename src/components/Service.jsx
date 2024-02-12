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
    <section className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold text-center mb-12">Section Header</h2>
      <div className="flex flex-wrap justify-center">
        {data.map(({ id, title, desc, image }) => (
          <ServiceCard key={id} title={title} desc={desc} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Service;
