import { Certificate } from '@phosphor-icons/react'
import { Reveal } from '../../components/ui/Reveal/Reveal'
import { SKILLS } from '../../constants/portfolio'
import './Skills.scss'
export function Skills() {
  return <section className="skills shell" id="about"><Reveal className="skills-lead"><h2>Focused on the full data path.</h2><p>From ingestion and transformation to modeling, reporting, monitoring, and performance.</p></Reveal><div className="skill-columns">{Object.entries(SKILLS).map(([group, items], index) => <Reveal className="skill-group" key={group}><span>{group}</span><div>{items.map((item) => <p key={item}>{item}</p>)}</div>{index === 2 && <Certificate className="skill-icon" size={46} weight="thin" />}</Reveal>)}</div></section>
}
