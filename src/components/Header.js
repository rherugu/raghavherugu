// components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Added this line */
  z-index: 100;
  background: rgba(14, 14, 14, 0.8);
  backdrop-filter: blur(5px);

  @media (max-width: 768px) {
    padding: 15px 30px;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-family: 'Playfair Display', serif;
  cursor: pointer;
  color: #fff;
  margin: 0; /* Added this line */
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center; /* Added this line */

  a {
    margin-left: 30px;
    font-size: 1rem;
    color: #fff;
    font-family: 'Poppins-black', sans-serif;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    transition: color 0.3s ease;
    padding: 5px 0; /* Added this line */

    &:hover {
      color: #ff7e5f;
    }

    &:hover::after {
      width: 100%;
    }

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      background: #ff7e5f;
      left: 0;
      bottom: 0; /* Changed from 'bottom: 5px' to 'bottom: 0' */
      transition: width 0.3s ease;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Link to="home" smooth={true} duration={500}>
          RH
        </Link>
      </Logo>
      <NavLinks>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </NavLinks>
      
    </HeaderContainer>
  );
}

export default Header;