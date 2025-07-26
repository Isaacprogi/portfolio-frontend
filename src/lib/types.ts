export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

// Define the Project type
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: 'Full Stack' | 'Web App' | 'Frontend' | 'Mobile' | 'Backend';
  type: 'company' | 'personal';
  company?: string;
}