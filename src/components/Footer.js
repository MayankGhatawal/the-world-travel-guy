import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="social-media">
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faPinterest} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href="#" className="social-icon"><FontAwesomeIcon icon={faRss} /></a>
            </div>
            <hr className='hr' />
            <div className="footer-content">
                <p>© The World Travel Guy 2024</p>
                <p><a href="#">Affiliate Disclosures</a> • <a href="#">Privacy Policy</a> • <a href="#">Terms Of Use</a></p>
                <p>Some of the pages on my travel blog contain affiliate links. Whenever you buy something through one of these links, I get a small commission <em>at no extra cost to you</em>. As an affiliate, I only recommend products and services that I feel are high quality and helpful to my readers. Thanks for your support.</p>
            </div>
        </footer>
    );
}

export default Footer;
