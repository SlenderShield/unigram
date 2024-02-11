import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import logo from '../assets/uniGram logo 2.jpg'


const Footer = () => {
  return (
    <footer className="pb-10  p-5 text-center md:text-left bg-slate-800 text-white">
      <div className="container mx-auto flex flex-wrap sm:justify-evenly flex-col sm:flex-row">
      <div className="flex flex-col">
          <h3 className="text-lg font-bold mb-2 sm:mb-4  mt-4 sm:mt-0 flex justify-center items-center">
            <img src={logo} alt="Logo" className="w-14 rounded-md"/>
            <span className="p-1">
             uni<span className="text-[#ECB602]">G</span>ram
            </span>
            
          </h3>
          <p className="text-center">hear to help you</p>
          <ul className="flex gap-2 p-2 justify-center">
            <li className="flex mx-auto p-2 rounded-full bg-white">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black p-1"
              >
                <FaInstagram />
              </a>
            </li>
            <li className="flex justify-center mx-auto p-2 rounded-full bg-white ">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black p-1"
              >
                <FaFacebook />
              </a>
            </li>
            <li className="flex justify-center mx-auto p-2 rounded-full bg-white ">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black p-1"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col pb-5">
          <h3 className="text-lg font-bold mb-2 sm:mb-4  mt-4 sm:mt-0">
            <span className="text-[#ECB602] pb-1">
             Useful Links
            </span>
          </h3>
          <ul>
            <li>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Circular Adda
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                RTI
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                UGpedia
              </a>
            </li>
            <li>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                GP Assistance
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col ">
          <h3 className="text-lg font-bold mb-2 sm:mb-4 ">
            <span className="text-[#ECB602] pb-1">Unigram</span>
          </h3>
          <ul>
            <li>
              <Link to="/" className="text-white">
               About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-white">
                Service
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-white">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;