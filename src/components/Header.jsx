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