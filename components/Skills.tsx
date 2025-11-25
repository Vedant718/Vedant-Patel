import React from 'react';
import { RESUME_DATA } from '../constants';
import { CheckCircle2, Brain, Presentation, FlaskConical, Thermometer, Factory, Code, Calculator } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (skill: string) => {
    // Chemical Engineering specific icons
    if (skill.includes("Process Calculation") || skill.includes("Mass")) return <Calculator size={20} />;
    if (skill.includes("Heat")) return <Thermometer size={20} />;
    if (skill.includes("Equipment")) return <Factory size={20} />;
    if (skill.includes("Python")) return <Code size={20} />;
    
    // General icons
    if (skill.includes("Research")) return <FlaskConical size={20} />;
    if (skill.includes("AI") || skill.includes("Problem")) return <Brain size={20} />;
    if (skill.includes("Presentation")) return <Presentation size={20} />;
    
    return <CheckCircle2 size={20} />;
  };

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Skills</h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {RESUME_DATA.skills.map((categoryGroup, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-600 rounded-full"></span>
                {categoryGroup.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryGroup.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-accent-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-slate-50 text-accent-600 rounded-lg shadow-sm group-hover:bg-accent-600 group-hover:text-white transition-colors">
                        {getIcon(skill)}
                      </div>
                      <h3 className="font-semibold text-slate-800 text-lg">{skill}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};