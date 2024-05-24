import React from 'react';
import './Footer.css';
import logo from '../assets/sarc_logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterContent">
        <div className='NameandSubscribe'>
            <div className='LogoAndName'>
                <div className="FooterLogo">
                <img src={logo} alt="SARC Logo" />
                </div>
                <div className="SARC">
                    <h2 className="SARCHeading">SARC</h2>
                    <p className="SARCSubheading">Student Alumni Relations Cell</p>
                </div>
            </div>
            <div>
                <h3 className="FooterSubscribe">Subscribe to Our Blogs</h3>
                <div className="SubscribeBox">
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit" className="SubscribeButton">
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </div>
        <div>
          <p className="FooterHeading">Useful Links</p>
          <ul className="FooterLinks">
            <li><Link to="/" className="FooterLink">Home</Link></li>
            <li><Link to="/Portfolio" className="FooterLink">Portfolios</Link></li>
            <li><Link to="/joinus" className="FooterLink">Join Us</Link></li>
        </ul>
        </div>
        <div className="FooterContact">
            <p className="FooterHeading">Contact Us</p>
            <p>Email: contact@sarc.com</p>
            <p>Phone: +1234567890</p>
        </div>
      </div>
        <div className="FooterSocial">
            <p className="FooterSocialHeading">Stay Connected with Us!</p>
            <ul className="FooterSocialLinks">
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
            </ul>
        </div>
    </footer>
  );
}

export default Footer;