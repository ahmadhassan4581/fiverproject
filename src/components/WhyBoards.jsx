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
    <section id="why-boards" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4 badge-shimmer">
            <Building2 className="w-4 h-4" />
            Board Accountability
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Why Boards Choose Branksa
          </h2>
          <p className="text-xl text-blue-700 font-medium mb-6">
            Built for High Risk and Regulated AI Globally
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
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
                  className={`capability-card border rounded-xl overflow-hidden ${
                    isExpanded ? 'border-blue-500 shadow-lg bg-blue-50/30' : 'border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setExpandedCard(isExpanded ? null : cap.id)}
                    className="w-full p-6 flex items-start gap-4 text-left group"
                  >
                    <div className={`capability-icon p-3 rounded-lg ${isExpanded ? 'bg-blue-100' : 'bg-gray-100 group-hover:bg-blue-50'}`}>
                      <Icon className={`w-6 h-6 ${isExpanded ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{cap.title}</h3>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <p className="text-gray-600 mt-1">{cap.summary}</p>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 mb-4">{cap.details}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {cap.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
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
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 sticky top-24">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Global Presence</h3>
              
              {/* Map Visualization */}
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl mb-6 overflow-hidden">
                <svg viewBox="0 0 400 200" className="absolute inset-0 w-full h-full">
                  {/* Simplified world map dots */}
                  <circle cx="190" cy="70" r="8" className="fill-blue-600 map-pin" />
                  <text x="190" y="55" textAnchor="middle" className="fill-gray-700 text-xs font-medium">London</text>
                  
                  <circle cx="200" cy="65" r="6" className="fill-blue-500 map-pin" style={{ animationDelay: '0.5s' }} />
                  <text x="200" y="50" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Brussels</text>
                  
                  <circle cx="80" cy="80" r="8" className="fill-blue-600 map-pin" style={{ animationDelay: '1s' }} />
                  <text x="80" y="65" textAnchor="middle" className="fill-gray-700 text-xs font-medium">New York</text>
                  
                  <circle cx="300" cy="100" r="8" className="fill-blue-600 map-pin" style={{ animationDelay: '1.5s' }} />
                  <text x="300" y="85" textAnchor="middle" className="fill-gray-700 text-xs font-medium">Singapore</text>
                  
                  {/* Connecting lines */}
                  <path d="M80,80 Q135,75 190,70" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
                  <path d="M190,70 Q195,67 200,65" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
                  <path d="M200,65 Q250,82 300,100" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
                </svg>
              </div>

              {/* Office List */}
              <div className="space-y-4">
                {officeLocations.map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">{office.city}</p>
                      <p className="text-sm text-gray-500">{office.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-700 to-blue-600 rounded-lg cta-button ripple"
              >
                Schedule Board Risk Briefing
                <ArrowRight className="w-4 h-4 arrow-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBoards;
