import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
const Header = () => {
    return (

            <header class="header">

                <Link to="/" class="logo"> <i class="fas fa-dice-d20"></i> Guild Masters Den </Link>

                <nav class="navbar">
                    <a href="#home" class="active">home</a>
                    <a href="#services">services</a>
                    <a href="#about">about</a>
                    <a href="#contact">contact</a>
                    <a href="#blogs">blogs</a>
                </nav>

                <div class="icons">
                    <div id="menu-btn" class="fas fa-bars"></div>
                    <Link to="/support"><button class="btn">Support us!</button></Link>
                </div>

            </header>
    )
}

export default Header
