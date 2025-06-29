import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';     
import '../styles/home.css';
import bg from '../assets/mobitel.png'; 


function Home() {
    return (
        <div className='home-container'>
            <div className="bg-container">
                <header>
                    <div className="header-container">
                        <div className="logo-section">
                            <img src={bg} alt="SLT Mobitel Logo" className="logo" />
                            <span className="program-title">Training Program</span>
                        </div>
                        <nav>
                            <ul className="nav-links">
                                <li><Link to="/">Home</Link></li>
                                <li className="separator">|</li>
                                <li><Link to="/about">About Us</Link></li>
                                <li className="separator">|</li>
                                <li><Link to="/vacancycreate">Vacancies</Link></li>
                                <li className="separator">|</li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <section className="bg-section"></section>
            </div>
            <section className="training-sections">
                <div className="training-card">
                    <h3>Trainee Network Engineers</h3>
                    <p>We are hiring new trainee network engineers for Mobitel. Only an associate degree, a bachelor's degree in engineering, and a related field undergraduates in the 4th year, fresh graduates are preferred.</p>
                    <p><strong>The job experiences are needed:</strong></p>
                    <ul>
                        <li>Networking knowledge</li>
                        <li>Operating systems knowledge</li>
                        <li>Network device configuration knowledge</li>
                    </ul>
                    <button className="apply-btn">Apply Now</button>
                </div>
                <div className="training-card">
                    <h3>Accountant-Financial Accounting</h3>
                    <p>Sri Lanka Telecom is in search of high caliber, self-motivated, and qualified individuals capable of playing a range of tasks in financial accounting in a highly fast-paced work environment and to collaborate with departments to implement key business drivers and achieve goals.</p>
                    <ul>
                        <li>Preference will be given to the candidates who are Associate Members of CA/ACCA/CIMA</li>
                        <li>Preference will be given to the candidates who are prize winners</li>
                        <li>Be a resilient leader with excellent interpersonal and communication skills</li>
                    </ul>
                    <button className="apply-btn">Apply Now</button>
                </div>
                <div className="training-card">
                    <h3>Engineers</h3>
                    <p>As an Engineer of the pioneering ICT solutions provider, you will be distinguished members of our team, which has been recognized as one of the best places to work in our state of the ICT industry.</p>
                    <ul>
                        <li>BSc in Engineering/Bachelor of Technology/Information Technology recognized by UGC in Sri Lanka equivalent to SLQF 6 OR AMD</li>
                        <li>Member of the Institute of Engineers Sri Lanka</li>
                        <li>Through experience in the field of Data Centre Network Security/Storage Systems/Hybrid Cloud Platforms/Software and Systems of a digital future</li>
                    </ul>
                    <button className="apply-btn">Apply Now</button>
                </div>
                <div className="training-card">
                    <h3>Technicians</h3>
                    <p>Technicians are mainly responsible for installing, maintaining, and repairing electronic communications equipment and systems. Examine telecommunications equipment to find and repair faults.</p>
                    <ul>
                        <li>BE passes in the G.C.E. (O/L) exam including Sinhala/Tamil and 03 credit passes in telecommunication and electronic passes</li>
                        <li>Should have the relevant Skilled Competence Certificate - NATA in the relevant field equivalent to NVQ Level 4</li>
                        <li>Experience in Telecommunications/ICT/Power & Air Conditioning not mandatory</li>
                    </ul>
                    <button className="apply-btn">Apply Now</button>
                </div>
            </section>
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
        </div>
    );
}

export default Home;