import React from 'react';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

const Work = () => {
    return (
        <div>
            <Hero heading='My recent projects' message='For more projects, please visit Github.' />
            <Portfolio />
        </div>
    );
}

export default Work;
