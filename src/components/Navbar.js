
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(true);

    return (
      <>
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-logo">
                    VICKY'S <i class="far fa-smile-wink"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        </nav>
      </>
    )
}

export default Navbar
