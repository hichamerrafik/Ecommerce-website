import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1>Multimart</h1>
                <p>Since 1997</p>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                <li className="nav__item"> 
                  <NavLink to="/home" className="nav__link">Home</NavLink>
                </li>
                <li className="nav__item"> 
                  <NavLink to="/shop" className="nav__link">Shop</NavLink>
                </li>
                <li className="nav__item"> 
                  <NavLink to="/cart" className="nav__link">Cart</NavLink>
                </li>
              </ul>
            </div>

            <div className="nav_icons">
              <span className='fav__icon'><i className="ri-heart-line"></i></span>
              <span className='cart__icon'><i className="ri-shopping-bag-line"></i></span>
              <span><img src={userIcon} alt="" /></span>
            </div>
            <div className="mobile__menu">
              <span><i className="ri-menu-line"></i></span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header
