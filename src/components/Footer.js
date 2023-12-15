import "./Footer.css";
import React, { useState, useEffect } from 'react';

const Footer = () => {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="footer">
            <div className="footer-top">
                <div>
                    <h1>Travel.</h1>
                    <p>Your journey, our commitment.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-whatsapp-square"></i>
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; {currentYear} ALI HAMMOUD. Made with love in React.</p>
            </div>
        </div>
    );
}

export default Footer;