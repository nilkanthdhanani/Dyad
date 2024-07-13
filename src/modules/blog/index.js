import React from 'react'
import './blog.scss';
import { blog1, blog2, blog3, blog4, blog5 } from '../../assets/images/jpg';
import { Link } from 'react-router-dom';

export default function Blog() {
    return (
        <>
            <div className="container">
                <div className="blog-main-grid">
                    <div className="main-grid1">
                        <div className="main-grid1-box">
                            <h2>Sketches and Schematics: A Product Designer's Notebook</h2>
                            <p>Peek into my notebook and discover the brainstorming, sketches, and ideas that fuel my product designs. From doodles to detailed schematics, let's explore the creative process behind product design and uncover the insights that drive innovation.</p>
                        </div>
                    </div>
                    <div className="main-grid2">
                        <div className="margin-div"></div>
                        <Link to={"/blog1cont"}>
                            <div className="main-grid2-main">
                                <div className="main-grid2-box">
                                    <div className="main-grid2-box1">
                                        <img src={blog1} alt="blog1" />
                                    </div>
                                    <div className="main-grid2-box2">
                                        <div className="main-box2-head">
                                            <h3>Starting and Growing a Career in Web Design</h3>
                                            <p>starting-a-career-in-web-design</p>
                                        </div>
                                        <span>Apr 8, 2024</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/blog2cont"}>
                            <div className="main-grid2-main">
                                <div className="main-grid2-box">
                                    <div className="main-grid2-box1">
                                        <img src={blog2} alt="blog2" />
                                    </div>
                                    <div className="main-grid2-box2">
                                        <div className="main-box2-head">
                                            <h3>Create a Landing Page That Performs Great</h3>
                                            <p>create-a-landing-page-that-performs-great</p>
                                        </div>
                                        <span>Mar 15, 2024</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/blog3cont"}>
                            <div className="main-grid2-main">
                                <div className="main-grid2-box">
                                    <div className="main-grid2-box1">
                                        <img src={blog3} alt="blog3" />
                                    </div>
                                    <div className="main-grid2-box2">
                                        <div className="main-box2-head">
                                            <h3>How Can Designers Prepare for the Future?</h3>
                                            <p>how-can-designers-prepare-for-the-future</p>
                                        </div>
                                        <span>Fab 28, 2024</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/blog4cont"}>
                            <div className="main-grid2-main">
                                <div className="main-grid2-box">
                                    <div className="main-grid2-box1">
                                        <img src={blog4} alt="blog4" />
                                    </div>
                                    <div className="main-grid2-box2">
                                        <div className="main-box2-head">
                                            <h3>Building a Navigation Component with Variables</h3>
                                            <p>building-a-navigation-component</p>
                                        </div>
                                        <span>Feb 6, 2024</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/blog5cont"}>
                            <div className="main-grid2-main">
                                <div className="main-grid2-box">
                                    <div className="main-grid2-box1">
                                        <img src={blog5} alt="blog5" />
                                    </div>
                                    <div className="main-grid2-box2">
                                        <div className="main-box2-head">
                                            <h3>How to Create an Effective Design Portfolio</h3>
                                            <p>how-to-create-an-effective-design-portfolio</p>
                                        </div>
                                        <span>Jan 12, 2024</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
