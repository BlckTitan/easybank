import React from 'react';
import './style/hero_style.css';
import imgHero from '../../images/image-mockups.png';

export default function Hero() {

  return (
    <div className='hero_container w-full flex justify-center'>
        <header className='wrapper flex flex-col-reverse xl:flex-row xl:justify-between'>
           <section className='heroText w-full xl:w-2/5  h-4/6 xl:h-full pt-20 xl:pt-0 flex flex-col items-center md:items-start'>
              <h1 className='text-3xl xl:text-5xl mb-4 text-center md:text-left'>Next generation digital banking</h1>
              <p className='text-lg mb-4 text-center md:text-left'>
                  Take your financial life online.
                  Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
              </p>
              <button className='button_gradient w-40 h-14 xl:h-12 rounded-full flex justify-center items-center'>Request invite</button>
           </section>
           <section className='heroImage w-full xl:w-3/5 h-2/6 mb-4 xl:mt-0 xl:mb-0 xl:h-full flex justify-end items-center relative'>
            <img src={imgHero} alt="hero img; format: png;"/>
           </section>
        </header>
    </div>
  )
}
