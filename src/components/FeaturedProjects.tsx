import { featuredProjects } from '../content/portfolio'

export function FeaturedProjects() {
  return (
    <section
      className="featured-projects"
      aria-labelledby="featured-projects-title"
    >
      <div className="featured-projects__halftone" aria-hidden="true" />

      <header className="featured-projects__header" id="projects">
        <span className="featured-projects__eyebrow">Selected work</span>
        <h2 className="featured-projects__title" id="featured-projects-title">
          Projects
        </h2>
      </header>

      <ol className="project-casefiles">
        {featuredProjects.map((project, index) => (
          <li className="project-casefiles__item" key={project.id}>
            <article className="project-casefile">
              <span className="project-casefile__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="project-casefile__content">
                <h3 className="project-casefile__title">{project.title}</h3>
                <p className="project-casefile__summary">{project.summary}</p>
                <ul
                  className="project-casefile__technologies"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
