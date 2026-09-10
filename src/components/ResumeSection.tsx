const resumePath = '/resume/Logan_Phan_Resume.pdf'

export function ResumeSection() {
  return (
    <section
      className="resume-section"
      aria-labelledby="resume-title"
    >
      <div className="resume-section__halftone" aria-hidden="true" />
      <div className="resume-section__red-field" aria-hidden="true" />

      <header className="resume-section__header" id="resume">
        <span className="resume-section__eyebrow">One-page overview</span>
        <span className="resume-section__number" aria-hidden="true">
          06
        </span>
        <h2 className="resume-section__title" id="resume-title">
          Résumé
        </h2>
      </header>

      <div className="resume-section__layout">
        <a
          className="resume-preview"
          href={resumePath}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Logan Phan’s résumé in a new tab"
        >
          <img
            src="/resume/Logan_Phan_Resume_preview.png"
            alt="Preview of Logan Phan’s one-page résumé"
          />
          <span>PDF · 1 page</span>
        </a>

        <div className="resume-actions">
          <p className="resume-actions__label">Software engineering résumé</p>
          <h3>Logan Phan</h3>
          <p className="resume-actions__contents">
            Education / Experience / Projects / Leadership / Skills
          </p>

          <div className="resume-actions__links">
            <a href={resumePath} target="_blank" rel="noreferrer">
              View résumé <span aria-hidden="true">↗</span>
            </a>
            <a href={resumePath} download="Logan_Phan_Resume.pdf">
              Download PDF <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
