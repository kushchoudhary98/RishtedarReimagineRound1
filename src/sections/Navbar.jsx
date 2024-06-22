import logo from '../assets/logo.svg'
import cart_icon from '../assets/cart.svg'
import search_icon from '../assets/search.svg'
import hamburger_icon from '../assets/hamburger.svg'
import { easeInOut, motion } from 'framer-motion'
import { useState } from 'react'
import NavFlyout from '../components/NavFlyout'
import whyArettoPic from '../assets/nav/why_aretto.svg'
import sizePic from '../assets/nav/size.png'
import blogPic from '../assets/nav/blog.webp'
import pressPic from '../assets/nav/press.png'
import defaultPic from '../assets/nav/default.png'

export default function Navbar() {

  const [currIndex, setCurrIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const setIndex = (num) => {
    setPrevIndex(currIndex);
    setCurrIndex(num);
  }

  const flyoutContent = () => {
    return (
      <div className="w-[500px] h-[204px] bg-white shadow-lg rounded-xl flex flex-row justify-between gap-5">
        <div className='p-6 font-inter text-base flex flex-col gap-5'>
          <a href="#" onMouseEnter={(e) => { e.preventDefault(); setIndex(1); }} className="hover:underline">
            Why Aretto
          </a>
          <a href="#" onMouseEnter={(e) => { e.preventDefault(); setIndex(2); }} className="hover:underline">
            Size Guide
          </a>
          <a href="#" onMouseEnter={(e) => { e.preventDefault(); setIndex(3); }} className="hover:underline">
            Blogs
          </a>
          <a href="#" onMouseEnter={(e) => { e.preventDefault(); setIndex(4); }} className="hover:underline">
            In the Press
          </a>
        </div>
        <div className='w-[300px] h-full overflow-hidden'>
          <motion.div
            initial={{ y: -prevIndex * 204 }}
            animate={{ y: -currIndex * 204 }}
            transition={{
              ease: easeInOut,
              duration: 1
            }}
            className='h-[400%] w-full'
          >
            <img className='h-[204px] w-full object-cover' src={defaultPic} />
            <img className='h-[204px] w-full object-cover' src={whyArettoPic} />
            <img className='h-[204px] w-full object-cover' src={sizePic} />
            <img className='h-[204px] w-full object-cover' src={blogPic} />
            <img className='h-[204px] w-full object-cover' src={pressPic} />
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <nav className='flex items-center justify-center'>
      <div className='flex items-center justify-between w-full z-50'>
        <div className='flex items-center'>
          <img src={logo} className='w-[55px] md:w-[65px] m-6' />
          <div className='hidden md:flex font-medium text-lg ml-7 gap-10' style={{ fontFamily: "Inter" }}>
            <a href="#">Home</a>
            <a href="#">New Launch</a>
            <a href="#">Store</a>
            <NavFlyout href="#" FlyoutContent={flyoutContent} >
              More links +
            </NavFlyout>
          </div>
        </div>
        <div className='flex justify-center items-center m-6 md:mx-10 gap-7 md:gap-10'>
          <img src={search_icon} className='w-[20px] md:w-[23px]' />
          <img src={cart_icon} className='w-[20px] md:w-[23px]' />
          <img src={hamburger_icon} className='w-[20px] md:hidden' />
        </div>
      </div>
      <motion.div
        id='nav-flyout'
        className='absolute top-[10vh]'>

      </motion.div>
    </nav>
  )
}
