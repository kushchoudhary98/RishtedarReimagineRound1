import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import img1 from '../assets/style/1.webp'
import img2 from '../assets/style/2.webp'
import img3 from '../assets/style/3.webp'
import img4 from '../assets/style/4.webp'
import img5 from '../assets/style/5.webp'
import img6 from '../assets/style/6.webp'
import img7 from '../assets/style/7.webp'
import img8 from '../assets/style/8.webp'
import img9 from '../assets/style/9.webp'
import img10 from '../assets/style/10.webp'

export default function Testimonial() {

    const [ y, setY ] = useState(0);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (value) => {
        setY(value);
    })

    const xscroll = useTransform(scrollYProgress, [0, 0.4], ["0vw", "-253.25vh"]);
    const text1Opacity = useTransform(scrollYProgress, [0.32, 0.33], [1, 0]);
    const imgHeight = useTransform(scrollYProgress, [0.2, 0.4, 0.5], ["65vh", "110vh", "30vh"]);
    const imgWidth = useTransform(scrollYProgress, [0.4, 0.5], ["50vw", "32vw"]);
    const yscroll = useTransform(scrollYProgress, [0.2, 0.4, 0.45, 1], ["0vh", "-35vh", "-35vh", "-115vh"]);
    
    const verticalTop = useTransform(scrollYProgress, [0.45, 0.5], ["100vh", "30vh"]);

    return (
        <div ref={ref} className='h-[500vh]'>
            <div className='sticky top-0 w-full h-screen'>
                <div className='w-full h-screen overflow-hidden'>
                    <motion.h2 style={{ opacity: text1Opacity }} className='relative top-16 font-fredoka w-full flex justify-center text-[50px]'>STYLE 'EM  LIKE  A  CHAMP!</motion.h2>
                    <motion.div style={{ x: xscroll }} className='absolute z-20 flex flex-row top-[35vh] w-[400vw]'>
                        <img className='h-[65vh] object-cover' src={img1} />
                        <img className='h-[65vh] object-cover' src={img7} />
                        <img className='h-[65vh] object-cover' src={img4} />
                        <img className='h-[65vh] object-cover' src={img8} />
                        <motion.div style={{ y: yscroll}} className='flex flex-col'>
                            <motion.img style={{ height: imgHeight, width: imgWidth }} className='h-[30vh] w-[32vw] object-cover' src={img5} />
                            <img src={img9} alt="6" className="w-full h-[30vh] object-cover" />
                            <img src={img2} alt="7" className="w-full h-[30vh] object-cover" />
                            <img src={img6} alt="8" className="w-full h-[30vh] object-cover" />
                            <img src={img10} alt="10" className="w-full h-[30vh] object-cover" />
                            <img src={img3} alt="9" className="w-full h-[30vh] object-cover" />
                        </motion.div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={(y > 0.45)?{ opacity: 1, y: 0}:{ opacity: 0, y: 30}}
                        transition={{
                            ease: "circInOut"
                        }}
                        className='absolute top-16 font-fredoka font-medium flex left-[40vw] w-[400px] text-[40px]'>WHAT  THE  PARENTS  HAVE  TO  SAY</motion.h2>
                </div>
            </div>
        </div>
    )
}
