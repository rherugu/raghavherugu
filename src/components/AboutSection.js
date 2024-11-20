// components/AboutSection.js

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import profileImage from '../assets/profile.jpg'; // Replace with your actual image path
import svgGraphic from '../assets/about-graphic.svg'; // Replace with your actual SVG path

const AboutSection = styled.section`
  position: relative;
  overflow: hidden;
  background-color: #0e0e0e;
  color: #fff;
`;

const ParallaxContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const BackgroundLayer = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 120%;
  top: -10%;
  left: 0;
  background: url(${svgGraphic}) no-repeat center/cover;
  opacity: 0.05;
`;

const ContentWrapper = styled.div`
  position: relative;
  padding: 100px 50px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  position: relative;
  overflow: hidden;
  margin-right: 50px;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

const FloatingImage = styled(motion.img)`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`;

const TextContainer = styled.div`
  flex: 2;
  min-width: 300px;
  position: relative;
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'Playfair Display', serif;
  position: relative;
  z-index: 2;

  &:after {
    content: '';
    position: absolute;
    width: 50px;
    height: 5px;
    background: linear-gradient(90deg, #ff7e5f, #feb47b);
    left: 0;
    bottom: -10px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DecorativeCircle = styled(motion.div)`
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  border-radius: 50%;
  z-index: 1;
`;

function AboutSectionComponent() {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <AboutSection id="about">
      <ParallaxContainer>
        <BackgroundLayer style={{ y: y1 }} />
        <DecorativeCircle style={{ y: y2 }} />
        <ContentWrapper>
          <ImageContainer>
            <FloatingImage
              src={profileImage}
              alt="Raghav Herugu"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </ImageContainer>
          <TextContainer>
            <Heading
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            >
              About Me
            </Heading>
            <Paragraph
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
            >
              I'm <strong>Raghav Herugu</strong>, a passionate developer, innovator, and leader with a strong background in web and mobile application development, financial markets, and biotechnology research. My journey is defined by an obsessive pursuit of excellence and a drive to create impactful solutions.
            </Paragraph>
            <Paragraph
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
            >
              I've founded platforms to support local businesses, developed advanced trading software, and led innovative projects that blend technology and community.
            </Paragraph>
          </TextContainer>
        </ContentWrapper>
      </ParallaxContainer>
    </AboutSection>
  );
}

export default AboutSectionComponent;