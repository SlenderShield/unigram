// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from '../assets/uniGram logo 2.jpg'

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-[#55185D] sticky top-0 z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <NavLink to="/" exact="true" className="flex items-center">
//               <img
//                 className="h-10 w-10 rounded-lg "
//                 src={logo}
//                 alt="Logo"
//               />
//               <p className="text-white  text-2xl font-bold px-4 font-sans">
//                 uniGram
//               </p>
//             </NavLink>
//           </div>

//           {/* Navigation Menu */}
//           <div className="hidden md:block ">
//             <div className="ml-4 flex items-center md:ml-6 gap-0.5" >
//               <NavLink
//                 to="/"
//                 className="text-stone-50 font-medium px-3 py-1 rounded-md  transition duration-300 ease-in-out hover:text-black hover:bg-[#ECB602] active"
//                 exact="true"
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/about"
//                 className="text-stone-50 px-3 py-1 rounded-md  font-medium transition duration-300 ease-in-out hover:text-black hover:bg-[#ECB602] "
//               >
//                 About
//               </NavLink>
//               <NavLink
//                 to="/services"
//                 className="text-stone-50 px-3 py-1 rounded-md  font-medium transition duration-300 ease-in-out hover:text-black hover:bg-[#ECB602] "
//               >
//                 Services
//               </NavLink>

//               <NavLink
//                 to="/blog"
//                 className="text-stone-50 px-3 py-1 rounded-md font-medium transition duration-300 ease-in-out hover:text-black hover:bg-[#ECB602] "
//               >
//                 Blog
//               </NavLink>
//               <NavLink
//                 to="/contact"
//                 className="text-stone-50 px-3 py-1 rounded-md  font-medium transition duration-300 ease-in-out hover:text-black hover:bg-[#ECB602] "
//               >
//                 Contact
//               </NavLink>
//               <NavLink
//                 to="/login"
//                 className="hover:text-[#ECB602] hover:bg-black px-3 py-1 rounded-md  font-medium transition duration-300 ease-in-out text-black bg-[#ECB602] "
//               >
//                 Login
//               </NavLink>
//               {/* <NavLink
//                 to="/sign-up"
//                 className="hover:text-stone-50 hover: px-3 py-1 rounded-md  font-medium transition duration-300 ease-in-out text-black bg-[#ECB602] "
//               >
//                 Sign Up
//               </NavLink> */}
//               <p className="text-white px-3 py-1">English</p>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           <div className="md:hidden flex items-center">
//             <a
//               type="button"
//               onClick={toggleMenu}
//               className="text-white  focus:outline-none bg-none"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </a>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}

//         {/* <div className="md:hidden">
//           <div className="fixed flex bottom-0 right-0 w-full z-10 bg-white justify-evenly p-1">
//             <NavLink
//               to="/"
//               className="text-black flex flex-col justify-center items-center"
//               exact
//               onClick={scrollToTop}
//             >
//               <img
//                 width="24"
//                 height="24"
//                 src="https://img.icons8.com/material-outlined/24/home--v2.png"
//                 alt="home--v2"
//               />
//               <p className="text-sm">Home</p>
//             </NavLink>
//             <NavLink
//               to="/projects"
//               className="text-black flex flex-col justify-center items-center"
//               onClick={scrollToTop}
//             >
//               <img
//                 width="24"
//                 height="24"
//                 src="https://img.icons8.com/material-outlined/24/group-of-projects.png"
//                 alt="group-of-projects"
//               />
//               <p className="text-sm">Projects</p>
//             </NavLink>
//             <NavLink
//               to="/gallery"
//               className="text-black flex flex-col justify-center items-center"
//               onClick={scrollToTop}
//             >
//               <img
//                 width="24"
//                 height="24"
//                 src="https://img.icons8.com/material-outlined/24/gallery.png"
//                 alt="gallery"
//               />
//               <p className="text-sm"> Gallery</p>
//             </NavLink>
//             <NavLink
//               to="/about-us"
//               className="text-black flex flex-col justify-center items-center"
//               onClick={scrollToTop}
//             >
//               <img
//                 width="24"
//                 height="24"
//                 src="https://img.icons8.com/material-outlined/24/about.png"
//                 alt="about"
//               />
//               <p className="text-sm">About Us</p>
//             </NavLink>
//             <NavLink
//               to="/contact-us"
//               className="text-black flex flex-col justify-center items-center"
//               onClick={scrollToTop}
//             >
//               <img
//                 width="24"
//                 height="24"
//                 src="https://img.icons8.com/material-outlined/24/business-contact.png"
//                 alt="business-contact"
//               />
//               <p className="text-sm">Contact Us</p>
//             </NavLink>
//           </div>
//         </div> */}

//         {/* Mobile Menu Dropdown */}
//         {isMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <NavLink
//                 to="/"
//                 className="text-stone-50 block px-3 py-1 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-black hover:bg-[#ECB602]"
//                 exact
//                 onClick={() => { toggleMenu(); scrollToTop();}}
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/about"
//                 className="text-stone-50 block px-3 py-1 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-black hover:bg-[#ECB602]"
//                 onClick={() => { toggleMenu(); scrollToTop();}}
//               >
//                 About
//               </NavLink>
//               <NavLink
//                 to="/services"
//                 className="text-stone-50 block px-3 py-1 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-black hover:bg-[#ECB602] "
//                 onClick={() => { toggleMenu(); scrollToTop();}}
//               >
//                 Services
//               </NavLink>
//               <NavLink
//                 to="/blog"
//                 className="text-stone-50 block px-3 py-1 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-black hover:bg-[#ECB602] "
//                 onClick={() => { toggleMenu(); scrollToTop();}}
//               >
//                 Blog
//               </NavLink>
//               <NavLink
//                 to="/contact"
//                 className="text-stone-50 block px-3 py-1 rounded-md text-base font-medium transition duration-300 ease-in-out hover:text-black hover:bg-[#ECB602] "
//                 onClick={() => { toggleMenu(); scrollToTop();}}
//               >
//                 Contact
//               </NavLink>
//               <NavLink
//                 to="/login"
//                 className="hover:text-[#ECB602] block px-3 py-1 rounded-md text-base font-medium transition duration-300 ease-in-out hover:bg-black bg-[#ECB602] "
//                 onClick={() => { toggleMenu(); scrollToTop();}}
//               >
//                 Login
//               </NavLink>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Header;

import { Link } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import MobileNav from './Navbar/MobileNav'
import logo from '../assets/uniGram logo 2.jpg'

function Header() {
  return (
    <header className='shadow-md text-gray-700 bg-[]
    '>
      <div className="flex justify-between items-center max-w-[1200px] m-auto px-3 py-2 ">
        <Link href="/" className="text-2xl font-bold flex gap-2 justify-center items-center">
          {/* Logo */}
          <img
            className="h-10 w-10 rounded-lg "
            src={logo}
            alt="Logo"
          />
          <p>uni<span className='text-[#ECB602]'>G</span>ram
          </p>
        </Link >
        {/* For Large Screens */}
        <Navbar />
        {/* For Small Screens */}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header