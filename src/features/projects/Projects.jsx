import { Reveal } from '../../components/ui/Reveal/Reveal'
import { PROJECTS } from '../../constants/portfolio'
import './Projects.scss'
export function Projects() {
  return <section className="projects shell" id="work"><Reveal className="section-intro"><h2>Systems built for real work.</h2><p>Selected projects from cloud data engineering, warehousing, and database performance.</p></Reveal><div className="project-grid">{PROJECTS.map((project, index) => <Reveal className={`project project-${index + 1}`} key={project.title}><figure><img src={project.image} alt="" loading={index === 0 ? 'eager' : 'lazy'} /></figure><div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p><div className="stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div></Reveal>)}</div></section>
}
