import logo from '../assets/logo.svg'
import cart_icon from '../assets/cart.svg'
import search_icon from '../assets/search.svg'
import hamburger_icon from '../assets/hamburger.svg'
import { easeInOut, motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import NavFlyout from '../components/NavFlyout'
import whyArettoPic from '../assets/nav/why_aretto.svg'
import sizePic from '../assets/nav/size.png'
import blogPic from '../assets/nav/blog.webp'
import pressPic from '../assets/nav/press.png'
import defaultPic from '../assets/nav/default.png'
import Hamburger from '../components/Hamburger'

export default function Navbar() {

  const [currIndex, setCurrIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const flyoutContent = () => {
    return (
      <div className="w-[500px] h-[204px] bg-white shadow-lg rounded-xl flex flex-row justify-between gap-5">
        <div className='py-3 pl-5 font-inter text-base flex flex-col gap-0'>
          <a href="#" onMouseEnter={(e) => { setCurrIndex(1); }} onMouseLeave={() => { setPrevIndex(1) }} className="hover:underline py-[10px]">
            Why Aretto
          </a>
          <a href="#" onMouseEnter={(e) => { setCurrIndex(2); }} onMouseLeave={() => { setPrevIndex(2) }} className="hover:underline py-[10px]">
            Size Guide
          </a>
          <a href="#" onMouseEnter={(e) => { setCurrIndex(3); }} onMouseLeave={() => { setPrevIndex(3) }} className="hover:underline py-[10px]">
            Blogs
          </a>
          <a href="#" onMouseEnter={(e) => { setCurrIndex(4); }} onMouseLeave={() => { setPrevIndex(4) }} className="hover:underline py-[10px]">
            In the Press
          </a>
        </div>
        <div className='w-[330px] h-full overflow-hidden'>
          <AnimatePresence>
            <motion.div
              initial={{ y: -prevIndex * 204 }}
              animate={{ y: -currIndex * 204 }}
              exit={{ y: -prevIndex * 204 }}
              transition={{
                ease: easeInOut,
                duration: 0.5
              }}
              className='h-[400%] w-full'
            >
              <img className='h-[204px] w-full object-cover' src={defaultPic} />
              <img className='h-[204px] w-full object-cover' src={whyArettoPic} />
              <img className='h-[204px] w-full object-cover' src={sizePic} />
              <img className='h-[204px] w-full object-cover' src={blogPic} />
              <img className='h-[204px] w-full object-cover' src={pressPic} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 1.5
      }}
      className='flex items-center justify-center'>
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
          <img src={search_icon} className='w-[20px] md:w-[23px] cursor-pointer' />
          <img src={cart_icon} className='w-[20px] md:w-[23px] cursor-pointer' />
          <img
            src={hamburger_icon}
            className='w-[20px] md:hidden cursor-pointer'
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          />
        </div>
      </div>
      <AnimatePresence>
        {isHamburgerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.3} }}
            transition={{
              ease: easeInOut,
              duration: 0.5
            }}
            className='absolute top-[10vh] w-full h-[90vh] bg-white z-40'>
            <Hamburger isOpen={isHamburgerOpen} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
