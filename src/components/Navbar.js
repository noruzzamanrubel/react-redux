import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" className='nav-link'>Home</NavLink>
            <NavLink to="/blog" className='nav-link'>Blog</NavLink>
            <NavLink to="/todo" className='nav-link'>Todo</NavLink>
            <NavLink to="/contact" className='nav-link'>Contact</NavLink>
            <NavLink to="/counterview" className='nav-link'>Counter</NavLink>
        </nav>
    )
}

export default Navbar