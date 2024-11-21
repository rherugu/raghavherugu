// components/ProjectsSection.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectModal from './ProjectModal'; // Import the new component

const ProjectsSection = styled.section`
  padding: 100px 50px;
  background-color: #0e0e0e;
  color: #fff;

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Poppins', sans-serif;

  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 5px;
    background: linear-gradient(90deg, #ff7e5f, #feb47b);
    margin: 20px auto 0;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: #1a1a1a;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  flex: 1;
`;

const LearnMoreButton = styled(motion.button)`
  margin-top: 20px;
  padding: 10px 20px;
  background: #ff7e5f;
  color: #fff;
  border-radius: 30px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  border: none;
  cursor: pointer;

  &:hover {
    background: #feb47b;
  }
`;

function ProjectsSectionComponent() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'LocalMainStreet',
      description:
        'Founded LocalMainStreet to support local businesses during the COVID-19 crisis.',
      image: require('../assets/lmt.png'),
      tools: [
        'React.js',
        'React Native',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Stripe API',
        'QR Code Generation',
        'RESTful APIs',
        'Heroku Deployment',
        'UI/UX Design',
      ],
      links: [
        'https://patch.com/new-jersey/marlboro-coltsneck/marlboro-family-develops-app-support-small-businesses',
        'https://www.marlboro-nj.gov/local-main-street-gift-card-program?highlight=WyJsb2NhbCIsIm1haW4iLCJzdHJlZXQiXQ=='
      ],
      details: 'I founded LocalMainStreet to support small businesses during the COVID-19 crisis. The platform enabled customers to purchase digital gift cards and vouchers from local shops, providing immediate income to businesses affected by lockdowns. I developed both the website and mobile app using React.js and MongoDB, integrating secure payment processing with Stripe. By going door-to-door and leveraging social media, I onboarded over 90 local businesses, many of them minority-owned. The initiative was endorsed by the township and recognized on their website, helping to strengthen our community during challenging times.',
    },
    {
      id: 2,
      title: 'JILA',
      description:
        'Co-founded JILA, a platform designed to boost local economies by offering tax benefits to residents.',
      image: require('../assets/jila.png'),
      tools: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Stripe API',
        'RESTful APIs',
        'JSON Web Tokens (JWT)',
        'API Integration',
        'Government Data APIs',
        'UI/UX Design',
        'Heroku Deployment',
      ],
      details: 'As a co-founder and lead developer at JILA, I built a platform to boost local economies by offering residents tax benefits for shopping locally. Leveraging New Jersey’s legislation (A4806), JILA connects residents and businesses: local shops provide a percentage discount on transactions that residents can use toward their property taxes. I engineered three key modules—for residents, businesses, and admins—using React.js for the front end and MongoDB with Express.js for the back end. We integrated an API to verify property details, ensuring accurate tracking of tax rebates. We’re currently pitching JILA to towns across New Jersey to foster community engagement and economic growth.',
    },
    {
      id: 3,
      title: 'Greenstick LLC',
      description:
        'Co-founded Greenstick, an AI-powered platform teaching financial markets through interactive lessons and simulations.',
      image: require('../assets/greenstick.jpg'),
      tools: [
        'React.js',
        'Node.js',
        'Express.js',
        'TensorFlow.js',
        'Chart.js',
        'TradingView Widgets',
        'Python',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Neural Networks',
        'Financial Modeling',
        'Project Finance',
        'Market Analysis',
      ],
      details: 'At Greenstick, I co-founded and launched an AI-powered platform that teaches financial markets through interactive lessons and simulations. The platform covers strategies in stocks, options, futures trading, and more. I led the development of quant-based courses, algorithm generators, and trading signals, using technologies like React.js, Chart.js, and TradingView widgets for an immersive learning experience. We also integrated an AI chatbot to answer user questions, providing a personalized educational journey. My role included coordinating project finance, conducting market analysis, and initiating outreach campaigns to grow our user base and continuously enhance the platform.',
    },
    {
      id: 4,
      title: 'Books2Go',
      description:
        'Developed an app to facilitate the sharing of unused books within the community.',
      image: require('../assets/b2g.png'),
      tools: [
        'React Native',
        'Expo',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Google Books API',
        'ISBN Integration',
        'RESTful APIs',
        'JWT Authentication',
        'UI/UX Design',
        'Heroku Deployment',
      ],
      details: 'As the lead developer of Books2Go, I created an app to facilitate the sharing of unused books within the community. Built with React Native and MongoDB, the app allows users to sign up and list books they wish to share by simply entering the ISBN. Users can search for books by title and connect with others to borrow or receive books, promoting literacy and resource sharing locally. Books2Go won first place in the Congressional App Challenge for my district, recognized by Congressman Frank Pallone.',
    },
    {
      id: 5,
      title: 'OSCC Research',
      description:
        'Conducted research on Oral Squamous Cell Carcinoma at the Rutgers Cancer Institute.',
      image: require('../assets/oscc.png'),
      tools: [
        'Python',
        'TensorFlow',
        'Keras',
        'Scikit-learn',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'Machine Learning',
        'Deep Learning',
        'Statistical Analysis',
        'Biotechnology',
        'Data Visualization',
      ],
      details: 'I conducted and published research on Oral Squamous Cell Carcinoma (OSCC), focusing on early cancer detection using machine learning. Published in the Winter 2023 edition of Scholarly Review, my work utilized advanced techniques like regularization and dropout layers to enhance predictive accuracy while minimizing overfitting. This research contributes to advancing methodologies for early detection of OSCC, potentially improving patient outcomes.',
    },
  ];

  return (
    <>
      <ProjectsSection id="projects">
        <Title>My Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.2,
              }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <LearnMoreButton
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Learn More
                </LearnMoreButton>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsSection>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectsSectionComponent;