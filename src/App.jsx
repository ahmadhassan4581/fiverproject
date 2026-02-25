import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhyBoards from './components/WhyBoards'
import Clients from './components/Clients'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import BoardAssurance from './components/BoardAssurance'
import Resources from './components/Resources'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <WhyBoards />
        <Clients />
        <Services />
        <CaseStudies />
        <BoardAssurance />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
