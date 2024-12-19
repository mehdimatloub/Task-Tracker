import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-left">
                <p>&copy; {new Date().getFullYear()} Task Tracker</p>
            </div>
            <div className="footer-right">
                <a href="#terms">Terms of Service</a>
                <a href="#privacy">Privacy Policy</a>
                <a href="#contact">Contact Us</a>
            </div>
        </div>
    </footer>
);

export default Footer;
