import React from 'react';
import'./style/valueService_style.css';
import online from '../../images/icon-online.svg';
import budgeting from '../../images/icon-budgeting.svg';
import onboarding from '../../images/icon-onboarding.svg';
import api from '../../images/icon-api.svg';


export default function ValueService() {
  return (
    <div className='valueService_container w-full flex justify-center'>
        <main className='wrapper py-16'>
            <header>
                <h3 className='text-3xl text-center md:text-left'>Why choose Easybank?</h3>
                <p className='my-8 text-lg text-center md:text-left'>
                    We leverage Open Banking to turn your bank account into your financial hub.
                    <br />
                    Control your finances like never before.
                </p>
            </header>
            <section className='valueItem grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-4 md:grid-rows-2 xl:grid-rows-1 justify-center md:justify-between'>
                <div className='valueItem_text'>
                    <img src={online} alt="Online banking icon; format: svg" />
                    <h4>Online Banking</h4>
                    <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
                <div className='valueItem_text'>
                    <img src={budgeting} alt="Simple Budgeting icon; format: svg" />
                    <h4 className='text-xl'>Simple Budgeting</h4>
                    <p>See exctly where your money goes each month. Receieve notificatons when you close to hitting your limits.</p>
                </div>
                <div className='valueItem_text'>
                    <img src={onboarding} alt="Fast Onboarding icon; format: svg" />
                    <h4 className='text-xl'>Fast Onboarding</h4>
                    <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
                <div className='valueItem_text'>
                    <img src={api} alt="Open API icon; format: svg" />
                    <h4 className='text-xl'>Open API</h4>
                    <p>Manage your savings, investments, pension and much more from one account. Tracking your money has never ben easier.</p>
                </div>
            </section>
        </main>
    </div>
  )
}
