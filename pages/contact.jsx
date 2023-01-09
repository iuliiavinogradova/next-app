import React from 'react';
import Hero from '../components/Hero';
import Contact from '../components/Contact';

const contact = () => {
    return (
        <div>
            <Hero heading='Contact Me' message='Looking for a software developer? Please send me a message.' />
            <Contact />
        </div>
    );
}

export default contact;
