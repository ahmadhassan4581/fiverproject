import { useState } from 'react';
import { ChevronDown, ChevronUp, FileCheck, Shield, Target, Gavel, ArrowRight, Check, AlertCircle } from 'lucide-react';

const BoardAssurance = () => {
  const [expandedSection, setExpandedSection] = useState(0);

  const assuranceAreas = [
    {
      id: 0,
      icon: FileCheck,
      title: 'Supervisory-Ready Evidence',
      subtitle: 'Documentation and evidence that satisfies regulatory examination',
      summary: 'Board members face personal liability under the EU AI Act for governance failures. Our supervisory-ready evidence approach ensures that when regulators or auditors examine your AI governance, they find systematic, documented compliance.',
      details: [
        {
          heading: 'Technical Documentation Package',
          content: 'Complete Annex IV technical documentation including system specifications, training data descriptions, performance metrics, risk management measures, and human oversight protocols.',
        },
        {
          heading: 'Risk Management Evidence',
          content: 'Documented risk assessment processes, residual risk acceptance decisions, and continuous risk monitoring evidence that demonstrates systematic risk management.',
        },
        {
          heading: 'Human Oversight Records',
          content: 'Audit trails of human oversight decisions, override actions, and escalation protocols that prove meaningful human control over high-risk AI systems.',
        },
        {
          heading: 'Post-Market Monitoring',
          content: 'Systematic evidence of post-deployment monitoring, incident tracking, and continuous performance evaluation that demonstrates ongoing compliance.',
        },
      ],
    },
    {
      id: 1,
      icon: Shield,
      title: 'Embedded Compliance Architecture',
      subtitle: 'Governance controls integrated into AI development and operations',
      summary: 'Compliance that is bolted on after AI development is both expensive and fragile. We embed governance controls directly into your AI systems and processes, making compliance automatic and auditable.',
      details: [
        {
          heading: 'MLOps Integration',
          content: 'Governance checkpoints integrated into machine learning operations pipelines, ensuring every model version is evaluated for compliance before deployment.',
        },
        {
          heading: 'Automated Documentation',
          content: 'Technical systems that automatically generate compliance documentation from development artifacts, ensuring accuracy and completeness.',
        },
        {
          heading: 'Real-Time Monitoring',
          content: 'Continuous monitoring of AI system behavior against compliance parameters, with automated alerting when thresholds are approached or exceeded.',
        },
        {
          heading: 'Audit Trail Automation',
          content: 'Immutable audit trails that automatically capture governance-relevant events, decisions, and actions across the AI lifecycle.',
        },
      ],
    },
    {
      id: 2,
      icon: Target,
      title: 'Board-Approved Risk Appetite',
      subtitle: 'Clear risk appetite frameworks and decision authority',
      summary: 'Boards need clear frameworks for AI risk appetite that translate governance principles into operational decisions. We help boards establish and maintain risk appetite frameworks that guide AI governance throughout the organization.',
      details: [
        {
          heading: 'Risk Appetite Statement',
          content: 'Board-approved risk appetite statements that clearly define acceptable risk levels for AI systems across categories: performance, bias, security, and regulatory.',
        },
        {
          heading: 'Decision Authority Matrix',
          content: 'Clear RACI structures that define who can make AI governance decisions at each level, from operational overrides to model deployment approvals.',
        },
        {
          heading: 'Escalation Protocols',
          content: 'Defined escalation paths for AI governance issues, ensuring that material risks and incidents reach board level when appropriate.',
        },
        {
          heading: 'Regular Attestation',
          content: 'Board attestation processes that provide formal confirmation of AI governance effectiveness at regular intervals.',
        },
      ],
    },
    {
      id: 3,
      icon: Gavel,
      title: 'Enforcement Response Playbooks',
      subtitle: 'Prepared and tested response to regulatory action',
      summary: 'Even well-governed organizations may face regulatory inquiries or enforcement actions. Our enforcement playbooks ensure you respond effectively, protecting both the organization and individual board members.',
      details: [
        {
          heading: 'Inquiry Response Protocols',
          content: 'Pre-defined response procedures for different types of regulatory inquiries, with clear roles, timelines, and quality standards.',
        },
        {
          heading: 'Evidence Retrieval Systems',
          content: 'Systems and procedures for rapid retrieval of compliance evidence to meet regulatory deadlines.',
        },
        {
          heading: 'Legal Coordination',
          content: 'Integration between AI governance teams and legal counsel to ensure coherent, defensible responses to regulatory action.',
        },
        {
          heading: 'Remediation Planning',
          content: 'Structured approaches to remediation when gaps are identified, demonstrating good faith and systematic improvement.',
        },
      ],
    },
  ];

  const boardResponsibilities = [
    'Approve AI governance framework and risk appetite',
    'Ensure adequate resources for AI governance implementation',
    'Review regular AI governance reports and metrics',
    'Escalate material AI risks and incidents',
    'Attest to AI governance effectiveness annually',
  ];

  return (
    <section id="board-assurance" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4 badge-shimmer">
            <AlertCircle className="w-4 h-4" />
            Board Protection
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Board Level Assurance
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Under the EU AI Act and emerging global regulations, board members face direct accountability 
            for AI governance failures. Branksa provides the assurance infrastructure that enables boards 
            to discharge their duties with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Assurance Areas */}
          <div className="lg:col-span-2 space-y-4">
            {assuranceAreas.map((area) => {
              const isExpanded = expandedSection === area.id;
              const Icon = area.icon;

              return (
                <div
                  key={area.id}
                  className={`service-card border rounded-xl overflow-hidden ${
                    isExpanded ? 'border-blue-300 shadow-lg' : 'border-gray-200'
                  }`}
                >
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : area.id)}
                    className="w-full p-6 flex items-start gap-4 text-left group"
                  >
                    <div className={`p-3 rounded-lg transition-all duration-300 ${isExpanded ? 'bg-blue-100 scale-110' : 'bg-gray-100 group-hover:bg-blue-50 group-hover:scale-105'}`}>
                      <Icon className={`w-6 h-6 transition-colors ${isExpanded ? 'text-blue-700' : 'text-gray-600 group-hover:text-blue-600'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{area.title}</h3>
                          <p className="text-sm text-gray-500">{area.subtitle}</p>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </div>
                      {!isExpanded && (
                        <p className="text-gray-600 mt-2 text-sm">{area.summary}</p>
                      )}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 mb-6">{area.summary}</p>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        {area.details.map((detail, idx) => (
                          <div key={idx} className="bg-gray-50 rounded-lg p-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">{detail.heading}</h4>
                            <p className="text-sm text-gray-600">{detail.content}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Board Responsibilities */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Board AI Responsibilities</h3>
              </div>
              <ul className="space-y-3">
                {boardResponsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            {/* Liability Alert */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="font-semibold text-red-900 mb-2">Regulatory Liability Alert</h3>
              <p className="text-sm text-red-700 mb-4">
                Under EU AI Act Article 71, board members can face personal liability for AI governance 
                failures resulting in significant harm or non-compliance.
              </p>
              <p className="text-sm text-red-700">
                Penalties can reach up to <strong>EUR 35 million or 7% of global turnover</strong> for 
                systemic violations.
              </p>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl cta-button ripple"
            >
              Secure Board Level Compliance
              <ArrowRight className="w-5 h-5 arrow-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardAssurance;
