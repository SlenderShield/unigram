
'use client';
import { Footer } from 'flowbite-react';

import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import logo from '../assets/fwdserviceicon/Logo.png';
import { Link } from 'react-router-dom';

function FooterComp() {
  return (
    <Footer container className='rounded-none mx-auto bg-black'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='self-center'>
            <Link to="/" >
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Useful Links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Circular Adda</Footer.Link>
                <Footer.Link href="#">RTI</Footer.Link>
                <Footer.Link href="#">UGPedia</Footer.Link>
                <Footer.Link href="#">GP Assistance</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Unigram" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">About</Footer.Link>
                <Footer.Link href="#">Service</Footer.Link>
                <Footer.Link href="#">Gallery </Footer.Link>
                <Footer.Link href="#">Blog </Footer.Link>
                <Footer.Link href="#">Contact </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="/" by="Unigram" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsYoutube} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterComp;