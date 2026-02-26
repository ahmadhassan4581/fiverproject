import { useState } from 'react';
import { ChevronDown, ChevronUp, ClipboardCheck, Building, RefreshCw, AlertTriangle, ShoppingCart, GraduationCap, TrendingUp, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState(0);

  const services = [
    {
      id: 0,
      icon: ClipboardCheck,
      title: 'Regulatory and Compliance Baseline Assessment',
      phase: 'Phase 1: Discovery',
      summary: 'Comprehensive assessment of current AI governance posture against applicable regulations',
      details: 'We conduct a thorough evaluation of your AI systems, governance processes, and documentation against the requirements of EU AI Act, GDPR, sector-specific regulations, and other applicable frameworks. The baseline assessment identifies compliance gaps, quantifies risk exposure, and provides a prioritized remediation roadmap.',
      deliverables: ['AI Systems Inventory and Risk Classification', 'Regulatory Applicability Matrix', 'Gap Analysis Report', 'Remediation Roadmap', 'Executive Summary for Board'],
      timeline: '4-6 weeks',
    },
    {
      id: 1,
      icon: Building,
      title: 'AI Governance Architecture Programme',
      phase: 'Phase 2: Design',
      summary: 'Build the organizational structure, processes, and controls for sustainable AI governance',
      details: 'We design and implement a comprehensive AI governance framework tailored to your organization. This includes governance structures, policy frameworks, technical controls, documentation templates, and integration with existing risk management and compliance processes.',
      deliverables: ['AI Governance Charter and RACI', 'Policy and Procedure Framework', 'Technical Control Specifications', 'Documentation Templates', 'Integration Architecture'],
      timeline: '8-12 weeks',
    },
    {
      id: 2,
      icon: RefreshCw,
      title: 'Ongoing Governance & Audit Subscription',
      phase: 'Phase 3: Sustain',
      summary: 'Continuous governance support with quarterly reviews and annual audits',
      details: 'AI governance requires continuous evolution. Our subscription service provides ongoing support including quarterly governance reviews, annual comprehensive audits, regulatory update alerts, and continuous improvement recommendations. Board reporting ensures leadership stays informed.',
      deliverables: ['Quarterly Governance Reviews', 'Annual Compliance Audits', 'Regulatory Horizon Updates', 'Board Reporting Packs', 'Continuous Improvement Plans'],
      timeline: 'Ongoing',
    },
    {
      id: 3,
      icon: AlertTriangle,
      title: 'Enforcement and Incident Response',
      phase: 'Crisis Support',
      summary: 'Rapid response to regulatory inquiries, incidents, and enforcement actions',
      details: 'When incidents occur or regulators come calling, rapid response is essential. We provide immediate support for regulatory inquiries, incident investigation, root cause analysis, and remediation planning. Our team has direct experience managing supervisory interactions.',
      deliverables: ['24/7 Incident Response', 'Regulatory Inquiry Support', 'Investigation and Root Cause Analysis', 'Remediation Planning', 'Supervisory Engagement Management'],
      timeline: 'On-demand',
    },
    {
      id: 4,
      icon: ShoppingCart,
      title: 'Public Procurement & Market Access',
      phase: 'Market Entry',
      summary: 'Navigate public sector procurement and achieve market access compliance',
      details: 'Public sector AI procurement increasingly requires evidence of responsible AI practices. We help organizations meet procurement requirements, achieve necessary certifications, and demonstrate compliance to public sector buyers across multiple jurisdictions.',
      deliverables: ['Procurement Readiness Assessment', 'Compliance Certification Support', 'Buyer Documentation Packs', 'Framework Agreement Alignment', 'Market Access Strategy'],
      timeline: '6-10 weeks',
    },
    {
      id: 5,
      icon: GraduationCap,
      title: 'Executive Training & Certification',
      phase: 'Capability Building',
      summary: 'Board and executive education on AI governance, risk, and compliance',
      details: 'Board members and executives need to understand AI governance fundamentals to discharge their duties effectively. Our training programs range from board briefings to deep-dive technical sessions, all tailored to your organization\'s specific context and AI portfolio.',
      deliverables: ['Board Briefing Sessions', 'Executive Workshops', 'Technical Team Training', 'Certification Programs', 'Governance Playbooks'],
      timeline: 'Customized',
    },
    {
      id: 6,
      icon: TrendingUp,
      title: 'Transaction & Investment Advisory',
      phase: 'Strategic Advisory',
      summary: 'AI governance due diligence for M&A, investment, and financing transactions',
      details: 'AI governance is a critical due diligence consideration for transactions involving AI companies or significant AI deployments. We provide comprehensive AI due diligence services that identify governance gaps, quantify compliance costs, and inform investment decisions.',
      deliverables: ['AI Due Diligence Reports', 'Regulatory Risk Assessment', 'Compliance Cost Estimation', 'Integration Planning', 'Investment Committee Materials'],
      timeline: '2-4 weeks',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4 badge-shimmer">
            <ClipboardCheck className="w-4 h-4" />
            Full Lifecycle Support
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Services Across the AI Governance Lifecycle
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From initial regulatory scoping to ongoing assurance and transaction due diligence, 
            Branksa provides comprehensive support across the entire AI governance lifecycle. Each 
            service is tailored to your organization's specific sector, risk profile, and regulatory exposure.
          </p>
        </div>

        {/* Services Accordion */}
        <div className="space-y-4">
          {services.map((service) => {
            const isExpanded = expandedService === service.id;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`service-card border rounded-xl overflow-hidden ${
                  isExpanded ? 'border-blue-300 shadow-lg' : 'border-gray-200'
                }`}
              >
                <button
                  onClick={() => setExpandedService(isExpanded ? null : service.id)}
                  className="w-full p-6 flex items-start gap-4 text-left group"
                >
                  <div className={`p-3 rounded-lg transition-all duration-300 ${isExpanded ? 'bg-blue-100 scale-110' : 'bg-gray-100 group-hover:bg-blue-50 group-hover:scale-105'}`}>
                    <Icon className={`w-6 h-6 transition-colors ${isExpanded ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                        {service.phase}
                      </span>
                      <span className="text-xs text-gray-400">|</span>
                      <span className="text-xs font-medium text-blue-600">{service.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-gray-600 mt-1">{service.summary}</p>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 mb-6">{service.details}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Deliverables */}
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-3">Key Deliverables</p>
                        <ul className="space-y-2">
                          {service.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Timeline & CTA */}
                      <div className="flex flex-col justify-between">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-sm font-medium text-gray-700">Typical Duration</p>
                          <p className="text-lg font-semibold text-gray-900">{service.timeline}</p>
                          <p className="text-xs text-gray-500 mt-1">Varies based on scope and complexity</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl shadow-lg shadow-blue-700/25 cta-button ripple"
          >
            Engage Branksa for Enterprise AI Governance
            <ArrowRight className="w-5 h-5 arrow-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
