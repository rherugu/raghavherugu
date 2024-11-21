import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCode, FaLink, FaCube } from 'react-icons/fa';


// Advanced Styled Components with Tech-Inspired Design
const TechOverlay = styled(motion.div)`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
  background: linear-gradient(rgba(255, 127, 95, 0.5), rgba(254, 180, 123, 0.5));
 backdrop-filter: blur(10px);
 display: flex;
 align-items: center;
 justify-content: center;
 z-index: 1000;
 perspective: 2000px;
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




const ModalWrapper = styled(motion.div)`
 width: 90%;
 max-width: 1100px;
 height: 90vh;
 display: grid;
 grid-template-columns: 1fr 2fr;
 background: linear-gradient(
   to right bottom,
   #571301,
   #3d0d01
 );
 border-radius: 25px;
 overflow: hidden;
 box-shadow:
   0 25px 50px rgba(0, 0, 0, 0.3),
   0 0 100px rgba(76, 175, 255, 0.2);
 `;


const SidePanel = styled(motion.div)`
 background: linear-gradient(
   -135deg,
   #ff6038,
   #fcae9a
 );
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 30px;
 text-align: center;
`;


const MainContent = styled(motion.div)`
 padding: 50px;
 overflow-y: auto;
 display: flex;
 flex-direction: column;
`;


const TechIcon = styled(motion.div)`
 font-size: 4rem;
 color: #f74416;
 margin-bottom: 20px;
 text-shadow: 0 0 15px rgba(99, 179, 237, 0.5);
`;


const AnimatedTitle = styled(motion.h2)`
 font-size: 2.5rem;
 color: #f5f5f5;
 font-family: 'Space Grotesk', monospace;
 margin-bottom: 20px;
 text-transform: uppercase;
 letter-spacing: 2px;
`;


const TechTag = styled(motion.span)`
 background: rgba(99, 179, 237, 0.2);
 color: #ff7e5f;
 padding: 8px 15px;
 border-radius: 20px;
 margin: 5px;
 font-family: 'Space Mono', monospace;
 border: 1px solid #ff7e5f;
`;


const InteractiveButton = styled(motion.a)`
 display: inline-flex;
 align-items: center;
 background: linear-gradient(150deg, #ff7e5f, rgba(255, 250, 112));
 color: #ffffff;
 padding: 15px 30px;
 border-radius: 30px;
 text-decoration: none;
 margin-top: 20px;
 transition: all 0.3s ease;
 box-shadow: 0 10px 20px rgba(49, 130, 206, 0.2);


 &:hover {
   transform: translateY(-5px);
   box-shadow: 0 15px 30px rgba(49, 130, 206, 0.4);
 }
`;


function ProjectModal({ project, onClose }) {
 const [isLoaded, setIsLoaded] = useState(false);


 useEffect(() => {
   document.body.style.overflow = 'hidden';
   const loadTimer = setTimeout(() => setIsLoaded(true), 300);
  
   const handleEsc = (event) => {
     if (event.keyCode === 27) onClose();
   };
  
   window.addEventListener('keydown', handleEsc);
   return () => {
     clearTimeout(loadTimer);
     document.body.style.overflow = 'auto';
     window.removeEventListener('keydown', handleEsc);
   };
 }, [onClose]);


 // Dynamic project link generation
 const projectLinks = {
   'Greenstick LLC': 'https://greenstickusa.com',
   'LocalMainStreet': 'https://localmainstreet.com',
   'Books2Go': 'https://www.congressionalappchallenge.us/21-nj06/',
   'OSCC Research': 'https://doi.org/10.70121/001c.121778',
   'default': 'http://185.193.158.189:3001/register',
   '1': 'https://patch.com/new-jersey/marlboro-coltsneck/marlboro-family-develops-app-support-small-businesses',
   '2': 'https://www.marlboro-nj.gov/local-main-street-gift-card-program?highlight=WyJsb2NhbCIsIm1haW4iLCJzdHJlZXQiXQ=='
 };


 const projectLink = projectLinks[project.title] || projectLinks['default'];
 


 return (
   <TechOverlay
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     onClick={onClose}
   >
     <ModalWrapper
       initial={{ rotateY: 90, opacity: 0 }}
       animate={{
         rotateY: isLoaded ? 0 : 90,
         opacity: isLoaded ? 1 : 0
       }}
       transition={{
         type: "spring",
         stiffness: 50,
         damping: 15
       }}
       onClick={(e) => e.stopPropagation()}
     >
       <SidePanel
         initial={{ x: -100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ delay: 0.2 }}
       >
         <TechIcon
           initial={{ scale: 0.5, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ type: "spring", stiffness: 300 }}
         >
           <FaCube />
         </TechIcon>
         <AnimatedTitle
           initial={{ y: 50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
         >
           {project.title}
         </AnimatedTitle>
       </SidePanel>
      
       <MainContent
         initial={{ x: 100, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ delay: 0.3 }}
       >
       
         <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
           style={{
             color: '#e2e8f0',
             lineHeight: 1.6,
             marginBottom: 20
           }}
         >
           {project.details}
           
         </motion.p>
         {console.log(project.links)}
        
            {project.title === "LocalMainStreet" && (
              <>
                <StyledLink href={projectLinks['1']} target="_blank" rel="noopener noreferrer">
                  {projectLinks['1']}
                </StyledLink>
                <StyledLink href={projectLinks['2']} target="_blank" rel="noopener noreferrer">
                  {projectLinks['2']}
                </StyledLink>
                <br /><br />
              </>
            )}
       
         <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
         >
           <h3 style={{ color: '#ff7e5f', marginBottom: 15 }}>
             Technologies
           </h3>
           <div style={{ display: 'flex', flexWrap: 'wrap' }}>
             {project.tools.map((tool, index) => (
               <TechTag
                 key={index}
                 initial={{ scale: 0.9, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{
                   type: "spring",
                   stiffness: 300,
                   delay: 0.6 + index * 0.1
                 }}
               >
                 {tool}
               </TechTag>
             ))}
           </div>
         </motion.div>
       


         <InteractiveButton
           href={projectLink}
           target="_blank"
           rel="noopener noreferrer"
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0 }}
           whileHover={{
             scale: 1.02,
             transition: { duration: 0.2 }
           }}
         >
           <FaLink style={{ marginRight: 10 }} />
           Explore Project
         </InteractiveButton>
       </MainContent>
     </ModalWrapper>
   </TechOverlay>
 );
}


export default ProjectModal;

