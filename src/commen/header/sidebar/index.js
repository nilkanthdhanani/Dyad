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
        }, 300);
    };

    return (
        <div className={`sidebar-overlay ${isClosing ? 'closing' : ''}`} onClick={handleCloseSidebar}>
            <div className="sidebar" onClick={(e) => e.stopPropagation()}>
                <Link to={"/"}>
                    <h2>Dyad</h2>
                </Link>
                <ul>
                    <li><Link to="/about" onClick={handleCloseSidebar}>About</Link></li>
                    <li><Link to="/blog" onClick={handleCloseSidebar}>Blog</Link></li>
                    <li><Link to="/contact" onClick={handleCloseSidebar}>Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}
