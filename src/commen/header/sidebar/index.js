import React, { useState } from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';

export default function Sidebar({ toggleSidebar }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleCloseSidebar = () => {
        setIsClosing(true);
        setTimeout(() => {
            toggleSidebar();
            setIsClosing(false);
        }, 300); // Match the duration of the slideOut animation
    };

    return (
        <div className={`sidebar-overlay ${isClosing ? 'closing' : ''}`} onClick={handleCloseSidebar}>
            <div className="sidebar" onClick={(e) => e.stopPropagation()}>
                <Link to={"/"}>
                    <h2>Dyad</h2>
                </Link>
                <div className="sidebar-list">
                    <Link to="/about" onClick={handleCloseSidebar}>About</Link>
                    <Link to="/blog" onClick={handleCloseSidebar}>Blog</Link>
                    <Link to="/contact" onClick={handleCloseSidebar}>Contact</Link>
                </div>
            </div>
        </div>
    );
}
