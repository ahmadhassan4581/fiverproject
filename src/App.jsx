import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhyBoards from './components/WhyBoards'
import Clients from './components/Clients'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import BoardAssurance from './components/BoardAssurance'
import Resources from './components/Resources'
import GlobalPresence from './components/GlobalPresence'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'

function Home() {
  return (
    <>
      <Hero />
      <WhyBoards />
      <Clients />
      <Services />
      <CaseStudies />
      <BoardAssurance />
      <Resources />
      <GlobalPresence />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
