import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';


const Instagramlmg = ({ socialImg }) => {
    return (
        <div className='relative'>
            <Image
                src={socialImg}
                alt='/'
                className='w-full h-full'
                responsive='true'
            />
            {/*Overlay */}
            <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/60 group'>
                <p className='text-gray-300 hidden group-hover:block'>
                    <FaGithub className='z-10' size={30} />
                </p>
            </div>
        </div>
    );
}

export default Instagramlmg;
