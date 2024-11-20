// components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #0e0e0e;
  color: #fff;
  padding: 50px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterText = styled.p`
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
`;

const SocialMedia = styled.div`
  margin-bottom: 20px;

  a {
    margin: 0 15px;
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #ff7e5f;
    }
  }
`;

const BackToTop = styled.a`
  position: absolute;
  right: 20px;
  bottom: 20px;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ff7e5f;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>&copy; {new Date().getFullYear()} Raghav Herugu. All rights reserved.</FooterText>
        <SocialMedia>
          <a href="https://github.com/rherugu" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/raghav-herugu-5b263a1b1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:raghav.s.herugu@gmail.com">
            <FaEnvelope />
          </a>
        </SocialMedia>
      </FooterContent>
      <BackToTop href="#home">
        ↑
      </BackToTop>
    </FooterContainer>
  );
}

export default Footer;