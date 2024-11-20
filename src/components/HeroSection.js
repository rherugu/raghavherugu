// components/HeroSection.js

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Hero = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AnimatedBackground = styled.div`
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background: linear-gradient(120deg, #ff7e5f, #feb47b, #ff7e5f);
  background-size: 200% 200%;
  animation: ${gradientAnimation} 10s ease-in-out infinite;
  z-index: 1;
  opacity: 0.5;
`;

const Title = styled(motion.h1)`
  font-size: 6rem;
  font-family: 'Playfair Display', serif;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.2;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  color: #fff;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ShapesContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
`;

const Shape = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  filter: blur(50px);
  border-radius: 50%;
`;

function HeroSection() {
  const shapes = [
    { id: 1, top: '10%', left: '20%', delay: 0 },
    { id: 2, top: '70%', left: '40%', delay: 1 },
    { id: 3, top: '50%', left: '80%', delay: 2 },
    { id: 4, top: '20%', left: '60%', delay: 3 },
    { id: 5, top: '80%', left: '10%', delay: 4 },
  ];

  return (
    <Hero id="home">
      <AnimatedBackground />
      <ShapesContainer>
        {shapes.map((shape) => (
          <Shape
            key={shape.id}
            style={{ top: shape.top, left: shape.left }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 10,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: shape.delay,
            }}
          />
        ))}
      </ShapesContainer>
      <HeroContent>
        <Title
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Raghav Herugu
        </Title>
        <Subtitle
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          style={{ width: '600px' }}
        >
          High school senior passionate about app development, web design, and the financial markets, with career interests in technology, finance, and entrepreneurship.
        </Subtitle>
      </HeroContent>
    </Hero>
  );
}

export default HeroSection;