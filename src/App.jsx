import { useEffect, useState } from 'react'
import { motion as Motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import {
  ArrowDown,
  ArrowUpRight,
  Certificate,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  List,
  X,
} from '@phosphor-icons/react'

const projects = [
  {
    title: 'Microsoft Fabric Lakehouse',
    description: 'End-to-end data pipelines, Lakehouse architecture, PySpark notebooks, scheduling, and Power BI models.',
    stack: ['Microsoft Fabric', 'PySpark', 'Power BI'],
    image: '/images/fabric-lakehouse.png',
  },
  {
    title: 'SQL Performance Engineering',
    description: 'Query tuning through indexing, execution-plan analysis, stored procedures, CTEs, and window functions.',
    stack: ['MySQL', 'SQL', 'Performance tuning'],
    image: '/images/query-optimization.png',
  },
  {
    title: 'Secure Azure ETL Platform',
    description: 'Automated enterprise data movement with monitored pipelines, secure credentials, and failure alerts.',
    stack: ['Azure Data Factory', 'Databricks', 'Key Vault'],
    image: '/images/hero-data-architecture.png',
  },
]

const skills = {
  'Cloud platforms': ['Microsoft Fabric', 'Azure Data Factory', 'Azure Databricks', 'Azure Data Lake Gen2', 'Azure SQL', 'Azure Key Vault'],
  'Engineering': ['PySpark', 'SQL', 'ETL pipelines', 'Data warehousing', 'Data modeling', 'Performance tuning'],
  'Analytics': ['Power BI', 'Dashboard development', 'Data visualization', 'Master data management'],
}

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function Reveal({ children, className = '' }) {
  const reduce = useReducedMotion()
  return (
    <Motion.div
      className={className}
      initial={reduce ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={reveal}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Motion.div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  return (
    <div className="page">
      <Motion.div className="progress" style={{ scaleX: scrollYProgress }} />
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="Priya Gupta home">PG</a>
        <nav id="mobile-navigation" className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="contact-nav" href="mailto:priyagupta5011@gmail.com">Contact</a>
        </nav>
        <button
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <Motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="role">Azure Data Engineer</p>
            <h1>I build data systems that stay clear under pressure.</h1>
            <p className="hero-text">Scalable Azure pipelines, reliable warehouses, and analytics that teams can act on.</p>
            <div className="actions">
              <a className="primary" href="#work">View projects <ArrowDown size={18} weight="bold" /></a>
              <a className="secondary" href="/resume.txt" download>Download résumé <DownloadSimple size={18} /></a>
            </div>
          </Motion.div>
          <Motion.figure
            className="hero-image"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/images/hero-data-architecture.png" alt="Abstract cloud data architecture formed from cobalt glass and graphite structures" />
          </Motion.figure>
        </section>

        <section className="statement">
          <Reveal>
            <p>Two years of hands-on work across Microsoft Fabric, Azure Data Factory, Databricks, PySpark, SQL, and Power BI.</p>
          </Reveal>
        </section>

        <section className="projects shell" id="work">
          <Reveal className="section-intro">
            <h2>Systems built for real work.</h2>
            <p>Selected projects from cloud data engineering, warehousing, and database performance.</p>
          </Reveal>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal className={`project project-${index + 1}`} key={project.title}>
                <figure>
                  <img src={project.image} alt="" loading={index === 0 ? 'eager' : 'lazy'} />
                </figure>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="experience shell" id="experience">
          <Reveal className="experience-heading">
            <h2>Experience</h2>
          </Reveal>
          <div className="timeline">
            <Reveal className="job">
              <div><span>2022 - Present</span><strong>New Vision Software and Consultancy</strong></div>
              <div><h3>Software Engineer, Data</h3><p>Building Fabric Lakehouses, PySpark notebooks, data pipelines, Power BI models, and tuned SQL systems.</p></div>
            </Reveal>
            <Reveal className="job">
              <div><span>2021 - 2022</span><strong>New Vision Software and Consultancy</strong></div>
              <div><h3>Software Engineer Intern</h3><p>Developed secure Azure ETL workflows with ADF, Databricks, Azure SQL, Key Vault, Logic Apps, and automated monitoring.</p></div>
            </Reveal>
          </div>
        </section>

        <section className="skills shell" id="about">
          <Reveal className="skills-lead">
            <h2>Focused on the full data path.</h2>
            <p>From ingestion and transformation to modeling, reporting, monitoring, and performance.</p>
          </Reveal>
          <div className="skill-columns">
            {Object.entries(skills).map(([group, items], index) => (
              <Reveal className="skill-group" key={group}>
                <span>{group}</span>
                <div>{items.map((item) => <p key={item}>{item}</p>)}</div>
                {index === 2 && <Certificate className="skill-icon" size={46} weight="thin" />}
              </Reveal>
            ))}
          </div>
        </section>

        <section className="education shell">
          <Reveal>
            <h2>Foundation</h2>
            <div className="education-grid">
              <div><span>Education</span><h3>B.Tech, Computer Science & Engineering</h3><p>Sushila Devi Bansal College of Technology, 2018 - 2022<br />CGPA 8.32, First Division with Honours</p></div>
              <div><span>Certification</span><h3>Microsoft Azure Data Fundamentals</h3><p>DP-900 certification</p></div>
            </div>
          </Reveal>
        </section>

        <section className="contact shell" id="contact">
          <Reveal>
            <p className="contact-label">Available for data engineering opportunities</p>
            <h2>Let’s build reliable data infrastructure.</h2>
            <a className="email" href="mailto:priyagupta5011@gmail.com">
              priyagupta5011@gmail.com <ArrowUpRight size={30} />
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="footer shell">
        <p>Priya Gupta, Azure Data Engineer</p>
        <div>
          <a href="mailto:priyagupta5011@gmail.com" aria-label="Email"><EnvelopeSimple size={20} /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn"><LinkedinLogo size={20} /></a>
          <a href="https://github.com" aria-label="GitHub"><GithubLogo size={20} /></a>
        </div>
        <Motion.span style={{ width: progress }} />
      </footer>
    </div>
  )
}

export default App
