import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import star from '../assets/star.svg'
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
import test1 from '../assets/testimonial/1.webp'
import test2 from '../assets/testimonial/2.webp'
import test3 from '../assets/testimonial/3.avif'
import test4 from '../assets/testimonial/4.webp'

export default function Testimonial() {

    const testimonials = [{
        key: 1,
        heading: "100% RECOMMEND TO ALL",
        content: "Shopping for new shoes every few months for my little one is something I’m used to but Aretto came in with its expanding shoes, flexible fabric and rubber soles. I’m so glad I stumbled upon this brand. 100% recommend it to all.",
        image: test1,
        name: "neha vaz"
    }, {
        key: 2,
        heading: "Shoes are comfortable & easy-to-wear",
        content: "The best part about these shoes is that they are super comfortable and perfect for everyday use. My daughter wears them to school. to the park, and everywhere in between. She never complains about her feet hurting, even after a long day of running around.",
        image: test2,
        name: "upsana seth"
    }, {
        key: 3,
        heading: "The kid is happy wearing his aretto shoes 😊",
        content: "Ibrahim is in love with his Aretto shoes from day one. The vibrant colours and comfort while walking / running make him choose Aretto over his other pairs of shoes. The best part is that he wears them on his own very easily and is very comfortable wearing it throughout the day. He enjoyed his Dubai trip a lot in his favourite pair of Aretto Leaps. Thank you!",
        image: test3,
        name: "Fatema Miyasaheb"
    }, {
        key: 4,
        heading: "10 on 10 shoes for your active kids",
        content: "The beauty of the shoe for me is how it adapts to the natural foot shape. It doesn’t come with bulky, unnecessary additions like a heel and a toe raise that do nothing but add discomfort to a growing child. Their size chart is easy to understand. Tisya loves her Aretto Leaps! She could walk in them comfortably for long hours.",
        image: test4,
        name: "Devashri kulkarni"
    }]

    const [y, setY] = useState(0);
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
    const imgWidth = useTransform(scrollYProgress, [0.4, 0.5], ["70vw", "32vw"]);
    const yscroll = useTransform(scrollYProgress, [0.2, 0.4, 0.45, 1], ["0vh", "-35vh", "-35vh", "-115vh"]);
    const backgroundColor = useTransform(scrollYProgress, [0.4, 0.48], ["#ffffff", "#e5e5e5"]);
    const testimonialScroll = useTransform(scrollYProgress, [0.52, 1], ["0%", "-50%"]);

    return (
        <div ref={ref} className='h-[500vh] hidden md:block'>
            <div className='sticky top-0 w-full h-screen'>
                <motion.div style={{ backgroundColor: backgroundColor }} className='w-full h-screen overflow-hidden'>
                    <motion.h2 style={{ opacity: text1Opacity }} className='relative top-16 font-fredoka w-full flex justify-center text-[50px]'>STYLE 'EM  LIKE  A  CHAMP!</motion.h2>
                    <motion.div style={{ x: xscroll }} className='absolute z-20 flex flex-row top-[35vh] w-[400vw]'>
                        <img className='h-[65vh] object-cover' src={img1} />
                        <img className='h-[65vh] object-cover' src={img7} />
                        <img className='h-[65vh] object-cover' src={img4} />
                        <img className='h-[65vh] object-cover' src={img8} />
                        <motion.div style={{ y: yscroll, width: imgWidth }} className='flex flex-col'>
                            <motion.img style={{ height: imgHeight }} className='h-[30vh] w-full object-cover' src={img5} />
                            <img src={img9} alt="6" className="w-full h-[30vh] object-cover" />
                            <img src={img2} alt="7" className="w-full h-[30vh] object-cover" />
                            <img src={img6} alt="8" className="w-full h-[30vh] object-cover" />
                            <img src={img10} alt="10" className="w-full h-[30vh] object-cover" />
                            <img src={img3} alt="9" className="w-full h-[30vh] object-cover" />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={(y > 0.48) ? { opacity: 1, y: "-50%" } : { opacity: 0, y: "-40%" }}
                        transition={{
                            ease: "easeInOut"
                        }}
                        className='absolute top-[50%] font-fredoka flex flex-col gap-[3vh] left-[35vw] w-full overflow-hidden'>
                        <h2 className='text-[40px] w-[400px] ml-[30px]'>WHAT  THE  PARENTS  HAVE  TO  SAY</h2>
                        <motion.div className='absolute z-10 h-screen w-[30px] top-0 left-0 bg-gradient-to-r from-[#e5e5e5] to-transparent' />
                        <motion.div style={{ x: testimonialScroll }} className='flex gap-[30px] ml-[30px]'>
                            
                            {testimonials.map((testimonial) => {
                                return (
                                    <div key={testimonial.key} style={(testimonial.key % 2 == 0) ? { flexDirection: "column-reverse" } : {}} className="flex flex-col gap-[10px] uppercase">
                                        <div className='flex flex-col w-[400px] h-[300px] justify-start items-start gap-6 leading-tight rounded-2xl bg-white p-7 py-8 overflow-hidden'>
                                            <h3 className='text-2xl'>{testimonial.heading}</h3>
                                            <p className='lowercase'>{testimonial.content}</p>
                                        </div>
                                        <div className='flex flex-row gap-[10px]'>
                                            <img src={testimonial.image} className='object-cover w-[200px] h-[215px] rounded-2xl' />
                                            <div className='flex flex-col gap-[10px]'>
                                                <p className='w-[190px] h-[100px] items-center flex justify-center rounded-2xl bg-white text-center p-6 text-lg'>
                                                    {testimonial.name}
                                                </p>
                                                <div className='flex flex-col gap-2 justify-center items-center bg-white p-6 rounded-2xl'>
                                                    <div className='flex flex-row gap-1'>
                                                        <img src={star} />
                                                        <img src={star} />
                                                        <img src={star} />
                                                        <img src={star} />
                                                        <img src={star} />
                                                    </div>
                                                    <p>5 / 5</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    )
}
