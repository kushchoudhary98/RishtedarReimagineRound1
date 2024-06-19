import React from 'react'
import intagram from '../assets/footer/instagram.svg'
import youtube from '../assets/footer/youtube.svg'
import twitter from '../assets/footer/twitter.svg'
import facebook from '../assets/footer/facebook.svg'
import logo from '../assets/logo.svg'

function Footer() {
    return (
        <div className='h-[100%] w-[100%] md:w-[100%] bg-black text-white flex flex-col md:flex-row md:pb-14 md:px-[180px]'>
            <div className='w-full flex px-9 pt-12 flex-col text-[14.5px] leading-6 md:text-[14px] md:px-0 md:font-[400]'>
                <p className='font-[600]'>ABOUT ARETTO</p>
                <p className='mt-2'>With imagination, skill, and science we are.
                crafting naturally caring shoes for your kid.
                that grow as your kids' feet grow.</p>

                <p className='mt-5 font-[600]'> PARTNER WITH US</p>
                <p className='mt-3'>Link to fill the form - Click Here</p>
                <p className='mt-3'>Official Email - partner@wearetto.com</p>
                <img src={logo} className='filter invert w-[90px] mt-[70px] hidden md:flex'/>
            </div>

            <div className='w-full flex flex-col text-[14.5px] text-left leading-7 px-9 pt-12 md:text-[14px] md:font-[400] mr-5'>
                <p className='font-[600]'>QUICKLINKS</p>
                <p className='mt-1 hover:text-yellow-400'>Shop by Stage</p>
                <p className='hover:text-yellow-400'>Size Guide</p>
                <p className='hover:text-yellow-400'>Why Aretto</p>
                <p className='hover:text-yellow-400'>Submit a Return / Exchange request</p>
                <p className='hover:text-yellow-400'>Privacy Policy</p>
                <p className='hover:text-yellow-400'>Shipping, Return & Refund Policy</p>
                <p className='hover:text-yellow-400'>FAQ</p>
                <p className='hover:text-yellow-400'>Collaborate with us</p>
                <p className='hover:text-yellow-400'> Gift Card</p>
            </div>

            <div className='w-full text-[14px] leading-6 px-9 pt-12 md:px-3 md:text-[14px] md:font-[400]'>
                <p className='font-[600]'>CONTACT US</p>
                <p className='mt-1'>Email: support@wearetto.com</p>
                <p className=''>Contact: +919309192340</p>
                <p className=''>Address:</p>
                <p className=''> Sanosyzo Private Limited</p>
                <p className='mt-4'>Office 517, Clover Hills Plaza,</p>
                <p className=''>NIBM Rd, Mohammed Wadi,</p>
                <p className=''>Pune, Maharashtra 411048</p>
            </div>

            <div className='w-full px-9 pt-12 md:px-2 md:ml-8 md:text-[13px] md:font-[400]'>
                <p className='font-[600]'>FOLLOW US</p>

                {/* Social media LOGOs */}
                <div className='w-full flex mr-1 mt-2 gap-3'>
                    <img src={intagram} className='w-[30px] h-[30px] bg-white rounded md:w-[26px] md:h-[26px]'/>
                    <img src={youtube} className='w-[30px] h-[30px] bg-white rounded md:w-[26px] md:h-[26px]'/>
                    <img src={twitter} className='w-[30px] h-[30px] bg-white rounded md:w-[26px] md:h-[26px]'/>
                    <img src={facebook} className='w-[30px] h-[30px] bg-white rounded md:w-[26px] md:h-[26px]'/>
                </div>

                <div className='relative'>
                    {/* Payment LOGOs */}
                    <div className='w-full flex flex-col mr-1 mt-2 gap-3'>
                        <div className='mt-10'>
                            <p className=''>
                                visa
                                mastercard
                                gpay
                                phonepay
                            </p>
                        </div>
                        <p>
                            upi
                            rupay
                        </p>
                    </div>

                    {/* Sales Partners */}
                    <div className='w-full flex flex-col mr-1 mt-7 gap-3'>
                        <p className=''>
                            Nykka
                            AJIO
                        </p>
                        <p>
                            myntra
                            flipkart
                            amazon
                        </p>
                    </div>

                    <img src={logo} className='filter invert absolute top-10 right-0 w-[60px] md:hidden'/>
                </div>

                <div className='text-[12px] float-right mt-[50px] md:mt-[130px]'>
                    SANOSYZO PVT.LTD.
                </div>
            </div>
        </div>
    )
}

export default Footer
