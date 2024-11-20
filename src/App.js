// App.js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollIndicator from './components/ScrollIndicator';

const theme = {
  colors: {
    primary: '#ff7e5f',
    secondary: '#feb47b',
    background: '#0e0e0e',
    text: '#ffffff',
  },
  fonts: ['Playfair Display', 'Montserrat', 'sans-serif'],
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CustomCursor />
      <Header />
      <ScrollIndicator />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;