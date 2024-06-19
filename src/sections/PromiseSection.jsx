import React from 'react'
import pediatrician from '../assets/products/Paediatrician.png'
import threeXgrowth from '../assets/products/3xgrowth.png'
import freeD from '../assets/products/FreeD.png'
import madeInIndia from '../assets/products/madeInIndia.png'
import recycled from '../assets/products/recycled.png'
import warrenty from '../assets/products/warrenty.png'
import blackShoe from '../assets/products/blackShoe.png'
import pinkShoe from '../assets/products/pinkShoe.png'
import blueShoe from '../assets/products/blueShoe.png'
import redShoe from '../assets/products/redShoe.png'

function PromiseSection() {
  return (
    <div className='w-full h-[120vh]'>

      {/* Our Promise Section */}
      <div className='h-[40%] flex items-center justify-center flex-col'>

        {/* heading text */}
        <div className='flex text-[25px] md:text-[40px] md:px-[50px]'>
          OUR
          <span className='font-bold ml-1'>
            PROMISE
          </span>
        </div>

        <div className='w-full lg:px-10 flex flex-col md:flex-row items-center justify-center text-[14px] md:text-[18px] md:mt-10'>

          <div className='flex w-full md:w-[45%] justify-between'>
            <div className='w-[170px] md:w-[190px] flex flex-col items-center justify-center gap-2'>
              <img src={pediatrician} className='md:w-[150px] w-[80px]' />
              <p className='text-center w-full'>Paediatrician Approved</p>
            </div>
            <div className='w-[170px] md:w-[190px] flex flex-col items-center justify-center gap-2'>
              <img src={threeXgrowth} className='w-[80px] md:w-[150px]' />
              <p>3x Growth</p>
            </div>
            <div className='w-[170px] md:w-[190px] flex flex-col items-center justify-center gap-2'>
              <img src={freeD} className='w-[80px] md:w-[150px]' />
              <p className='text-center w-full'>Recycled Materials</p>
            </div>
          </div>

          <div className='flex w-full md:w-[45%] justify-evenly'>
            <div className='w-[170px] md:w-[190px] flex flex-col items-center justify-center gap-2'>
              <img src={madeInIndia} className='w-[80px] md:w-[150px]' />
              <p className='text-center w-full'>Made in India</p>
            </div>
            <div className='w-[170px] md:w-[190px] flex flex-col items-center justify-center gap-2'>
              <img src={recycled} className='w-[80px] md:w-[150px]' />
              <p className='text-center w-full'>Free Delivery</p>
            </div>
            <div className='w-[170px] md:w-[190px] flex flex-col items-center justify-center gap-2'>
              <img src={warrenty} className='w-[80px] md:w-[150px]' />
              <p className='text-center w-full'>365 Days Warrenty</p>
            </div>
          </div>
        </div>
      </div>

      {/* Areeto's Fresh Pick */}
      <div className='h-[55%] w-full mt-5 md:px-[50px] flex flex-col justify-center items-center z-100'>
        {/* Text for the FRESH PICK SECTION */}
        <div className='text-[25px] md:text-[40px] lg:px-[50px]'>
          <div className='font-bold'>AREETO'S
            <span className='font-normal ml-3'>FRESH PICKS</span>
          </div>
        </div>

        {/* Cards Section */}
        <div className='flex w-full h-[90%] xl:pt-8 lg:gap-10 gap-2 justify-between items-center'>

          {/* CARD */}
          <div className='w-[100%] h-[90%] md:w-[30%] md:h-[70%] lg:h-[90%]  rounded-2xl overflow-hidden px-3 py-5 flex flex-col border-[1px]'>
            <div className='h-full w-full flex flex-col justify-between'>
              <div className='bg-[#f6f6f6] overflow-hidden h-[60%] w-full flex items-center justify-center'>
                <img src={blackShoe} />
              </div>
              <div className='bg-white w-full felx flex-col items-center justify-center'>
                <p className='w-full'>Aretto Leaps Kids Shoes <br /><span className='font-bold'> All Black</span></p>
                <p className='w-full'>&#8377; 2550</p>
              </div>
              <div className='bg-yellow-300 hidden md:flex md:items-center md:justify-center py-1 rounded-lg'>Add To Cart</div>
              <div className='bg-yellow-300 flex md:hidden py-1 rounded-3xl items-center justify-center w-3/4'>Shop Now</div>
            </div>

          </div>

          <div className='w-[100%] h-[90%] md:w-[30%] md:h-[70%] lg:h-[90%] rounded-2xl overflow-hidden px-3 py-5 flex flex-col border-[1px]'>
            <div className='h-full w-full flex flex-col justify-between'>
              <div className='bg-[#f6f6f6] overflow-hidden h-[60%] w-full flex items-center justify-center'>
                <img src={blueShoe} />
              </div>
              <div className='bg-white w-full felx flex-col'>
                <p className='w-full'>Aretto Leaps Kids Shoes <br /><span className='font-bold'> All Black</span></p>
                <p className='w-full'>&#8377; 2550</p>
              </div>
              <div className='bg-yellow-300 hidden md:flex md:items-center md:justify-center py-1 rounded-lg'>Add To Cart</div>
              <div className='bg-yellow-300 flex md:hidden py-1 rounded-3xl items-center justify-center w-3/4'>Shop Now</div>
            </div>

          </div>

          <div className='ww-[60%] h-[90%] md:w-[30%] md:h-[70%] lg:h-[90%] rounded-2xl overflow-hidden px-3 py-5 hidden md:flex md:flex-col border-[1px]'>
            <div className='h-full w-full flex flex-col justify-between'>
              <div className='bg-[#f6f6f6] overflow-hidden h-[60%] w-full flex items-center justify-center'>
                <img src={redShoe} />
              </div>
              <div className='bg-white w-full felx flex-col'>
                <p className='w-full'>Aretto Leaps Kids Shoes <br /><span className='font-bold'> All Black</span></p>
                <p className='w-full'>&#8377; 2550</p>
              </div>
              <div className='bg-yellow-300 hidden md:flex md:items-center md:justify-center py-1 rounded-lg'>Add To Cart</div>
              <div className='bg-yellow-300 flex md:hidden py-1 rounded-3xl items-center justify-center w-3/4'>Shop Now</div>
            </div>

          </div>

          <div className='w-[60%] h-[90%] md:w-[30%] md:h-[70%] lg:h-[90%] rounded-2xl overflow-hidden px-3 py-5 hidden md:flex md:flex-col border-[1px]'>
            <div className='h-full w-full flex flex-col justify-between'>
              <div className='bg-[#f6f6f6] overflow-hidden h-[60%] w-full flex items-center justify-center'>
                <img src={pinkShoe} />
              </div>
              <div className='bg-white w-full felx flex-col'>
                <p className='w-full'>Aretto Leaps Kids Shoes <br /><span className='font-bold'> All Black</span></p>
                <p className='w-full'>&#8377; 2550</p>
              </div>
              <div className='bg-yellow-300 hidden md:flex md:items-center md:justify-center py-1 rounded-lg'>Add To Cart</div>
              <div className='bg-yellow-300 flex md:hidden py-1 rounded-3xl items-center justify-center w-3/4'>Shop Now</div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}

export default PromiseSection