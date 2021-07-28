import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <NavLink
                to="/collections"
                className="nav-tab"
                activeClassName="active-tab"
                id="collections-tab">
                Collections
            </NavLink>
            <NavLink
                to="/about"
                className="nav-tab"
                activeClassName="active-tab"
                id="about-tab">
                About
            </NavLink>
            <NavLink
                to="/artists"
                className="nav-tab"
                activeClassName="active-tab"
                id="artists-tab">
                Artists
            </NavLink>
            <NavLink
                to="/auctions"
                className="nav-tab"
                activeClassName="active-tab"
                id="auctions-tab">
                Auctions
            </NavLink>
            <NavLink
                exact to="/"
                className="nav-tab"
                activeClassName="active-tab"
                id="home-tab">
                Wisp of Tone
            </NavLink>
        </div>
    );
}

export default Navbar;