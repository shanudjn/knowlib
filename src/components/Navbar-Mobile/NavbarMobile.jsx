import React from 'react'
import { Link } from 'react-router-dom';
import './NavbarMobile.css';

function NavbarMobile() {
    return (
        <div className="div-navbar-mobile">
            <Link to='/' className='navbar-mobile-link'>
                <div className="navbar-mobile-item">
                    <span className="material-icons">
                        home
                     </span>
                </div>
                <span className='span-link-name'>Home</span>
            </Link>
            {/* <Link to='/' className='navbar-mobile-link'>
                <div className="navbar-mobile-item">
                    <span className="material-icons">
                        watch_later
                    </span>
                </div>
                <span className='span-link-name'>Watch Later</span>
            </Link> */}
            <Link to='/playlist' className='navbar-mobile-link'>
                <div className="navbar-mobile-item">
                    <span className="material-icons">
                        video_library
                    </span>
                </div>
                <span className='span-link-name'>Library</span>
            </Link>
            <Link to='/account' className='navbar-mobile-link'>
                <div className="navbar-mobile-item">
                    <span className="material-icons">
                        account_circle
                     </span>
                </div>
                <span className='span-link-name'>Login</span>
            </Link>
        </div>
    )
}

export default NavbarMobile;
