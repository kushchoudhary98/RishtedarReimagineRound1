import React from 'react'
import HeroText from '../components/HeroText'
import heroPic from '../assets/hero-pic.png'
import heroPicBG from '../assets/hero-pic-bg.png'
import heroPic1 from '../assets/hero-pic-1.jpg'
import heroPic2 from '../assets/hero-pic-2.jpg'
import heroPic3 from '../assets/hero-pic-3.jpg'
import { useTransform, useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import Features from './Features'

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const heroTextOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const heroTextY = useTransform(scrollYProgress, [0.001, 0.1], [0, -30]);
    const heroBGScale = useTransform(scrollYProgress, [0.001, 0.1], [1, 0.5]);
    const heroBGOpacity = useTransform(scrollYProgress, [0.001, 0.1], [0.25, 0]);
    const heroBGRotate = useTransform(scrollYProgress, [0.001, 0.1], [0, 45]);
    const heroPicRotate = useTransform(scrollYProgress, [0.1, 0.3], [0, 45]);
    const heroPicOpacity = useTransform(scrollYProgress, [0.3, 0.35], [1, 0]);
    const heroPicXMob = useTransform(scrollYProgress, [0.1, 0.3], ["0%", "0%"]);
    const heroPicX = useTransform(scrollYProgress, [0.1, 0.3], ["0%", "-50%"]);
    const heroPicYMob = useTransform(scrollYProgress, [0.1, 0.3], ["0%", "50%"]);
    const heroPicY = useTransform(scrollYProgress, [0.1, 0.3], ["0%", "0%"]);
    const heroPicScale = useTransform(scrollYProgress, [0.1, 0.3], [1, 0.8]);
    const heroPicScaleMob = useTransform(scrollYProgress, [0.1, 0.3], [1, 0.85]);

    const isMobile = screen.width < 768;
    console.log(isMobile)

    return (
        <div className='w-screen'>
            <div ref={ref} className='h-[250vh] w-screen md:w-full'>
                <div className='sticky flex flex-col md:flex-row-reverse md:top-[13vh] top-[10vh]'>
                    <div className='relative flex justify-center items-center w-screen md:w-[50vw] h-[50vh] md:h-[87vh]'>
                        <motion.div className='absolute overflow-hidden md:w-full w-screen h-full' style={{ opacity: heroPicOpacity, x: isMobile ? heroPicXMob : heroPicX, y: isMobile ? heroPicYMob : heroPicY, scale: isMobile ? heroPicScaleMob : heroPicScale }}>
                            <motion.div className='relative w-full h-full' style={{ rotate: heroPicRotate }}>
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 1
                                    }}
                                    src={heroPic} className='z-10 absolute rounded-full object-contain w-[320px] md:w-[70vh] left-1/2 top-1/2 -translate-y-[55%] -translate-x-[55%] -rotate-45 drop-shadow-hero' />
                            </motion.div>
                        </motion.div>
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.25 }}
                            transition={{
                                duration: 2
                            }}
                            style={{ scale: heroBGScale, opacity: heroBGOpacity, rotate: heroBGRotate }}
                            src={heroPicBG} className='-z-10 relative md:h-[90%] object-cover opacity-25 rounded-full' />
                        <motion.div className='absolute h-full w-full' style={{ opacity: heroTextOpacity }}>
                            <motion.img
                                initial={isMobile ? { opacity: 0, left: "40vw", top: "20vh" } : { opacity: 0, left: "40%", top: "40%" }}
                                animate={isMobile ? { opacity: 1, left: "20vw", top: "0vh" } : { opacity: 1, left: "20%", top: "5%" }}
                                transition={{
                                    duration: 1,
                                    ease: "circOut"
                                }}
                                src={heroPic1} alt="super groove" className='absolute w-[62px] md:w-[120px] h-[62px] md:h-[120px] left-[50%] object-cover border-[4px] md:border-[8px] border-[#EEEEEE] rounded-full drop-shadow-hero-sub' />
                            <motion.img
                                initial={isMobile ? { opacity: 0, left: "50vw", top: "10vh" } : { opacity: 0, left: "45%", top: "45%" }}
                                animate={isMobile ? { opacity: 1, left: "70vw", top: "28vh" } : { opacity: 1, left: "70%", top: "60%" }}
                                transition={{
                                    duration: 1,
                                    ease: "circOut",
                                    delay: 0.25
                                }}
                                src={heroPic2} alt="squishy" className='absolute w-[52px] md:w-[85px] h-[52px] md:h-[85px] left-[70vw] top-[28vh] object-cover border-[4px] border-[#EEEEEE] rounded-full drop-shadow-hero-sub' />
                            <motion.img
                                initial={isMobile ? { opacity: 0, left: "30vw", top: "15vh" } : { opacity: 0, left: "50%", top: "50%" }}
                                animate={isMobile ? { opacity: 1, left: "10vw", top: "23vh" } : { opacity: 1, left: "20%", top: "55%" }}
                                transition={{
                                    duration: 1,
                                    ease: "circOut",
                                    delay: 0.5
                                }}
                                src={heroPic3} alt="infiknit" className='absolute w-[42px] md:w-[70px] h-[42px] md:h-[70px] left-[10vw] top-[23vh] object-cover border-[4px] border-[#EEEEEE] rounded-full drop-shadow-hero-sub' />
                        </motion.div>
                    </div>
                    <motion.div
                        style={{ opacity: heroTextOpacity, y: heroTextY }}
                        className='relative flex justify-start items-center md:w-[50vw] md:h-[87vh]'>
                        <HeroText />
                    </motion.div>
                    <Features scroll={scrollYProgress} isMobile={isMobile} />
                </div>
            </div>
        </div>
    )
}
