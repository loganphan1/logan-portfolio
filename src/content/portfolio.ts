export const introduction = {
  name: 'Logan Phan',
  role: 'Software Engineer',
  blurb:
    'Computer Science student at San Diego State University focused on building reliable, useful software.',
} as const

export const menuItems = [
  {
    id: 'projects',
    label: 'Projects',
    detail: 'Selected software projects and technical work.',
    action: 'View work',
  },
  {
    id: 'about',
    label: 'About Me',
    detail: 'A short introduction to who I am and what I’m working toward.',
    action: 'Meet Logan',
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
    label: 'Résumé',
    detail: 'Education, experience, selected projects, and technical skills.',
    action: 'View résumé',
  },
  {
    id: 'connect',
    label: 'Connect',
    detail: 'Email, GitHub, and LinkedIn.',
    action: 'Say hello',
  },
] as const

export type MenuItem = (typeof menuItems)[number]

export const featuredProjects = [
  {
    id: 'personal-finance-dashboard',
    title: 'Personal Finance Dashboard',
    summary:
      'A dashboard that collects transactions, categorizes spending, and surfaces anomaly alerts.',
    technologies: ['FastAPI', 'PostgreSQL', 'Plaid', 'Docker'],
  },
  {
    id: 'preventative-care-planner',
    title: 'Preventative Care Planner',
    summary:
      'A cross-platform app that generates personalized preventative-care guidance and organizes it in a timeline.',
    technologies: ['React Native', 'TypeScript', 'Supabase'],
  },
  {
    id: 'portable-cyberdeck',
    title: 'Portable Cyberdeck',
    summary:
      'A portable Linux terminal environment for coding on the go and local music playback.',
    technologies: ['Linux', 'Bash', 'CLI'],
  },
] as const

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
