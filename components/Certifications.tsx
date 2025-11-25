import React from 'react';
import { RESUME_DATA } from '../constants';
import { Award, BadgeCheck, FileText } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESUME_DATA.certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug min-h-[3.5rem]">
                {cert.name}
              </h3>
              <div className="flex items-center gap-2 text-slate-500 text-sm font-medium pt-4 border-t border-slate-50 mt-auto">
                <BadgeCheck size={16} className="text-accent-500" />
                <span>Issued by {cert.issuer}</span>
              </div>
              
              {cert.pdfUrl && (
                <a 
                  href={cert.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-2.5 px-4 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-accent-50 hover:text-accent-700 transition-colors flex items-center justify-center gap-2 border border-transparent hover:border-accent-200"
                >
                  <FileText size={16} />
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};