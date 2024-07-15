  import React from 'react'
import './home.scss';
import { echo, nimbus, pulse, vrotex, zenith } from '../../assets/images/jpg';
import { echoLogo, figma, genius, nimbusLogo, openai, pulseLogo, vrotexLogo, zenithLogo } from '../../assets/images/png';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="main-grid">
          <div className="main-grid1">
            <div className="main-grid1-box">
              <p>A product designer who approaches design with three key verbs: procrastinate, caffeinate, and iterate.</p>
              <button>Get in touch</button>
            </div>
          </div>
          <div className="main-grid2">
            <div className="margin-div"></div>
            <Link to={"/zenith"}>
              <div className="main-grid2-main animate__animated animate__fadeInUp wow" data-wow-offset="200">
                <div className="main-grid2-box">
                  <div className="logo">
                    <div className="logo-main">
                      <img src={zenithLogo} alt="zenithLogo" />
                      <h2>Zenith</h2>
                    </div>
                    <h3>2024</h3>
                  </div>
                  <div className="prototype">
                    <div className="prototype1">
                      <h4>Design Direction</h4>
                      <h4>User Experience</h4>
                    </div>
                    <div className="prototype1">
                      <img src={figma} alt="figma" />
                      <img src={openai} alt="openai" />
                      <img src={genius} alt="genius" />
                    </div>
                  </div>
                  <img src={zenith} alt="zenith" />
                </div>
              </div>
            </Link>
            <Link to={"/vortex"}>
              <div className="main-grid2-main animate__animated animate__fadeInUp wow" data-wow-offset="200">
                <div className="main-grid2-box">
                  <div className="logo">
                    <div className="logo-main">
                      <img src={vrotexLogo} alt="vrotexLogo" />
                      <h2>Vortex</h2>
                    </div>
                    <h3>2024</h3>
                  </div>
                  <div className="prototype">
                    <div className="prototype1">
                      <h4>Product Design</h4>
                      <h4>User Interface</h4>
                    </div>
                    <div className="prototype1">
                      <img src={figma} alt="figma" />
                      <img src={openai} alt="openai" />
                      <img src={genius} alt="genius" />
                    </div>
                  </div>
                  <img src={vrotex} alt="vrotex" />
                </div>
              </div>
            </Link>
            <Link to={"/pulse"}>
              <div className="main-grid2-main animate__animated animate__fadeInUp wow" data-wow-offset="200">
                <div className="main-grid2-box">
                  <div className="logo">
                    <div className="logo-main">
                      <img src={pulseLogo} alt="pulseLogo" />
                      <h2>Pulse</h2>
                    </div>
                    <h3>2024</h3>
                  </div>
                  <div className="prototype">
                    <div className="prototype1">
                      <h4>Interaction Design</h4>
                      <h4>Usability</h4>
                    </div>
                    <div className="prototype1">
                      <img src={figma} alt="figma" />
                      <img src={openai} alt="openai" />
                      <img src={genius} alt="genius" />
                    </div>
                  </div>
                  <img src={pulse} alt="pulse" />
                </div>
              </div>
            </Link>
            <Link to={"/nimbus"}>
              <div className="main-grid2-main animate__animated animate__fadeInUp wow" data-wow-offset="200">
                <div className="main-grid2-box">
                  <div className="logo">
                    <div className="logo-main">
                      <img src={nimbusLogo} alt="nimbusLogo" />
                      <h2>nimbus</h2>
                    </div>
                    <h3>2024</h3>
                  </div>
                  <div className="prototype">
                    <div className="prototype1">
                      <h4>Visual Design</h4>
                      <h4>Wireframing</h4>
                    </div>
                    <div className="prototype1">
                      <img src={figma} alt="figma" />
                      <img src={openai} alt="openai" />
                      <img src={genius} alt="genius" />
                    </div>
                  </div>
                  <img src={nimbus} alt="nimbus" />
                </div>
              </div>
            </Link>
            <Link to={"/echo"}>
              <div className="main-grid2-main animate__animated animate__fadeInUp wow" data-wow-offset="200">
                <div className="main-grid2-box">
                  <div className="logo">
                    <div className="logo-main">
                      <img src={echoLogo} alt="echoLogo" />
                      <h2>echo</h2>
                    </div>
                    <h3>2024</h3>
                  </div>
                  <div className="prototype">
                    <div className="prototype1">
                      <h4>Prototyping</h4>
                      <h4>User Research</h4>
                    </div>
                    <div className="prototype1">
                      <img src={figma} alt="figma" />
                      <img src={openai} alt="openai" />
                      <img src={genius} alt="genius" />
                    </div>
                  </div>
                  <img src={echo} alt="echo" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
