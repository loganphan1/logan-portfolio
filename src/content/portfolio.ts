export const introduction = {
  name: 'Logan Phan',
  role: 'Software Engineer',
  summary:
    'Computer Science student at San Diego State University building full-stack applications and backend systems',
  target: 'Software engineering internship opportunities',
  coreSkills: ['Python','FastAPI', 'PostgreSQL','TypeScript', 'React'],
  education: {
    school: 'San Diego State University',
    degree: 'B.S. Computer Science',
    detail: 'Finance minor / GPA 3.79 / May 2028',
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
      'A secure personal-finance backend for recording and managing user-scoped transactions.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Alembic', 'JWT'],
    mission:
      'Create a reliable foundation for users to securely manage their financial transaction data.',
    role: 'Backend developer',
    approach: [
      'Built a FastAPI backend in Python with JWT-based authentication and user-scoped CRUD endpoints for recording and managing transactions.',
      'Designed PostgreSQL models for users and transactions, managed schema changes with Alembic, and enforced user authentication.',
    ],
    status:
      'In development, with authenticated transaction management and the core data model established.',
    links: {
      repository: 'https://github.com/loganphan1/finance-app/tree/APIRouter',
      demo: '',
    },
  },
  {
    id: 'crewtrace',
    title: 'CrewTrace - Reboot The Earth Hackathon',
    summary:
      'A wildfire intelligence prototype that turns environmental data into location-specific safety reports.',
    technologies: ['Gemini', 'React', 'NOAA', 'NASA POWER', 'Tomorrow.io'],
    mission:
      'Help users understand local wildfire conditions through structured reports and practical safety recommendations.',
    role: 'Full-stack team member',
    approach: [
      'Built a Gemini-powered pipeline that aggregated JSON from AlertCalifornia, NOAA, NASA POWER, and Tomorrow.io into structured wildfire-condition reports and safety recommendations.',
      'Collaborated with a five-person team to integrate location-specific reports into a map-based React interface and validate the prototype using real low-risk conditions and simulated extreme-fire scenarios.',
    ],
    status: 'Built during the Reboot The Earth Hackathon in May 2026.',
    links: {
      repository: 'https://github.com/Sqrl34/RTE-UCSD-Project',
      demo: '',
    },
  }
]

export const about = {
  body:
    'I’m a Computer Science student at San Diego State University with a minor in Finance. My recent work includes full-stack applications, backend development, computational research, and technical support.',
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
      'Independently developing a three-run TikTok-style experimental task in Presentation Coding Language for an upcoming fMRI study, simulating video scrolling, likes, and randomized interruptions to examine adolescent behavioral development.',
      'Implemented conditional task logic and structured event logging to produce a file of clean data throughout each experimental phase.',
    ],
  },
  {
    id: 'sdsu-it',
    menuLabel: 'SDSU IT',
    organization: 'San Diego State University',
    role: 'IT Services Front Desk',
    dates: 'June 2026 — Present',
    bullets: [
      'Provide technical support to students, faculty, staff, alumni, and emeriti across virtual and in-person channels, diagnosing Canvas, Wi-Fi, account-access, password, and software issues while assisting 5–10 users per hour.',
      'Verify user identities and document incidents in ServiceNow to facilitate secure account recovery and route specialized cases to the appropriate technical teams.',
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
      'Collaborated with another frontend developer to build a single-page React and TypeScript prototype for an AI mock-interview platform, including the resume-upload interface, job-description input, visual layout, and planned interview workspace.',
      'Connected the resume-upload flow to the backend, verifying that uploaded files could be submitted and processed during development.',
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
      'Co-founded a student initiative connecting SDSU developers with San Diego nonprofits, recruiting 45 members within its first few months to expand access to hands-on software experience.',
      'Secured projects with two local nonprofits through direct outreach, scoping an internal cat-adoption records system and a HomeShare platform for affordable intergenerational housing.',
    ],
  },
  {
    id: 'apsa',
    organization: 'Asian Pacific Student Alliance',
    role: 'Academic Coordinator',
    dates: 'May 2025 — May 2026',
    bullets: [
      'Directed a mentorship program serving more than 100 mentors and mentees, creating applications and matching participants based on shared interests, personalities, and stated preferences.',
      'Planned mentorship networking and reveal events by managing RSVPs, venue reservations, itineraries, and coordination across an 18-member executive board.',
    ],
  },
] as const

export const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'SQL',
      'Java',
      'C++',
      'Bash',
      'HTML + CSS',
      'Presentation Coding Language',
    ],
  },
  {
    id: 'frameworks-apis',
    label: 'Frameworks & APIs',
    skills: ['FastAPI', 'React', 'REST APIs'],
  },
  {
    id: 'data-tools',
    label: 'Data & Tools',
    skills: [
      'PostgreSQL',
      'Alembic',
      'JWT Authentication',
      'Git',
      'ServiceNow',
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
