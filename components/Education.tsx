
import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Education</h2>
            <p className="text-slate-600 leading-relaxed">
              My academic journey has been focused on building a strong foundation in engineering principles and applied sciences.
            </p>
          </div>

          <div className="lg:w-2/3">
             <div className="space-y-8">
               {RESUME_DATA.education.map((edu, index) => (
                 <div key={index} className="relative pl-8 border-l-2 border-brand-200">
                   <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-600 rounded-full border-4 border-white"></div>
                   
                   <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                       <h3 className="text-xl font-bold text-slate-900">{edu.school}</h3>
                       <div className="flex items-center gap-2 text-sm text-brand-700 font-medium mt-2 sm:mt-0 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                         <Calendar size={14} />
                         {edu.period}
                       </div>
                     </div>
                     <div className="flex items-center gap-2 text-slate-600 mb-4">
                       <GraduationCap size={18} className="text-brand-600" />
                       <span className="font-medium">{edu.degree}</span>
                     </div>
                     <p className="text-slate-500 text-sm">
                       {edu.description}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
