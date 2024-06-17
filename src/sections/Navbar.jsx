import logo from '../assets/logo.svg'
import cart_icon from '../assets/cart.svg'
import search_icon from '../assets/search.svg'
import hamburger_icon from '../assets/hamburger.svg'

export default function Navbar() {
  return (
    <nav className='flex items-center ml-5 justify-between'>
        <div className='flex items-center'>
            <img src={logo} className='w-[55px] md:w-[65px] m-6' />
            <div className='hidden md:flex font-medium text-lg ml-7 gap-10' style={{fontFamily: "Inter"}}>
                <a href="#">Home</a>
                <a href="#">New Launch</a>
                <a href="#">Store</a>
                <button>More links +</button>
            </div>
        </div>
        <div className='flex justify-center items-center m-6 md:mx-10 gap-7 md:gap-10'>
            <img src={search_icon} className='w-[20px] md:w-[23px]' />
            <img src={cart_icon} className='w-[20px] md:w-[23px]' />
            <img src={hamburger_icon} className='w-[20px] md:hidden' />
        </div>
    </nav>
  )
}
