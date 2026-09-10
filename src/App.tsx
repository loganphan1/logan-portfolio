import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { FeaturedProjects } from './components/FeaturedProjects'
import { HeroMenu } from './components/HeroMenu'
import { LeadershipSection } from './components/LeadershipSection'
import { ResumeSection } from './components/ResumeSection'
import { SkillsSection } from './components/SkillsSection'

function App() {
  return (
    <main>
      <HeroMenu />
      <FeaturedProjects />
      <AboutSection />
      <ExperienceSection />
      <LeadershipSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  )
}

export default App
