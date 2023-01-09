import React from 'react';
import IgImg1 from '../public/assets/agelessfun.png';
import IgImg2 from '../public/assets/android.png';
import IgImg3 from '../public/assets/learning-platform.png';
import IgImg4 from '../public/assets/background.jpg';
import IgImg5 from '../public/assets/payment-plan.png';
import IgImg6 from '../public/assets/teach.jpg';
import Instagramlmg from './Instagramlmg';

const Instagram = () => {
    return (
        <div className='max-w-[1240px] mx-auto text-center py-24'>
            <p className='text-2xl font-bold py-20'>More projects of <a href='https://github.com/iuliiavinogradova' className='text-2xl underline'>Github</a></p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
                <Instagramlmg socialImg={IgImg1} />
                <Instagramlmg socialImg={IgImg2} />
                <Instagramlmg socialImg={IgImg3} />
                <Instagramlmg socialImg={IgImg4} />
                <Instagramlmg socialImg={IgImg5} />
                <Instagramlmg socialImg={IgImg6} />
            </div>
        </div>
    );
}

export default Instagram;
