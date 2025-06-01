import React from 'react';
import '../styles/home.css'; // Import CSS

function Footer() {
    return (
        <footer>
            <div className="footer-section">
                <h4>About Us</h4>
                <p><a href="#">Corporate Responsibility</a></p>
                <p><a href="#">Investors</a></p>
                <p><a href="#">Media Center</a></p>
                <p><a href="#">Careers</a></p>
            </div>
            <div className="footer-section">
                <h4>Business</h4>
                <p><a href="#">Enterprise</a></p>
                <p><a href="#">SME</a></p>
                <p><a href="#">Wholesale</a></p>
                <p><a href="#">International</a></p>
            </div>
            <div className="footer-section">
                <h4>Contact Us</h4>
                <p>Sri Lanka Telecom PLC, Lotus Road, P.O. Box 503, Colombo 01 Sri Lanka</p>
                <p>Telephone: +94 112 021 000</p>
                <p>Email: <a href="mailto:pr@slt.lk">pr@slt.lk</a></p>
                <p>Monday to Friday - 8am to 5pm</p>
            </div>
            <div className="footer-section">
                <h4>Customer Support</h4>
                <p>Telephone: <a href="tel:1212">1212</a></p>
                <p>Email: <a href="mailto:1212@slt.lk">1212@slt.lk</a></p>
                <p>Self Service: <a href="tel:*1212#">*1212# 1212</a></p>
            </div>
            <div className="footer-section social-icons">
                <a href="#"><img src="https://img.icons8.com/ios-filled/20/000000/twitter.png" alt="Twitter" /></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/20/000000/instagram-new.png" alt="Instagram" /></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/20/000000/youtube-play.png" alt="YouTube" /></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/20/000000/linkedin.png" alt="LinkedIn" /></a>
                <a href="#"><img src="https://img.icons8.com/ios-filled/20/000000/tiktok.png" alt="TikTok" /></a>
            </div>
        </footer>
    );
}

export default Footer;