export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detailedOverview: string;
  technologies: string[];
  keyFeatures: string[];
  type: 'security' | 'ai' | 'fullstack';
  githubUrl: string;
  demoType: 'password' | 'ids' | 'chatbot' | 'medical' | 'plant' | 'doctor';
}

export interface SkillItem {
  name: string;
  level: 'Advanced' | 'Proficient' | 'Familiar';
  description: string;
  iconName?: string;
}

export interface SkillCategory {
  title: string;
  category: 'CYBERSECURITY' | 'PROGRAMMING' | 'WEB' | 'TOOLS' | 'AI';
  description: string;
  skills: SkillItem[];
}

export interface LearningArea {
  title: string;
  description: string;
}

export interface ToolDescription {
  name: string;
  purpose: string;
}

export interface TrainingExperience {
  role: string;
  organization: string;
  duration: string;
  period: string;
  description: string;
  detailedOverview?: string;
  keyResponsibilities: string[];
  learningAreas?: LearningArea[];
  toolsDetailed?: ToolDescription[];
  toolsUsed: string[];
  whatExperienceGaveMe?: string;
  coreTakeaway?: string;
  badge: string;
  iconEmoji?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  status: 'Completed' | 'In Progress';
  credentialUrl?: string;
  description: string;
  detailedOverview?: string;
  whatItSupports?: string[];
  iconEmoji?: string;
}
