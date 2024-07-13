import React from 'react'
import './footer.scss';
import Facebook from '../../assets/images/svg/facebook';
import Instagram from '../../assets/images/svg/instagram';
import Twitter from '../../assets/images/svg/twitter';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-div">
            <div className="footer-div1">
              <a href="/" data-replace="Quick Links"><span>Quick Links</span></a>
              <a href="/" data-replace="Privacy Policy"><span>Privacy Policy</span></a>
              <a href="/" data-replace="Support"><span>Support</span></a>
            </div>
            <div className="footer-div2">
              <a href="https://www.facebook.com/" target="blank"><Facebook /><Facebook /></a>
              <a href="https://x.com/?lang=en" target="blank"><Twitter /><Twitter /></a>
              <a href="https://www.instagram.com/" target="blank"><Instagram /><Instagram /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
