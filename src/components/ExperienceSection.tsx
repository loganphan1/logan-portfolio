import { useState } from 'react'
import { experiences, type Experience } from '../content/portfolio'

const initialExperience =
  experiences.find((experience) => experience.id === 'tend-lab') ??
  experiences[0]

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience>(initialExperience)

  return (
    <section
      className="experience-section"
      aria-labelledby="experience-title"
    >
      <div className="experience-section__halftone" aria-hidden="true" />

      <header className="experience-section__header" id="experience">
        <span className="experience-section__eyebrow">Work record</span>
        <span className="experience-section__number" aria-hidden="true">
          02
        </span>
        <h2 className="experience-section__title" id="experience-title">
          Experience
        </h2>
      </header>

      <div className="experience-section__layout">
        <div className="experience-selector" aria-label="Choose an experience">
          <p className="experience-selector__heading">Select a record</p>
          {experiences.map((experience, index) => {
            const isSelected = experience.id === selectedExperience.id

            return (
              <button
                className="experience-selector__button"
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedExperience(experience)}
                key={experience.id}
              >
                <span className="experience-selector__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{experience.menuLabel}</span>
              </button>
            )
          })}
        </div>

        <article
          className="experience-record"
          key={selectedExperience.id}
          aria-live="polite"
        >
          <div className="experience-record__topline">
            <span>Selected record</span>
            <span>{selectedExperience.dates}</span>
          </div>

          {'focus' in selectedExperience ? (
            <span className="experience-record__focus">
              {selectedExperience.focus}
            </span>
          ) : null}

          <h3 className="experience-record__role">{selectedExperience.role}</h3>
          <p className="experience-record__organization">
            {selectedExperience.organization}
          </p>

          <ul className="experience-record__details">
            {selectedExperience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
