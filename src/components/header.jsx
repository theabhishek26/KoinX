import logo from '../assets/logo.png';
import hamburger from '../assets/hamburger.png';
import close from '../assets/close.png';
const Header=()=>{
    return(
        <div className='flex items-center justify-between md:py-5 py-4 md:px-10 px-4 border-b border-black'>
            <div className="logo">
                <img src={logo} alt="logo" className='md:w-24 w-[100px]'/>
            </div>

            <ul className="navItems md:flex hidden items-center justify-center md:text-lg md:gap-12 font-bold">
                    <li>Crypto Taxes</li>
                    <li>Free Tools</li>
                    <li>Resource Center</li>
                    <button className='bg-blue-600 text-white md:px-4 md:py-2 rounded-md'>Get Started</button>
            </ul>

            <div className='toggle md:hidden'>
                <img src={hamburger} className='w-5'></img>
            </div>
        </div>
    )
}

export default Header;