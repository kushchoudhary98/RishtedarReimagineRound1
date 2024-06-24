import { motion, useTransform, useMotionValueEvent } from "framer-motion"
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

    const [s0, setS0] = useState(false);
    const [s1, setS1] = useState(false);
    const [s2, setS2] = useState(false);
    const [s3, setS3] = useState(false);

    useMotionValueEvent(scrollYProgress, "change", (y) => {
        console.log(y);
        if (y > 0.3) {
            setS0(true);
        }
        if (y <= 0.3) {
            setS0(false);
        }
        if (y <= 0.4) {
            setS1(false);
            setS2(false);
            setS3(false);
        }
        else if (y > 0.4 && y <= 0.6) {
            setS1(true);
            setS2(false);
            setS3(false);
            console.log("section 1")
        }
        else if (y > 0.6 && y <= 0.8) {
            setS1(false);
            setS2(true);
            setS3(false);
            console.log("section 2")
        }
        else if (y > 0.8 && y <= 1) {
            setS1(false);
            setS2(false);
            setS3(true);
            console.log("section 3")
        }
    })

    const bgColor = useTransform(scrollYProgress, [0.9, 1], ["#f5f5f5", "#ffffff"]);
    const heroBlackOpacity = useTransform(scrollYProgress, [0.33, 0.38], [0, 0.25]);
    const circleOpacity = useTransform(scrollYProgress, [0.38, 0.4], [0, 1]);
    const circleSize = useTransform(scrollYProgress, [0.38, 0.4], [400, 600]);
    const circleSizeMob = useTransform(scrollYProgress, [0.38, 0.4], [250, 350]);
    const progressBar = useTransform(scrollYProgress, [0.4, 1], ["0%", "100%"]);
    const progressBarOpacity = useTransform(scrollYProgress, [0.98, 1], [1, 0]);

    return (
        <motion.div className="absolute overflow-hidden md:overflow-visible -top-[10vh] md:top-0 h-screen w-full flex flex-col items-center justify-center" style={(s0) ? { display: "flex" } : { display: "none" }}>
            <motion.div style={{ width: progressBar, opacity: progressBarOpacity }} className='absolute left-0 md:top-[86vh] top-0 w-full h-[10px] bg-[#3B3059] z-40' />
            <motion.div
                animate={(s1 || s2 || s3) ? { opacity: 1 } : { opacity: 0 }}
                className='absolute hidden md:flex right-[5vw] -top-[8vh] text-[100px] overflow-hidden font-fredoka w-[150px] h-[100px]  leading-none'>
                <span>0</span>
                <motion.p
                    initial={{ y: 0 }}
                    animate={s1 ? { y: "0%" } : (s2) ? { y: "-100%" } : { y: "-200%" }}
                    transition={{
                        duration: 0.5
                    }}
                    className='hidden md:flex flex-col'>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </motion.p>
            </motion.div>
            <motion.div style={{ fontFamily: "Fredoka" }} className="absolute w-screen h-fit -top-[0vh] md:top-[-15vh] left-0 m-5 md:m-10 text-[23px] md:text-[44px]" >
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
            <div className='relative w-full h-screen flex justify-center'>
                <motion.div style={{ opacity: circleOpacity, height: props.isMobile ? circleSizeMob : circleSize, width: props.isMobile ? circleSizeMob : circleSize }} className='relative top-1/2 md:-translate-y-[60%] -translate-y-[30%] -z-50 bg-[#FFFCD1] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full' />
                <motion.img
                    style={{ opacity: heroBlackOpacity }}
                    className='absolute top-1/2 md:-translate-y-[68%] -translate-y-[29%] -translate-x-[1%] opacity-25 md:w-[70vh] md:scale-[0.8] scale-[0.69]'
                    src={heroPicBlack} />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={s1 ? { opacity: 0.5 } : { opacity: 0 }}
                    transition={{
                        duration: 0.5
                    }}
                    src={superGHighlight}
                    className='absolute top-1/2 -translate-y-[29%] md:-translate-y-[68%] -translate-x-[1%] opacity-25 md:w-[70vh] md:scale-[0.8] scale-[0.7]' />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={s2 ? { opacity: 0.5 } : { opacity: 0 }}
                    transition={{
                        duration: 1
                    }}
                    src={squishyHighlight}
                    className='absolute top-1/2 -translate-y-[29%] md:-translate-y-[68%] -translate-x-[1%] opacity-25 md:w-[70vh] md:scale-[0.8] scale-[0.7]' />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={s3 ? { opacity: 0.5 } : { opacity: 0 }}
                    transition={{
                        duration: 1
                    }}
                    src={infiHighlight}
                    className='absolute top-1/2 -translate-y-[29%] md:-translate-y-[68%] -translate-x-[1%] opacity-25 md:w-[70vh] md:scale-[0.8] scale-[0.7]' />
            </div>
            <section id="super-g" className="absolute w-full h-screen">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={s1 ? { opacity: 1, x: 0 } : (s2 || s3) ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5
                    }}
                    className='absolute w-[300px] md:w-[550px] object-cover left-2 top-[10vh] md:top-[5vh]'
                    src={superG1} />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={s1 ? { opacity: 1, x: 0 } : (s2 || s3) ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        delay: 0.2
                    }}
                    className='absolute w-[143px] md:w-[200px] object-cover -right-5 md:left-[25vw] top-[30vh] md:top-[55vh]'
                    src={superG2} />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={s1 ? { opacity: 1, y: props.isMobile ? "0%" : "-130%" } : (s2 || s3) ? { opacity: 0, y: props.isMobile ? "-30%" : "-180%" } : { opacity: 0, y: props.isMobile ? "30%" : "-80%" }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.5
                    }}
                    className='absolute flex flex-row justify-around items-center md:items-start md:flex-col w-screen md:w-[28vw] h-[20vh] bottom-0 md:right-0 md:top-1/2'>
                    <img className="relative flex items-center justify-center w-[120px] md:w-[150px] object-contain md:bottom-0 left-2 md:left-0" src={superGLogo} />
                    <div className='w-1 md:hidden h-[120px] bg-slate-300' />
                    <div className='relative md:flex hidden mt-8 gap-2 font-fredoka font-medium text-[15px]'>
                        <p className='bg-[#FBED28] p-1 px-5 rounded-full'>expanding shoes</p>
                        <p className='bg-[#FBED28] p-1 px-5 rounded-full'>everyday growth</p>
                    </div>
                    <p className='relative block md:hidden md:mt-5 md:bottom-0 right-0 font-inter text-[14] md:text-[20px] w-[55vw] md:w-[300px]'>Grooves that adapt to millimetric changes enabling growth.</p>
                    <p className='relative hidden md:block md:mt-5 md:bottom-0 md:right-0 font-inter md:text-[20px] md:w-[380px]'>SUPER GROOVES TM is an ingenious, intuitive technology that adapts to millimetric growth of the feet resulting in a shoe size expansion that is organic and unique to the wearer alone. </p>
                </motion.div>
            </section>
            <section id="squishy" className="absolute w-screen h-screen">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={s2 ? { opacity: 1, x: 0 } : (s3) ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5
                    }}
                    className='absolute w-[158px] md:w-[200px] object-contain -left-6 md:left-5 top-[10%] md:top-[50vh]'
                    src={squishy1} />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={s2 ? { opacity: 1, x: 0 } : (s3) ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        delay: 0.2
                    }}
                    className='absolute z-30 w-[280px] md:w-[450px] object-cover -right-8 md:left-[15vw] top-[20vh] md:top-[5vh]'
                    src={squishy2} />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={s2 ? { opacity: 1, y: props.isMobile ? "0%" : "-150%" } : (s3) ? { opacity: 0, y: props.isMobile ? "-30%" : "-190%" } : { opacity: 0, y: props.isMobile ? "30%" : "-100%" }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.5
                    }}
                    className='absolute flex flex-row justify-around items-center md:items-start md:flex-col w-screen md:w-[28vw] h-[20vh] bottom-0 md:right-0 md:top-1/2'>
                    <img className="relative mix-blend-multiply flex justify-center items-center w-[100px] md:w-[100px] object-contain bottom-0 left-0" src={squishyLogo} />
                    <div className='w-1 h-[120px] bg-slate-300' />
                    <div className='relative md:flex hidden mt-5 gap-2 font-fredoka font-medium text-[15px]'>
                        <p className='bg-[#FBED28] p-1 px-5 rounded-full'>memory foam</p>
                        <p className='bg-[#FBED28] p-1 px-5 rounded-full'>ultimate comfort</p>
                    </div>
                    <p className='relative block md:hidden md:mt-5 md:bottom-0 right-0 font-inter text-[14] md:text-[20px] w-[55vw] md:w-[300px]'>Aretto's take on memory foam, provides exceptional comfort.</p>
                    <p className='relative hidden md:block md:mt-5 md:bottom-0 md:right-0 font-inter md:text-[20px] md:w-[380px]'>ARETTO SQUISHY FOAM TM, a jelly-soft memory foam insole that provides exceptional comfort and padding to little feet, reduces pressure that gets built in. And the best part? It lets fussy kids go sockless altogether.</p>
                </motion.div>
            </section>
            <section id="infiknit" className="absolute w-screen h-screen">
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={s3 ? { opacity: 1, x: 0 } : (!s2) ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5
                    }}
                    className='absolute w-[120px] md:w-[200px] object-cover right-1 md:left-[30vw] top-[10vh] md:top-[5vh]'
                    src={infi1} />
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={s3 ? { opacity: 1, x: 0 } : (!s2) ? { opacity: 0, x: 80 } : { opacity: 0, x: -80 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        delay: 0.2
                    }}
                    className='absolute w-[338px] md:w-[700px] h-[195px] md:h-[300px] object-cover -left-20 md:-left-[8vw] top-[20vh] md:top-[45vh]'
                    src={infi2} />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={s3 ? { opacity: 1, y: props.isMobile ? "0%" : "-130%" } : (!s2) ? { opacity: 0, y: props.isMobile ? "-30%" : "-180%" } : { opacity: 0, y: props.isMobile ? "30%" : "-90%" }}
                    transition={{
                        ease: "circInOut",
                        duration: 0.5
                    }}
                    className='absolute flex flex-row justify-around items-center md:items-start md:flex-col w-screen md:w-[28vw] h-[20vh] bottom-0 md:right-0 md:top-1/2'>
                    <img className="relative flex justify-center items-center w-[100px] md:w-[150px] object-contain bottom-0 left-2 md:left-0" src={infiLogo} />
                    <div className='w-1 h-[120px] bg-slate-300' />
                    <div className='relative md:flex hidden mt-5 gap-2 font-fredoka font-medium text-[15px]'>
                        <p className='bg-[#FBED28] p-1 px-5 rounded-full'>breathable</p>
                        <p className='bg-[#FBED28] p-1 px-5 rounded-full'>360° flexibility</p>
                    </div>
                    <p className='relative block md:hidden md:mt-5 md:bottom-0 right-0 font-inter text-[14] md:text-[20px] w-[55vw] md:w-[300px]'>Highly durable, sustainable and flexible, our Infi-KnitTM fabric is a 3D knit.</p>
                    <p className='relative hidden md:block md:mt-5 md:bottom-0 md:right-0 font-inter md:text-[20px] md:w-[380px]'>INFI-KNIT TM is our patented 3D knit - a stretchable, and highly durable fabric that our shoe uppers are fashioned from. The breathable material has 360° flexibility and will comfortably accommodate growing feet by stretching upto 3 sizes.</p>
                </motion.div>
            </section>
        </motion.div>
    )
}
