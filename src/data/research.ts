import { ResearchMetric, ResearchWorkflowStep } from '@/types';

export const RESEARCH_INFO = {
  title: "Early Autism Detection in Children – Research Experience",
  role: "Research Intern",
  institution: "SRM Institute of Science and Technology",
  location: "On-site",
  year: "2025",
  disclaimer: "Note: This research focused on behavioral video curation, annotation tooling, and statistical agreement benchmarking. No clinical claims regarding diagnostic accuracy are made.",
  abstract: "Curated and annotated a pediatric behavioral video dataset for early autism behavioral markers across multiple domains. Designed and deployed a secure, custom frame-level annotation toolkit with MySQL-backed session control. Authored IEEE-format findings and spearheaded an ongoing AI agent-assisted re-annotation pipeline evaluated via Cohen's kappa against human gold-standard annotations.",
  metrics: [
    { label: "Behavioral Videos", value: 84, description: "Recorded and curated observational videos of pediatric behavioral sessions" },
    { label: "Observational Photos", value: 69, description: "High-resolution reference photographs across behavioral domains" },
    { label: "Children Evaluated", value: 4, description: "Observed pediatric participants under monitored protocols" },
    { label: "Behavioral Domains", value: 6, description: "Distinct clinical interaction and responsiveness categories" },
    { label: "Human-Tagged Frames", value: 528, description: "Granular frame-level annotated frames establishing the benchmark" },
    { label: "Gold-Standard Videos", value: 17, description: "Fully verified and peer-reviewed reference dataset" },
  ] as ResearchMetric[],
  domains: [
    "Eye Contact & Gaze Fixation",
    "Social Smiling & Affect",
    "Response to Name Calling",
    "Joint Attention & Pointing",
    "Repetitive Motor Behaviors",
    "Object Engagement & Sensory Play"
  ],
  workflowSteps: [
    {
      step: 1,
      title: "Pediatric Dataset Curation",
      status: "completed",
      summary: "Collection and systematic cataloging of observational media.",
      details: "Curated 84 behavioral videos and 69 photos across 4 children and 6 behavioral domains, setting standardized sampling protocols."
    },
    {
      step: 2,
      title: "Custom Annotation Toolkit Development",
      status: "completed",
      summary: "Engineering a custom frame-level labeling system with MySQL auth.",
      details: "Designed and built a dedicated web-based annotation system with structured frame playback, fine-grained bounding/domain tags, and MySQL-backed login/logout session security."
    },
    {
      step: 3,
      title: "Gold-Standard Labeling & QA",
      status: "completed",
      summary: "Establishing 528 human-tagged ground-truth frames across 17 videos.",
      details: "Conducted data validation, quality assurance benchmarking, and documented findings into a structured IEEE-format research paper."
    },
    {
      step: 4,
      title: "AI Agent-Assisted Re-annotation",
      status: "ongoing",
      summary: "Autonomous AI agent workflow for the remaining 67 videos.",
      details: "Developing and evaluating an AI agent-driven pipeline to accelerate frame tagging on the remaining dataset, quantitatively validated against human gold standards using Cohen's kappa for inter-rater agreement."
    }
  ] as ResearchWorkflowStep[]
};
