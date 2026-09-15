export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  category: string;
  tagline: string;
  description: string;
  layer: 1 | 2 | 3; // 1: Flagship, 2: Live Deployed, 3: Additional
  tags: string[];
  filterCategories: string[];
  github: string | null;
  live: string | null;
  featured: boolean;
  metrics?: {
    label: string;
    value: string;
    description?: string;
  }[];
  keyFeatures: string[];
  architecture?: {
    overview: string;
    flow: string[];
  };
  details?: {
    problem: string;
    solution: string;
    implementation: string[];
    technicalHighlights: string[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    highlight?: boolean;
    description?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  year: string;
  institution: string;
  university: string;
}
