import { useState } from 'react';
import { ChevronDown, ChevronUp, Cpu, Building2, HeartPulse, Users2, Zap, TrendingUp, ArrowRight, Globe } from 'lucide-react';

const Clients = () => {
  const [expandedSector, setExpandedSector] = useState(0);

  const sectors = [
    {
      id: 0,
      icon: Cpu,
      title: 'AI Providers',
      summary: 'Companies developing and deploying AI systems',
      details: 'For AI providers, regulatory compliance is a market access requirement. We help AI companies navigate the complex web of export controls, dual-use regulations, and destination market requirements to ensure smooth global deployment.',
      challenges: ['EU AI Act conformity assessments', 'Cross-border data transfer compliance', 'Market access documentation', 'Technical standard harmonization'],
    },
    {
      id: 1,
      icon: Globe,
      title: 'Exporters',
      summary: 'Companies exporting AI systems to global markets',
      details: 'AI exporters face unique challenges in meeting destination market requirements while maintaining compliance in their home jurisdiction. We provide comprehensive export compliance strategies that address both origin and destination regulations.',
      challenges: ['Destination market compliance', 'Export control classifications', 'Dual-use regulations', 'Cross-border documentation'],
    },
    {
      id: 2,
      icon: Building2,
      title: 'Banks & Financial Institutions',
      summary: 'High-risk AI in credit, fraud, trading, and customer service',
      details: 'Financial services AI systems face the highest regulatory scrutiny. From credit scoring algorithms to fraud detection and algorithmic trading, we ensure your AI systems meet both AI Act requirements and sector-specific regulations like MiFID II, GDPR, and ECB guidance.',
      challenges: ['Credit scoring AI compliance', 'Algorithmic trading oversight', 'Fraud detection governance', 'Customer service bot documentation'],
    },
    {
      id: 3,
      icon: HeartPulse,
      title: 'MedTech & Digital Health',
      summary: 'AI/ML medical devices and healthcare systems',
      details: 'Medical AI sits at the intersection of the AI Act and MDR/IVDR. We help MedTech companies develop governance frameworks that satisfy both regulatory regimes, from clinical evaluation to post-market surveillance and human oversight requirements.',
      challenges: ['MDR/IVDR + AI Act alignment', 'Clinical evidence documentation', 'Human-in-the-loop protocols', 'Post-market monitoring'],
    },
    {
      id: 4,
      icon: Users2,
      title: 'HR & Workforce Platforms',
      summary: 'Recruitment, assessment, and workforce management AI',
      details: 'HR AI systems are classified as high-risk under the AI Act, with specific requirements for transparency, bias monitoring, and human oversight. We help HR tech platforms build defensible governance that protects both the company and candidates.',
      challenges: ['Recruitment AI transparency', 'Bias monitoring and mitigation', 'Candidate notification requirements', 'Workforce analytics governance'],
    },
    {
      id: 5,
      icon: Zap,
      title: 'Energy & Critical Infrastructure',
      summary: 'SCADA, grid management, and operational technology AI',
      details: 'Critical infrastructure AI systems face unique cybersecurity and safety requirements alongside AI Act obligations. We integrate NIS2, sector-specific safety standards, and AI governance into unified control frameworks for energy and infrastructure operators.',
      challenges: ['NIS2 + AI Act integration', 'Safety-critical AI governance', 'Operational technology security', 'Emergency response protocols'],
    },
    {
      id: 6,
      icon: TrendingUp,
      title: 'Investors & Corporate Development',
      summary: 'Due diligence and governance for AI investments',
      details: 'Investors need to understand the regulatory risk profile of AI investments. We provide AI due diligence for M&A transactions, investment rounds, and corporate development activities, identifying governance gaps and compliance costs.',
      challenges: ['AI due diligence frameworks', 'Regulatory risk assessment', 'Investment thesis validation', 'Post-acquisition integration'],
    },
  ];

  return (
    <section id="clients" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            Client Base
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Who We Work With
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Branksa advises organizations designing, deploying, or investing in AI systems globally. 
            Our sector-specific expertise ensures that governance frameworks address the unique regulatory 
            and operational challenges of each industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Client Sectors Grid */}
          <div className="space-y-4">
            {sectors.map((sector) => {
              const isExpanded = expandedSector === sector.id;
              const Icon = sector.icon;

              return (
                <div
                  key={sector.id}
                  className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'border-blue-300 shadow-lg' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => setExpandedSector(isExpanded ? null : sector.id)}
                    className="w-full p-5 flex items-start gap-4 text-left"
                  >
                    <div className={`p-3 rounded-lg ${isExpanded ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      <Icon className={`w-6 h-6 ${isExpanded ? 'text-blue-700' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{sector.title}</h3>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <p className="text-gray-600 mt-1 text-sm">{sector.summary}</p>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-5 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 text-sm mb-4">{sector.details}</p>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Key Challenges</p>
                        {sector.challenges.map((challenge, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            {challenge}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Global Map & CTA */}
          <div className="space-y-6">
            {/* Global Coverage Map */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Global Client Coverage</h3>
              </div>
              
              <div className="relative h-64 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden">
                <svg viewBox="0 0 400 250" className="absolute inset-0 w-full h-full">
                  {/* Simplified world map */}
                  <path d="M60,80 Q80,60 100,70 T140,75" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                  <path d="M160,50 Q200,40 240,55 T280,60" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                  <path d="M280,70 Q320,75 350,90 T380,100" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                  
                  {/* North America */}
                  <circle cx="80" cy="80" r="5" className="fill-blue-600 map-pin" />
                  <circle cx="70" cy="90" r="4" className="fill-blue-500 map-pin" style={{ animationDelay: '0.2s' }} />
                  <circle cx="90" cy="85" r="3" className="fill-blue-400 map-pin" style={{ animationDelay: '0.4s' }} />
                  
                  {/* Europe */}
                  <circle cx="190" cy="70" r="6" className="fill-blue-600 map-pin" style={{ animationDelay: '0.6s' }} />
                  <circle cx="200" cy="65" r="5" className="fill-blue-500 map-pin" style={{ animationDelay: '0.8s' }} />
                  <circle cx="185" cy="75" r="4" className="fill-blue-400 map-pin" style={{ animationDelay: '1s' }} />
                  <circle cx="205" cy="70" r="3" className="fill-blue-400 map-pin" style={{ animationDelay: '1.2s' }} />
                  
                  {/* Asia Pacific */}
                  <circle cx="300" cy="100" r="5" className="fill-blue-600 map-pin" style={{ animationDelay: '1.4s' }} />
                  <circle cx="320" cy="90" r="4" className="fill-blue-500 map-pin" style={{ animationDelay: '1.6s' }} />
                  <circle cx="310" cy="110" r="3" className="fill-blue-400 map-pin" style={{ animationDelay: '1.8s' }} />
                  
                  {/* Latin America */}
                  <circle cx="120" cy="140" r="4" className="fill-blue-500 map-pin" style={{ animationDelay: '2s' }} />
                  <circle cx="110" cy="150" r="3" className="fill-blue-400 map-pin" style={{ animationDelay: '2.2s' }} />
                  
                  {/* Middle East / Africa */}
                  <circle cx="230" cy="110" r="4" className="fill-blue-500 map-pin" style={{ animationDelay: '2.4s' }} />
                  
                  {/* Sector icons */}
                  <g transform="translate(75, 70)">
                    <circle r="8" className="fill-white" />
                    <text x="0" y="3" textAnchor="middle" className="fill-blue-700 text-xs">🏦</text>
                  </g>
                  <g transform="translate(185, 58)">
                    <circle r="8" className="fill-white" />
                    <text x="0" y="3" textAnchor="middle" className="fill-blue-700 text-xs">🏥</text>
                  </g>
                  <g transform="translate(295, 88)">
                    <circle r="8" className="fill-white" />
                    <text x="0" y="3" textAnchor="middle" className="fill-blue-700 text-xs">⚡</text>
                  </g>
                </svg>
                
                {/* Legend */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-white/90 text-xs text-gray-700 rounded shadow">Financial Services</span>
                  <span className="px-2 py-1 bg-white/90 text-xs text-gray-700 rounded shadow">Healthcare</span>
                  <span className="px-2 py-1 bg-white/90 text-xs text-gray-700 rounded shadow">Energy</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 text-center">
                <p className="text-3xl font-bold text-blue-700">50+</p>
                <p className="text-sm text-gray-600">Enterprise Clients</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 text-center">
                <p className="text-3xl font-bold text-blue-700">25+</p>
                <p className="text-sm text-gray-600">Jurisdictions</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 text-center">
                <p className="text-3xl font-bold text-blue-700">200+</p>
                <p className="text-sm text-gray-600">AI Systems Governed</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 text-center">
                <p className="text-3xl font-bold text-blue-700">€35M</p>
                <p className="text-sm text-gray-600">Risk Reduced</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-white btn-primary rounded-xl"
            >
              Determine Your Global AI Compliance Scope
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
