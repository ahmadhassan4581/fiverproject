import { Shield, Check, Globe, Lock, FileCheck, RefreshCw, Award } from 'lucide-react';

const Footer = () => {
  const trustSignals = [
    {
      icon: Award,
      title: 'ISO IEC 42001 Aligned',
      description: 'AI management system standards',
    },
    {
      icon: Globe,
      title: 'Global Compliance Coverage',
      description: 'EU, UK, US, APAC, LATAM',
    },
    {
      icon: FileCheck,
      title: 'Enterprise-Grade Methodology',
      description: 'Proven governance frameworks',
    },
    {
      icon: Shield,
      title: 'Defensible Architecture',
      description: 'Audit-ready compliance structures',
    },
    {
      icon: Lock,
      title: 'Confidential Data Handling',
      description: 'Strict confidentiality protocols',
    },
    {
      icon: RefreshCw,
      title: 'Subscription-Based Assurance',
      description: 'Ongoing governance support',
    },
  ];

  const footerLinks = {
    services: [
      { label: 'Baseline Assessment', href: '#services' },
      { label: 'Governance Architecture', href: '#services' },
      { label: 'Ongoing Assurance', href: '#services' },
      { label: 'Incident Response', href: '#services' },
      { label: 'Executive Training', href: '#services' },
    ],
    sectors: [
      { label: 'Financial Services', href: '#clients' },
      { label: 'MedTech & Health', href: '#clients' },
      { label: 'Critical Infrastructure', href: '#clients' },
      { label: 'HR Technology', href: '#clients' },
      { label: 'AI Providers', href: '#clients' },
    ],
    resources: [
      { label: 'AI Governance Template', href: '#resources' },
      { label: 'Board Briefing', href: '#resources' },
      { label: 'Annex IV Guide', href: '#resources' },
      { label: 'Regulatory Updates', href: '#resources' },
    ],
    company: [
      { label: 'About Branksa', href: '#why-boards' },
      { label: 'Our Approach', href: '#why-boards' },
      { label: 'Global Offices', href: '#contact' },
      { label: 'Contact Us', href: '#contact' },
    ],
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      {/* Trust Signals */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div key={signal.title} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-medium text-white mb-1">{signal.title}</h4>
                  <p className="text-xs text-gray-400">{signal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">Branksa</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Enterprise AI Governance and Regulatory Advisory. Defensible governance for 
              high-risk AI systems across global jurisdictions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Check className="w-4 h-4 text-emerald-500" />
                EU AI Act Expertise
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Check className="w-4 h-4 text-emerald-500" />
                Board-Level Accountability
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Check className="w-4 h-4 text-emerald-500" />
                Supervisory-Ready Evidence
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Sectors</h4>
            <ul className="space-y-2">
              {footerLinks.sectors.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SEO Keywords */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 mb-4">
            <strong>Keywords:</strong> EU AI Act compliance, AI governance consulting, 
            high-risk AI systems, AI Act Article 6, Annex IV documentation, AI conformity assessment, 
            AI risk management, GDPR AI compliance, algorithmic accountability, AI board governance, 
            AI regulatory advisory, machine learning governance, AI model risk management, 
            explainable AI compliance, AI audit, AI supervision, AI enforcement, 
            AI technical standards, AI human oversight, AI post-market monitoring
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Branksa Enterprise AI Governance and Regulatory Advisory. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
