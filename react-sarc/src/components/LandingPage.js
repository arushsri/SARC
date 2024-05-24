import React from 'react';
import './LandingPage.css';
import videoSource from '../assets/background-video.mp4';
import image from '../assets/SARC.webp';
import ThreeScene from './ThreeScene';

function LandingPage() {
  const scroll = () => {
    const aboutSARCSection = document.querySelector('.AboutSARC');
    aboutSARCSection.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div>
      <div className="videoBackground">
        <video autoPlay loop muted>
          <source src={videoSource} type="video/mp4" />
        </video>   
        <div className='container'>
          <h1 className='heading'>Welcome to SARC</h1>
          <p className='subheading'>Student Alumni Relations Cell</p>
          <button className='button' onClick={scroll}>Let's Explore!</button>
        </div>
      </div>
      <ThreeScene />
      <div className='AboutSARC'>
        <div className='SARCText'>
          <h1 className='SARCFullForm'>Student Alumni<br />Relations Cell</h1>
          <p className='SARCSubText'>The Student Alumni Relations Cell (SARC) is managed by the students of IIT Bombay. SARC is one of the key components of the office of Dean ACR and has launched numerous initiatives which allow for a seamless interaction and networking between students and alumni.</p>
        </div>
        <img src={image} alt="SARC Logo" />
      </div>
    </div>
  );
}

export default LandingPage;
