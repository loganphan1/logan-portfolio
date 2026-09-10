import { useEffect, useRef, useState } from 'react'
import { introduction, menuItems, type MenuItem } from '../content/portfolio'

const SWITCH_ANIMATION_MS = 300

export function HeroMenu() {
  const [selectedItem, setSelectedItem] = useState<MenuItem>(menuItems[0])
  const [isSwitching, setIsSwitching] = useState(false)
  const screenRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isSwitching) return

    const timeoutId = window.setTimeout(
      () => setIsSwitching(false),
      SWITCH_ANIMATION_MS,
    )

    return () => window.clearTimeout(timeoutId)
  }, [isSwitching])

  const selectItem = (item: MenuItem) => {
    if (item.id === selectedItem.id) return
    setSelectedItem(item)
    setIsSwitching(false)
    window.requestAnimationFrame(() => setIsSwitching(true))
  }

  const updateCursor = (event: React.PointerEvent<HTMLElement>) => {
    const screen = screenRef.current
    if (!screen) return

    const bounds = screen.getBoundingClientRect()
    screen.style.setProperty('--cursor-x', `${event.clientX - bounds.left}px`)
    screen.style.setProperty('--cursor-y', `${event.clientY - bounds.top}px`)
  }

  return (
    <section
      ref={screenRef}
      className={`hero-menu${isSwitching ? ' hero-menu--switching' : ''}`}
      aria-labelledby="identity-role"
      onPointerMove={updateCursor}
    >
      <div className="hero-menu__ink-field" aria-hidden="true" />
      <div className="hero-menu__halftone" aria-hidden="true" />
      <div className="hero-menu__speed-lines" aria-hidden="true" />
      <div className="hero-menu__ghost-name" aria-hidden="true">
        Phan
      </div>

      <header className="hero-menu__header">
        <div className="brand-mark" aria-label={`${introduction.name}'s portfolio`}>
          <span className="brand-mark__eyebrow">Portfolio</span>
          <span className="brand-mark__name">{introduction.name}</span>
        </div>
      </header>

      <div className="hero-menu__layout">
        <section className="identity-panel" aria-labelledby="identity-role">
          <div className="identity-panel__monogram" aria-hidden="true">
            LP
          </div>
          <h1 className="identity-panel__role" id="identity-role">
            {introduction.role}
          </h1>
          <p className="identity-panel__blurb">{introduction.blurb}</p>
        </section>

        <nav className="menu-list" aria-label="Portfolio sections">
          <p className="menu-list__heading">Choose a destination</p>
          <ol className="menu-list__items">
            {menuItems.map((item, index) => {
              const isSelected = item.id === selectedItem.id

              return (
                <li className="menu-list__item" key={item.id}>
                  <a
                    className="menu-list__button"
                    href={`#${item.id}`}
                    data-selected={isSelected ? '' : undefined}
                    onClick={() => selectItem(item)}
                    onFocus={() => selectItem(item)}
                  >
                    <span className="menu-list__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="menu-list__word">{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ol>
        </nav>
      </div>

      <section className="selection-strip" aria-live="polite">
        <span className="selection-strip__label">{selectedItem.label}</span>
        <span className="selection-strip__copy">{selectedItem.detail}</span>
        <span className="selection-strip__action">
          {selectedItem.action} <span aria-hidden="true">→</span>
        </span>
      </section>

      <div className="hero-menu__cursor" aria-hidden="true">
        Go
      </div>
    </section>
  )
}
