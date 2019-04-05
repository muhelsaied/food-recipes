import React, { Component } from 'react';
import Logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
class NavBar extends Component {
    render() {
        return (
            // <!-- Image and text -->
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to ='/' className='navbar-brand'>
                    <img className="" src={Logo} alt='logo'/>
                </Link> 
                <div className="collapase navbar-collapse show ml-sm-5">
                    <ul className="navbar-nav">
                        <li className='navbar-item'>
                            <Link className = 'nav-link'to='/'>
                            Home
                            </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link className = 'nav-link'to='/Recipes'>
                            Recipes
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;