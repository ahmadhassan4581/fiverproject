import { Shield, Mail, Globe, Lock, FileText, Clock, User, Server, Eye, Cookie, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      id: 'controller',
      icon: Shield,
      title: '1. Data Controller',
      content: 'Branksa LLC is the data controller for personal data collected through this website.'
    },
    {
      id: 'scope',
      icon: Globe,
      title: '2. Territorial Scope',
      content: 'Where we offer services to individuals or organisations located in the United Kingdom or European Union, processing is conducted in accordance with UK GDPR and EU GDPR.'
    },
    {
      id: 'data',
      icon: FileText,
      title: '3. Categories of Data',
      content: null,
      list: [
        'Name',
        'Corporate email address',
        'Job title',
        'Company name',
        'Telephone number',
        'Information submitted through contact forms',
        'Documents voluntarily uploaded',
        'IP address and technical usage data'
      ],
      note: 'We do not intentionally collect special category data through this website.'
    },
    {
      id: 'purposes',
      icon: Eye,
      title: '4. Purposes of Processing',
      content: null,
      list: [
        'Respond to enquiries',
        'Assess potential engagements',
        'Provide requested materials',
        'Maintain website security',
        'Comply with legal obligations'
      ]
    },
    {
      id: 'legal',
      icon: AlertCircle,
      title: '5. Legal Basis',
      content: null,
      list: [
        'Legitimate interest in responding to business enquiries',
        'Contractual necessity where pre-engagement discussions occur',
        'Consent where required',
        'Compliance with legal obligations'
      ]
    },
    {
      id: 'transfers',
      icon: Server,
      title: '6. International Data Transfers',
      content: 'As a United States entity, data may be processed in the United States or other jurisdictions.',
      subsections: [
        {
          title: 'UK and EEA Data Transfers',
          content: 'Where personal data originates from the UK or EEA, transfers are conducted subject to appropriate safeguards, including:',
          list: [
            'Standard Contractual Clauses',
            'UK International Data Transfer Agreement or Addendum'
          ]
        }
      ]
    },
    {
      id: 'retention',
      icon: Clock,
      title: '7. Data Retention',
      content: null,
      subsections: [
        {
          title: 'Without Formal Engagement',
          content: '',
          list: [
            'Enquiry data is retained for up to 18 months',
            'Marketing consent is retained until withdrawn',
            'Technical logs are retained in accordance with security policy'
          ]
        },
        {
          title: 'With Client Engagement',
          content: 'Where a client engagement is formed, retention periods are defined in the engagement agreement.'
        }
      ]
    },
    {
      id: 'sharing',
      icon: User,
      title: '8. Data Sharing',
      content: 'Personal data may be shared with service providers supporting hosting, IT infrastructure, communications, or analytics, subject to contractual confidentiality and data protection obligations.',
      note: 'We do not sell personal data.'
    },
    {
      id: 'security',
      icon: Lock,
      title: '9. Data Security',
      content: 'We implement appropriate technical and organisational safeguards, including encrypted transmission, access controls, and restricted administrative access.'
    },
    {
      id: 'rights',
      icon: FileText,
      title: '10. Data Subject Rights',
      content: 'Individuals located in the UK or EEA may have rights including:',
      list: [
        'Access',
        'Rectification',
        'Erasure',
        'Restriction',
        'Objection',
        'Data portability'
      ],
      subsections: [
        {
          title: 'Submitting Requests',
          content: 'Requests may be submitted to Contact@branksa.com. We respond within applicable statutory timeframes.',
          note: 'Individuals also have the right to lodge a complaint with their local supervisory authority.'
        }
      ]
    },
    {
      id: 'materials',
      icon: FileText,
      title: '11. Uploaded Client Materials',
      content: 'Documents submitted through the website are treated as business confidential. Formal confidentiality obligations arise only upon execution of a written engagement agreement.'
    },
    {
      id: 'cookies',
      icon: Cookie,
      title: '12. Cookies',
      content: 'This website may use essential and analytics cookies. Where required by applicable law, consent mechanisms are implemented.'
    },
    {
      id: 'changes',
      icon: Clock,
      title: '13. Changes',
      content: 'We may update this policy periodically. The effective date reflects the latest revision.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 badge-shimmer">
            <Shield className="w-5 h-5 text-blue-300" />
            <span className="text-sm font-medium text-blue-100">Legal</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-200">
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Effective Date: 28 February 2026
            </span>
            <span className="hidden sm:block">|</span>
            <a 
              href="mailto:Contact@branksa.com" 
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact@branksa.com
            </a>
          </div>
        </div>
      </section>

      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <a href="/" className="text-gray-500 hover:text-blue-700 transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Privacy Policy</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            This Privacy Policy explains how Branksa LLC collects, uses, and protects your personal data 
            when you use our website and services. We are committed to ensuring your privacy and compliance 
            with applicable data protection laws.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div 
                key={section.id}
                id={section.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden service-card card-3d group"
              >
                {/* Section Header */}
                <div className="flex items-start gap-4 p-6 lg:p-8 border-b border-gray-100">
                  <div className="p-3 bg-blue-100 rounded-xl flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-blue-700 transition-colors group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Section Content */}
                <div className="p-6 lg:p-8 space-y-6">
                  {section.content && (
                    <p className="text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  )}

                  {section.list && (
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.note && (
                    <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-800">{section.note}</p>
                    </div>
                  )}

                  {section.subsections && section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="mt-6 pl-4 border-l-4 border-blue-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {subsection.title}
                      </h3>
                      {subsection.content && (
                        <p className="text-gray-600 mb-3">{subsection.content}</p>
                      )}
                      {subsection.list && (
                        <ul className="space-y-2">
                          {subsection.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {subsection.note && (
                        <p className="text-sm text-gray-500 mt-3 italic">{subsection.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or how we handle your personal data, 
            please contact our data protection team.
          </p>
          <a 
            href="mailto:Contact@branksa.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Contact@branksa.com
          </a>
        </div>

        {/* Back to Top */}
        <div className="mt-12 text-center">
          <button 
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-700 transition-colors"
          >
            <span>Back to top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
