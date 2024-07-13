import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './about.scss';
import Home from '../home';
import Header from '../../commen/header';
import Close from '../../assets/images/svg/close';
import { about } from '../../assets/images/jpg';
import Apple from '../../assets/images/svg/apple';
import FacebookW from '../../assets/images/svg/facebookW';
import Google from '../../assets/images/svg/google';
import Instagram from '../../assets/images/svg/instagram';
import Twitter from '../../assets/images/svg/twitter';

export default function About() {
    const navigate = useNavigate();
    const aboutMainRef = useRef(null);

    const handleClickOutside = (event) => {
        if (aboutMainRef.current && !aboutMainRef.current.contains(event.target)) {
            navigate('/');
        }
    };

    const handleCloseClick = () => {
        navigate('/');
    };

    return (
        <>
                <div className="div">
                    <Header />
                    <Home />
                </div>
            <div className="about" onClick={handleClickOutside}>
                <div className="about-bg">
                    <div className="about-main" ref={aboutMainRef}>
                        <div className="about-main-contant">
                            <div className="about-main-div">
                                <h2>About me</h2>
                                <div onClick={handleCloseClick}>
                                    <Close />
                                </div>
                            </div>
                            <span>Meet John Doe, the wackiest product designer you'll ever come across! With a flair for creativity and an eye for detail, John has been shaking up the design industry for over a decade now.</span>
                            <img src={about} alt="about" />
                            <p>Meet John Doe, the wackiest product designer you'll ever come across! With a flair for creativity and an eye for detail, John has been shaking up the design industry for over a decade now.</p>
                            <p>When he's not designing the next big thing, John loves to ride his unicycle, jam on his electric guitar, and brew his own beer. He believes that creativity comes from doing what you love, and his hobbies keep him inspired and always thinking outside the box.</p>
                            <p>John's innovative designs have earned him countless awards and accolades, including the prestigious "Most Outrageous Design" award from the International Design Awards (IDA). He's also been invited to speak at industry events all over the world, sharing his wild ideas and unconventional approach to design.</p>
                            <p>Before starting his own design studio, John worked at some of the top design firms in the country. He learned the ins and outs of the design process and developed a unique style that sets him apart from the crowd. He's not afraid to take risks and push the boundaries, and his clients love him for it.</p>
                            <p>So if you're looking for a designer who's not afraid to go against the grain, look no further than John Doe! He's ready to take on any challenge and bring your wildest design dreams to life.</p>
                            <h4>Experience</h4>
                            <div className="media-div">
                                <div className="media-div-head">
                                    <Apple /><h3>Product Designer, Apple Inc., 2016-2021</h3>
                                </div>
                                <p>As a product designer at Apple Inc., I was responsible for designing and developing new features and experiences for the company's flagship products. I collaborated closely with engineers and other designers to create user-centered designs that were both functional and visually appealing. During my time at Apple, I worked on several high-profile projects, including the redesign of the Apple Music interface.</p>
                            </div>
                            <div className="media-div">
                                <div className="media-div-head">
                                    <FacebookW /><h3>Senior Product Designer, Facebook, 2014-2016</h3>
                                </div>
                                <p>As a product designer at Apple Inc., I was responsible for designing and developing new features and experiences for the company's flagship products. I collaborated closely with engineers and other designers to create user-centered designs that were both functional and visually appealing. During my time at Apple, I worked on several high-profile projects, including the redesign of the Apple Music interface.</p>
                            </div>
                            <div className="media-div">
                                <div className="media-div-head">
                                    <Google /><h3>UX Designer, Google, 2012-2014</h3>
                                </div>
                                <p>As a product designer at Apple Inc., I was responsible for designing and developing new features and experiences for the company's flagship products. I collaborated closely with engineers and other designers to create user-centered designs that were both functional and visually appealing. During my time at Apple, I worked on several high-profile projects, including the redesign of the Apple Music interface.</p>
                            </div>
                        </div>
                        <div className="about-main-last">
                            <div className="main-grid1-box">
                                <button>Get in touch</button>
                            </div>
                            <div className="about-main-last-icon">
                                <a href="https://x.com/?lang=en" target="blank"><Twitter /><Twitter /></a>
                                <a href="https://www.instagram.com/" target="blank"><Instagram /><Instagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
