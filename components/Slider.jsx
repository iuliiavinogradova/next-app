import React, { useState } from 'react';
import { SliderData } from './SliderData';
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div id='gallery' className='max-w-[1240px] mx-auto'>
            <h1 className='text-2xl font-bold text-center p-4'>Projects</h1>
            <div className='relative flex justify-center p-4'>
                {SliderData.map((slide, index) => {
                    return (
                        <div
                            key={index}
                            className={index === current
                                ? 'opasity-[1] duration-1000 ease-in'
                                : 'opasity-0'}
                        >

                            <FaArrowCircleLeft className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]' size={50} onClick={prevSlide} />
                            {index === current && (
                                <Image
                                    src={slide.image}
                                    alt='/'
                                    width='1440'
                                    height='600'
                                    className='object-cover'
                                />
                            )}
                            <FaArrowCircleRight
                                className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                                size={50}
                                onClick={nextSlide} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Slider;
