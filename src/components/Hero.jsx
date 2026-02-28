import { useState } from 'react';
import { ArrowRight, Download, Globe, CheckCircle, AlertTriangle, Activity, FileText, Users, TestTube, BarChart3, Shield } from 'lucide-react';

const Hero = () => {
  const [activeRegion, setActiveRegion] = useState('EU');

  const riskClasses = [
    { label: 'High Risk', count: 12, color: 'bg-red-500', systems: ['Credit Scoring', 'Recruitment AI', 'Medical Diagnosis'] },
    { label: 'Systemic', count: 3, color: 'bg-amber-500', systems: ['Generative AI', 'Critical Infrastructure'] },
    { label: 'Limited', count: 8, color: 'bg-emerald-500', systems: ['Chatbots', 'Recommendation'] },
  ];

  const statusTiles = [
    { icon: FileText, label: 'Annex IV Doc', status: 'Complete', progress: 94 },
    { icon: Users, label: 'Human Oversight', status: 'In Progress', progress: 78 },
    { icon: TestTube, label: 'Testing', status: 'On Track', progress: 85 },
    { icon: Shield, label: 'Post-Market', status: 'Active', progress: 92 },
    { icon: BarChart3, label: 'Board Reporting', status: 'Ready', progress: 100 },
  ];

  const jurisdictions = {
    EU: { label: 'European Union', status: 'AI Act Compliant', color: 'bg-[#c6a43f]' },
    UK: { label: 'United Kingdom', status: 'UK AI Framework', color: 'bg-[#a88a2f]' },
    US: { label: 'United States', status: 'State + Federal', color: 'bg-[#d4b75a]' },
    APAC: { label: 'Asia Pacific', status: 'Multi-Jurisdiction', color: 'bg-[#c6a43f]' },
    LATAM: { label: 'Latin America', status: 'Emerging', color: 'bg-[#8b7355]' },
  };

  return (
    <section id="hero" className="relative min-h-screen bg-[#0a0a0a] pt-20 lg:pt-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a]" />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c6a43f' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#c6a43f]/30 rounded-full">
              <Shield className="w-4 h-4 text-[#c6a43f]" />
              <span className="text-sm font-medium text-[#c6a43f] uppercase tracking-wider">Enterprise AI Governance</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Enterprise AI Governance for{' '}
              <span className="text-[#c6a43f]">
                High Risk Systems
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-[#a3a3a3] leading-relaxed">
              Branksa designs and embeds defensible AI governance for high risk and sensitive AI systems, 
              translating EU AI Act, GDPR, DSA, DMA, NIS2, US AI regulations, APAC, LATAM, and emerging 
              jurisdiction rules into operational controls, technical documentation, and board ready oversight.
            </p>

            {/* Supporting Line */}
            <p className="text-base text-[#737373]">
              For financial services, MedTech, critical infrastructure, energy, and HR technology 
              leaders who must prove AI control and regulatory compliance across all markets.
            </p>

            {/* ROI Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg">
              <CheckCircle className="w-6 h-6 text-[#c6a43f]" />
              <div>
                <p className="text-sm font-medium text-white">Proven ROI</p>
                <p className="text-sm text-[#a3a3a3]">
                  Reduce regulatory fines and remediation costs by up to <strong className="text-[#c6a43f]">EUR 35M</strong> per high risk deployment
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary"
              >
                Request Board Level Consultation
                <ArrowRight className="w-5 h-5 inline-block ml-2" />
              </a>
              <button className="btn-secondary">
                <Download className="w-5 h-5 inline-block mr-2" />
                Download Diagnostic
              </button>
            </div>
          </div>

          {/* Right Content - Dashboard Visual */}
          <div className="relative">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 space-y-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2a2a2a]">
                <div>
                  <h3 className="text-lg font-semibold text-white">AI Governance Dashboard</h3>
                  <p className="text-sm text-[#737373]">Real-time compliance monitoring</p>
                </div>
                <div className="flex items-center gap-2 text-[#c6a43f]">
                  <Activity className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider">Supervisory Ready</span>
                </div>
              </div>

              {/* Risk Classes */}
              <div className="grid grid-cols-3 gap-3">
                {riskClasses.map((risk) => (
                  <div key={risk.label} className="p-3 bg-[#111111] rounded-lg border border-[#2a2a2a] hover:border-[#c6a43f]/50 transition-all cursor-pointer group">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full ${risk.color}`} />
                      <span className="text-xs font-medium text-[#a3a3a3] group-hover:text-white transition-colors">{risk.label}</span>
                    </div>
                    <p className="text-2xl font-bold text-white">{risk.count}</p>
                    <p className="text-xs text-[#737373]">Systems</p>
                  </div>
                ))}
              </div>

              {/* Status Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {statusTiles.map((tile) => (
                  <div key={tile.label} className="p-3 bg-[#111111] rounded-lg border border-[#2a2a2a] hover:border-[#c6a43f]/50 transition-all cursor-pointer group">
                    <tile.icon className="w-5 h-5 text-[#c6a43f] mb-2" />
                    <p className="text-xs font-medium text-white">{tile.label}</p>
                    <div className="mt-2 h-1.5 bg-[#2a2a2a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c6a43f] rounded-full transition-all duration-1000"
                        style={{ width: `${tile.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-[#737373] mt-1">{tile.status}</p>
                  </div>
                ))}
              </div>

              {/* Global Jurisdiction Map */}
              <div className="p-4 bg-[#111111] rounded-lg border border-[#2a2a2a]">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-[#c6a43f]" />
                  <h4 className="text-sm font-semibold text-white">Global Jurisdiction Coverage</h4>
                </div>

                {/* Region Tabs */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(jurisdictions).map(([code, data]) => (
                    <button
                      key={code}
                      onClick={() => setActiveRegion(code)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all uppercase tracking-wider ${
                        activeRegion === code
                          ? 'bg-[#c6a43f] text-[#0a0a0a]'
                          : 'bg-[#1a1a1a] text-[#a3a3a3] border border-[#2a2a2a] hover:border-[#c6a43f]/50 hover:text-white'
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>

                {/* Active Region Info */}
                <div className={`p-4 rounded-lg text-[#0a0a0a] ${jurisdictions[activeRegion].color}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium opacity-80">{jurisdictions[activeRegion].label}</p>
                      <p className="text-lg font-semibold">{jurisdictions[activeRegion].status}</p>
                    </div>
                    <CheckCircle className="w-8 h-8 opacity-80" />
                  </div>
                </div>

                {/* Map Visualization */}
                <div className="mt-4 relative h-32 bg-[#0a0a0a] rounded-lg overflow-hidden border border-[#2a2a2a]">
                  {/* Simplified world map representation */}
                  <svg viewBox="0 0 400 150" className="absolute inset-0 w-full h-full">
                    {/* EU */}
                    <circle cx="200" cy="50" r="6" className={`map-pin ${activeRegion === 'EU' ? 'fill-[#c6a43f]' : 'fill-[#333333]'}`} />
                    {/* UK */}
                    <circle cx="190" cy="45" r="4" className={`map-pin ${activeRegion === 'UK' ? 'fill-[#a88a2f]' : 'fill-[#333333]'}`} />
                    {/* US */}
                    <circle cx="80" cy="55" r="6" className={`map-pin ${activeRegion === 'US' ? 'fill-[#d4b75a]' : 'fill-[#333333]'}`} />
                    {/* APAC */}
                    <circle cx="300" cy="70" r="6" className={`map-pin ${activeRegion === 'APAC' ? 'fill-[#c6a43f]' : 'fill-[#333333]'}`} />
                    {/* LATAM */}
                    <circle cx="120" cy="100" r="5" className={`map-pin ${activeRegion === 'LATAM' ? 'fill-[#8b7355]' : 'fill-[#333333]'}`} />
                    {/* Singapore */}
                    <circle cx="290" cy="80" r="3" className="fill-[#333333]" />
                    {/* Lines connecting regions */}
                    <path d="M80,55 Q140,35 190,45" fill="none" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="4" />
                    <path d="M190,45 Q195,47 200,50" fill="none" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="4" />
                    <path d="M200,50 Q250,60 300,70" fill="none" stroke="#2a2a2a" strokeWidth="1" strokeDasharray="4" />
                  </svg>
                </div>
              </div>

              {/* Alert Banner */}
              <div className="flex items-center gap-3 p-3 bg-[#1a1a1a] border border-[#c6a43f]/30 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-[#c6a43f] flex-shrink-0" />
                <p className="text-sm text-[#a3a3a3]">
                  <strong className="text-white">3 High Risk Systems</strong> require Annex IV documentation review within 14 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
