import { Reveal } from '../../components/ui/Reveal/Reveal'
import { EXPERIENCE } from '../../constants/portfolio'
import './Experience.scss'
export function Experience() {
  return <section className="experience shell" id="experience"><Reveal className="experience-heading"><h2>Experience</h2></Reveal><div className="timeline">{EXPERIENCE.map((job) => <Reveal className="job" key={job.role}><div><span>{job.dates}</span><strong>{job.company}</strong></div><div><h3>{job.role}</h3><p>{job.description}</p></div></Reveal>)}</div></section>
}
