import { useState } from 'react';
import { Download, FileText, BookOpen, Shield, ArrowRight, Lock, Check, Mail, Building2 } from 'lucide-react';

const Resources = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    title: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

  const resources = [
    {
      id: 'readiness',
      icon: FileText,
      title: 'AI Governance Readiness Template',
      description: 'A comprehensive self-assessment template covering all EU AI Act requirements for high-risk systems. Use this to baseline your current governance posture.',
      pages: '24 pages',
      format: 'PDF + Excel',
      requiresEmail: true,
    },
    {
      id: 'briefing',
      icon: BookOpen,
      title: 'Board AI Governance Briefing',
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
      title: 'AI Governance Implementation Handbook',
      description: 'Comprehensive handbook for implementing enterprise AI governance, from initial scoping to ongoing assurance.',
      pages: '68 pages',
      format: 'PDF',
      requiresEmail: true,
    },
  ];

  const handleDownload = (resource) => {
    if (resource.requiresEmail) {
      setSelectedResource(resource);
    } else {
      // Direct download logic would go here
      alert(`Downloading ${resource.title}...`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedResource(null);
      setFormData({ email: '', firstName: '', lastName: '', company: '', title: '' });
    }, 3000);
  };

  return (
    <section id="resources" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Resources Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.id}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-lg transition-all duration-300 card-hover"
                >
                  <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                    <Icon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{resource.pages}</span>
                      <span>•</span>
                      <span>{resource.format}</span>
                    </div>
                    <button
                      onClick={() => handleDownload(resource)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:text-blue-800"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Download Form / Gated Content */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-200">
            {!selectedResource ? (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <Lock className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Gated Resources</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Premium resources require business email verification. Select a resource to 
                  access the download form.
                </p>

                <div className="bg-blue-50 rounded-xl p-5">
                  <h4 className="font-medium text-blue-900 mb-3">Why we request your email</h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      Verify business email for resource access
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      Send resource updates and regulatory alerts
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      Offer follow-up consultation if requested
                    </li>
                  </ul>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <p className="text-sm text-gray-600">
                    <strong>Privacy commitment:</strong> We never share your information with 
                    third parties. You can unsubscribe from updates at any time.
                  </p>
                </div>
              </>
            ) : isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your download of <strong>{selectedResource.title}</strong> will begin shortly.
                  We've also sent a copy to your email.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <selectedResource.icon className="w-6 h-6 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Download {selectedResource.title}</h3>
                    <p className="text-sm text-gray-500">{selectedResource.pages} • {selectedResource.format}</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Email
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="john.smith@company.com"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Personal email domains (gmail, yahoo, etc.) may be verified
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="Acme Corporation"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                    <input
                      type="text"
                      required
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Chief Risk Officer"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      required
                      id="consent"
                      className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I agree to receive AI governance updates and resources from Branksa. 
                      I understand I can unsubscribe at any time.
                    </label>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedResource(null)}
                      className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-[2] inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium text-white btn-primary rounded-lg"
                    >
                      <Download className="w-4 h-4" />
                      Download Resource
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white btn-primary rounded-xl shadow-lg shadow-blue-700/25"
          >
            Access AI Governance Resources
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;
