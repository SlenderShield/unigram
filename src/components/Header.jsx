import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/fwdserviceicon/Logo.png';
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavbarComp from './Navbar/Navbar.jsx';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Navbar className='mx-auto px-6 py-1 fixed z-50 bg-blue-gray-600 border-none' fullWidth blurred>
      <div className='flex items-center justify-between '>
        <Link to='/' className='relative top-1 w-24 lg:w-32'>
          <img src={logo} alt='logo-ct' className='' />
        </Link>
        <div className='hidden lg:block'>
          <NavbarComp />
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavbarComp />
      </Collapse>
    </Navbar>
  );
}

export default Header;