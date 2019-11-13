import React from 'react';

const Navbar = ({ title }) => {
    return (
        <div>
            <nav className="navbar navbar-light bg-info">
                <span className="navbar-brand mb-0 h1">{title}</span>
            </nav>
        </div>
    );
};

export default Navbar;