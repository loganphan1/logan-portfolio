import { useState } from 'react'
import { featuredProjects } from '../content/portfolio'

export function FeaturedProjects() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null)

  const toggleProject = (projectId: string) => {
    setOpenProjectId((currentProjectId) =>
      currentProjectId === projectId ? null : projectId,
    )
  }

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
            <article
              className="project-casefile"
              data-open={openProjectId === project.id ? '' : undefined}
            >
              <button
                className="project-casefile__toggle"
                type="button"
                aria-expanded={openProjectId === project.id}
                aria-controls={`${project.id}-details`}
                onClick={() => toggleProject(project.id)}
              >
                <span className="project-casefile__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="project-casefile__content">
                  <span className="project-casefile__heading-row">
                    <span
                      className="project-casefile__title"
                      role="heading"
                      aria-level={3}
                    >
                      {project.title}
                    </span>
                    <span className="project-casefile__indicator" aria-hidden="true">
                      {openProjectId === project.id ? '−' : '+'}
                    </span>
                  </span>
                  <span className="project-casefile__summary">
                    {project.summary}
                  </span>
                  <span
                    className="project-casefile__technologies"
                    role="list"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.technologies.map((technology) => (
                      <span key={technology} role="listitem">
                        {technology}
                      </span>
                    ))}
                  </span>
                </span>
              </button>

              <div
                className="project-casefile__details"
                id={`${project.id}-details`}
                hidden={openProjectId !== project.id}
              >
                  <div className="project-detail project-detail--mission">
                    <h4>Mission</h4>
                    <p>{project.mission}</p>
                  </div>

                  <div className="project-detail project-detail--role">
                    <h4>My role</h4>
                    <p>{project.role}</p>
                  </div>

                  <div className="project-detail project-detail--approach">
                    <h4>Technical approach</h4>
                    <ul>
                      {project.approach.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-detail project-detail--status">
                    <h4>Result / status</h4>
                    <p>{project.status}</p>
                  </div>

                  {(project.links.repository || project.links.demo) && (
                    <div className="project-casefile__links">
                      {project.links.repository && (
                        <a
                          href={project.links.repository}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View repository <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open live demo <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  )}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
