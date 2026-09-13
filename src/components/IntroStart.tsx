import { contactLinks, introduction } from '../content/portfolio'

const resumePath = `${import.meta.env.BASE_URL}resume/Logan_Phan_Resume.pdf`
const portraitPath = `${import.meta.env.BASE_URL}images/logan-portrait-white.png`

type IntroStartProps = {
  isStarting: boolean
  onStart: () => void
}

export function IntroStart({ isStarting, onStart }: IntroStartProps) {
  const linkedin = contactLinks.find((link) => link.id === 'linkedin')
  const github = contactLinks.find((link) => link.id === 'github')

  const startPortfolio = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (!isStarting) onStart()
  }

  return (
    <section
      className="intro-start"
      aria-labelledby="intro-name"
    >
      <div className="intro-start__halftone" aria-hidden="true" />
      <div className="intro-start__red-swipe" aria-hidden="true" />
      <div className="intro-start__ghost-word" aria-hidden="true">
        Logan
      </div>

      <header className="intro-start__topbar">
        <p>Logan Phan / Portfolio</p>
        <p className="intro-start__availability">
          <span aria-hidden="true" /> Available for internships
        </p>
      </header>

      <div className="intro-start__layout">
        <div className="intro-start__copy">
          <p className="intro-start__eyebrow">Hi, I’m</p>
          <h1 className="intro-start__name" id="intro-name">
            <span>Logan</span>
            <span>Phan</span>
          </h1>

          <p className="intro-start__role">{introduction.role}</p>
          <p className="intro-start__summary">{introduction.summary}</p>

          <div className="intro-start__target">
            <span>Currently seeking</span>
            <strong>{introduction.target}</strong>
          </div>

          <ul className="intro-start__skills" aria-label="Core technologies">
            {introduction.coreSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <nav className="intro-start__actions" aria-label="Introduction actions">
            <a
              className="intro-start__action intro-start__action--primary"
              href="#projects"
              aria-disabled={isStarting || undefined}
              onClick={startPortfolio}
            >
              Start <span aria-hidden="true">→</span>
            </a>
            <a
              className="intro-start__action"
              href={resumePath}
              target="_blank"
              rel="noreferrer"
            >
              Resume <span aria-hidden="true">↗</span>
            </a>
            {linkedin && (
              <a
                className="intro-start__action intro-start__action--compact"
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            )}
            {github && (
              <a
                className="intro-start__action intro-start__action--compact"
                href={github.href}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
            )}
          </nav>
        </div>

        <aside className="intro-start__identity" aria-label="Education">
          <div className="intro-start__portrait-stage">
            <img
              className="intro-start__portrait"
              src={portraitPath}
              alt="Portrait of Logan Phan"
            />
            <span className="intro-start__hello" aria-hidden="true">
              Hello!
            </span>
          </div>
          <div className="intro-start__education-frame">
            <div className="intro-start__education">
              <span>{introduction.education.school}</span>
              <strong>{introduction.education.degree}</strong>
              <small>{introduction.education.detail}</small>
            </div>
          </div>
        </aside>
      </div>

      <p className="intro-start__hint">Press start to enter the portfolio</p>
    </section>
  )
}
