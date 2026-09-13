import { useEffect, useState } from 'react'
import { menuItems } from '../content/portfolio'

type SectionId = (typeof menuItems)[number]['id']

export function PortfolioNav() {
  const [activeSection, setActiveSection] = useState<SectionId>(menuItems[0].id)

  useEffect(() => {
    const sectionMap = new Map<Element, SectionId>()

    menuItems.forEach((item) => {
      const heading = document.getElementById(item.id)
      const section = heading?.closest('section')
      if (section) sectionMap.set(section, item.id)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        const sectionId = visibleSection
          ? sectionMap.get(visibleSection.target)
          : undefined

        if (sectionId) setActiveSection(sectionId)
      },
      { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.2, 0.5] },
    )

    sectionMap.forEach((_id, section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="portfolio-nav" aria-label="Portfolio sections">
      <a
        className="portfolio-nav__brand"
        href={import.meta.env.BASE_URL}
        aria-label="Return to Logan Phan’s introduction"
      >
        <span aria-hidden="true">LP</span>
        <span>Logan Phan</span>
      </a>

      <div className="portfolio-nav__links">
        {menuItems.map((item, index) => (
          <a
            href={`#${item.id}`}
            aria-current={activeSection === item.id ? 'location' : undefined}
            onClick={() => setActiveSection(item.id)}
            key={item.id}
          >
            <span aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
