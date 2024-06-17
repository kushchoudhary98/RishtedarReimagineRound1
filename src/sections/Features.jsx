import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { useState } from "react"
import heroPicBlack from '../assets/hero-pic-black.png'
import superGHighlight from '../assets/techs/super-g-highlight.png'
import superG1 from '../assets/techs/super-g-1.gif'
import superG2 from '../assets/techs/super-g-2.webp'
import superGLogo from '../assets/techs/super-g.png'
import squishyHighlight from '../assets/techs/squishy-highlight.png'
import squishy1 from '../assets/techs/squishy-1.webp'
import squishy2 from '../assets/techs/squishy-2.webp'
import squishyLogo from '../assets/techs/squishy.png'
import infiHighlight from '../assets/techs/infiknit-highlight.png'
import infi1 from '../assets/techs/infiknit-1.webp'
import infi2 from '../assets/techs/infiknit-2.webp'
import infiLogo from '../assets/techs/infiknit.png'


export default function Features(props) {

    const scrollYProgress = props.scroll;

    const [s1, setS1] = useState(false);
    const [s2, setS2] = useState(false);
    const [s3, setS3] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (y) => {
        console.log(y);
        if (y <= 0.2) {
            setS1(false);
            setS2(false);
            setS3(false);
        }
        else if (y > 0.2 && y <= 0.45) {
            setS1(true);
            setS2(false);
            setS3(false);
            console.log("section 1")
        }
        else if (y > 0.45 && y <= 0.7) {
            setS1(false);
            setS2(true);
            setS3(false);
            console.log("section 2")
        }
        else if (y > 0.7 && y <= 1) {
            setS1(false);
            setS2(false);
            setS3(true);
            console.log("section 3")
        }
    })

    const heroBlackOpacity = useTransform(scrollYProgress, [0.16, 0.19], [0, 0.25]);
    const circleOpacity = useTransform(scrollYProgress, [0.18, 0.2], [0, 1]);

    return (
        <div className="absolute top-0 h-screen w-screen flex flex-col items-center justify-center">
            <motion.div style={{ fontFamily: "Fredoka" }} className="absolute w-screen h-fit top-[3vh] md:top-[-20vh] left-0 m-5 md:m-10 text-[23px] md:text-[44px]" >
                <motion.p
                    initial={{ y: 0, opacity: 1 }}
                    animate={s1 ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.2
                    }}
                    className='absolute'>OUR<span>&nbsp;</span><span className='font-semibold'>SECRET WEAPON</span></motion.p>
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={(s2 || s3) ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.2
                    }}
                    className='absolute'>OTHER<span>&nbsp;</span><span className='font-semibold'>TECHNOLOGIES</span></motion.p>
            </motion.div>
            <motion.img
                style={{ opacity: heroBlackOpacity }}
                className='absolute opacity-25 scale-[0.7] md:scale-[0.4] top-[40vh] md:-top-[41vh]'
                src={heroPicBlack} />
            <motion.div style={{ opacity: circleOpacity }} className='absolute top-[42.5vh] md:-top-[10vh] -z-50 bg-[#FFFCD1] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full' />
            <section id="super-g" className="absolute w-screen h-screen">
                <motion.img
                    initial={{opacity: 0}}
                    animate={s1 ? { opacity: 1, x: 0 } : (s2 || s3) ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.5
                    }}
                    className='absolute w-[300px] md:w-[521px] object-cover left-2 top-[15vh] md:top-0'
                    src={superG1} />
                <motion.img
                    initial={{opacity: 0}}
                    animate={s1 ? { opacity: 1, x: 0 } : (s2 || s3) ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.5,
                        delay: 0.5
                    }}
                    className='absolute w-[143px] md:w-[200px] object-cover -right-5 md:left-[25vw] top-[30vh] md:top-[50vh]'
                    src={superG2} />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={s1 ? { opacity: 0.5 } : { opacity: 0 }}
                    transition={{
                        duration: 1
                    }}
                    src={superGHighlight}
                    className='absolute scale-[0.7] md:scale-[0.34] top-[40vh] md:-top-[55vh]' />
                <motion.div
                    initial={{opacity: 0}}
                    animate={s1 ? { opacity: 1, y: 0 } : (s2 || s3) ? { opacity: 0, y: 80 } : { opacity: 0, y: -80 }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.5
                    }}
                    className='absolute flex flex-row md:flex-col w-screen md:w-[28vw] h-[20vh] bottom-0 md:right-0 md:top-[15vh]'>
                    <motion.img className="relative w-[120px] md:w-[150px] object-contain bottom-[8vh] md:bottom-0 left-[6vw] md:left-0" src={superGLogo} />
                    <hr className='relative md:hidden bottom-[10vh] w-[140px] border-[2.5px] rotate-90 left-[20vw]' />
                    <div className='relative md:flex hidden mt-8 gap-2 font-fredoka font-medium text-[15px]'>
                        <p className='bg-[#FBED28] p-1 px-5 rounded-full'>expanding shoes</p>
                        <p className='bg-[#FBED28] p-1 px-5 rounded-full'>everyday growth</p>
                    </div>
                    <p className='relative md:mt-5 bottom-[6vh] md:bottom-0 right-[2vw] md:right-0 font-inter text-[14] md:text-[20px] w-[55vw] md:w-[300px]'>Grooves that adapt to millimetric changes enabling growth.</p>
                </motion.div>
            </section>
            <section id="squishy" className="absolute w-screen h-screen">
                <motion.img
                    initial={{opacity: 0}}
                    animate={s2 ? { opacity: 1, x: 0 } : (s3) ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.5
                    }}
                    className='absolute w-[158px] md:w-[200px] object-cover -left-6 md:left-3 top-[15vh] md:top-[45vh]'
                    src={squishy1} />
                <motion.img
                    initial={{opacity: 0}}
                    animate={s2 ? { opacity: 1, x: 0 } : (s3) ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.5,
                        delay: 0.5
                    }}
                    className='absolute z-30 w-[280px] md:w-[400px] object-cover -right-8 md:left-[15vw] top-[20vh] md:top-0'
                    src={squishy2} />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={s2 ? { opacity: 0.5 } : { opacity: 0 }}
                    transition={{
                        duration: 1
                    }}
                    src={squishyHighlight}
                    className='absolute scale-[0.7] md:scale-[0.4] top-[40vh] md:-top-[41vh] md: left-[8vw]' />
                <motion.div
                    initial={{opacity: 0}}
                    animate={s2 ? { opacity: 1, y: 0 } : (s3) ? { opacity: 0, y: 80 } : { opacity: 0, y: -80 }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.5
                    }}
                    className='absolute flex flex-row md:flex-col w-screen md:w-[28vw] h-[20vh] bottom-0 md:right-0 md:top-[15vh]'>
                    <motion.img className="relative w-[120px] md:w-[100px] object-contain bottom-[8vh] md:bottom-0 left-[6vw] md:left-0" src={squishyLogo} />
                    <hr className='relative md:hidden bottom-[10vh] w-[140px] border-[2.5px] rotate-90 left-[20vw]' />
                    <div className='relative md:flex hidden mt-5 gap-2 font-fredoka font-medium text-[15px]'>
                        <p className='bg-[#FBED28] p-1 px-5 rounded-full'>memory foam</p>
                        <p className='bg-[#FBED28] p-1 px-5 rounded-full'>ultimate comfort</p>
                    </div>
                    <p className='relative md:mt-5 bottom-[6vh] md:bottom-0 right-[2vw] md:right-0 font-inter text-[14] md:text-[20px] w-[55vw] md:w-[300px]'>Aretto's take on memory foam, provides exceptional comfort.</p>
                </motion.div>
            </section>
            <section id="infiknit" className="absolute w-screen h-screen">
                <motion.img
                    initial={{opacity: 0}}
                    animate={s3 ? { opacity: 1, x: 0 } : (!s2) ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.5
                    }}
                    className='absolute w-[120px] md:w-[200px] object-cover right-1 md:left-[25vw] top-[15vh] md:top-0'
                    src={infi1} />
                <motion.img
                    initial={{opacity: 0}}
                    animate={s3 ? { opacity: 1, x: 0 } : (!s2) ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.5,
                        delay: 0.5
                    }}
                    className='absolute w-[338px] md:w-[600px] h-[195px] md:h-[250px] object-cover -left-20 md:-left-[5vw] top-[25vh] md:top-[40vh]'
                    src={infi2} />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={s3 ? { opacity: 0.5 } : { opacity: 0 }}
                    transition={{
                        duration: 1
                    }}
                    src={infiHighlight}
                    className='absolute scale-[0.7] md:scale-[0.34] top-[40vh] md:-top-[55vh]' />
                <motion.div
                    initial={{opacity: 0}}
                    animate={s3 ? { opacity: 1, y: 0 } : (!s2) ? { opacity: 0, y: 80 } : { opacity: 0, y: -80 }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.5
                    }}
                    className='absolute flex flex-row md:flex-col w-screen md:w-[28vw] h-[20vh] bottom-0 md:right-0 md:top-[20vh]'>
                    <motion.img className="relative w-[120px] md:w-[150px] object-contain bottom-[8vh] md:bottom-0 left-[6vw] md:left-0" src={infiLogo} />
                    <hr className='relative md:hidden bottom-[10vh] w-[140px] border-[2.5px] rotate-90 left-[20vw]' />
                    <div className='relative md:flex hidden mt-5 gap-2 font-fredoka font-medium text-[15px]'>
                        <p className='bg-[#FBED28] p-1 px-5 rounded-full'>breathable</p>
                        <p className='bg-[#FBED28] p-1 px-5 rounded-full'>360° flexibility</p>
                    </div>
                    <p className='relative md:mt-5 bottom-[6vh] md:bottom-0 right-[2vw] md:right-0 font-inter text-[14] md:text-[20px] w-[55vw] md:w-[300px]'>Highly durable, sustainable and flexible, our Infi-KnitTM fabric is a 3D knit.</p>
                </motion.div>
            </section>
        </div>
    )
}
