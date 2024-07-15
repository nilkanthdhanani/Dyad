import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contact.scss';
import Close from '../../assets/images/svg/close';
import Instagram from '../../assets/images/svg/instagram';
import Twitter from '../../assets/images/svg/twitter';
import Copy from '../../assets/images/svg/copy';
import Done from '../../assets/images/svg/done';

export default function Contact() {
    const navigate = useNavigate();
    const aboutMainRef = useRef(null);
    const emailRef = useRef(null);
    const emailDivRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const handleClickOutside = (event) => {
        if (aboutMainRef.current && !aboutMainRef.current.contains(event.target)) {
            navigate('/');
        }
    };

    const handleCloseClick = () => {
        navigate('/');
    };

    const handleCopyClick = () => {
        if (emailRef.current) {
            navigator.clipboard.writeText(emailRef.current.textContent)
                .then(() => {
                    if (emailDivRef.current) {
                        setCopied(true);
                        setTimeout(() => {
                            setCopied(false);
                        }, 3000);
                    }
                })
                .catch(err => {
                    console.error("Could not copy text: ", err);
                });
        }
    };

    return (
        <>
            <div className="contact" onClick={handleClickOutside}>
                <div className="contact-bg">
                    <div className="contact-main animate__animated animate__zoomIn animate__faster" ref={aboutMainRef}>
                        <div className="contact-main-contant">
                            <div className="contact-main-icon">👋</div>
                            <div className="contact-main-box">
                                <div className="contact-main-div">
                                    <h2>Interested in working together?</h2>
                                    <div onClick={handleCloseClick}>
                                        <Close />
                                    </div>
                                </div>
                                <div className={`contact-email ${copied ? 'copied' : ''}`} onClick={handleCopyClick} ref={emailDivRef}>
                                    <div className="contact-email-text">
                                        <span>Drop me an email:</span>
                                        <h3 ref={emailRef}>noman.ijaz021@gmail.com</h3>
                                    </div>
                                    <div className="copy-svg">
                                        <Copy />
                                    </div>
                                    <div className="copied-message"><Done /> Copied to clipboard!</div>
                                </div>
                                <div className="contact-main-last">
                                    <div className="contact-main-last-icon">
                                        <a href="https://x.com/?lang=en" target="blank"><Twitter /><Twitter /></a>
                                        <a href="https://www.instagram.com/" target="blank"><Instagram /><Instagram /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
