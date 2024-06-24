import React from 'react';
import { motion } from 'framer-motion';

const Hamburger = (props) => {

    const AnimateText = ({ children }) => {
        return (
            props.isOpen&&
            <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                exit={{ y: "100%", transition:{delay:0, duration: 0.3} }}
                transition={{
                    ease: "linear",
                    duration: 0.3,
                    delay: 0.3
                }}
                className='flex items-center'>
                {children}
            </motion.div>
        );
    };

    return (
        <div className="flex flex-col h-[90vh] w-full overflow-hidden justify-between p-4">
            <div className='flex justify-center items-center w-full h-full'>
                <nav className="flex flex-col gap-5 w-full h-full justify-center items-center font-fredoka font-medium -translate-x-3 -translate-y-10 uppercase">
                    <div className="flex items-center overflow-hidden">
                        <AnimateText>
                            <span className="mr-2 text-gray-400">01</span>
                            <a href="#" className="text-3xl">Home</a>
                        </AnimateText>
                    </div>
                    <div className="flex items-center overflow-hidden">
                        <AnimateText>
                            <span className="mr-2 text-gray-400">02</span>
                            <a href="#" className="text-3xl">New Launch</a>
                        </AnimateText>
                    </div>
                    <div className="flex items-center overflow-hidden">
                        <AnimateText>
                            <span className="mr-2 text-gray-400">03</span>
                            <a href="#" className="text-3xl">Store</a>
                        </AnimateText>
                    </div>
                    <div className="flex items-center overflow-hidden">
                        <AnimateText>
                            <span className="mr-2 text-gray-400">04</span>
                            <a href="#" className="text-3xl">Why Aretto</a>
                        </AnimateText>
                    </div>
                    <div className="flex items-center overflow-hidden">
                        <AnimateText>
                            <span className="mr-2 text-gray-400">05</span>
                            <a href="#" className="text-3xl">Size Guide</a>
                        </AnimateText>
                    </div>
                    <div className="flex items-center overflow-hidden">
                        <AnimateText>
                            <span className="mr-2 text-gray-400">06</span>
                            <a href="#" className="text-3xl">Contact us</a>
                        </AnimateText>
                    </div>
                    <div className="flex items-center overflow-hidden">
                        <AnimateText>
                            <span className="mr-2 text-gray-400">07</span>
                            <a href="#" className="text-3xl">Blogs</a>
                        </AnimateText>
                    </div>
                    <div className="flex items-center overflow-hidden">
                        <AnimateText>
                            <span className="mr-2 text-gray-400">08</span>
                            <a href="#" className="text-3xl">In the Press</a>
                        </AnimateText>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Hamburger;
