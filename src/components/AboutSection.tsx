import { about } from '../content/portfolio'

export function AboutSection() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="about-section__ink-swipe" aria-hidden="true" />

      <header className="about-section__header" id="about">
        <span className="about-section__eyebrow">Profile</span>
        <span className="about-section__number" aria-hidden="true">
          02
        </span>
        <h2 className="about-section__title" id="about-title">
          About <span>Me</span>
        </h2>
      </header>

      <div className="about-section__layout">
        <div
          className="about-portrait"
          role="img"
          aria-label="Reserved portrait area"
        >
          <div className="about-portrait__halftone" aria-hidden="true" />
          <span className="about-portrait__monogram" aria-hidden="true">
            LP
          </span>
          <span className="about-portrait__label">Portrait space</span>
        </div>

        <div className="about-copy">
          <p className="about-copy__body">{about.body}</p>
          <div className="about-copy__focus">
            <span>Currently</span>
            <strong>{about.currentFocus}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
