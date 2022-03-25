import React from "react";
import { Link } from 'react-router-dom';
import WebLogo from '../Images/VHS.png';

const Navbar = () => {
    return (
        <nav>
            <div className='navbar-left'>
                <img className='WebLogo' src={WebLogo} alt="VHS.png" />
                <h3 className='Title'>Entertainment</h3>
                <ul className='links'>
                    <button type='button' className='link'><Link to="/">Home</Link></button>
                    <button type='button' className='link'><Link to="/catalog">Catalog</Link></button>
                    <button type='button' className='link'><Link to="/blog">Blog</Link></button>
                    <button type='button' className='link-right link'><Link to="/login">Log In</Link></button>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;