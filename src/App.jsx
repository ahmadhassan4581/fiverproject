import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

// Page wrapper component with back navigation
function PageWrapper({ children }) {
  return (
    <div className="pt-24 pb-12">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-[#a3a3a3] hover:text-[#c6a43f] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back to Home
        </a>
      </div>
      {children}
    </div>
  );
}

// Individual section pages
function HeroPage() {
  return (
    <PageWrapper>
      <Hero />
    </PageWrapper>
  );
}

function WhyBoardsPage() {
  return (
    <PageWrapper>
      <WhyBoards />
    </PageWrapper>
  );
}

function ClientsPage() {
  return (
    <PageWrapper>
      <Clients />
    </PageWrapper>
  );
}

function ServicesPage() {
  return (
    <PageWrapper>
      <Services />
    </PageWrapper>
  );
}

function CaseStudiesPage() {
  return (
    <PageWrapper>
      <CaseStudies />
    </PageWrapper>
  );
}

function BoardAssurancePage() {
  return (
    <PageWrapper>
      <BoardAssurance />
    </PageWrapper>
  );
}

function ResourcesPage() {
  return (
    <PageWrapper>
      <Resources />
    </PageWrapper>
  );
}

function GlobalPresencePage() {
  return (
    <PageWrapper>
      <GlobalPresence />
    </PageWrapper>
  );
}

function ContactPage() {
  return (
    <PageWrapper>
      <Contact />
    </PageWrapper>
  );
}

// Home page with all sections
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
      <div className="min-h-screen bg-[#0a0a0a] text-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<HeroPage />} />
            <Route path="/why-boards" element={<WhyBoardsPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/board-assurance" element={<BoardAssurancePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/global-presence" element={<GlobalPresencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
