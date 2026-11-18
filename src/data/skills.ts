import { SkillItem } from '@/types';

export const SKILL_CATEGORIES = [
  'All',
  'Generative AI',
  'Full-Stack',
  'Machine Learning',
  'Cloud & Systems',
  'Languages & DB'
] as const;

export type SkillCategoryFilter = typeof SKILL_CATEGORIES[number];

export const SKILLS: SkillItem[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming', description: 'Primary language for ML, GenAI orchestration, and backend microservices.', connections: ['PyTorch', 'OpenAI API', 'Flask', 'OpenCV'] },
  { name: 'TypeScript', category: 'Programming', description: 'Type-safe frontend and backend application engineering.', connections: ['Next.js', 'React.js', 'Node.js', 'Express'] },
  { name: 'JavaScript', category: 'Programming', description: 'Web client and asynchronous runtime development.', connections: ['React.js', 'Node.js'] },
  { name: 'SQL', category: 'Programming', description: 'Relational query construction, joins, and data normalization.', connections: ['PostgreSQL', 'MySQL'] },
  { name: 'C++', category: 'Programming', description: 'Core system programming and engineering workbench implementation.', connections: ['Antigravity CLI'] },

  // Generative AI
  { name: 'OpenAI API', category: 'Generative AI', description: 'Integrating LLMs with JSON schemas and function calling.', connections: ['Python', 'TypeScript', 'Structured Output'] },
  { name: 'Prompt Engineering', category: 'Generative AI', description: 'System prompts, few-shot prompting, and deterministic extraction.', connections: ['OpenAI API'] },
  { name: 'Structured Output', category: 'Generative AI', description: 'Enforcing typed JSON contracts from natural-language user queries.', connections: ['OpenAI API', 'Next.js'] },
  { name: 'Whisper', category: 'Generative AI', description: 'Automatic speech recognition, audio transcription, and WER benchmarks.', connections: ['PyTorch', 'Wav2Vec2'] },
  { name: 'AI-assisted Annotation', category: 'Generative AI', description: 'Automated frame tagging workflows validated against gold standards with Cohen\'s kappa.', connections: ['MySQL', 'Python'] },

  // Frontend
  { name: 'React.js', category: 'Frontend', description: 'Component-driven interactive web interfaces.', connections: ['Next.js', 'Tailwind CSS'] },
  { name: 'Next.js', category: 'Frontend', description: 'App Router, Server Components, SSR, and optimized production routing.', connections: ['React.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Tailwind CSS', category: 'Frontend', description: 'Utility-first modern responsive styling systems.', connections: ['Next.js', 'React.js'] },

  // Backend
  { name: 'Node.js', category: 'Backend', description: 'High-throughput JavaScript/TypeScript event-driven runtime.', connections: ['Express', 'TypeScript', 'WebSocket'] },
  { name: 'Express', category: 'Backend', description: 'Modular REST API framework and middleware integration.', connections: ['Node.js', 'PostgreSQL'] },
  { name: 'Flask', category: 'Backend', description: 'Lightweight Python REST services for machine learning inference.', connections: ['Python', 'OpenCV'] },
  { name: 'REST APIs', category: 'Backend', description: 'Contract-first HTTP endpoints, serialization, and status codes.', connections: ['Express', 'Flask', 'HTTP'] },
  { name: 'HTTP & JSON', category: 'Backend', description: 'Standard web networking protocols and schema-bound payload handling.', connections: ['REST APIs'] },
  { name: 'WebSocket', category: 'Backend', description: 'Bi-directional, low-latency communication for real-time messaging.', connections: ['Node.js', 'AWS Lambda', 'API Gateway'] },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', description: 'Relational data modeling, foreign keys, transactions, and indexing.', connections: ['Express', 'SQL'] },
  { name: 'MySQL', category: 'Databases', description: 'Relational storage for structured annotation logs and authentication.', connections: ['SQL'] },
  { name: 'Supabase', category: 'Databases', description: 'Postgres-backed backend-as-a-service with instant APIs.', connections: ['PostgreSQL'] },

  // Machine Learning
  { name: 'PyTorch', category: 'Machine Learning', description: 'Deep learning research, tensor operations, and neural network evaluation.', connections: ['CUDA', 'Whisper', 'Wav2Vec2'] },
  { name: 'Keras', category: 'Machine Learning', description: 'Sequential and functional model prototyping for CNN classifiers.', connections: ['Python'] },
  { name: 'CNN', category: 'Machine Learning', description: 'Convolutional neural architectures for image and gesture classification.', connections: ['Keras', 'OpenCV'] },
  { name: 'LSTM', category: 'Machine Learning', description: 'Recurrent architectures for sequential and temporal dependencies.', connections: ['PyTorch'] },
  { name: 'OpenCV', category: 'Machine Learning', description: 'Real-time computer vision, video frame extraction, and preprocessing.', connections: ['Python', 'MediaPipe'] },
  { name: 'MediaPipe', category: 'Machine Learning', description: 'Multi-hand landmark extraction and spatial coordinate tracking.', connections: ['OpenCV', 'CNN'] },
  { name: 'Wav2Vec2', category: 'Machine Learning', description: 'Self-supervised speech acoustic model and CTC evaluation.', connections: ['PyTorch', 'Whisper'] },
  { name: 'CUDA', category: 'Machine Learning', description: 'GPU hardware acceleration for deep learning inference and training.', connections: ['PyTorch'] },

  // Cloud
  { name: 'AWS Lambda', category: 'Cloud', description: 'Serverless compute triggers for event-driven architectures.', connections: ['API Gateway', 'DynamoDB'] },
  { name: 'API Gateway', category: 'Cloud', description: 'Managed WebSocket and REST API routing with token validation.', connections: ['AWS Lambda', 'Cognito'] },
  { name: 'DynamoDB', category: 'Cloud', description: 'Single-digit millisecond latency NoSQL key-value store.', connections: ['AWS Lambda'] },
  { name: 'Cognito', category: 'Cloud', description: 'User pools, token-based authentication (JWT), and access control.', connections: ['API Gateway'] },
  { name: 'S3', category: 'Cloud', description: 'Object storage for static assets, media, and dataset backups.', connections: ['CloudWatch'] },
  { name: 'CloudWatch', category: 'Cloud', description: 'Metrics, alarms, and execution log monitoring for distributed serverless services.', connections: ['AWS Lambda'] },
  { name: 'CloudFormation', category: 'Cloud', description: 'Declarative infrastructure as code provisioning.', connections: ['SAM'] },
  { name: 'SAM', category: 'Cloud', description: 'Serverless Application Model CLI for local testing and cloud deployment.', connections: ['CloudFormation', 'AWS Lambda'] },

  // Tools & Practices
  { name: 'Git', category: 'Tools', description: 'Distributed version control and branching hygiene.', connections: ['GitHub'] },
  { name: 'GitHub', category: 'Tools', description: 'Remote repository hosting, CI workflows, and code review.', connections: ['Git'] },
  { name: 'Antigravity CLI', category: 'Tools', description: 'AI agent-assisted engineering workflow, automation, and scaffolding.', connections: ['C++'] },
];

export function mapCategoryToFilter(category: SkillItem['category']): SkillCategoryFilter {
  switch (category) {
    case 'Generative AI':
      return 'Generative AI';
    case 'Frontend':
    case 'Backend':
      return 'Full-Stack';
    case 'Machine Learning':
      return 'Machine Learning';
    case 'Cloud':
      return 'Cloud & Systems';
    case 'Programming':
    case 'Databases':
      return 'Languages & DB';
    case 'Tools':
      return 'Cloud & Systems';
    default:
      return 'All';
  }
}
