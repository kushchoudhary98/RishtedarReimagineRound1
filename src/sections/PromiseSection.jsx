import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import pediatrician from '../assets/products/Paediatrician.png'
import threeXgrowth from '../assets/products/3xgrowth.png'
import freeD from '../assets/products/FreeD.png'
import madeInIndia from '../assets/products/madeInIndia.png'
import recycled from '../assets/products/recycled.png'
import warrenty from '../assets/products/warrenty.png'
import blackShoe from '../assets/products/blackShoe.png'
import pinkShoe from '../assets/products/pinkShoe.png'
import blueShoe from '../assets/products/blueShoe.png'
import lightBlueShoe from '../assets/products/lightBlueShoe.png'
import spaceSurferRed from '../assets/products/SpaceSurferRed.webp'
import summerSwim from '../assets/products/SummerSwim.webp'
import redShoe from '../assets/products/redShoe.png'
import crossCourt from '../assets/products/CrossCourt.webp'

function PromiseSection() {

  const products = [
    {
      image: pinkShoe,
      name: "Candy Floss",
      price: "2,550"
    },
    {
      image: lightBlueShoe,
      name: "Breeze Blue",
      price: "2,550"
    },
    {
      image: blueShoe,
      name: "Happy Hopper",
      price: "3,050"
    },
    {
      image: blackShoe,
      name: "All Black",
      price: "2,550"
    }, {
      image: redShoe,
      name: "Color Pop",
      price: "2,850"
    }, {
      image: summerSwim,
      name: "Summer Swim",
      price: "2,750"
    }, {
      image: spaceSurferRed,
      name: "Space Surfer Red",
      price: "2,650"
    },
    {
      image: crossCourt,
      name: "Cross Court",
      price: "2,699"
    }]

  const [currentIndex, setCurrentIndex] = useState(0);
  const productWidth = 297; // Width of each product card (including margins)
  const [visibleProducts, setVisibleProducts] = useState(1); // Number of visible products at a time (adjust as needed)

  const scrollHandlerNext = () => {
    const maxIndex = products.length - visibleProducts;
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setVisibleProducts(4);
      } else if (screenWidth >= 992) {
        setVisibleProducts(3);
      } else if (screenWidth >= 768) {
        setVisibleProducts(2);
      } else {
        setVisibleProducts(1);
      }
    };

    handleResize(); // Initial calculation
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full pt-32 bg-white'>

      {/* Our Promise Section */}
      <div className='flex items-start justify-center flex-col'>

        {/* heading text */}
        <div className='flex font-fredoka text-[25px] md:text-[40px] md:px-[50px] px-[20px]'>
          <span>OUR</span>
          <span>&nbsp;</span>
          <span className='font-semibold ml-1'>
            PROMISE
          </span>
        </div>

        <div className='w-full lg:px-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-2 text-[14px] md:text-[18px] my-[50px] md:my-[100px] font-fredoka'>

          <div className='flex w-full md:w-[45%] md:justify-end justify-center gap-2'>
            <div className='w-[100px] md:w-[190px] flex flex-col items-center justify-center gap-2'>
              <img src={pediatrician} className='md:w-[150px] w-[80px]' />
              <p className='text-center w-full'>Paediatrician<br />Approved</p>
            </div>
            <div className='w-[100px] md:w-[190px] flex flex-col items-center justify-center gap-2'>
              <img src={threeXgrowth} className='w-[80px] md:w-[150px]' />
              <p className='text-center w-full'>3x<br />Growth</p>
            </div>
            <div className='w-[100px] md:w-[190px] flex flex-col items-center justify-center gap-2'>
              <img src={freeD} className='w-[80px] md:w-[150px]' />
              <p className='text-center w-full'>Recycled<br /> Materials</p>
            </div>
          </div>

          <div className='flex w-full md:w-[45%] md:justify-start justify-center gap-2'>
            <div className='w-[100px] md:w-[190px] flex flex-col items-center justify-center gap-2'>
              <img src={madeInIndia} className='w-[80px] md:w-[150px]' />
              <p className='text-center w-full'>Made in<br /> India</p>
            </div>
            <div className='w-[100px] md:w-[190px] flex flex-col items-center justify-center gap-2'>
              <img src={recycled} className='w-[80px] md:w-[150px]' />
              <p className='text-center w-full'>Free<br /> Delivery</p>
            </div>
            <div className='w-[100px] md:w-[190px] flex flex-col items-center justify-center gap-2'>
              <img src={warrenty} className='w-[80px] md:w-[150px]' />
              <p className='text-center w-full'>365 Days<br /> Warrenty</p>
            </div>
          </div>
        </div>
      </div>

      {/* Areeto's Fresh Pick */}
      <div className='w-full my-5 md:mt-10 md:px-[50px] flex flex-col justify-center items-start'>
        {/* Text for the FRESH PICK SECTION */}
        <div className='text-[25px] font-fredoka md:text-[40px]'>
          <div className=''><span className='font-semibold'>ARETTO'S</span>
            <span className='ml-3'>FRESH PICKS</span>
          </div>
        </div>

        {/* Cards Section */}
        <div className='flex w-[84%] h-[500px] overflow-hidden mt-10 justify-start items-center font-fredoka'>
          {/* <motion.button id='pre-btn' className='absolute left-0 ml-10 opacity-60 bg-[#EDECEC] border-[2px] border-[#E3DEDE] p-4 rounded-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
          </motion.button> */}
          {/* CARD */}
          <motion.div
            id='products-scroll'
            className='flex gap-7 w-[300vw] transition-all'
            animate={{ transform: `translateX(-${currentIndex * productWidth}px)` }}>
            {products.map((product) => {
              return (
                <div className='md:w-[270px] md:h-[480px] rounded-xl overflow-hidden flex flex-col border-[1px] border-[#EDECEC]'>
                  <div className='h-full w-full flex flex-col justify-between'>
                    <div className='bg-[#f6f6f6] overflow-hidden h-[58%] w-full flex items-center justify-center'>
                      <img src={product.image} />
                    </div>
                    <div className='bg-white text-[21px] flex flex-col items-start justify-start ml-3'>
                      <p className='text-[#656565]'>Aretto Leaps Kids Shoes</p>
                      <p className='font-medium'>{product.name}</p>
                      <p className='font-medium mt-2'>&#8377; {product.price}</p>
                    </div>
                    <button className='bg-[#FBED28] text-[#3B3059] m-3 font-medium hidden md:flex md:items-center md:justify-center py-[5px] rounded-lg'>ADD TO CART</button>
                    <button className='bg-[#FBED28] text-[#3B3059] m-3 font-medium flex md:hidden py-1 rounded-3xl items-center justify-center w-3/4'>Shop Now</button>
                  </div>
                </div>
              )
            })}
          </motion.div>
          <motion.button
            id='next-btn'
            onClick={scrollHandlerNext}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            className='absolute left-[85%] opacity-60 bg-[#EDECEC] border-[2px] border-[#E3DEDE] p-4 rounded-2xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default PromiseSection