import React from 'react';
import './style/footer_style.css';
import logo from '../../images/logo.svg';
import facebook from '../../images/icon-facebook.svg';
import youtube from '../../images/icon-youtube.svg';
import twitter from '../../images/icon-twitter.svg';
import pintrest from '../../images/icon-pinterest.svg';
import insta from '../../images/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className='footer_container flex justify-center'>
      <main className="wrapper h-full flex  flex-col xl:flex-row items-center xl:justify-between xl:items-center py-16">

        <section className='socials w-full xl:w-4/6 h-full flex flex-col  items-center md:flex-row xl:justify-between'>
          
          <div className='logo_socials w-2/5 h-full flex flex-col items-center xl:items-start xl:justify-between'>
            <div className='logo w-fit h-fit bg-white py-4 xl:py-2 px-6 xl:px-4 rounded-full'>
              <img src={logo} alt="Easybank logo format.svg" className='w-32 h-8  object-coverscale-150 xl:scale-110' />
            </div>
            <div className='social_links w-full h-fit flex justify-center xl:justify-start items-center my-8 xl:my-0'>
              <a href="/#"><img src={facebook} alt="facebook logo format.svg" /></a>
              <a href="/#"><img src={youtube} alt="youtube logo format.svg" /></a>
              <a href="/#"><img src={twitter} alt="twitter logo format.svg" /></a>
              <a href="/#"><img src={pintrest} alt="pinterest logo format.svg" /></a>
              <a href="/#"><img src={insta} alt="instagram logo format.svg" /></a>
            </div>
          </div>
          
          <section className='links w-3/5 grid grid-cols-1  justify-center xl:grid-cols-2 xl:grid-rows-3'>
            <a href="/#">About Us</a>
            <a href="/#">Contact</a>
            <a href="/#">Blog</a>
            <a href="/#">Careers</a>
            <a href="/#">Support</a>
            <a href="/#">Privacy Policy</a>
          </section>

        </section>

        <section className='invite w-full xl:w-2/6 h-full flex flex-col items-center xl:items-end justify-between mt-2 xl:mt-0'>
          <button className='button_gradient w-40 h-14 xl:h-12 rounded-full flex justify-center items-center mb-4 xl:mb-0'>
            Request invite
          </button>
          <p className='text-lg font-normal'>&copy; Easybank. All rights reserved</p>
        </section>

      </main>
    </footer>
  )
}
