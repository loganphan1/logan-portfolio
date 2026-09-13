import { leadershipRoles } from '../content/portfolio'

export function LeadershipSection() {
  return (
    <section
      className="leadership-section"
      aria-labelledby="leadership-title"
    >
      <div className="leadership-section__halftone" aria-hidden="true" />
      <div className="leadership-section__slash" aria-hidden="true" />

      <header className="leadership-section__header" id="leadership">
        <span className="leadership-section__eyebrow">Community impact</span>
        <span className="leadership-section__number" aria-hidden="true">
          03
        </span>
        <h2 className="leadership-section__title" id="leadership-title">
          Leadership
        </h2>
      </header>

      <ol className="leadership-records">
        {leadershipRoles.map((leadershipRole, index) => (
          <li className="leadership-records__item" key={leadershipRole.id}>
            <article className="leadership-record">
              <div className="leadership-record__topline">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{leadershipRole.dates}</span>
              </div>

              <p className="leadership-record__organization">
                {leadershipRole.organization}
              </p>
              <h3 className="leadership-record__role">{leadershipRole.role}</h3>

              <ul className="leadership-record__details">
                {leadershipRole.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
