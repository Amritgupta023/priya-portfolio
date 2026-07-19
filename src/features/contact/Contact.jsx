import { ArrowUpRight } from '@phosphor-icons/react'
import { Reveal } from '../../components/ui/Reveal/Reveal'
import { contactLinks } from '../../services/contact'
import './Contact.scss'
export function Contact() {
  return <section className="contact shell" id="contact"><Reveal><p className="contact-label">Available for data engineering opportunities</p><h2>Let’s build reliable data infrastructure.</h2><a className="email" href={contactLinks.email}>priyagupta5011@gmail.com <ArrowUpRight size={30} /></a></Reveal></section>
}
