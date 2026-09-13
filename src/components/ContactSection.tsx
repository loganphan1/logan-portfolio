import { contactLinks } from '../content/portfolio'

export function ContactSection() {
  return (
    <section
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-section__halftone" aria-hidden="true" />
      <div className="contact-section__red-panel" aria-hidden="true" />

      <header className="contact-section__header" id="connect">
        <span className="contact-section__eyebrow">Open to opportunities</span>
        <span className="contact-section__number" aria-hidden="true">
          06
        </span>
        <h2 className="contact-section__title" id="contact-title">
          Let’s talk.
        </h2>
        <p>
          I’m currently seeking software engineering internship opportunities
          and am always open to discussing projects.
        </p>
      </header>

      <address className="contact-links" aria-label="Contact Logan Phan">
        {contactLinks.map((link, index) => (
          <a
            className="contact-link"
            href={link.href}
            key={link.id}
            {...(link.external
              ? { target: '_blank', rel: 'noreferrer' }
              : {})}
          >
            <span className="contact-link__number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="contact-link__content">
              <strong>{link.label}</strong>
              <span>{link.display}</span>
            </span>
            <span className="contact-link__arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </address>

      <footer className="site-footer">
        <span>Designed and built by Logan Phan</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </section>
  )
}
