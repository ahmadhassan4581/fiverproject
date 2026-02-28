import { useState } from 'react';
import { ChevronDown, ChevronUp, Building2, Network, FileCheck, Globe2, RefreshCw, ArrowRight, MapPin } from 'lucide-react';

const WhyBoards = () => {
  const [expandedCard, setExpandedCard] = useState(0);

  const capabilities = [
    {
      id: 0,
      icon: Building2,
      title: 'Regulatory Architecture',
      summary: 'Comprehensive regulatory mapping across all major jurisdictions',
      details: 'We translate complex regulatory frameworks including EU AI Act, GDPR, DSA, DMA, NIS2, US state and federal AI regulations, APAC frameworks, and emerging LATAM rules into actionable compliance roadmaps. Our architecture approach ensures your AI governance structure is defensible and audit-ready.',
      highlights: ['EU AI Act Article-by-Article Analysis', 'Cross-Border Compliance Matrix', 'Regulatory Horizon Scanning', 'Technical Standards Alignment'],
    },
    {
      id: 1,
      icon: Network,
      title: 'Embedded AI Governance',
      summary: 'Operational controls integrated into your AI development lifecycle',
      details: 'Rather than bolt-on compliance, we embed governance controls directly into your MLOps and AI development workflows. From design to deployment and monitoring, every stage includes built-in compliance checkpoints that generate the documentation and evidence needed for regulatory scrutiny.',
      highlights: ['MLOps Integration', 'Automated Documentation', 'Continuous Compliance Monitoring', 'DevSecAIOps Architecture'],
    },
    {
      id: 2,
      icon: FileCheck,
      title: 'Supervisory Ready Evidence',
      summary: 'Documentation and evidence packages for regulatory examination',
      details: 'When regulators or auditors come calling, you need evidence that demonstrates systematic compliance. We prepare complete evidence packages including risk assessments, technical documentation, human oversight records, testing protocols, and post-market monitoring data that satisfy supervisory expectations.',
      highlights: ['Annex IV Documentation', 'Conformity Assessment Support', 'Audit Trail Management', 'Regulatory Inquiry Response'],
    },
    {
      id: 3,
      icon: Globe2,
      title: 'Global Coverage and Presence',
      summary: 'Multi-jurisdiction support with local expertise',
      details: 'With offices and partnerships across London, Brussels, New York, and Singapore, we provide truly global coverage with local expertise. Whether you are deploying AI in one jurisdiction or fifty, we ensure consistent governance that respects local regulatory nuances.',
      highlights: ['EU Regulatory Hub (Brussels)', 'UK Financial Services (London)', 'US Multi-State Coverage (New York)', 'APAC Gateway (Singapore)'],
    },
    {
      id: 4,
      icon: RefreshCw,
      title: 'Ongoing Assurance',
      summary: 'Continuous monitoring and governance evolution',
      details: 'AI governance is not a one-time project. Our subscription-based ongoing assurance ensures your governance framework evolves with changing regulations, emerging risks, and new AI capabilities. Regular board reporting keeps leadership informed and prepared.',
      highlights: ['Quarterly Board Reporting', 'Regulatory Update Alerts', 'Annual Governance Reviews', 'Continuous Improvement Programs'],
    },
  ];

  const officeLocations = [
    { city: 'London', role: 'EMEA Headquarters' },
    { city: 'Brussels', role: 'EU Regulatory Hub' },
    { city: 'New York', role: 'Americas Center' },
    { city: 'Singapore', role: 'APAC Gateway' },
  ];

  return (
    <section id="why-boards" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1a1a1a] border border-[#c6a43f]/30 text-[#c6a43f] text-sm font-medium rounded-full mb-4">
            <Building2 className="w-4 h-4" />
            Board Accountability
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Why Boards Choose Branksa
          </h2>
          <p className="text-xl text-[#c6a43f] font-medium mb-6">
            Built for High Risk and Regulated AI Globally
          </p>
          <p className="text-lg text-[#a3a3a3] leading-relaxed">
            Boards and senior executives are accountable for AI systems that materially affect credit, 
            healthcare outcomes, safety critical operations, workforce decisions, and public services. 
            Branksa builds defensible global AI governance so boards can evidence control, withstand 
            regulatory scrutiny, and accelerate compliant AI adoption instead of reacting to 
            enforcement or remediation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Capabilities Cards - Takes 3 columns */}
          <div className="lg:col-span-3 space-y-4">
            {capabilities.map((cap) => {
              const isExpanded = expandedCard === cap.id;
              const Icon = cap.icon;

              return (
                <div
                  key={cap.id}
                  className={`bg-[#1a1a1a] border rounded-xl overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'border-[#c6a43f] shadow-lg shadow-[#c6a43f]/10' : 'border-[#2a2a2a] hover:border-[#c6a43f]/50'
                  }`}
                >
                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : cap.id)}
                    className="w-full p-6 flex items-start gap-4 text-left group"
                  >
                    <div className={`p-3 rounded-lg transition-all ${isExpanded ? 'bg-[#c6a43f]/20' : 'bg-[#2a2a2a] group-hover:bg-[#c6a43f]/10'}`}>
                      <Icon className={`w-6 h-6 ${isExpanded ? 'text-[#c6a43f]' : 'text-[#a3a3a3] group-hover:text-[#c6a43f]'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{cap.title}</h3>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-[#c6a43f]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#737373]" />
                        )}
                      </div>
                      <p className="text-[#a3a3a3] mt-1">{cap.summary}</p>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-[#2a2a2a]">
                      <p className="text-[#a3a3a3] mb-4">{cap.details}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {cap.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-[#a3a3a3]">
                            <div className="w-1.5 h-1.5 bg-[#c6a43f] rounded-full" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Office Locations - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 lg:p-8 sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-6">Global Presence</h3>
              
              {/* Map Visualization */}
              <div className="relative h-48 bg-[#111111] rounded-xl mb-6 overflow-hidden border border-[#2a2a2a]">
                <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full">
                  {/* Simplified world map dots */}
                  <circle cx="190" cy="70" r="8" className="fill-[#c6a43f] map-pin" />
                  <text x="190" y="55" textAnchor="middle" className="fill-[#a3a3a3] text-xs font-medium">London</text>
                  
                  <circle cx="200" cy="65" r="6" className="fill-[#c6a43f] map-pin" style={{ animationDelay: '0.5s' }} />
                  <text x="200" y="50" textAnchor="middle" className="fill-[#a3a3a3] text-xs font-medium">Brussels</text>
                  
                  <circle cx="80" cy="80" r="8" className="fill-[#c6a43f] map-pin" style={{ animationDelay: '1s' }} />
                  <text x="80" y="65" textAnchor="middle" className="fill-[#a3a3a3] text-xs font-medium">New York</text>
                  
                  <circle cx="300" cy="100" r="8" className="fill-[#c6a43f] map-pin" style={{ animationDelay: '1.5s' }} />
                  <text x="300" y="85" textAnchor="middle" className="fill-[#a3a3a3] text-xs font-medium">Singapore</text>
                  
                  {/* Connecting lines */}
                  <path d="M80,80 Q135,75 190,70" fill="none" stroke="#c6a43f" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
                  <path d="M190,70 Q195,67 200,65" fill="none" stroke="#c6a43f" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
                  <path d="M200,65 Q250,82 300,100" fill="none" stroke="#c6a43f" strokeWidth="1" strokeDasharray="4" opacity="0.3" />
                </svg>
              </div>

              {/* Office List */}
              <div className="space-y-4">
                {officeLocations.map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c6a43f] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">{office.city}</p>
                      <p className="text-sm text-[#737373]">{office.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-8 w-full btn-primary flex justify-center"
              >
                Schedule Board Risk Briefing
                <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBoards;
