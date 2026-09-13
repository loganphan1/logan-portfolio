import { useState } from 'react'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { FeaturedProjects } from './components/FeaturedProjects'
import { IntroStart } from './components/IntroStart'
import { LeadershipSection } from './components/LeadershipSection'
import { PortfolioNav } from './components/PortfolioNav'
import { ResumeSection } from './components/ResumeSection'
import { SkillsSection } from './components/SkillsSection'
import { menuItems } from './content/portfolio'

const TRANSITION_REVEAL_MS = 180
const TRANSITION_END_MS = 420

const hasDirectSectionHash = () => {
  const sectionId = window.location.hash.slice(1)
  return menuItems.some((item) => item.id === sectionId)
}

function App() {
  const [hasStarted, setHasStarted] = useState(hasDirectSectionHash)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const enterPortfolio = () => {
    if (hasStarted || isTransitioning) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHasStarted(true)
      window.history.replaceState(null, '', '#projects')
      return
    }

    setIsTransitioning(true)

    window.setTimeout(() => {
      setHasStarted(true)
      window.history.replaceState(null, '', '#projects')
      window.scrollTo({ top: 0 })
    }, TRANSITION_REVEAL_MS)

    window.setTimeout(() => setIsTransitioning(false), TRANSITION_END_MS)
  }

  return (
    <>
      {!hasStarted && (
        <main>
          <IntroStart
            isStarting={isTransitioning}
            onStart={enterPortfolio}
          />
        </main>
      )}

      {hasStarted && (
        <main className="portfolio-shell">
          <PortfolioNav />
          <FeaturedProjects />
          <ExperienceSection />
          <LeadershipSection />
          <SkillsSection />
          <ResumeSection />
          <ContactSection />
        </main>
      )}

      <div
        className={`portfolio-transition${isTransitioning ? ' portfolio-transition--active' : ''}`}
        aria-hidden="true"
      />
    </>
  )
}

export default App
