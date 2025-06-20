import React from 'react';
import { ThemeProvider } from './utils/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Achievements />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
