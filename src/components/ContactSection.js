// components/ContactSection.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = styled.section`
  padding: 100px 50px;
  background-color: #161616;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 30px;
  font-family: 'Playfair Display', serif;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin-bottom: 50px;
`;

const SocialMedia = styled.div`
  text-align: center;

  a {
    margin: 0 15px;
    color: #fff;
    font-size: 2rem;

    &:hover {
      color: #ff7e5f;
    }
  }
`;

function ContactSection() {
  return (
    <Contact id="contact">
      <Title>Connect with Me</Title>
      <Paragraph>
        I'm excited about the opportunity to join the iSTEM program at Stevens Institute of Technology. Let's connect and discuss how we can innovate together.
      </Paragraph>
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
    </Contact>
  );
}

export default ContactSection;