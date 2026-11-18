import { CapabilityCard, CourseworkItem } from '@/types';

export const PROFILE = {
  name: "Divya Darsini U",
  shortName: "DIVYA DARSINI",
  role: "Junior Gen AI & Full-Stack Engineer",
  tagline: "An engineer who can design, build, integrate, evaluate, and deploy intelligent software systems.",
  location: "Chennai, India",
  email: "divyadarsiniu@gmail.com",
  phone: "+91 6380639994",
  github: "https://github.com/Divyadarsiniu",
  linkedin: "https://linkedin.com/in/divya-darsini-u-832b602ab",
  resumePath: "/resume/Divya_Darsini_Resume.pdf",
  education: {
    institution: "SRM Institute of Science and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "2023 – 2027",
    cgpa: "9.67",
    status: "Graduation Expected: 2027",
  },
  bio: "B.Tech Computer Science and Engineering student at SRM Institute of Science and Technology (CGPA 9.67, 2027). Specializing in engineering robust web applications, REST APIs, and LLM-powered features using Python, TypeScript, React, Next.js, Node.js, and PostgreSQL. Experienced with hosted LLM APIs (OpenAI) with prompts generating structured output, developing end-to-end ML inference pipelines, deploying serverless architectures on AWS, and leveraging AI coding agents for systematic engineering execution.",
  capabilities: [
    {
      id: "genai",
      title: "Generative AI",
      subtitle: "LLM Orchestration & Structured Output",
      description: "Prompt engineering, function calling, structured schema adherence, Whisper speech models, and AI-agent-assisted workflows.",
      highlights: [
        "OpenAI API & JSON mode",
        "Natural language to query compilation",
        "Inter-rater reliability (Cohen's kappa)",
        "Prompt evaluation & token efficiency"
      ]
    },
    {
      id: "fullstack",
      title: "Full-Stack Development",
      subtitle: "Modern Reactive Web Applications",
      description: "Building production-grade web applications using Next.js App Router, TypeScript, Tailwind CSS, Express, and PostgreSQL.",
      highlights: [
        "Server & Client Component architecture",
        "RESTful API design & WebSocket protocol",
        "Relational schema modeling & optimization",
        "Accessible, responsive user interfaces"
      ]
    },
    {
      id: "ml",
      title: "Machine Learning",
      subtitle: "Deep Learning & Speech Evaluation",
      description: "Developing CNN and LSTM models, OpenCV and MediaPipe computer vision pipelines, Wav2Vec2/Whisper evaluation, and CUDA acceleration.",
      highlights: [
        "Verbatim Word Error Rate (WER) analysis",
        "Gesture classification & real-time inference",
        "Disfluency failure mode analysis (CTC collapse)",
        "PyTorch & Keras model training"
      ]
    },
    {
      id: "cloud",
      title: "Cloud Engineering",
      subtitle: "Serverless & Infrastructure as Code",
      description: "Architecting event-driven, scalable AWS cloud systems with token authentication, database modeling, and automated IaC templates.",
      highlights: [
        "AWS Lambda & API Gateway (REST & WebSocket)",
        "DynamoDB key design & S3 storage",
        "Cognito JWT token authentication",
        "CloudFormation & AWS SAM templates"
      ]
    }
  ] as CapabilityCard[],
  coursework: [
    { name: "Artificial Intelligence", domain: "Core CS" },
    { name: "Data Structures & Algorithms", domain: "Core CS" },
    { name: "Database Management Systems (DBMS)", domain: "Data" },
    { name: "Cloud Computing", domain: "Infrastructure" },
    { name: "Software Engineering & Project Management", domain: "Systems" },
    { name: "Data Science", domain: "Analytics" },
    { name: "Operating Systems", domain: "Systems" },
    { name: "Speech Recognition", domain: "AI / Audio" },
  ] as CourseworkItem[]
};
