import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
       <div className="navbar">
         <nav className="app-name-center" >Ruturajsinh Official App</nav>
          <nav className="menu">
            <nav className="nav-style">
              <Link to="/" className="link-style">Home</Link>
              <Link to="/About" className="link-style">About</Link>
              <Link to="/Contact-us" className="link-style">Contact Us</Link>
            </nav>
          <nav className="searched">
            <input type="text" className="input-style" />
            <button className="btn btn-style">Search</button>
          </nav>
         </nav>
       </div>
    )
}

Header.defaultProps = {
    title : "MyApp",
    searchBar: true
}

