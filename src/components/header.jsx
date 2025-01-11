import logo from '../assets/logo.png';
import hamburger from '../assets/hamburger.png';
import close from '../assets/close.png';
import { useState } from 'react';
const Header=()=>{
    const [isopen,setIsopen]=useState(false);

    return(
        <div className='flex items-center justify-between md:py-5 py-4 md:px-10 px-4 border-b shadow-md'>
            <div className="logo">
                <img src={logo} alt="logo" className='md:w-24 w-[100px]'/>
            </div>

            <ul className="navItems md:flex hidden items-center justify-center md:text-xl md:gap-12 font-semibold">
                    <li>Crypto Taxes</li>
                    <li>Free Tools</li>
                    <li>Resource Center</li>
                    <button className='bg-blue-600 text-white md:px-4 md:py-2 rounded-md'>Get Started</button>
            </ul>

            <div className='relative toggle md:hidden' onClick={()=>setIsopen(!isopen)}>
                <img src={(isopen?close:hamburger)} className='w-5'></img>
                {isopen&&<ul className="absolute -right-4 w-[100vw] flex flex-col items-center gap-4 py-4 top-10 bg-white border-2">
                    <li>Crypto Taxes</li>
                    <li>Free Tools</li>
                    <li>Resource Center</li>
                    <button className='bg-blue-600 text-white px-4 py-2 rounded-md'>Get Started</button>
                 </ul>}
            </div>
        </div>
    )
}

export default Header;