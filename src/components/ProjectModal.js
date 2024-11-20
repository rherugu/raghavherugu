// components/ProjectModal.js

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(14, 14, 14, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background-color: #1a1a1a;
  padding: 30px;
  border-radius: 20px;
  max-width: 900px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
`;

const ModalTitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
`;

const ModalImage = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 30px;
`;

const ModalDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  font-family: 'Inter', sans-serif;
  margin-bottom: 30px;
  white-space: pre-line;
`;

const ToolsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const ToolItem = styled.span`
  background: #ff7e5f;
  color: #fff;
  padding: 10px 15px;
  border-radius: 20px;
  margin: 5px;
  font-size: 0.9rem;
  font-family: 'Poppins', sans-serif;
`;

const StyledLink = styled.a`
  color: #ff7e5f;
  text-decoration: none;
  margin: 5px 0;
  font-family: 'Poppins', sans-serif;

  &:hover {
    text-decoration: underline;
  }
`;

const AnimatedLink = styled(motion.a)`
  display: inline-block;
  padding: 15px 30px;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  color: #fff;
  border-radius: 30px;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin-top: 20px;

  &:after {
    content: '';
    position: absolute;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.0);
    transform: skewX(-20deg);
    transition: left 0.5s ease;
    z-index: -1;
  }

  &:hover:after {
    left: 100%;
  }
`;

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Determine the project link based on the project title
  let projectLink = '';
  switch (project.title) {
    case 'Greenstick LLC':
      projectLink = 'https://greenstickusa.com';
      break;
    case 'LocalMainStreet':
      projectLink = 'https://localmainstreet.com';
      break;
    case 'Books2Go':
      projectLink = 'https://www.congressionalappchallenge.us/21-nj06/';
      break;
    case 'OSCC Research':
      projectLink = 'https://doi.org/10.70121/001c.121778';
      break;
    default:
      projectLink = '';
      break;
  }

  return (
    <Overlay
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <ModalTitle>{project.title}</ModalTitle>
        <ModalImage src={project.image} alt={project.title} />
        <ModalDescription>{project.details}</ModalDescription>
        {project.links && project.links.length > 0 && (
          <div>
            {project.links.map((link, index) => (
                <div> 
              <StyledLink key={index} href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </StyledLink>
              <br></br><br></br></div>
            ))}
          </div>
        )}
        <br></br>
        <br></br>
        <h3>Tools Used:</h3>
        <br></br>
        <ToolsList>
          {project.tools.map((tool, index) => (
            <ToolItem key={index}>{tool}</ToolItem>
          ))}
        </ToolsList>
        {projectLink && (
          <AnimatedLink
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Visit Project
          </AnimatedLink>
        )}
      </ModalContent>
    </Overlay>
  );
}

export default ProjectModal;