export const introduction = {
  name: 'Logan Phan',
  role: 'Software Engineer',
  summary:
    'Computer Science student at San Diego State University building reliable full-stack and mobile software.',
  target: 'Software engineering internship opportunities',
  coreSkills: ['TypeScript', 'React', 'Python', 'FastAPI', 'PostgreSQL'],
  education: {
    school: 'San Diego State University',
    degree: 'B.S. Computer Science',
    detail: 'Finance minor / May 2028',
  },
} as const

export const menuItems = [
  {
    id: 'projects',
    label: 'Projects',
    detail: 'Selected software projects and technical work.',
    action: 'View work',
  },
  {
    id: 'experience',
    label: 'Experience',
    detail: 'Research, frontend development, and campus IT experience.',
    action: 'Open history',
  },
  {
    id: 'leadership',
    label: 'Leadership',
    detail: 'Community initiatives, mentorship, and collaborative leadership.',
    action: 'View impact',
  },
  {
    id: 'skills',
    label: 'Skills',
    detail: 'Languages, frameworks, databases, and development tools.',
    action: 'View toolkit',
  },
  {
    id: 'resume',
    label: 'Resume',
    detail: 'Education, experience, selected projects, and technical skills.',
    action: 'View resume',
  },
  {
    id: 'connect',
    label: 'Connect',
    detail: 'Email, GitHub, and LinkedIn.',
    action: 'Say hello',
  },
] as const

export type MenuItem = (typeof menuItems)[number]

type ProjectLinks = {
  repository?: string
  demo?: string
}

export type FeaturedProject = {
  id: string
  title: string
  summary: string
  technologies: readonly string[]
  mission: string
  role: string
  approach: readonly string[]
  status: string
  links: ProjectLinks
}

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: 'personal-finance-dashboard',
    title: 'Personal Finance Dashboard',
    summary:
      'A dashboard that collects transactions, categorizes spending, and surfaces anomaly alerts.',
    technologies: ['FastAPI', 'PostgreSQL', 'Plaid', 'Docker'],
    mission:
      'Turn raw financial transaction data into a useful view of spending patterns and unusual activity.',
    role: 'Full-stack developer',
    approach: [
      'Integrated Plaid with a Python and FastAPI service to collect transactions and categorize spending.',
      'Designed PostgreSQL data models and JWT-authenticated REST endpoints for secure data ingestion and delivery.',
      'Containerized local development and testing with Docker.',
    ],
    status:
      'In development, with the transaction ingestion, categorization, and anomaly-alert foundation established.',
    links: {
      repository: 'https://github.com/loganphan1/finance-app/tree/APIRouter',
      demo: '',
    },
  },
  {
    id: 'preventative-care-planner',
    title: 'Preventative Care Planner',
    summary:
      'A cross-platform app that generates personalized preventative-care guidance and organizes it in a timeline.',
    technologies: ['React Native', 'TypeScript', 'Supabase'],
    mission:
      'Make personalized preventative-care recommendations easier to understand and follow over time.',
    role: 'Team lead and mobile developer',
    approach: [
      'Led a four-person Agile team through planning, implementation, and delivery of the cross-platform application.',
      'Built a TypeScript rule-based engine that generated recommendations from structured user input.',
      'Implemented Supabase authentication and a dynamic timeline for individualized care guidance.',
    ],
    status:
      'Delivered as a four-month team project with its recommendation engine, authentication, and timeline working together.',
    links: {
      repository: '',
      demo: '',
    },
  },
  {
    id: 'portable-cyberdeck',
    title: 'Portable Cyberdeck',
    summary:
      'A portable Linux terminal environment for coding on the go and local music playback.',
    technologies: ['Linux', 'Bash', 'CLI'],
    mission:
      'Create a portable, self-contained Linux environment for development and offline music playback.',
    role: 'Independent builder',
    approach: [
      'Configured Linux and Bash workflows around a keyboard-driven command-line interface.',
      'Combined local development tools and media playback in one portable environment.',
      'Kept the system focused on offline access, portability, and a minimal interaction model.',
    ],
    status:
      'An evolving personal build; hardware photos and deeper technical documentation will be added later.',
    links: {
      repository: '',
      demo: '',
    },
  },
]

export const about = {
  body:
    'I’m a Computer Science student at San Diego State University with a minor in Finance. My recent work includes full-stack applications, mobile development, and computational research.',
  currentFocus: 'Seeking software engineering internships',
} as const

export const experiences = [
  {
    id: 'tend-lab',
    menuLabel: 'TEND Lab',
    organization: 'SDSU TEND Lab',
    role: 'Computational Research Assistant',
    dates: 'July 2026 — Present',
    bullets: [
      'Developed and tested fMRI task programs in Presentation Coding Language, supporting high-quality neural-data collection.',
      'Evaluated ways to incorporate TikTok-related stimuli and documented recommendations for study design.',
    ],
  },
  {
    id: 'sdsu-it',
    menuLabel: 'SDSU IT',
    organization: 'San Diego State University',
    role: 'IT Services Front Desk',
    dates: 'June 2026 — Present',
    bullets: [
      'Troubleshoot Canvas, Wi-Fi, printing, and general student technology issues across in-person and virtual support.',
      'Create and route support tickets, capturing issue details and communicating clear troubleshooting steps.',
    ],
  },
  {
    id: 'world-computing',
    menuLabel: 'World Computing',
    organization: 'World Computing Organization',
    role: 'Frontend Developer',
    dates: 'October 2025 — May 2026',
    focus: 'Software engineering',
    bullets: [
      'Built an accessible React and TypeScript AI interview interface with reusable components and context-based state management.',
      'Integrated REST APIs and collaborated through code reviews with backend engineers to improve maintainability.',
    ],
  },
] as const

export type Experience = (typeof experiences)[number]

export const leadershipRoles = [
  {
    id: 'devs-for-impact',
    organization: 'Devs for Impact',
    role: 'Founding Vice President',
    dates: 'July 2026 — Present',
    bullets: [
      'Co-founded a student organization connecting San Diego nonprofits with student developers.',
      'Lead a software project for Nonprofits of San Diego, coordinating student developers from requirements through delivery.',
      'Developing a campus partnership for a social-impact hackathon.',
    ],
  },
  {
    id: 'apsa',
    organization: 'APSA',
    role: 'Academic Coordinator',
    dates: 'May 2025 — May 2026',
    bullets: [
      'Led a mentorship program serving more than 100 participants and organized 10+ academic and community events.',
      'Supported executive-board initiatives using Supabase, Bash, SQL, and Trello to organize program data and team workflows.',
    ],
  },
] as const

export const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      'TypeScript',
      'JavaScript',
      'Python',
      'Java',
      'SQL',
      'C++',
      'Bash',
      'HTML + CSS',
    ],
  },
  {
    id: 'frameworks-apis',
    label: 'Frameworks & APIs',
    skills: ['React', 'React Native', 'FastAPI', 'Node.js', 'REST APIs'],
  },
  {
    id: 'data-tools',
    label: 'Data & Tools',
    skills: [
      'PostgreSQL',
      'Supabase',
      'Firebase',
      'Docker',
      'Git',
      'Linux',
      'Unit Testing',
    ],
  },
] as const

export const contactLinks = [
  {
    id: 'email',
    label: 'Email',
    display: 'loganphan1@gmail.com',
    href: 'mailto:loganphan1@gmail.com',
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    display: 'linkedin.com/in/loganphan1',
    href: 'https://www.linkedin.com/in/loganphan1/',
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    display: 'github.com/loganphan1',
    href: 'https://github.com/loganphan1',
    external: true,
  },
] as const
