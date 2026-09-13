import { skillGroups } from '../content/portfolio'

export function SkillsSection() {
  return (
    <section
      className="skills-section"
      aria-labelledby="skills-title"
    >
      <div className="skills-section__halftone" aria-hidden="true" />
      <div className="skills-section__ink-swipe" aria-hidden="true" />

      <header className="skills-section__header" id="skills">
        <span className="skills-section__eyebrow">Technical toolkit</span>
        <span className="skills-section__number" aria-hidden="true">
          04
        </span>
        <h2 className="skills-section__title" id="skills-title">
          Skills
        </h2>
      </header>

      <div className="skill-groups">
        {skillGroups.map((group, index) => (
          <article className="skill-group" key={group.id}>
            <div className="skill-group__heading">
              <span aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{group.label}</h3>
            </div>

            <ul className="skill-group__list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
