import React, { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  Download,
  Mail,
  Menu,
  X,
} from 'lucide-react'

const portfolio = {
  name: 'Priya',
  role: 'Designer & Developer',
  intro:
    'I shape ideas into thoughtful digital experiences—clear in purpose, warm in character, and built to last.',
  email: 'hello@priya.design',
  availability: 'Open to thoughtful collaborations',
  projects: [
    {
      title: 'A more human way to plan',
      category: 'Product design · Web app',
      year: '2026',
      color: '#5568e8',
      accent: '#ff8e77',
      description:
        'A calm planning system that turns ambitious goals into manageable daily decisions.',
      visual: 'planner',
    },
    {
      title: 'Stories you can step into',
      category: 'Creative development · Editorial',
      year: '2025',
      color: '#ff8e77',
      accent: '#d9ff63',
      description:
        'An expressive reading experience designed around curiosity, rhythm, and discovery.',
      visual: 'editorial',
    },
    {
      title: 'Culture, made visible',
      category: 'Identity · Digital experience',
      year: '2025',
      color: '#221f34',
      accent: '#b9a7ff',
      description:
        'A living visual identity that helps a creative community show up with one confident voice.',
      visual: 'identity',
    },
  ],
  strengths: [
    ['Product thinking', 'Finding the useful idea inside a complicated problem.'],
    ['Visual systems', 'Building identities that stay coherent as they grow.'],
    ['Front-end craft', 'Turning design intent into responsive, accessible interfaces.'],
    ['Collaboration', 'Making the work better through clear, generous communication.'],
  ],
}

function MagneticField() {
  const fieldRef = useRef(null)
  const [point, setPoint] = useState({ x: 62, y: 42 })

  const move = (event) => {
    if (!fieldRef.current) return
    const bounds = fieldRef.current.getBoundingClientRect()
    setPoint({
      x: ((event.clientX - bounds.left) / bounds.width) * 100,
      y: ((event.clientY - bounds.top) / bounds.height) * 100,
    })
  }

  return (
    <div
      className="idea-field"
      ref={fieldRef}
      onPointerMove={move}
      style={{ '--mx': `${point.x}%`, '--my': `${point.y}%` }}
      aria-hidden="true"
    >
      <span className="field-label label-one">question</span>
      <span className="field-label label-two">shape</span>
      <span className="field-label label-three">test</span>
      <span className="field-label label-four">refine</span>
      <div className="orbit orbit-one"><i /></div>
      <div className="orbit orbit-two"><i /></div>
      <div className="orbit orbit-three"><i /></div>
      <div className="field-core">
        <Asterisk size={34} strokeWidth={1.5} />
        <span>idea</span>
      </div>
    </div>
  )
}

function ProjectVisual({ type }) {
  if (type === 'planner') {
    return (
      <div className="project-art planner-art" aria-hidden="true">
        <div className="planner-window">
          <div className="planner-top"><span /><span /><span /></div>
          <div className="planner-date">TODAY · THURSDAY</div>
          <strong>Make space for<br />what matters.</strong>
          <div className="planner-lines"><i /><i /><i /></div>
          <div className="planner-pill">3 things, not 30</div>
        </div>
        <div className="floating-note">slow is still<br />a direction ↗</div>
      </div>
    )
  }

  if (type === 'editorial') {
    return (
      <div className="project-art editorial-art" aria-hidden="true">
        <span className="story-word">STO<br />RY</span>
        <div className="story-card">
          <span>ISSUE 04</span>
          <div className="story-circle" />
          <p>Outside the<br />obvious</p>
        </div>
        <div className="story-caption">A journal of people<br />who took the side road.</div>
      </div>
    )
  }

  return (
    <div className="project-art identity-art" aria-hidden="true">
      <div className="identity-mark"><span>P</span><i /></div>
      <div className="identity-type">PEOPLE<br />MAKE<br />PLACES</div>
      <div className="identity-sticker">COME<br />AS YOU<br />ARE ↗</div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Priya, home">
          P<span>↗</span>
        </a>
        <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-resume" href="/resume.txt" download onClick={closeMenu}>
            Résumé <Download size={14} />
          </a>
        </nav>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> {portfolio.availability}
            </p>
            <h1>
              I make digital things<br />
              <em>feel wonderfully clear.</em>
            </h1>
            <p className="hero-intro">{portfolio.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See my work <ArrowDown size={17} />
              </a>
              <a className="text-link" href={`mailto:${portfolio.email}`}>
                Start a conversation <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <MagneticField />
          <div className="hero-note">
            <span>My process, in motion</span>
            <span>Move your cursor ↗</span>
          </div>
        </section>

        <section className="work section-shell" id="work">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>A few things I’ve<br />helped make happen.</h2>
            <p>Each project begins differently. The constant is care—for the idea, the details, and the people on the other side.</p>
          </div>

          <div className="project-list">
            {portfolio.projects.map((project, index) => (
              <article className="project" key={project.title}>
                <div
                  className="project-visual"
                  style={{ '--project': project.color, '--accent': project.accent }}
                >
                  <ProjectVisual type={project.visual} />
                  <span className="project-index">0{index + 1}</span>
                </div>
                <div className="project-info">
                  <div>
                    <p className="project-meta">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="project-foot">
                    <span>{project.year}</span>
                    <button aria-label={`View ${project.title}`}>
                      View project <ArrowUpRight size={17} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-intro section-shell">
            <p className="eyebrow">How I work</p>
            <h2>Equal parts<br /><em>head, heart</em> & hands.</h2>
            <p>
              I’m {portfolio.name}, a {portfolio.role.toLowerCase()} who likes untangling messy
              questions and turning them into experiences that feel natural. I care about
              useful ideas, precise details, and work that has a point of view.
            </p>
          </div>
          <div className="strength-grid section-shell">
            {portfolio.strengths.map(([title, body]) => (
              <div className="strength" key={title}>
                <Asterisk size={20} />
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-kicker">
            <span>Have a project in mind?</span>
            <span>Or just a good question?</span>
          </div>
          <h2>Let’s make something<br /><em>worth caring about.</em></h2>
          <a className="contact-link" href={`mailto:${portfolio.email}`}>
            <span>{portfolio.email}</span>
            <span className="contact-icon"><Mail /><ArrowUpRight /></span>
          </a>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <p>© {new Date().getFullYear()} Priya. Made with curiosity.</p>
        <div>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
