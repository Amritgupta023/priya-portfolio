import { List, X } from '@phosphor-icons/react'
import { useMobileMenu } from '../../../hooks/useMobileMenu'
import { contactLinks } from '../../../services/contact'
import { classNames } from '../../../utils/classNames'
import './Header.scss'
export function Header() {
  const menu = useMobileMenu()
  return <header className="nav"><a className="wordmark" href="#top" aria-label="Priya Gupta home">PG</a><nav id="mobile-navigation" className={classNames('nav-links', menu.isOpen && 'open')} aria-label="Main navigation"><a href="#work" onClick={menu.close}>Projects</a><a href="#experience" onClick={menu.close}>Experience</a><a href="#about" onClick={menu.close}>About</a><a className="contact-nav" href={contactLinks.email}>Contact</a></nav><button className="menu" onClick={menu.toggle} aria-label={menu.isOpen ? 'Close menu' : 'Open menu'} aria-expanded={menu.isOpen} aria-controls="mobile-navigation">{menu.isOpen ? <X size={24} /> : <List size={24} />}</button></header>
}
