// src/components/Services.jsx
import ServiceCard from './ServiceCard';

import CircularAdda from '../assets/fwdserviceicon/Circular-Adda.jpg'
import RTI from '../assets/fwdserviceicon/RTI.jpg'
import Engineering from '../assets/fwdserviceicon/Civil-Engg-servises.jpg'
import GPAssist from '../assets/fwdserviceicon/GP-Assistance.jpg'
const data = [
  {
    id: 1,
    image: CircularAdda,
    title: "Circular's Adda",
    desc: "Classified Collection Of Govt. Circulars, Guidelines, User Manuals …",
  }, {
    id: 2,
    image: RTI,
    title: "R.T.I	",
    desc: "One Stop Solution For All Your Rti Related Queries",
  }, {
    id: 3,
    image: Engineering,
    title: "Engineering ",
    desc: "A Civil Engineering solutions",
  }, {
    id: 4,
    image: GPAssist,
    title: "GP ASSISTANT",
    desc: "Assistant to day to day GP Queries",
  }
]

const Service = () => {
  return (
    <section className="bg-gray-100 p-8">
      <h2 className="text-2xl font-bold text-center mb-12">Services</h2>
      <div className="flex flex-wrap justify-center gap-4 ">
        {data.map(({ id, title, desc, image }) => (
          <ServiceCard key={id} title={title} desc={desc} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Service;
