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
      details: `LocalMainStreet was born out of a deep commitment to uplift local businesses during the unprecedented challenges posed by the COVID-19 pandemic. This innovative platform empowers customers to purchase gift cards and digital vouchers, providing essential financial support to local shops struggling to stay afloat. 

      I spearheaded the development of both the website and mobile application, utilizing React.js for a seamless user experience and MongoDB for efficient data management. The integration of Stripe ensured secure transactions, while my hands-on approach included direct outreach to local businesses, resulting in partnerships with over 90 small enterprises. 

      Our efforts garnered significant media attention, including a feature on Patch.com, which highlighted our mission to foster community resilience. The project not only provided immediate financial relief but also laid the groundwork for a sustainable ecosystem that continues to thrive beyond the pandemic.`,
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
      details: `JILA emerged from a vision to revitalize local economies by leveraging legislative frameworks to provide tax incentives for residents. As a co-founder, I played a pivotal role in designing and developing three core modules tailored for residents, business owners, and administrative users.

      The platform's front-end was crafted using React.js, ensuring a dynamic and responsive user interface, while the backend was fortified with MongoDB and Express.js for robust data handling. My efforts included extensive outreach to local municipalities in New Jersey, where I actively pitched the platform to gauge interest and foster potential partnerships. 

      JILA not only aims to stimulate local commerce but also serves as a model for community-driven economic development, showcasing the power of technology in creating sustainable solutions.`,
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
      details: `Greenstick represents a groundbreaking approach to financial education, utilizing artificial intelligence to create an engaging learning environment. Our platform offers interactive lessons and simulations that demystify complex financial concepts, empowering users to navigate the intricacies of the market with confidence.

      I led the development of quant-based courses and algorithmic trading tools, collaborating closely with a talented team to deliver innovative educational resources. The integration of React.js, Chart.js, and TradingView widgets provided users with an immersive experience, while our AI bot offered personalized assistance, ensuring that learners received tailored support.

      Through comprehensive research and development, we crafted a curriculum that not only covers trading strategies but also emphasizes the importance of risk management and market analysis, preparing users for real-world financial challenges.`,
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
      details: `Books2Go is an innovative application designed to foster a culture of sharing and sustainability within communities. By allowing users to easily share their unused books, we aimed to reduce waste and promote literacy.

      I was responsible for the front-end development using React Native, ensuring a user-friendly interface that encourages participation. The app allows users to add books by simply entering their ISBNs, making the process seamless and efficient. 

      Our initiative gained recognition when we won first place in the Congressional App Challenge for our district, highlighting the impact of technology in addressing community needs. Books2Go not only connects readers but also cultivates a sense of community through the love of literature.`,
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
      details: `My research on Oral Squamous Cell Carcinoma (OSCC) at the Rutgers Cancer Institute focused on advancing early detection methodologies through the application of machine learning techniques. The findings were published in the Winter 2023 edition of Scholarly Review, contributing to the ongoing discourse in cancer research.

      I employed advanced machine learning algorithms, including regularization and dropout layers, to develop a highly optimized model that significantly improved predictive accuracy while minimizing overfitting. My work also involved conducting a comprehensive study on planarian regeneration, exploring its implications for cancer treatment.

      This research not only deepened my understanding of biotechnology but also underscored the potential of data-driven approaches in transforming healthcare outcomes, paving the way for future innovations in cancer detection and treatment.`,
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