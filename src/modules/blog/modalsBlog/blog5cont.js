import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './modalsBlog.scss';
import Header from '../../../commen/header';
import Close from '../../../assets/images/svg/close';
import { blog5 } from '../../../assets/images/jpg';
import Blog from '..';

export default function Blog5cont() {
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
            <div className="div">
                <Header />
                <Blog />
            </div>
            <div className="blog1" onClick={handleClickOutside}>
                <div className="blog1-bg">
                    <div className="blog1-main" ref={aboutMainRef}>
                        <div className="blog1-main-contant">
                            <div className="blog1-main-div">
                                <div className="logo-main">
                                    <h5>Product Design</h5>
                                    <h5>Jan 12, 2024</h5>
                                </div>
                                <div onClick={handleCloseClick}>
                                    <Close />
                                </div>
                            </div>
                            <h2>Starting and Growing a Career in Web Design</h2>
                            <img src={blog5} alt="blog1" />
                            <h3>What is a portfolio?</h3>
                            <p>A portfolio is any method used to showcase your best work. No matter the industry, fashion, architecture, or design, there are tons of ways to display your work in order to get a new job or expand your audience or customers.</p>
                            <h3>Types of design portfolios</h3>
                            <p>Depending on the type of design work that you do, there are different portfolio formats that will be best suited for your needs. A design portfolio can be digital in the form of a website, slideshow, or PDF but it can also be analog in the form of a print book or poster.</p>
                            <h3>Graphic design portfolio</h3>
                            <p>When it comes to graphic design, designing a PDF as your portfolio is becoming more and more popular to highlight your work and PDF design skills. Using tools like InDesign and Photoshop you can create multi-page PDFs that can be fine-tuned and formatted any way you like. With new software, like Framer, it's becoming even easier to create a PDF online and share it in no time. The result of your PDF portfolio will be a brochure or one-pager piece that shows off examples of your best work along with the descriptions of each project and more related information.</p>
                            <h3>UX design portfolio</h3>
                            <p>For UX designers, online portfolios are probably the most popular type today. This can be in the form of a simple one-page website with your contact information or a more thorough online gallery site. If your main discipline is web design, a portfolio website is the choice for you. It serves as an example itself of your web design skills, as well as highlighting your best work where it’s meant to be seen.Portfolio websites come with many benefits, especially as most of our work is done online. First, they can show off design properties like animation and interactivity.</p>
                            <p>As an important part of UX design, it’s important to show these aspects so viewers get the full experience of your designs. Next, website portfolios are super easy to share. You can include the link in your social media bios as well as send the link to anyone at any time. Your work will become more readily available this way. Finally, online portfolios are a great way to show off your personality. As the more new-age mention of displaying your work, you are less constrained by the rules of the classic print portfolio.</p>
                            <p>When going the online portfolio route there are some drawbacks. First, website portfolios often require knowledge of code to create. This can be a blocker for many UX designers. However, there are increasingly more tools like Framer that allow you to create a design portfolio without code. Next, you have to keep in mind the constraints of the web. Things like breakpoints, different browsers, and rendering issues that you wouldn’t have to think about in print portfolios. Finally, website portfolios can be more time-consuming to create depending on how many site pages you need.</p>
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
