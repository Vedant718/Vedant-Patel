
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  personalInfo: {
    name: "VEDANT PATEL",
    headline: "Student at ITM SLS Baroda University",
    location: "Vadodara, Gujarat, India",
    email: "epforvedantpatel18@gmail.com",
    linkedin: "vedant-patel-729113395",
    linkedinUrl: "https://www.linkedin.com/in/vedant-patel-729113395",
    // Please save your uploaded photo as 'vedant.jpg' in the project root/public folder
    profilePhoto: "./vedant.jpg",
  },
  education: [
    {
      school: "My Shannen School",
      degree: "Secondary Education (Up to 10th Standard)",
      period: "2012 - 2022",
      description: "I completed my secondary education in My Shannen School.",
    },
    {
      school: "ITM SLS Baroda University",
      degree: "Diploma, Chemical Engineering",
      period: "August 2023 - May 2026",
      description: "Focused on core chemical engineering concepts, research methodologies, and problem-solving techniques relevant to industrial applications.",
    },
  ],
  skills: [
    {
      category: "Chemical Engineering",
      items: [
        "Chemical Process Calculation",
        "Mass Transfer",
        "Heat Transfer",
        "Equipment Design",
        "Python (basic)"
      ]
    },
    {
      category: "Professional & Technical",
      items: [
        "Research Skills",
        "Presentations",
        "Problem Solving",
        "Generative AI",
        "Oracle Cloud Infrastructure"
      ]
    }
  ],
  certifications: [
    {
      name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      pdfUrl: "./certificates/oracle-genai-professional.pdf"
    },
    {
      name: "Advanced Prompt Engineering with ChatGPT",
      issuer: "Upgrad",
      pdfUrl: "./certificates/upgrad-prompt-engineering.pdf"
    },
    {
      name: "Outskill Generative AI Course Completion",
      issuer: "Outskill",
      pdfUrl: "./certificates/outskill-genai.pdf"
    }
  ]
};

export const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Vedant Patel. 
Use the following context to answer questions about Vedant:

Name: ${RESUME_DATA.personalInfo.name}
Title: ${RESUME_DATA.personalInfo.headline}
Location: ${RESUME_DATA.personalInfo.location}
Email: ${RESUME_DATA.personalInfo.email}
Education: ${RESUME_DATA.education.map(e => `${e.degree} from ${e.school} (${e.period})`).join('; ')}
Skills: ${RESUME_DATA.skills.map(s => `${s.category}: ${s.items.join(', ')}`).join('; ')}
Certifications: ${RESUME_DATA.certifications.map(c => `${c.name} (${c.issuer})`).join('; ')}

Tone: Professional, polite, and helpful. 
Goal: Encourage recruiters or networkers to connect with Vedant.
If asked about something not in this profile, politely state you only have access to his professional portfolio information.
Keep answers concise (under 3 sentences unless detailed explanation is requested).
`;