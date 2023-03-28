import React from 'react';
import photo from '../images/photo.png'


export default function About() {
    return (
        <div className='row justify-content-evenly'>
            <h1 className='header'>Hello, my name is Vinny</h1>
            <div className= 'col-2'>
                <img className='profile-pic' src={photo} alt="photo"/>
            </div>
            <div className= 'col-6'>
            <p className='about-p'>
                I am currently studying with The Ohio State University to become a full-stack web developer. I have always been interested with computers and wanted to branch out to test my limits. Overall, I really enjopy it. I'm always up for a challenge and love to work with others to achieve a goal. Check out the rest of my profile to get to know me and my work more! Feel free to reach out whenever if you have any quetions or want to work together.
            </p>
            </div>
    
        </div>
    );
}