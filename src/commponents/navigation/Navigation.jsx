import React, {useState} from 'react';
import './style/navigation_style.css';
import logo from '../../images/logo.svg';
import hamburger from '../../images/icon-hamburger.svg';
import closeIcon from '../../images/icon-close.svg';

export default function Navigation() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='nav_container w-full h-16 flex justify-center fixed'>
        <nav className='wrapper h-16 flex justify-between items-center relative'>
            <div className='logo'>
                <img src={logo} alt="easybank logo; format: svg"/>
            </div>

            <div className='links'>
                <ul className={(toggle === true) ? 
                    'flex flex-col xl:flex-row absolute xl:static top-20 xl:top-0 right-0 w-full h-48 rounded-md ' : 
                    'hidden xl:flex flex-col xl:flex-row fixed xl:static'}
                >
                    <li><a href="!#">Home</a></li>
                    <li><a href="!#">About</a></li>
                    <li><a href="!#">Contact</a></li>
                    <li><a href="!#">Blog</a></li>
                    <li><a href="!#">Careers</a></li>
                </ul>
            </div>

            <div className='hamburger'>
                <button className='button_gradient w-40 h-12 rounded-full hidden xl:flex justify-center items-center'>Request invite</button>
                <div className='flex items-center justify-center xl:hidden' onClick={() => setToggle(!toggle)}>
                    {(toggle === false) ? <img src={hamburger} alt='hamburger icon; format: svg;'/>
                    : <img src={closeIcon} alt='close icon; format: svg;'/>
                    }
                </div>
            </div>
        </nav>
    </div>
  )
}
