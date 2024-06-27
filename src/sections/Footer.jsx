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
                            <div className='flex gap-2'>
                                <img src='https://wearetto.com/cdn/shop/t/37/assets/Visa-icon.svg?v=94240440364377605701717066438' />
                                <img src='https://wearetto.com/cdn/shop/t/37/assets/mastercard-icon.svg?v=150996548265926269451717066386' />
                                <img src='https://wearetto.com/cdn/shop/t/37/assets/g-pay.svg?v=139935103900752204101717066365' />
                                <img src='https://wearetto.com/cdn/shop/t/37/assets/phone-pay.svg?v=5377371705389911851717066396' />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <img src='https://wearetto.com/cdn/shop/t/37/assets/upi.svg?v=57122457873533601141717066437' />
                            <img src='https://wearetto.com/cdn/shop/t/37/assets/rupay.svg?v=112369234227991967181717066406' />
                        </div>
                    </div>

                    {/* Sales Partners */}
                    <div className='w-full flex flex-col mr-1 mt-7 gap-3'>
                        <div className='flex'>
                            <img className='w-[78px]' src='https://wearetto.com/cdn/shop/t/37/assets/Nykaa_svg.png?v=161076393093327966561717066391' />
                            <img className='w-[78px]' src='https://wearetto.com/cdn/shop/t/37/assets/AJIO-logo-Brandlogos.net.svg?v=33279521735371835261717066331' />
                        </div>
                        <div className='flex gap-4'>
                            <img className='w-[78px]' src='https://wearetto.com/cdn/shop/t/37/assets/myntra-logo.svg?v=34986624081840154861717066388' />
                            <img className='w-[32px]' src='https://wearetto.com/cdn/shop/t/37/assets/flipkart-icon.svg?v=126580597036804047291717066361' />
                            <img className='w-[78px]' src='https://wearetto.com/cdn/shop/t/37/assets/Amazon_(company)-Logo.wine.svg?v=173673986260471230201717066334' />
                        </div>
                    </div>

                </div>
                <img src={logo} className='filter mt-10 invert w-[60px] md:hidden'/>

                <div className='text-[12px] float-right mt-10 md:mt-[130px]'>
                    SANOSYZO PVT.LTD.
                </div>
            </div>
        </div>
    )
}

export default Footer
