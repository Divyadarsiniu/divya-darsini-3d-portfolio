export interface CapabilityCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'Programming' | 'Frontend' | 'Backend' | 'Databases' | 'Generative AI' | 'Machine Learning' | 'Cloud' | 'Tools';
  description?: string;
  connections?: string[];
}

export interface DisfluencyResult {
  metric: string;
  whisperScore: string;
  wav2VecScore: string;
  gttsScore?: string;
  notes: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  category: string;
  stack: string[];
  metrics?: { label: string; value: string }[];
  problemStatement: string;
  solutionOverview: string;
  architecture: {
    description: string;
    components: { name: string; detail: string }[];
  };
  technologies: { category: string; items: string[] }[];
  implementation: string[];
  contribution: string[];
  outcomes: string[];
  disfluencyData?: DisfluencyResult[];
  links: {
    github?: string;
    demo?: string;
    verified: boolean;
  };
}

export interface ResearchMetric {
  label: string;
  value: number;
  suffix?: string;
  description: string;
}

export interface ResearchWorkflowStep {
  step: number;
  title: string;
  status: 'completed' | 'ongoing';
  summary: string;
  details: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  role: string;
  year: string;
  description: string;
}

export interface CourseworkItem {
  name: string;
  domain: string;
}
