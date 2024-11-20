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
      details: `Founded LocalMainStreet, a platform designed to support local businesses during the COVID-19 crisis by enabling customers to purchase gift cards/digital vouchers and contribute towards generating income for local businesses during and after the lockdown.

Developed both the website and mobile app, leveraging React.js for the front-end, MongoDB for database management, and Stripe for secure payment processing.

Delivered a complete end-to-end solution, integrating secondary technologies to ensure a seamless user experience.

Went door-to-door to pitch the platform to struggling local businesses.

Amassed over 90 small mom-and-pop shops on the platform.

Received media attention, including an article on Patch.com highlighting our efforts to support small businesses during the pandemic.

Endorsed and recognized on the Marlboro Township website. 

Links: `,
links: [
    'https://patch.com/new-jersey/marlboro-coltsneck/marlboro-family-develops-app-support-small-businesses',
    'https://www.marlboro-nj.gov/local-main-street-gift-card-program?highlight=WyJsb2NhbCIsIm1haW4iLCJzdHJlZXQiXQ==',
]
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
      details: `Pivoted from LocalMainStreet and Co-founded JILA, a platform designed to boost local economies by offering tax benefits to residents by leveraging New Jersey’s legislation (A4806) to incentivize local shopping.

Engineered 3 key modules - Residents, Admin, and Business Owners.

Developed dynamic front-end solutions using React.js, integrating Stripe for secure and efficient payment processing.

Engineered the backend infrastructure with MongoDB and Express.js to ensure robust data management and smooth platform operations.

Actively pitching this product to local towns in NJ to gauge interest and generate potential partnerships.`,
    },
    {
        id: 3,
        title: 'Greenstick LLC',
        description:
          'Co-founded Greenstick, an AI-powered platform teaching financial markets through interactive lessons and simulations.',
        image: require('../assets/greenstick.jpg'), // Replace with actual image paths
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
        details: `Launched Greenstick, an AI-powered platform that teaches financial markets through interactive lessons and simulations to teach financial market strategies, including stocks, options, futures trading, and more.
  
  Led the development of quant-based courses, algorithm generators, and trading signals, collaborating closely with the team to deliver cutting-edge financial education tools.
  
  Created and structured comprehensive learning materials, integrating React.js, Chart.js, and TradingView widgets for an immersive user experience.
  
  Researched about trading and quantitative finance, presenting the information on the platform through a mixture of text, videos, animations, and simulations. The platform also includes an AI bot that answers user questions, ensuring a personalized learning experience.
  
  Coordinated project finance, market analysis and strategic growth initiatives to drive the company’s growth.
  
  Initiated outreach and marketing campaigns to attract a broader user base, while continuously enhancing the platform’s features and user interface.`,
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
      details: `Developed an app to facilitate the sharing of unused books within the community.

Implemented front-end development using React Native and MongoDB.

Users could add books they wanted to share or give away by simply entering their ISBNs.

Won first place in the Congressional App Challenge for my district.`,
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
      details: `Published research on Oral Squamous Cell Carcinoma (OSCC) using machine learning in the Winter 2023 edition of Scholarly Review, advancing early cancer detection methodologies.

Utilized advanced machine learning techniques, including regularization and dropout layers, to engineer a highly optimized and robust model, significantly enhancing predictive accuracy while minimizing overfitting.

Conducted a study on planarian regeneration in planaria under the influence of ethanol, exploring implications for cancer treatment.`,
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