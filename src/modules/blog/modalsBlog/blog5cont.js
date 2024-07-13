import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './modalsBlog.scss';
import Header from '../../../commen/header';
import Close from '../../../assets/images/svg/close';
import { blog1 } from '../../../assets/images/jpg';
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
                                    <h5>Apr 8, 2024</h5>
                                </div>
                                <div onClick={handleCloseClick}>
                                    <Close />
                                </div>
                            </div>
                            <h2>Starting and Growing a Career in Web Design</h2>
                            <img src={blog1} alt="blog1" />
                            <p>In this project, I aimed to create a user-centric design that balances functionality with aesthetic appeal. The goal was to develop a solution that not only meets user needs but also delivers a visually pleasing experience. Through iterative design and user feedback, the project showcases my ability to empathize with users, conceptualize innovative ideas, and execute them effectively.</p>
                            <h3>What does a career in web design involve?</h3>
                            <p>A career in website design can involve the design, creation, and coding of a range of website types. Other tasks will typically include liaising with clients and discussing website specifications, incorporating feedback, working on graphic design and image editing, and enabling multimedia features such as audio and video.  Requiring a range of creative and technical skills, web designers may be involved in work across a range of industries, including software companies, IT consultancies, web design companies, corporate organizations, and more. In contrast with web developers, web designers tend to play a more creative role, crafting the overall vision and design of a site, and determining how to best incorporate the necessary functionality. However, there can be significant overlap between the roles.</p>
                            <h3>Full-stack, back-end, and front-end web development</h3>
                            <p>The U.S. Bureau of Labor Statistics (BLS) Occupational Outlook Handbook tends to group web developers and digital designers into one category. However, they define them separately, stating that web developers create and maintain websites and are responsible for the technical aspects including performance and capacity.  Web or digital designers, on the other hand, are responsible for the look and functionality of websites and interfaces. They develop, create, and test the layout, functions, and navigation for usability. Web developers can focus on the back-end, front-end, or full-stack development, and typically utilize a range of programming languages, libraries, and frameworks to do so. Web designers may work more closely with front-end engineers to establish the user-end functionality and appearance of a site.</p>
                            <h3>Are web designers in demand in 2022?</h3>
                            <p>In our ever-increasingly digital environment, there is a constant need for websites—and therefore for web designers and developers. With 17.4 billion websites in existence as of January 2020, the demand for web developers is only expected to rise.Web designers with significant coding experience are typically in higher demand, and can usually expect a higher salary. Like all jobs, there are likely to be a range of opportunities, some of which are better paid than others. But certain skill sets are basic to web design, most of which are key to how to become a web designer in 2022.</p>
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
