import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import img1 from '../assets/fwdserviceicon/01 Karnataka Gov.png'
import img2 from '../assets/fwdserviceicon/02 RDPR.png'
import img3 from '../assets/fwdserviceicon/03 e Gram Swaraj.png'
import img4 from '../assets/fwdserviceicon/04 Panchatantra 2.0.png'
import img5 from '../assets/fwdserviceicon/05.1 GSK 2.0.png'
import img6 from '../assets/fwdserviceicon/07 RDWS.png'


function UsefulLinks() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        }
      }
    ]
  };
  return (
    <section className="slider-container p-10 bg-white text-black">
      <h2 className="text-2xl font-bold mb-4 text-center">Quick Links</h2>
      <Slider {...settings} >
        <div>
          <div>
            <Link to="/" className="text-black text-center flex flex-col justify-center items-center">
              <img src={img6} alt="Hello" className="h-36" />
              <p>RDWS</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/" className=" flex flex-col justify-center items-center">
              <img src={img1} alt="Hello" className="h-36 " />
              <p>Karnataka One</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/" className=" flex flex-col justify-center items-center">
              <img src={img2} alt="Hello" className="h-36" />
              <p>RDPR</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/" className=" flex flex-col justify-center items-center">
              <img src={img3} alt="Hello" className="h-36" />
              <p>e Gram Swaraj</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/" className=" flex flex-col justify-center items-center">
              <img src={img4} alt="Hello" className="h-36" />
              <p>Panchatantra 2.0</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/" className=" flex flex-col justify-center items-center">
              <img src={img5} alt="Hello" className="h-36" />
              <p>1 GSK 2.0</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/" className=" flex flex-col justify-center items-center">
              <img src={img6} alt="Hello" className="h-36" />
              <p>RDWS</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/" className=" flex flex-col justify-center items-center">
              <img src={img1} alt="Hello" className="h-36 " />
              <p>Karnataka One</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/" className=" flex flex-col justify-center items-center">
              <img src={img2} alt="Hello" className="h-36" />
              <p>RDPR</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/" className=" flex flex-col justify-center items-center">
              <img src={img3} alt="Hello" className="h-36" />
              <p>e Gram Swaraj</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/" className=" flex flex-col justify-center items-center">
              <img src={img4} alt="Hello" className="h-36" />
              <p>Panchatantra 2.0</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <Link to="/" className=" flex flex-col justify-center items-center">
              <img src={img5} alt="Hello" className="h-36" />
              <p>1 GSK 2.0</p>
            </Link>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default UsefulLinks;

