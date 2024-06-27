import React, { useRef } from 'react';
import parent from '../assets/testimonial/1.webp';
import star from '../assets/star.svg';

function MobileTestimonial() {
    const testimonials = [
        {
            key: 1,
            heading: "100% RECOMMEND TO ALL",
            content: "Shopping for new shoes every few months for my little one is something I’m used to but Aretto came in with its expanding shoes, flexible fabric and rubber soles. I’m so glad I stumbled upon this brand. 100% recommend it to all.",
            image: parent,
            name: "neha vaz"
        },
        {
            key: 2,
            heading: "Shoes are comfortable & easy-to-wear",
            content: "The best part about these shoes is that they are super comfortable and perfect for everyday use. My daughter wears them to school. to the park, and everywhere in between. She never complains about her feet hurting, even after a long day of running around.",
            image: parent,
            name: "upsana seth"
        },
        {
            key: 3,
            heading: "The kid is happy wearing his aretto shoes 😊",
            content: "Ibrahim is in love with his Aretto shoes from day one. The vibrant colours and comfort while walking / running make him choose Aretto over his other pairs of shoes. The best part is that he wears them on his own very easily and is very comfortable wearing it throughout the day. He enjoyed his Dubai trip a lot in his favourite pair of Aretto Leaps. Thank you!",
            image: parent,
            name: "Fatema Miyasaheb"
        }
    ];

    const containerRef = useRef(null);
    const cardRefs = useRef([]);

    return (
        <div className='w-full h-[800px] bg-[#f5f5f5] font-fredoka flex md:hidden flex-col justify-center items-center'>
            <div className='w-full text-3xl p-8 font-medium mb-5'>
                WHAT PARENTS HAVE TO SAY...
            </div>
            <div className='relative w-full flex justify-center items-center mb-10'>
                <div
                    ref={containerRef}
                    className='flex overflow-x-scroll w-[310px] h-[500px] gap-4 scrollbar-hide'
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.key} ref={(el) => (cardRefs.current[index] = el)} style={(testimonial.key % 2 == 0) ? { flexDirection: "column-reverse" } : {}} className="flex flex-col gap-[10px] uppercase">
                            <div className='flex flex-col w-[300px] h-[300px] justify-start items-start gap-6 leading-tight rounded-2xl bg-white p-7 py-8 overflow-hidden'>
                                <h3 className='text-2xl'>{testimonial.heading}</h3>
                                <p className='lowercase'>{testimonial.content}</p>
                            </div>
                            <div className='flex flex-row gap-[10px]'>
                                <img src={testimonial.image} className='object-cover w-[130px] h-[180px] rounded-2xl' />
                                <div className='flex flex-col gap-[10px]'>
                                    <p className='w-[160px] h-[90px] items-center flex justify-center rounded-2xl bg-white text-center p-6 text-lg'>
                                        {testimonial.name}
                                    </p>
                                    <div className='flex flex-col gap-2 justify-center items-center bg-white p-4 rounded-2xl'>
                                        <p>5 / 5</p>
                                        <div className='flex flex-row gap-1'>
                                            <img className='w-5' src={star} />
                                            <img className='w-5' src={star} />
                                            <img className='w-5' src={star} />
                                            <img className='w-5' src={star} />
                                            <img className='w-5' src={star} />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MobileTestimonial;
