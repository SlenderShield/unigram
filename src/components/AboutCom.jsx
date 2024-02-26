import React from 'react';
import gandhi from '../assets/fwdserviceicon/gandhi_logo.png';

function AboutCom() {
    return (
        <section className='p-8 bg-about_background bg-no-repeat bg-cover bg-center'>
            <h2 className='text-2xl font-bold text-center mb-12 text-white'>About us</h2>
            <div className='md:w-3/4 max-h-vh flex flex-col md:flex-row md:justify-center gap-4 items-center md:mx-auto'>
                <div className='w-full md:w-1/3 h-full'>
                    <img src={gandhi} alt='Gandhi Lgo' className='w-full h-full' />
                </div>
                <div className='w-full md:w-2/3 text-sm md:text-lg md:text-justify leading-5 md:leading-6 lg:leading-loose text-white [word-spacing:5px]'>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, nemo maxime corporis debitis aliquid a autem
                        provident distinctio iure officia nisi fugiat expedita similique minima! Suscipit dolorem illum accusamus
                        rem!
                    </p>
                    <p>
                        Tenetur quaerat, nihil, sapiente quibusdam laudantium, provident ducimus explicabo autem dolores possimus
                        eius fugiat animi? Tempora placeat odio maiores molestias minima saepe modi esse, in nisi, fuga, laboriosam
                        id exercitationem! Quo voluptates excepturi deleniti. Totam ducimus voluptatum rem laudantium. Reiciendis
                        ducimus fugiat ipsa? Iure, explicabo dolore, nesciunt aliquid illo eos obcaecati ipsam corporis nulla
                        molestiae ipsum! Alias impedit autem officiis!
                    </p>
                    <p>
                        Non ullam eos quaerat architecto cumque veritatis veniam libero voluptatem debitis fugit omnis est expedita
                        accusamus quia quam eligendi fugiat corrupti aut, esse vel ex! Numquam vel adipisci ipsam ducimus! Quo
                        voluptates excepturi deleniti. Totam ducimus voluptatum rem laudantium. Reiciendis ducimus fugiat ipsa?
                        Iure, explicabo dolore, nesciunt aliquid illo eos obcaecati ipsam corporis nulla molestiae ipsum! Alias
                        impedit autem officiis! Non ullam eos quaerat architecto cumque veritatis veniam libero voluptatem debitis
                        fugit omnis est expedita accusamus quia quam eligendi fugiat corrupti aut, esse vel ex! Numquam vel adipisci
                        ipsam ducimus!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutCom;
