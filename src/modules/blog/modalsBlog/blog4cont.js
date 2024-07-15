import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './modalsBlog.scss';
import Header from '../../../commen/header';
import Close from '../../../assets/images/svg/close';
import { blog4 } from '../../../assets/images/jpg';
import Blog from '..';

export default function Blog4cont() {
    const navigate = useNavigate();
    const aboutMainRef = useRef(null);

    const handleClickOutside = (event) => {
        if (aboutMainRef.current && !aboutMainRef.current.contains(event.target)) {
            navigate('/blog');
        }
    };

    const handleCloseClick = () => {
        navigate('/blog');
    };

    return (
        <>
            <div className="home-background">
                <Header />
                <Blog />
            </div>
            <div className="blog1" onClick={handleClickOutside}>
                <div className="blog1-bg">
                    <div className="blog1-main animate__animated animate__fadeInUpBig animate__faster" ref={aboutMainRef}>
                        <div className="blog1-main-contant">
                            <div className="blog1-main-div">
                                <div className="logo-main">
                                    <h5>Product Design</h5>
                                    <h5>Feb 6, 2024</h5>
                                </div>
                                <div onClick={handleCloseClick}>
                                    <Close />
                                </div>
                            </div>
                            <h2>Building a Navigation Component with Variables</h2>
                            <img src={blog4} alt="blog4" />
                            <p>Navigation is key within any digital interface. Smart Components enable us to create custom interactive navigation components that work perfectly with the rest of your prototype.In this guide, we will cover the concepts of nesting components, adding events to elements in a component using Event Variables, and passing these through your components. One of the main benefits of using nested components is that it provides full control over its states, such as unique hover states of elements within another component.</p>
                            <h3>Starting at the atomic level</h3>
                            <p>Framer allows you to create fully interactive and animated components, and even allows you to nest components within other components. We’re building a navigation bar component for a website that will contain two different kinds of nested components, with their own unique interactions. Our project will contain a Navigation bar that contains various nested components, namely five Nav items and one Shopping cart component. The design of our nested components, the nav list item and the shopping cart, will impact how we design our navigation bar. For this reason, an optimal workflow includes starting with the 'deepest' nested component and building up from there.</p>
                            <h3>Nesting components</h3>
                            <p> Once we have our two components ready, we can start creating the component in which we will nest these. Draw your navigation bar, select it on the canvas and click the Component tool in the Toolbar. To nest a different component in our new component, just drag any other component to the Component Canvas and place it within your designed navigation bar.</p>
                            <h3>Triggering interactions from the navigation bar</h3>
                            <p> Back on the main canvas, we’d like to be able to tap 'Clothing' and navigate to an entire new Screen. If you’d connect the component using the Prototyping Connector to a new screen, we could set up an Interaction. However, this would be triggered if we tap anywhere within our component. This isn’t what we want to do, as we want to trigger this transition only from a specific element. This is where Event Variables come in, which are special types of Variables not attached to properties (like opacity or fill) but instead to events.</p>
                        </div>
                        <div className="blog1-last">
                            <div className="blog1-media-head">
                                <div className="round-div"></div>
                                <h4>Noman Lizaj</h4>
                                <span>- March 27 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
