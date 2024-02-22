import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    <Navbar className='mx-auto px-6 py-3 fixed' fullWidth blurred>
      <div className='flex items-center justify-between text-blue-gray-900'>
        <Link to='/' className='flex text-inherit decoration-inherit gap-1 justify-center items-center'>
          <></>
          <img src='https://docs.material-tailwind.com/img/logo-ct-dark.png' alt='logo-ct' className='w-10' />
          <Typography>Unigram</Typography>
        </Link>
        <div className='hidden lg:block'>
          <NavbarComp mobileView={openNav} />
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