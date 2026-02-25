import { useState } from 'react';
import { ChevronDown, ChevronUp, Building2, HeartPulse, Zap, Users2, ArrowRight, Quote } from 'lucide-react';

const CaseStudies = () => {
  const [expandedCase, setExpandedCase] = useState(0);

  const cases = [
    {
      id: 0,
      icon: Building2,
      sector: 'Financial Services',
      title: 'Global Investment Bank Credit Scoring AI',
      challenge: 'A tier-1 global investment bank needed to implement EU AI Act compliant governance for credit scoring algorithms deployed across 15 European jurisdictions, each with additional local regulatory requirements.',
      approach: 'We conducted a comprehensive baseline assessment, then designed and implemented a unified governance framework that addressed EU AI Act high-risk system requirements while accommodating local variations. The solution integrated with existing model risk management processes.',
      outcomes: [
        'Achieved full Annex IV documentation for 12 high-risk AI systems',
        'Reduced regulatory inquiry response time from 4 weeks to 48 hours',
        'Established automated human oversight workflows',
        'Created standardized board reporting pack used across all jurisdictions',
      ],
      results: 'Client successfully navigated ECB supervisory review with zero findings. Estimated risk reduction of EUR 18M in potential regulatory penalties and remediation costs.',
      quote: 'Branksa transformed our fragmented approach to AI governance into a unified, defensible framework that satisfies both EU supervisors and our global board.',
    },
    {
      id: 1,
      icon: HeartPulse,
      sector: 'MedTech',
      title: 'AI-Powered Diagnostic Imaging Platform',
      challenge: 'A MedTech company developing AI diagnostic tools faced the complexity of complying with both EU AI Act (high-risk classification) and MDR requirements for their imaging analysis software deployed in hospitals across Europe.',
      approach: 'We created an integrated compliance architecture that addressed both regulatory regimes without duplication. Our team worked directly with notified bodies and competent authorities to ensure the governance framework met all requirements.',
      outcomes: [
        'Dual-compliant technical documentation package',
        'Streamlined clinical evidence integration',
        'Human-in-the-loop protocols for radiologist oversight',
        'Post-market surveillance system aligned with both regimes',
      ],
      results: 'Product achieved CE marking with AI Act compliance integrated, reducing time-to-market by 6 months compared to sequential compliance approaches.',
      quote: 'The integrated approach Branksa designed meant we only had to document our AI systems once, satisfying both medical device and AI Act requirements simultaneously.',
    },
    {
      id: 2,
      icon: Zap,
      sector: 'Critical Infrastructure',
      title: 'Smart Grid AI for National Utility',
      challenge: 'A national energy utility deployed AI for grid optimization and predictive maintenance across critical infrastructure. The solution needed to comply with EU AI Act (high-risk for critical infrastructure), NIS2 cybersecurity requirements, and sector-specific safety standards.',
      approach: 'We developed a converged governance framework that addressed AI Act, NIS2, and operational technology (OT) security requirements in a unified control structure. The approach included specialized consideration for safety-critical AI decision-making.',
      outcomes: [
        'Unified control framework covering AI, cybersecurity, and safety',
        'Emergency response protocols for AI system failures',
        'Supply chain AI governance for third-party components',
        'Regulator engagement strategy for sectoral authorities',
      ],
      results: 'Utility achieved regulatory approval for AI deployment in critical infrastructure, becoming a reference case for the national regulator. Zero safety incidents in 18 months post-deployment.',
      quote: 'Branksa understood that for us, AI governance is not just about compliance—it is about ensuring the lights stay on for millions of people.',
    },
    {
      id: 3,
      icon: Users2,
      sector: 'HR Technology',
      title: 'Global Recruitment Platform AI',
      challenge: 'A global HR tech platform using AI for candidate screening and assessment faced high-risk classification under EU AI Act, with additional complexity from operating across 40+ countries with varying employment and data protection laws.',
      approach: 'We designed a scalable governance framework that provided consistent AI oversight while accommodating local employment law variations. The solution emphasized transparency, bias monitoring, and candidate rights management.',
      outcomes: [
        'Global bias monitoring and mitigation system',
        'Automated candidate notification workflows',
        'Consent and rights management across jurisdictions',
        'Audit trail system for decision explainability',
      ],
      results: 'Platform maintained operations in all target markets post-AI Act implementation. Achieved 99.7% compliance with automated oversight workflows. Client cited as example of responsible AI by EU officials.',
      quote: 'Branksa helped us turn compliance from a potential barrier into a competitive differentiator that our enterprise clients now specifically request.',
    },
  ];

  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            Illustrative Engagements
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Selected Client Engagements
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The following case studies illustrate typical Branksa engagements across sectors and 
            regulatory scenarios. Each engagement is tailored to the specific context, risk profile, 
            and regulatory exposure of the client.
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-2 gap-6">
          {cases.map((caseStudy) => {
            const isExpanded = expandedCase === caseStudy.id;
            const Icon = caseStudy.icon;

            return (
              <div
                key={caseStudy.id}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded ? 'border-blue-300 shadow-lg lg:col-span-2' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setExpandedCase(isExpanded ? null : caseStudy.id)}
                  className="w-full p-6 lg:p-8 text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${isExpanded ? 'bg-blue-100' : 'bg-gray-100'}`}>
                      <Icon className={`w-6 h-6 ${isExpanded ? 'text-blue-700' : 'text-gray-600'}`} />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-2">
                        {caseStudy.sector}
                      </span>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold text-gray-900">{caseStudy.title}</h3>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </div>
                    </div>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 lg:px-8 pb-8 pt-0 border-t border-gray-100">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Challenge & Approach */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Challenge</h4>
                          <p className="text-gray-600">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Approach</h4>
                          <p className="text-gray-600">{caseStudy.approach}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">Key Outcomes</h4>
                          <ul className="space-y-2">
                            {caseStudy.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-emerald-800 mb-1">Results</h4>
                          <p className="text-sm text-emerald-700">{caseStudy.results}</p>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="bg-gray-50 rounded-xl p-6 flex flex-col justify-center">
                        <Quote className="w-8 h-8 text-blue-300 mb-4" />
                        <blockquote className="text-gray-700 italic mb-4">
                          "{caseStudy.quote}"
                        </blockquote>
                        <p className="text-sm text-gray-500">— Client Feedback</p>
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
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white btn-primary rounded-xl shadow-lg shadow-blue-700/25"
          >
            Explore Similar Engagements for Your Sector
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
