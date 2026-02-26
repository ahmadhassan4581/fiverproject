import { useState } from 'react';
import { Download, FileText, BookOpen, Shield, ArrowRight, Lock, Check, Mail, Building2, User, X } from 'lucide-react';

const Resources = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const resources = [
    {
      id: 'readiness',
      icon: FileText,
      title: 'AI Governance Readiness Diagnostic Template',
      description: 'A comprehensive self-assessment template covering all EU AI Act requirements for high-risk systems. Use this to baseline your current governance posture.',
      pages: '24 pages',
      format: 'PDF + Excel',
      requiresEmail: true,
    },
    {
      id: 'briefing',
      icon: BookOpen,
      title: 'Board Briefing 2026 Global AI Governance Obligations',
      description: 'Executive summary of board AI responsibilities, liability risks, and governance expectations under EU AI Act and global regulations.',
      pages: '12 pages',
      format: 'PDF',
      requiresEmail: true,
    },
    {
      id: 'annex-iv',
      icon: Shield,
      title: 'Annex IV Technical Documentation Guide',
      description: 'Step-by-step guide to preparing technical documentation that satisfies Annex IV requirements, with templates and examples.',
      pages: '36 pages',
      format: 'PDF + Templates',
      requiresEmail: true,
    },
    {
      id: 'handbook',
      icon: FileText,
      title: 'AI Governance Handbook for Executives',
      description: 'Comprehensive handbook for implementing enterprise AI governance, from initial scoping to ongoing assurance.',
      pages: '68 pages',
      format: 'PDF',
      requiresEmail: true,
    },
  ];

  const handleDownload = (resource) => {
    if (resource.requiresEmail) {
      setSelectedResource(resource);
      setShowModal(true);
      setIsSubmitted(false);
      setFormData({ fullName: '', email: '', company: '' });
      setFormErrors({});
    } else {
      alert(`Downloading ${resource.title}...`);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) errors.company = 'Company name is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log('Lead captured:', {
      resource: selectedResource?.title,
      ...formData,
      timestamp: new Date().toISOString(),
    });

    setIsSubmitted(true);
    
    setTimeout(() => {
      alert(`Downloading ${selectedResource?.title}...\n\n(Backend integration: Lead captured for CRM)`);
    }, 1500);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedResource(null);
    setIsSubmitted(false);
    setFormErrors({});
  };

  return (
    <section id="resources" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4 badge-shimmer">
            <BookOpen className="w-4 h-4" />
            Thought Leadership
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Resources & Insights
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Access our library of AI governance resources, templates, and guides. These materials 
            reflect Branksa's practical experience implementing enterprise AI governance across 
            sectors and jurisdictions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.id}
                className="resource-card bg-white border border-gray-200 rounded-xl p-6 card-3d group cursor-pointer"
              >
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-blue-700 transition-colors group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{resource.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{resource.pages}</span>
                    <span>•</span>
                    <span>{resource.format}</span>
                  </div>
                  <button
                    onClick={() => handleDownload(resource)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl shadow-lg shadow-blue-700/25 cta-button ripple"
          >
            Access AI Governance Resources
            <ArrowRight className="w-5 h-5 arrow-icon" />
          </a>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                {selectedResource && (
                  <>
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <selectedResource.icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">Download Resource</h3>
                      <p className="text-xs text-gray-500 truncate max-w-[200px]">{selectedResource.title}</p>
                    </div>
                  </>
                )}
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {!isSubmitted ? (
                <>
                  <div className="flex items-center gap-2 mb-4 text-blue-700">
                    <Lock className="w-4 h-4" />
                    <span className="text-sm font-medium">Gated Resource</span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-6">
                    Please complete the form below to access this premium resource. 
                    We'll send you updates on AI governance and regulatory developments.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                            formErrors.fullName ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="John Smith"
                        />
                      </div>
                      {formErrors.fullName && (
                        <p className="text-xs text-red-600 mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                            formErrors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="john.smith@company.com"
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                            formErrors.company ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Acme Corporation"
                        />
                      </div>
                      {formErrors.company && (
                        <p className="text-xs text-red-600 mt-1">{formErrors.company}</p>
                      )}
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-700 to-blue-600 rounded-lg cta-button ripple"
                      >
                        <Download className="w-4 h-4" />
                        Download Resource
                      </button>
                    </div>

                    <p className="text-xs text-gray-500 text-center">
                      By downloading, you agree to receive AI governance updates. 
                      Unsubscribe at any time. We respect your privacy.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-scaleIn">
                    <Check className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 text-sm">
                    Your download of <strong>{selectedResource?.title}</strong> will begin shortly.
                    We've also sent a copy to your email.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-6 px-6 py-2 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resources;
