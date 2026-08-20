import { useEffect } from 'react'
import { Header } from './components/Header'
import { About } from './sections/About'
import { AgentSystem } from './sections/AgentSystem'
import { DevelopmentWorkflow } from './sections/DevelopmentWorkflow'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { LastMachineCaseStudy } from './sections/LastMachineCaseStudy'
import { MoreProjects } from './sections/MoreProjects'
import { ProjectOverview } from './sections/ProjectOverview'
import { Projects } from './sections/Projects'
import { TechStack } from './sections/TechStack'

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    elements.forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return <><Header /><main><Hero /><About /><ProjectOverview /><AgentSystem /><DevelopmentWorkflow /><Projects /><LastMachineCaseStudy /><MoreProjects /><TechStack /></main><Footer /></>
}
