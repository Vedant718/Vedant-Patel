
export interface ResumeData {
  personalInfo: {
    name: string;
    headline: string;
    location: string;
    email: string;
    linkedin: string;
    linkedinUrl: string;
    profilePhoto: string;
  };
  education: {
    school: string;
    degree: string;
    period: string;
    description: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  certifications: {
    name: string;
    issuer: string;
    pdfUrl?: string;
  }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}