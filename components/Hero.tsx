import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white pt-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-100/40 blur-[100px]"></div>
         <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-accent-100/40 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Text Content */}
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-block px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-xs font-bold tracking-wider mb-6 border border-accent-200">
            PORTFOLIO
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            {RESUME_DATA.personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 mb-8 font-medium">
            {RESUME_DATA.personalInfo.headline}
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500 mb-12">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-brand-600" />
              <span>{RESUME_DATA.personalInfo.location}</span>
            </div>
            <span className="hidden md:block w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-accent-600" />
              <a href={`mailto:${RESUME_DATA.personalInfo.email}`} className="hover:text-accent-700 transition-colors">
                {RESUME_DATA.personalInfo.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-accent-600 text-white rounded-lg font-medium hover:bg-accent-700 transition-all shadow-lg shadow-accent-200 transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a 
              href={RESUME_DATA.personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-white text-brand-700 border border-slate-200 rounded-lg font-medium hover:bg-brand-50 hover:border-brand-300 transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};