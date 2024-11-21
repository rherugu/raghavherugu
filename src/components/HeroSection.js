// components/HeroSection.js

import {React, useEffect, useState} from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import { AnimatePresence } from 'framer-motion';

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


const WhyISTEMButton = styled(motion.button)`
  background: none;
  border: none;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #feb47b;
  }
`;

const WhiteSection = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
  color: black;
`;



const ScrollableContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 40px 10%;
  
  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
    
    &:hover {
      background: #555;
    }
  }
`;



const TypewriterCursor = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const TypewriterText = styled.div`
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  white-space: pre-wrap;
  position: relative;

 
`;
const Cursor = styled.span`
  display: inline-block;
  width: 10px;
  height: 20px;
  background-color: black;
  animation: ${keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  `} 0.7s infinite;
`;

const BackButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  z-index: 101;
  color: black;
`;

function HeroSection() {
  const [showISTEMSection, setShowISTEMSection] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = ` Choosing iSTEM at the Stevens Institute of Technology is driven by a profound desire to harness technology for meaningful impact. My journey into computer science began with a little girl. It wasn’t the typical request you’d expect from someone like her. Her idea was to create a library of books that had characters of different races, religions, and abilities to spread awareness, acceptance, and unity. It was called “Madison’s Magical Library.” With a truck full of books and no way to efficiently distribute them, her mother reached out to me. At the time, I had only minimal knowledge of building apps. Suddenly, I was tasked with creating a full-stack mobile application to automate the entire process. I had less than two months and a lot to learn. In this challenge, I found something deeper than just coding—this was a chance to use technology to solve real-world problems, and I was hooked.

Overcoming the challenges was far from easy. I spent countless nights immersed in code, acquainting myself with unfamiliar tools, and grappling with self-doubt about my ability to succeed. Yet, this process captivated me. This wasn’t just about programming; it was about tackling a real problem and seeing technology make a real difference. Although the app never ended up being used, it showed me what it means to bring an idea to life. I realized that this is what I want to do, and whether it is developing applications that promote diversity or creating algorithms to pursue other passions, I am committed to leveraging my skills to make a positive and lasting impact.

This realization is what draws me to iSTEM. The program is not confined to traditional classroom learning or theoretical absorption. It emphasizes hands-on experience, experimentation, and tangible creation. I perceive iSTEM as a community of proactive innovators who confront problems head-on without hesitation. This is the kind of environment in which I am confident I will flourish.

Whether it’s starting projects like Greenstick to teach financial literacy in a fun way or building LocalMainStreet to support small businesses during tough times, I’ve always loved the challenge of creating something from scratch. These weren’t just coding projects; they were about human connection, finding solutions, and making an impact. iSTEM offers the chance to keep sharpening these skills while working with others who share that same passion.

I also realize iSTEM isn’t just about hitting home runs. It’s about pushing limits, staying up all night on a prototype, failing, and trying again. It’s about being around peers and mentors who inspire me to go further, to be better. In iSTEM, I see a place where I can take risks, explore big ideas, and build not just projects but experiences that leave lasting marks.

It’s about understanding that even the smallest effort can spark meaningful change, and that the journey shapes us as much as the destination. And the fact that I could even make an impact on one little girl, let alone hundreds of people, made me feel unstoppable.`;

useEffect(() => {
  let isMounted = true;
  let timeoutId;

  const typeText = () => {
    let currentIndex = 0;
    
    const typeNextChar = () => {
      if (currentIndex < fullText.length && isMounted) {
        // More natural typing speed with variation
        const baseDelay = 10;
        const randomVariation = Math.random() * 40;
        const delay = baseDelay + randomVariation;

        timeoutId = setTimeout(() => {
          setDisplayText(prevText => prevText + fullText[currentIndex]);
          currentIndex++;
          
          // Continue typing
          if (currentIndex < fullText.length) {
            typeNextChar();
          } else {
            // Typing complete
            setIsTypingComplete(true);
          }
        }, delay);
      }
    };

    typeNextChar();
  };

  if (showISTEMSection) {
    typeText();
  }

  return () => {
    isMounted = false;
    if (timeoutId) clearTimeout(timeoutId);
  };
}, [showISTEMSection]);

const handleWhyISTEMClick = () => {
  setShowISTEMSection(true);
};

const handleGoBack = () => {
  setShowISTEMSection(false);
  setDisplayText('');
  setIsTypingComplete(false);
};




  return (
    <>
      <Hero id="home">
      <AnimatedBackground />
        {/* Previous Hero content */}
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
          <WhyISTEMButton
            onClick={handleWhyISTEMClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Why iSTEM? → 
          </WhyISTEMButton>
        </HeroContent>
      </Hero>

      <AnimatePresence>
        {showISTEMSection && (
          <WhiteSection
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <BackButton
              onClick={handleGoBack}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ← Go Back
            </BackButton>
            <ScrollableContent>
              <TypewriterText>
                {displayText}
                {!isTypingComplete && <Cursor />}
              </TypewriterText>
            </ScrollableContent>
          </WhiteSection>
        )}
      </AnimatePresence>
    </>
  );
}

export default HeroSection;