import React from 'react';
import pic from '../pictures/selfPic.jpg';

const About = () => {
    return (
        <div>
            <p>Anh Nguyen</p> 
            <img className='selfie' src={pic} alt='Anh self picture'/>
        </div>
    )
};

export default About;