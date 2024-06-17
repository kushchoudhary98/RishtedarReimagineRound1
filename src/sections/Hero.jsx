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

    const heroTextOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
    const heroTextY = useTransform(scrollYProgress, [0.001, 0.05], [0, -30]);
    const heroBGScale = useTransform(scrollYProgress, [0.001, 0.05], [1, 0.5]);
    const heroBGOpacity = useTransform(scrollYProgress, [0.001, 0.05], [0.25, 0]);
    const heroBGRotate = useTransform(scrollYProgress, [0.001, 0.05], [0, 45]);
    const heroPicRotate = useTransform(scrollYProgress, [0.05, 0.15], [0, 45]);
    const heroPicOpacity = useTransform(scrollYProgress, [0.15, 0.17], [1, 0]);
    const heroPicXMob = useTransform(scrollYProgress, [0.05, 0.15], ["0vw", "30vw"]);
    const heroPicX = useTransform(scrollYProgress, [0.05, 0.15], ["0vw", "-12.25vw"]);
    const heroPicYMob = useTransform(scrollYProgress, [0.05, 0.15], ["0vh", "47vh"]);
    const heroPicY = useTransform(scrollYProgress, [0.05, 0.15], ["0vh", "10vh"]);
    const heroPicScale = useTransform(scrollYProgress, [0.05, 0.15], [1, 0.95]);
    const heroPicScaleMob = useTransform(scrollYProgress, [0.05, 0.15], [1, 0.85]);

    const isMobile = screen.width < 768;
    console.log(isMobile)

    return (
        <div className='w-screen'>
            <div ref={ref} className='h-[400vh] w-screen md:w-full'>
                <div className='sticky flex flex-col md:flex-row-reverse top-[10vh] md:top-[20vh]'>
                    <div className='relative w-screen md:w-[50vw] h-[360px] md:h-[80vh] md:right-0'>
                        <motion.div className='' style={{opacity: heroPicOpacity, rotate: heroPicRotate, x: isMobile?heroPicXMob:heroPicX, y: isMobile?heroPicYMob:heroPicY, scale: isMobile?heroPicScaleMob:heroPicScale}}>
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 1
                                }}
                                src={heroPic} className='z-10 absolute rounded-full object-cover left-[5vw] top-[6vh] w-[320px] md:w-[550px] -rotate-45 drop-shadow-hero' />
                        </motion.div>
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.25 }}
                            transition={{
                                duration: 2
                            }}
                            style={{ scale: heroBGScale, opacity: heroBGOpacity, rotate: heroBGRotate }}
                            src={heroPicBG} className='-z-10 absolute md:h-[650px] object-cover -top-2 md:-top-14 md:left-20 opacity-25 rounded-full' />
                        <motion.div style={{ opacity: heroTextOpacity }}>
                            <motion.img
                                initial={isMobile ? { opacity: 0, left: "40vw", top: "20vh" } : { opacity: 0, left: 400, top: 160 }}
                                animate={isMobile ? { opacity: 1, left: "20vw", top: "0vh" } : { opacity: 1, left: 180, top: -60 }}
                                transition={{
                                    duration: 1,
                                    ease: "circOut"
                                }}
                                src={heroPic1} alt="super groove" className='absolute w-[62px] md:w-[120px] h-[62px] md:h-[120px] left-[20vw] object-cover border-[4px] md:border-[8px] border-[#EEEEEE] rounded-full drop-shadow-hero-sub' />
                            <motion.img
                                initial={isMobile ? { opacity: 0, left: "50vw", top: "10vh" } : { opacity: 0, left: 300, top: 200 }}
                                animate={isMobile ? { opacity: 1, left: "70vw", top: "28vh" } : { opacity: 1, left: 550, top: 340 }}
                                transition={{
                                    duration: 1,
                                    ease: "circOut",
                                    delay: 0.25
                                }}
                                src={heroPic2} alt="squishy" className='absolute w-[52px] md:w-[85px] h-[52px] md:h-[85px] left-[70vw] top-[28vh] object-cover border-[4px] border-[#EEEEEE] rounded-full drop-shadow-hero-sub' />
                            <motion.img
                                initial={isMobile ? { opacity: 0, left: "30vw", top: "15vh" } : { opacity: 0, left: 400, top: 250 }}
                                animate={isMobile ? { opacity: 1, left: "10vw", top: "23vh" } : { opacity: 1, left: 150, top: 300 }}
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
                        className='relative md:w-[50vw] md:top-4'>
                        <HeroText />
                    </motion.div>
                    <Features scroll={scrollYProgress} />
                </div>
            </div>
        </div>
    )
}
