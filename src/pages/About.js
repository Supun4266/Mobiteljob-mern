import React from 'react';
import Header from '../components/Header';
import aboutImg from '../assets/aboutus.jpg'; // Assuming you have an image for the about us section
import '../styles/aboutus.css';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div  className="container1">
            <Header />
            <main>
                <div className="container">
                    <section className="about-us">
                        <h1>About Us</h1>
                        <div className="about-us-content">
                            <div className="about-text">
                                <p>
                                    "Welcome to SLT Mobitel, where innovation meets passion. Established with a commitment to providing cutting-edge telecommunication solutions in Sri Lanka, we strive to connect people and businesses through reliable and innovative technology.
                                </p>
                                <p>
                                    Our dedicated team of experienced professionals is united by a shared vision: to transform the digital landscape of our nation and empower communities through connectivity. At SLT Mobitel, we believe in creating sustainable technological solutions that enhance quality of life.
                                </p>
                                <p>
                                    Join us on this exciting journey as we continue to pioneer the future of telecommunications in Sri Lanka!"
                                </p>
                                <a href="#" className="btn">Learn more</a>
                            </div>
                            <div className="about-image">
                                <img src={aboutImg} alt="SLT Mobitel Team" />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
             <footer>
            <div className="container">
                <p>© 2025 SLT Mobitel. All Rights Reserved.</p>
            </div>
        </footer>
        </div>
    );
}

export default About;