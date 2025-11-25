import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-accent-100 selection:text-accent-900">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      
      <footer className="bg-black text-slate-400 py-8 text-center text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Vedant Patel. All rights reserved.</p>
          <p className="mt-2 text-xs opacity-60">Designed & Built with React & Tailwind CSS</p>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;