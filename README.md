# Divya Darsini U — 3D Portfolio & Engineering Systems Showcase

An editorial, high-performance web portfolio for **Divya Darsini U**, B.Tech Computer Science and Engineering student at SRM Institute of Science and Technology (CGPA: 9.67, Graduation: 2027).

> *"An engineer who can design, build, integrate, evaluate, and deploy intelligent software systems."*

---

## 🏛️ Architecture & Folder Structure

```
portfolio/
├── public/
│   ├── resume/
│   │   └── Divya_Darsini_Resume.pdf  # Downloadable verified candidate resume
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Font optimization (Geist), SEO metadata, OpenGraph
│   │   ├── page.tsx                  # Single-page layout containing Sections A–H
│   │   ├── globals.css               # Editorial CSS, fluid clamp typography, reduced motion
│   │   ├── sitemap.ts                # Dynamic XML sitemap generator
│   │   ├── robots.ts                 # Crawler directives
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Dedicated 8-part case study page for each project
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts          # Zod validation, honeypot anti-spam, mailto fallback
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── HeroScene.tsx         # Isolated dynamic loader with SSR disabled & fallback
│   │   │   └── FloatingObject.tsx    # Interactive Three.js polyhedral geometry with pointer parallax
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Sticky minimal navbar with section spy & mobile drawer
│   │   │   └── Footer.tsx            # Editorial metadata, links, back-to-top trigger
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx       # Problem-oriented card with architecture highlight
│   │   │   └── ProjectCaseStudyModal.tsx # Full 8-part accessible modal case study
│   │   ├── sections/
│   │   │   ├── Hero.tsx              # Large typography, 3D object, whitespace, scroll indicator
│   │   │   ├── About.tsx             # Editorial credentials (9.67 CGPA), 4 capability cards
│   │   │   ├── Skills.tsx            # Interactive category filter, badge tags, connection map
│   │   │   ├── Projects.tsx          # 6 featured project cards with modal & page triggers
│   │   │   ├── Research.tsx          # Early Autism Detection: 84 videos, 528 frames, Cohen's kappa
│   │   │   ├── Achievements.tsx      # Hackathons: SIH 2025 Top 100, Ultron, Bug Busters
│   │   │   ├── Education.tsx         # SRMIST CSE, CGPA 9.67, verified coursework
│   │   │   └── Contact.tsx           # React Hook Form + Zod, honeypot, mailto fallback
│   │   └── ui/
│   │       ├── Button.tsx            # Reusable button supporting links and actions
│   │       ├── Card.tsx              # Minimalist border card with hover lift
│   │       ├── SectionHeading.tsx    # Editorial typography eyebrow and title
│   │       └── Modal.tsx             # Accessible dialog with ESC listener & focus containment
│   ├── data/
│   │   ├── profile.ts                # Bio, verified credentials, capability pillars
│   │   ├── skills.ts                 # Full technology matrix with connections (no fake scores)
│   │   ├── projects.ts               # Structured case studies 1–6 (with exact WER data)
│   │   ├── research.ts               # Autism dataset statistics, methodology, paper status
│   │   └── achievements.ts           # Hackathon awards and timelines
│   ├── lib/
│   │   └── validation.ts             # Zod schema for contact submissions
│   └── types/
│       └── index.ts                  # TypeScript interface contracts
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router, Server Components by default, Turbopack)
- **Language**: TypeScript 5 (Strict mode)
- **Styling**: Tailwind CSS v4 (Editorial design system, dark/light contrast)
- **3D Graphics**: Three.js (Isolated, lightweight WebGL canvas with SVG fallback)
- **Forms & Validation**: React Hook Form + Zod
- **Icons**: Lucide React
- **SEO & Meta**: OpenGraph, dynamic sitemap, robots.txt, semantic schema

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js `v20+` or `v24+`
- npm `v10+` or `v11+`

### 1. Clone & Install
```bash
git clone https://github.com/Divyadarsiniu/divya-darsini-3d-portfolio.git
cd divya-darsini-3d-portfolio
npm install --legacy-peer-deps
```

### 2. Environment Configuration (Optional)
```bash
cp .env.example .env.local
```
Add `RESEND_API_KEY` if you wish to deliver contact emails directly to your inbox. If left unconfigured, the application gracefully provides an automated `mailto:` fallback.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🧪 Testing & Verification Report

| Test Item | Verification Method | Status |
|---|---|---|
| **TypeScript Typecheck** | `next build` static analyzer | ✅ 0 errors |
| **Component Compilation** | Next.js Turbopack compiler | ✅ Passed (14 static & dynamic routes prerendered) |
| **3D Canvas & WebGL Fallback** | Isolated canvas lifecycle, memory disposal, SVG fallback | ✅ Verified |
| **Contact Form Validation** | Zod schema on client + `/api/contact` server route | ✅ Verified (200 OK & Mailto fallback) |
| **Spam Protection** | Hidden honeypot field rejection | ✅ Verified |
| **Resume Download** | `/resume/Divya_Darsini_Resume.pdf` public link | ✅ Verified (5,448 bytes) |
| **Accessibility & Motion** | Semantic headings, ARIA roles, `prefers-reduced-motion` CSS | ✅ Verified |
| **Responsive Viewports** | Mobile (375px), Tablet (768px), Desktop (1280px+) | ✅ Verified |

---

## 🌐 Deployment Instructions

### Option A: Vercel (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Divya Darsini 3D portfolio"
   git remote add origin https://github.com/Divyadarsiniu/divya-darsini-3d-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Navigate to [Vercel Dashboard](https://vercel.com/new).
3. Select **Import Git Repository** and choose `divya-darsini-3d-portfolio`.
4. Vercel automatically detects Next.js framework settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
5. (Optional) Set Environment Variables:
   - `RESEND_API_KEY`: your-resend-key
6. Click **Deploy**. Vercel will build and assign your production domain: `https://divyadarsiniu.vercel.app`.

### Option B: Render Web Service

1. On [Render](https://render.com), click **New +** &rarr; **Web Service**.
2. Connect your GitHub repository `divya-darsini-3d-portfolio`.
3. Configure the service settings:
   - **Environment**: `Node`
   - **Build Command**: `npm install --legacy-peer-deps && npm run build`
   - **Start Command**: `npm run start`
   - **Plan**: Free / Starter
4. Click **Create Web Service**.

---

## 🛡️ Candidate Ground Truth Integrity

All personal experiences, academic metrics (SRMIST CSE, CGPA 9.67, 2023–2027), project architectures, research figures (84 videos, 528 frames, Cohen's kappa), and speech disfluency benchmarks (Whisper 5.88% WER vs Wav2Vec2 44.12% WER) are verified directly from candidate credentials without synthetic claims.
