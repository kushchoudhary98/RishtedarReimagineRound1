import React from 'react'
import { motion } from 'framer-motion'

export default function HeroText() {

    const heroText = {
        initial: {
            opacity: 0
        },
        final: {
            opacity: 1
        }
    }

    function animateWord(word){
        return(
        word.split('').map((word) => {
            return (
                <motion.span variants={heroText}>{word}</motion.span>
            )
        }))
    }

    return (
        <div className='md:mt-[30px] mx-3 md:m-8' style={{ fontFamily: "Fredoka" }}>
            <motion.span
                initial={{ backgroundColor: "#ffffff" }}
                animate={{ backgroundColor: "#fbed28" }}
                transition={{
                    duration: 1.5,
                    ease: "easeOut"
                }}
                className='font-medium inline-block text-[4vw] md:text-[23px] bg-[#FBED28] p-[6px] rounded-full px-5 content-center' style={{ transform: "translateY(-15px)" }}>
                <span className='inline-block'>SHOES THAT</span>
                <span>{" "}</span>
                <span className='inline-block font-semibold'>GROW</span>
            </motion.span>
            <motion.span
                initial="initial"
                animate="final"
                transition={{
                    delay: 2,
                    staggerChildren: 0.3,
                    duration: 2,
                    ease: "circOut"
                }}
                className='leading-tight'>
                <motion.span variants={heroText} transition={{ staggerChildren: 0.05 }} className='inline-block relative overflow-hidden font-medium text-[9.5vw] md:text-[70px] ml-3 md:top-4'>{animateWord("THEY")}</motion.span>
                <br />
                <motion.span variants={heroText} transition={{ staggerChildren: 0.05 }} className='inline-block relative -top-1 text-[5.5vw] md:text-[39px] overflow-hidden mb-1'>{animateWord("CAN NOW")}</motion.span>
                <motion.span variants={heroText} transition={{ staggerChildren: 0.05 }} className='inline-block overflow-hidden font-medium text-[9.5vw] md:text-[70px] mx-[10px] md:mx-[20px]'>{animateWord("KEEP UP")}</motion.span>
                <motion.span variants={heroText} transition={{ staggerChildren: 0.05 }} className='inline-block relative -top-2 overflow-hidden text-[5.5vw] md:text-[39px] mb-1'>{animateWord("WITH")}</motion.span>
                <br />
                <motion.span variants={heroText} transition={{ staggerChildren: 0.05 }} className='inline-block overflow-hidden text-[5.5vw] md:text-[39px] mt-2'>{animateWord("YOUR KID'S")}</motion.span>
                <span>&nbsp;</span>
                <motion.span variants={heroText} transition={{ staggerChildren: 0.05 }} className='inline-block overflow-hidden text-[5.5vw] md:text-[39px] mt-2'>{animateWord(" EVERY")}</motion.span>
                <br />
                <motion.span variants={heroText} transition={{staggerChildren: 0.05}} className='inline-block overflow-hidden font-medium text-[9.5vw] md:text-[70px] ml-[30vw] md:ml-[150px]'>{animateWord("ADVENTURE")}</motion.span>
            </motion.span>
            <br />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: 2.5
                }}
                className='inline-block mt-5 md:mt-16 text-[4vw] md:text-[15px]'
            >
                <span>Order now</span>
                <motion.span
                    initial={{ x: -85 }}
                    animate={{ x: 0 }}
                    transition={{
                        delay: 3.3,
                        ease: "easeOut"
                    }}
                    className='bg-[#4FC0D9] inline-block font-medium text-white p-1 px-3 ml-2 rounded-full tracking-[4px] z-10'
                >
                    FREE DELIVERY
                </motion.span>
            </motion.span>
        </div>
    )
}
