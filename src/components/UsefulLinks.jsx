import React from 'react';
import { Carousel } from 'primereact/carousel';
import { UsefulLinkImages } from '../menuItemsData';

import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function UsefulLinks() {
  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 4,
      numScroll: 2,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const linkTemplate = (item) => {
    return (
      <div className='border-1 flex flex-col items-center justify-center  m-2 text-center py-5 px-3'>
        <div className='mb-3'>
          <img src={item.imgValue} alt={item.altText} className='w-32 shadow-2' />
        </div>
        <div>
          <h4 className='mb-1'>{item.title}</h4>
        </div>
      </div>
    );
  };
  return (
    <section className='p-8'>
      <h2 className='text-2xl font-bold text-center mb-12'>Useful Links</h2>
      <div className='card'>
        <Carousel
          page={1}
          autoplayInterval={3000}
          value={UsefulLinkImages}
          numVisible={4}
          numScroll={2}
          responsiveOptions={responsiveOptions}
          itemTemplate={linkTemplate}
        />
      </div>
    </section>
  );
}
