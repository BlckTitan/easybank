import React from 'react';
import './style/hero_style.css';
import imgHero from '../../images/image-mockups.png';

export default function Hero() {
  return (
    <div className='hero_container w-full flex justify-center'>
        <header className='wrapper flex flex-col xl:flex-row xl:justify-between'>
           <section className='heroText w-full xl:w-2/5  h-full flex flex-col justify-center items-start'>
            <h1 className='text-5xl mb-4'>Next generation digital banking</h1>
            <p className='text-lg mb-4'>
                Take your financial life online.
                Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </p>
            <button className='button_gradient w-40 h-14 xl:h-12 rounded-full flex justify-center items-center'>Request invite</button>
           </section>
           <section className='heroImage w-full xl:w-3/5 h-full flex justify-end items-center relative'>
            <img src={imgHero} alt="hero img; format: png;"/>
           </section>
        </header>
    </div>
  )
}
