import React from 'react';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Let's Connect</h2>
            <p className="text-slate-400 mb-10 leading-relaxed max-w-md">
              I am currently open to internship opportunities and networking within the Chemical Engineering and Generative AI fields. Feel free to reach out!
            </p>

            <div className="space-y-6">
              <a href={`mailto:${RESUME_DATA.personalInfo.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group">
                <div className="p-3 bg-accent-600 rounded-full text-white group-hover:bg-accent-500 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email</div>
                  <div className="text-lg font-medium break-all text-slate-200">{RESUME_DATA.personalInfo.email}</div>
                </div>
              </a>

              <a href={RESUME_DATA.personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group">
                <div className="p-3 bg-blue-700 rounded-full text-white">
                  <Linkedin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">LinkedIn</div>
                  <div className="text-lg font-medium text-slate-200">View Profile</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-3 bg-brand-600 rounded-full text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Location</div>
                  <div className="text-lg font-medium text-slate-200">{RESUME_DATA.personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-slate-900">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500" placeholder="Opportunity / Inquiry" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none" placeholder="How can I help you?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-accent-600 text-white font-bold rounded-lg hover:bg-accent-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent-200/50">
                <Send size={18} />
                Send Message
              </button>
              <p className="text-xs text-center text-slate-400 mt-4">
                *This form is for demonstration purposes. Please use the email link to contact directly.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};