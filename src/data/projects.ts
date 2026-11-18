import { ProjectCaseStudy } from '@/types';

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: 'ai-native-mini-crm',
    title: 'AI-Native Mini CRM',
    tagline: 'Converting natural-language prompts into structured targeting rules with four dedicated modules.',
    year: '2026',
    category: 'Generative AI & Full-Stack',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'OpenAI API'],
    metrics: [
      { label: 'Core Modules', value: '4' },
      { label: 'Targeting Setup Time', value: 'Sub-second' },
      { label: 'Prompt Translation', value: 'Deterministic JSON' },
    ],
    problemStatement:
      'Customer relationship management platforms frequently burden non-technical marketing and sales teams with intricate multi-tier query builders, boolean logic gates, and database-specific filtering syntax. This results in manual misconfigurations, slow campaign launch cycles, and engineering dependency for basic customer segmentation.',
    solutionOverview:
      'Engineered an AI-native CRM application equipped with four interconnected modules (Dashboard, Customer Explorer, AI Segment Builder, Campaign Studio). It incorporates an intelligent translation layer powered by the OpenAI API that transforms freeform natural-language marketing criteria into deterministic, typed SQL-compatible targeting rules.',
    architecture: {
      description: 'Decoupled full-stack architecture with Next.js client, Express REST API middleware layer, and PostgreSQL relational storage.',
      components: [
        { name: 'Frontend Client', detail: 'Next.js App Router with TypeScript and Tailwind CSS for responsive module navigation and real-time query feedback.' },
        { name: 'LLM Reasoning Layer', detail: 'OpenAI API integrated with structured schema enforcement (JSON mode) converting natural queries into strict rule objects.' },
        { name: 'API Server', detail: 'Node.js / Express REST API managing authentication, rule execution, and data validation.' },
        { name: 'Relational Database', detail: 'PostgreSQL instance storing normalized customer profiles, behavioral events, segments, and campaign metadata.' },
      ],
    },
    technologies: [
      { category: 'Frontend', items: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form'] },
      { category: 'Backend & APIs', items: ['Node.js', 'Express', 'RESTful Endpoints', 'JSON Schema'] },
      { category: 'Database', items: ['PostgreSQL', 'Relational Schema Design', 'SQL Indexing'] },
      { category: 'Generative AI', items: ['OpenAI API', 'Prompt Engineering', 'Structured JSON Output'] },
    ],
    implementation: [
      'Built four distinct operational modules: Dashboard (KPI visualization), Customer Explorer (filterable customer tabular view), AI Segment Builder (prompt-to-rule compilation), and Campaign Studio (multi-channel campaign dispatch).',
      'Designed a resilient prompt engineering pipeline constraining OpenAI completions to strict JSON contracts with validation fallback.',
      'Constructed optimized PostgreSQL queries allowing the backend to translate parsed rules directly into parameterized SQL queries, eliminating SQL injection risks.',
      'Delivered a fully working build adhering to strict internship milestones and timeline requirements.',
    ],
    contribution: [
      'Architected and implemented the entire Next.js frontend with module-based routing and responsive layouts.',
      'Designed the relational schema in PostgreSQL and built all Express backend REST endpoints.',
      'Developed the prompt templates and parsing middleware that map natural-language constraints to boolean filtering trees.',
      'Handled UI/UX design, error boundaries, and loading states for seamless LLM latency handling.',
    ],
    outcomes: [
      'Successfully automated customer segment definition, reducing manual segment configuration to simple natural-language prompts.',
      'Ensured 100% deterministic rule generation through schema validation.',
      'Delivered complete working build within the designated internship schedule.',
    ],
    links: {
      github: 'https://github.com/Divyadarsiniu',
      verified: true,
    },
  },
  {
    slug: 'sign-language-interpreter',
    title: 'AI-Based Sign Language Interpreter',
    tagline: 'Two-way real-time communication system bridging Sign-to-Speech and Speech-to-Sign with live inference.',
    year: '2025',
    category: 'Computer Vision & Deep Learning',
    stack: ['Python', 'MediaPipe', 'OpenCV', 'Keras', 'Whisper API'],
    metrics: [
      { label: 'Latency', value: 'Real-time (<100ms)' },
      { label: 'Direction', value: 'Two-Way (Sign ⇄ Speech)' },
      { label: 'Vision Model', value: 'Custom CNN Classifier' },
    ],
    problemStatement:
      'Individuals with hearing and speech impairments face severe barriers in day-to-day interpersonal communication when interacting with individuals who are unfamiliar with sign language. Existing solutions are often one-directional, proprietary, or lack real-time responsive performance.',
    solutionOverview:
      'Developed an end-to-end two-way translation system. The pipeline captures webcam video to extract hand and body spatial landmarks via MediaPipe, classifies gestures using a custom Convolutional Neural Network (CNN) in Keras for Sign-to-Speech synthesis, and leverages the Whisper API to transcribe incoming spoken audio into visual sign demonstrations (Speech-to-Sign).',
    architecture: {
      description: 'Dual-stream computer vision and speech recognition pipeline orchestrated via Python REST microservice.',
      components: [
        { name: 'Landmark Extraction', detail: 'MediaPipe Hands extracting 21 3D hand coordinates per hand at video frame rates.' },
        { name: 'Gesture CNN', detail: 'Deep convolutional neural network trained on normalized coordinate vectors for static and dynamic gesture classification.' },
        { name: 'Speech Recognition Pipeline', detail: 'Whisper API processing microphone input into text with high accuracy across accents.' },
        { name: 'REST Inference API', detail: 'Lightweight Python server streaming real-time prediction probabilities and audio conversion.' },
      ],
    },
    technologies: [
      { category: 'Machine Learning', items: ['Convolutional Neural Networks (CNN)', 'Keras', 'TensorFlow'] },
      { category: 'Computer Vision', items: ['OpenCV', 'MediaPipe Hands & Pose', 'Frame Preprocessing'] },
      { category: 'Speech Processing', items: ['Whisper API', 'Text-to-Speech (TTS)', 'Speech Recognition'] },
      { category: 'Backend & Serving', items: ['Python', 'REST API', 'Socket-based Streaming'] },
    ],
    implementation: [
      'Captured and preprocessed multi-class gesture video sequences with OpenCV, isolating background noise and hand coordinates.',
      'Engineered coordinate normalization algorithms guaranteeing gesture classification invariant to camera distance and user position.',
      'Trained and fine-tuned a CNN model on Keras achieving fast inference times suitable for continuous video streaming.',
      'Connected bidirectional audio: Whisper API for Speech-to-Sign transcription and TTS audio synthesis for Sign-to-Speech output.',
    ],
    contribution: [
      'Implemented real-time MediaPipe landmark extraction and feature normalization logic.',
      'Trained, validated, and exported the gesture recognition CNN model.',
      'Constructed the end-to-end REST API inference pipeline integrating vision and speech modules.',
      'Integrated live feedback UI displaying gesture confidence intervals.',
    ],
    outcomes: [
      'Delivered a fully functional real-time two-way translation prototype.',
      'Maintained low-latency inference on standard consumer webcams without dedicated external accelerators.',
      'Validated bidirectional accuracy across structured test vocabularies.',
    ],
    links: {
      github: 'https://github.com/Divyadarsiniu',
      verified: true,
    },
  },
  {
    slug: 'serverless-chat-yapper',
    title: 'Serverless Real-Time Chat (Yapper)',
    tagline: 'Scalable cloud-native chat engine using API Gateway WebSocket, Lambda, DynamoDB, Cognito, and SAM.',
    year: '2026',
    category: 'Cloud Engineering & Systems',
    stack: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'S3', 'CloudWatch', 'SAM', 'CloudFormation'],
    metrics: [
      { label: 'Architecture', value: '100% Serverless' },
      { label: 'Communication', value: 'Bi-directional WebSocket' },
      { label: 'Auth Scheme', value: 'Cognito JWT Tokens' },
    ],
    problemStatement:
      'Traditional chat servers built on long-running EC2 instances or container fleets suffer from idle compute costs, complex socket state synchronization across clusters, and operational overhead in managing connection tables and horizontal auto-scaling.',
    solutionOverview:
      'Architected a 100% serverless, event-driven real-time chat application named "Yapper". Utilized AWS API Gateway WebSocket APIs for connection state management, AWS Lambda functions for stateless event processing, DynamoDB for connection and message persistence, and AWS Cognito for token-based user authentication, fully provisioned via Infrastructure as Code.',
    architecture: {
      description: 'Event-driven serverless mesh with decoupled connection management and data persistence.',
      components: [
        { name: 'API Gateway WebSocket & REST', detail: 'Manages $connect, $disconnect, and custom message routes with token authorizers.' },
        { name: 'AWS Lambda Compute', detail: 'Stateless Node.js micro-functions executing message dispatch, channel fan-out, and user presence.' },
        { name: 'Amazon DynamoDB', detail: 'Stores active connection IDs with TTL and partitioned chat room message history.' },
        { name: 'AWS Cognito User Pools', detail: 'Manages secure user sign-up, sign-in, MFA, and JWT ID token verification.' },
        { name: 'Monitoring & IaC', detail: 'Amazon CloudWatch metrics/alarms, provisioned with AWS SAM and CloudFormation.' },
      ],
    },
    technologies: [
      { category: 'Cloud Infrastructure', items: ['AWS Lambda', 'Amazon API Gateway (WebSocket + REST)', 'Amazon S3'] },
      { category: 'Database & Auth', items: ['Amazon DynamoDB (On-Demand & TTL)', 'AWS Cognito User Pools & JWT'] },
      { category: 'DevOps & IaC', items: ['AWS SAM (Serverless Application Model)', 'CloudFormation', 'CloudWatch Logs & Metrics'] },
    ],
    implementation: [
      'Authored SAM / CloudFormation templates defining all AWS resources, IAM roles with least privilege, and route integrations.',
      'Implemented Lambda authorizers checking signed JWT tokens on incoming WebSocket connection handshakes.',
      'Designed DynamoDB single-table schema storing connection IDs with Time-To-Live (TTL) attributes to purge zombie sockets.',
      'Built message fan-out logic utilizing the ApiGatewayManagementApi SDK to broadcast payloads to all room participants.',
      'Configured CloudWatch dashboards tracking socket connect rates, 4xx/5xx errors, and Lambda duration percentiles.',
    ],
    contribution: [
      'Drafted the complete infrastructure as code specification in SAM/CloudFormation.',
      'Implemented all Lambda handler functions in TypeScript for connect, disconnect, sendmessage, and gethistory routes.',
      'Configured Cognito authentication flows and integrated client token exchange.',
      'Tested failure scenarios including dropped sockets and reconnection reconciliation.',
    ],
    outcomes: [
      'Eliminated fixed server idle costs by adopting on-demand pay-per-event pricing.',
      'Achieved instantaneous connection auto-scaling without container fleet management.',
      'Guaranteed automated infrastructure reproducibility across development and staging environments.',
    ],
    links: {
      github: 'https://github.com/Divyadarsiniu',
      verified: true,
    },
  },
  {
    slug: 'inventory-management-system',
    title: 'Inventory Management System',
    tagline: 'Real-time stock movements, low-stock notifications, and normalized relational schema design.',
    year: '2026',
    category: 'Full-Stack & Databases',
    stack: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    metrics: [
      { label: 'Data Model', value: 'Normalized Relational' },
      { label: 'Tracking', value: 'Stock-In / Stock-Out' },
      { label: 'Variant Support', value: 'SKU & Size Variants' },
    ],
    problemStatement:
      'Retail and warehousing operations encounter frequent discrepancies between recorded inventory and physical stock due to lack of transaction-safe stock mutation records, poor variant modeling (size/color), and absence of automated low-stock warnings.',
    solutionOverview:
      'Built a full-stack inventory management system featuring stock-in and stock-out event logging, low-stock threshold alerting, product and category hierarchies, and comprehensive support for size variants. Implemented a normalized relational database design to maintain strict consistency across all stock movements.',
    architecture: {
      description: 'Layered architecture separating reactive UI, REST transaction endpoints, and ACID-compliant relational storage.',
      components: [
        { name: 'Dashboard Client', detail: 'Next.js application displaying real-time inventory metrics, low-stock badges, and SKU tables.' },
        { name: 'Application Server', detail: 'Express.js backend coordinating transactional updates, stock adjustments, and report generation.' },
        { name: 'PostgreSQL Engine', detail: 'Foreign-key enforced relational schema with automated check constraints and index optimization.' },
      ],
    },
    technologies: [
      { category: 'Frontend', items: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'] },
      { category: 'Backend', items: ['Node.js', 'Express', 'REST API Architecture'] },
      { category: 'Database', items: ['PostgreSQL', 'Relational Normalization', 'Transactional Guarantees'] },
    ],
    implementation: [
      'Modeled relational entities: Products, Categories, Size Variants, SKUs, Warehouses, and Stock Movements.',
      'Implemented atomic database transactions ensuring stock counts decrement and increment concurrently without race conditions.',
      'Constructed a low-stock monitoring service that automatically flags items whose quantity drops beneath safety thresholds.',
      'Designed dynamic filtering by category, supplier, and SKU variant in the frontend dashboard.',
    ],
    contribution: [
      'Designed the complete database schema with foreign-key constraints and indexes.',
      'Wrote backend controllers and transaction handlers in Express.',
      'Created the responsive Next.js frontend dashboard and interactive product modification modals.',
      'Implemented analytical reports detailing inventory turnover and velocity.',
    ],
    outcomes: [
      'Preserved data consistency across all simulated concurrent stock adjustments.',
      'Reduced stock audit latency through automated low-stock notifications.',
      'Established a modular relational schema structured for enterprise scale and multi-warehouse extension.',
    ],
    links: {
      github: 'https://github.com/Divyadarsiniu',
      verified: true,
    },
  },
  {
    slug: 'unified-engineering-workbench',
    title: 'Unified Engineering Workbench',
    tagline: 'High-performance C++ core with server, UI, launcher, and AI-assisted development workflow.',
    year: '2026',
    category: 'Systems & AI Tooling',
    stack: ['C++', 'Antigravity CLI', 'Systems Architecture', 'Documentation'],
    metrics: [
      { label: 'Core Engine', value: 'High-Performance C++' },
      { label: 'Tooling', value: 'Antigravity CLI Agent' },
      { label: 'Delivery', value: 'Complete Package' },
    ],
    problemStatement:
      'Engineering software suites often suffer from fragmented tooling, where low-level simulation or compute cores are disconnected from modern server interfaces, cross-platform launchers, and developer documentation, hindering streamlined team adoption.',
    solutionOverview:
      'Delivered a comprehensive, unified engineering package featuring a C++ core engine, server interface, frontend visualization, launcher utility, and thorough technical documentation. Integrated an AI coding agent (Antigravity CLI) within the iterative development workflow for rapid scaffolding, debugging, and verification.',
    architecture: {
      description: 'Multi-tier modular engineering architecture spanning native performance cores to connected user interfaces.',
      components: [
        { name: 'C++ Core Engine', detail: 'High-throughput computational core compiled with strict performance and memory safety constraints.' },
        { name: 'Server Layer', detail: 'Communication bridge translating external commands to internal C++ compute routines.' },
        { name: 'Frontend Interface', detail: 'Visual dashboard for parameter configuration, execution status, and output telemetry.' },
        { name: 'Launcher & CLI', detail: 'Cross-platform launcher script and environment validator.' },
      ],
    },
    technologies: [
      { category: 'Systems Programming', items: ['C++', 'Object-Oriented Architecture', 'Memory Optimization'] },
      { category: 'AI Tooling & Workflow', items: ['Antigravity CLI', 'Agentic Code Synthesis', 'Systematic Verification'] },
      { category: 'Documentation & Delivery', items: ['Technical Specifications', 'Build Toolchains', 'Automated Verification'] },
    ],
    implementation: [
      'Developed native C++ algorithms optimized for computational efficiency.',
      'Structured a cohesive software bundle containing core binaries, backend bridge, frontend views, and launcher scripts.',
      'Employed Antigravity CLI as an AI coding agent to accelerate module scaffolding, cross-platform compilation troubleshooting, and unit testing.',
      'Authored rigorous developer guides, API references, and architecture blueprints.',
    ],
    contribution: [
      'Architected the C++ core structures and computational interfaces.',
      'Leveraged AI coding agent tools in the active development lifecycle to boost delivery velocity.',
      'Created the launcher system and configured the integrated execution pipeline.',
      'Delivered complete documentation and build artifacts for the R&D internship assignment.',
    ],
    outcomes: [
      'Delivered a fully verified multi-component engineering workbench on schedule.',
      'Demonstrated high developer velocity by orchestrating AI coding agents in real-world systems engineering.',
      'Produced clean, documented, and maintainable C++ codebases ready for enterprise R&D deployment.',
    ],
    links: {
      github: 'https://github.com/Divyadarsiniu',
      verified: true,
    },
  },
  {
    slug: 'voice-to-text-and-back-stuttered-speech',
    title: 'Voice-to-Text-and-Back: ASR and TTS on Stuttered Speech',
    tagline: 'Experimental Word Error Rate (WER) evaluation comparing Whisper-small vs Wav2Vec2 on disfluent speech.',
    year: '2026',
    category: 'Speech AI & Deep Learning Research',
    stack: ['Python', 'PyTorch', 'Whisper', 'Wav2Vec2', 'gTTS', 'Audio Processing'],
    metrics: [
      { label: 'Whisper-small WER', value: '5.88%' },
      { label: 'Wav2Vec2 WER', value: '44.12%' },
      { label: 'gTTS Round Trip WER', value: '9.09%' },
    ],
    problemStatement:
      'Standard Automatic Speech Recognition (ASR) models are pre-trained predominantly on fluent, standard conversational speech. When presented with stuttered or disfluent speech—characterized by repetitions, prolongations, blocks, and interjections—performance drops significantly. Quantifying where and why different acoustic architectures break down is critical for accessible speech technology.',
    solutionOverview:
      'Conducted a rigorous empirical evaluation measuring verbatim Word Error Rate (WER) across Whisper-small and Wav2Vec2 models on an annotated stuttered speech dataset. Analyzed failure modes including Connectionist Temporal Classification (CTC) token collapse across four disfluency types, and benchmarked a voice round-trip pipeline using gTTS.',
    architecture: {
      description: 'Acoustic feature extraction and model comparative inference framework with verbatim alignment scoring.',
      components: [
        { name: 'Audio Ingestion & Normalization', detail: 'Resampling to 16kHz mono, silence trimming, and verbatim reference transcript alignment.' },
        { name: 'Whisper-small (Encoder-Decoder)', detail: 'Autoregressive transformer architecture leveraging full context window.' },
        { name: 'Wav2Vec2 (CTC Architecture)', detail: 'Self-supervised acoustic model using Connectionist Temporal Classification loss.' },
        { name: 'Disfluency Failure Analysis', detail: 'Token-level alignment examining repetitions, prolongations, blocks, and interjections.' },
      ],
    },
    technologies: [
      { category: 'Speech Models', items: ['OpenAI Whisper-small', 'Wav2Vec2 (facebook/wav2vec2-base-960h)', 'gTTS'] },
      { category: 'Deep Learning & Frameworks', items: ['PyTorch', 'Hugging Face Transformers', 'Torchaudio'] },
      { category: 'Evaluation Metrics', items: ['Verbatim Word Error Rate (WER)', 'CTC Alignment Analysis', 'Token Collapse Inspection'] },
    ],
    implementation: [
      'Processed stuttered speech audio samples and constructed precise verbatim target transcripts retaining disfluent artifacts.',
      'Executed comparative speech-to-text inference across Whisper-small and Wav2Vec2 under identical audio conditions.',
      'Calculated exact verbatim Word Error Rates: Whisper-small achieved 5.88% WER; Wav2Vec2 achieved 44.12% WER.',
      'Evaluated a complete Voice-to-Text-and-Back synthesis pipeline using gTTS, recording a round-trip WER of 9.09%.',
      'Documented the systematic analysis of CTC token collapse across four specific disfluency categories.',
    ],
    contribution: [
      'Implemented the PyTorch evaluation pipeline and verbatim WER calculation scripts.',
      'Conducted error alignment across disfluency types: repetitions, prolongations, blocks, and interjections.',
      'Analyzed the structural differences between encoder-decoder attention and CTC loss functions when processing prolonged acoustic frames.',
      'Documented comparative benchmarks and visualizations.',
    ],
    outcomes: [
      'Recorded actual empirical results: Whisper-small achieved 5.88% verbatim WER vs Wav2Vec2 at 44.12% verbatim WER.',
      'Demonstrated that gTTS round trip voice regeneration maintained 9.09% WER.',
      'Uncovered that Wav2Vec2 CTC collapse occurs predominantly during sound prolongations and repetitions where continuous acoustic frames map to duplicate or blank tokens.',
      'Documented strict experimental scoping: findings are limited to the evaluated experimental dataset and must not be generalized as universal clinical diagnostic claims.',
    ],
    disfluencyData: [
      {
        metric: 'Whisper-small (Encoder-Decoder)',
        whisperScore: '5.88% WER',
        wav2VecScore: 'N/A',
        notes: 'Maintained strong context capture across disfluent pauses and interjections.',
      },
      {
        metric: 'Wav2Vec2 (CTC Loss)',
        whisperScore: 'N/A',
        wav2VecScore: '44.12% WER',
        notes: 'Suffered frequent token collapse during prolonged phonemes and repetitive syllable boundaries.',
      },
      {
        metric: 'gTTS Round Trip',
        whisperScore: 'N/A',
        wav2VecScore: 'N/A',
        gttsScore: '9.09% WER',
        notes: 'Evaluated synthetic speech regeneration fidelity back to text.',
      },
    ],
    links: {
      github: 'https://github.com/Divyadarsiniu',
      verified: true,
    },
  },
];
