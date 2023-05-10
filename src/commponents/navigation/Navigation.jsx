import React, {useState} from 'react';
import './style/navigation_style.css';
import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg'

export default function Navigation() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full flex justify-center'>
        <nav className='wrapper h-16 flex justify-between items-center relative'>
            <div className='logo'>
                <img src={logo} alt="easybank logo; format: svg"/>
            </div>

            <div className='links hidden xl:flex absolute xl:static'>
                <a href="!#">Home</a>
                <a href="!#">About</a>
                <a href="!#">Contact</a>
                <a href="!#">Blog</a>
                <a href="!#">Careers</a>
            </div>

            <div className='hamburger'>
                <button className='button_gradient w-40 h-12 rounded-full hidden xl:flex justify-center items-center'>Request invite</button>
                <div className='flex items-center justify-center xl:hidden' onClick={() => setToggle(!toggle)}>
                    <img src={hamburger} alt='hamburger icon; format: svg;'/>
                </div>
            </div>
        </nav>
    </div>
  )
}
