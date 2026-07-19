import { useScroll } from 'motion/react'
import { Footer } from './components/layout/Footer/Footer'
import { Header } from './components/layout/Header/Header'
import { ScrollProgress } from './components/ui/ScrollProgress/ScrollProgress'
import { Contact } from './features/contact/Contact'
import { Education } from './features/education/Education'
import { Experience } from './features/experience/Experience'
import { Hero } from './features/hero/Hero'
import { Projects } from './features/projects/Projects'
import { Skills } from './features/skills/Skills'
import './App.scss'
function App() {
  const { scrollYProgress } = useScroll()
  return <div className="page"><ScrollProgress progress={scrollYProgress} /><Header /><main id="top"><Hero /><Projects /><Experience /><Skills /><Education /><Contact /></main><Footer scrollProgress={scrollYProgress} /></div>
}
export default App
