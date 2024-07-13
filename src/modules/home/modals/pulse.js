import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './modals.scss';
import Home from '..';
import Header from '../../../commen/header';
import Close from '../../../assets/images/svg/close';
import { pc1, pc2, pulse } from '../../../assets/images/jpg';
import { figma, genius, openai, pulseLogo } from '../../../assets/images/png';

export default function Pulse() {
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
            <div className="zenith" onClick={handleClickOutside}>
                <div className="zenith-bg">
                    <div className="zenith-main" ref={aboutMainRef}>
                        <div className="zenith-main-contant">
                            <div className="zenith-main-div">
                                <div className="logo-main">
                                    <img src={pulseLogo} alt="pulseLogo" />
                                    <h2>Pulse</h2>
                                    <h3>2024</h3>
                                </div>
                                <div onClick={handleCloseClick}>
                                    <Close />
                                </div>
                            </div>
                            <img src={pulse} alt="pulse" />
                            <p>In this project, I aimed to create a user-centric design that balances functionality with aesthetic appeal. The goal was to develop a solution that not only meets user needs but also delivers a visually pleasing experience. Through iterative design and user feedback, the project showcases my ability to empathize with users, conceptualize innovative ideas, and execute them effectively.</p>
                            <div className="zenith-type">
                                <div className="zenith-type-box">
                                    <h4>Interaction Design</h4>
                                    <h4>Usability</h4>
                                </div>
                            </div>
                            <div className="zenith-type1">
                                <h5>Teck Stack</h5>
                                <div className="zenith-type1-box">
                                    <img src={figma} alt="figma" />
                                    <img src={openai} alt="openai" />
                                    <img src={genius} alt="genius" />
                                </div>
                            </div>
                            <h4>Client's Review</h4>
                            <div className="zenith-media-div">
                                <p>John's ability to understand user needs, create innovative solutions, and deliver polished designs is evident in this project. The result is a product that is both functional and beautiful, reflecting John's commitment to excellence in product design.</p>
                                <div className="zenith-media-head">
                                    <div className="round-div"></div> <h3>Noman Lizaj</h3>
                                </div>
                            </div>
                        </div>
                        <div className="zenith-last">
                            <img src={pc2} alt="pc2" />
                            <img src={pc1} alt="pc1" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
