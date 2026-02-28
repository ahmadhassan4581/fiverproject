import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock, Check, AlertCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    sector: '',
    revenueBand: '',
    aiSystemTypes: [],
    marketExposure: [],
    contactName: '',
    contactEmail: '',
    phone: '',
    preferredTimeframe: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Updated sectors per client requirements
  const sectors = [
    'Financial Services',
    'MedTech',
    'Energy',
    'Transport',
    'Critical Infrastructure',
    'HR Technology',
    'Technology/AI Platforms',
    'Government/Public Sector',
    'Other',
  ];

  // Updated revenue bands per client requirements
  const revenueBands = [
    '<50M',
    '50–250M',
    '250M–1B',
    '1–5B',
    '5–20B',
    '20B+ EUR/USD',
  ];

  // Updated AI System Types per client requirements
  const aiSystemTypes = [
    { id: 'credit', label: 'Credit' },
    { id: 'fraud', label: 'Fraud' },
    { id: 'clinical', label: 'Clinical' },
    { id: 'safety', label: 'Safety' },
    { id: 'hr', label: 'HR' },
    { id: 'risk', label: 'Risk' },
    { id: 'autonomous', label: 'Autonomous' },
    { id: 'energy', label: 'Energy' },
    { id: 'cross-domain', label: 'Cross-domain' },
    { id: 'other', label: 'Other' },
  ];

  // Updated Market Exposure per client requirements
  const marketExposure = [
    { id: 'eu', label: 'EU' },
    { id: 'uk', label: 'UK' },
    { id: 'us', label: 'US' },
    { id: 'apac', label: 'APAC' },
    { id: 'latam', label: 'LATAM' },
    { id: 'mea', label: 'MEA' },
    { id: 'emerging', label: 'Emerging' },
  ];

  // Updated timeframes per client requirements
  const timeframes = [
    '3 days',
    '1 week',
    '2 weeks',
    'Flexible',
  ];

  const offices = [
    {
      city: 'London',
      address: 'EMEA Headquarters',
      phone: '+44 20 XXXX XXXX',
      region: 'Europe',
    },
    {
      city: 'Brussels',
      address: 'EU Regulatory Hub',
      phone: '+32 2 XXX XX XX',
      region: 'Europe',
    },
    {
      city: 'New York',
      address: 'Americas Center',
      phone: '+1 212 XXX XXXX',
      region: 'Americas',
    },
    {
      city: 'Singapore',
      address: 'APAC Gateway',
      phone: '+65 XXXX XXXX',
      region: 'Asia Pacific',
    },
  ];

  const handleMultiSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.sector) newErrors.sector = 'Sector is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.contactEmail.trim()) {
      newErrors.contactEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid email';
    }
    if (formData.aiSystemTypes.length === 0) newErrors.aiSystemTypes = 'Select at least one AI system type';
    if (formData.marketExposure.length === 0) newErrors.marketExposure = 'Select at least one market';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#c6a43f]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-[#c6a43f]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Consultation Request Received</h2>
            <p className="text-lg text-[#a3a3a3] mb-8">
              Thank you for your inquiry. Our team will review your requirements and respond 
              within one business day to schedule your confidential consultation.
            </p>
            <div className="bg-[#1a1a1a] rounded-xl p-6 text-left border border-[#2a2a2a]">
              <h3 className="font-semibold text-white mb-2">What happens next?</h3>
              <ol className="space-y-2 text-[#a3a3a3]">
                <li>1. Senior consultant reviews your inquiry</li>
                <li>2. We prepare preliminary scope assessment</li>
                <li>3. Schedule confidential discovery call</li>
                <li>4. Deliver tailored engagement proposal</li>
              </ol>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  companyName: '',
                  sector: '',
                  revenueBand: '',
                  aiSystemTypes: [],
                  marketExposure: [],
                  contactName: '',
                  contactEmail: '',
                  phone: '',
                  preferredTimeframe: '',
                  message: '',
                });
              }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#c6a43f] bg-[#c6a43f]/10 hover:bg-[#c6a43f]/20 border border-[#c6a43f]/30 rounded-lg transition-colors"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1a1a1a] border border-[#c6a43f]/30 text-[#c6a43f] text-sm font-medium rounded-full mb-4">
            <Mail className="w-4 h-4" />
            Contact
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Request Confidential Consultation
          </h2>
          <p className="text-lg text-[#a3a3a3] leading-relaxed">
            Complete the form below to request a confidential board-level consultation. 
            All information is held in strict confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
                <h3 className="font-semibold text-white mb-4">Company Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#a3a3a3] mb-1">
                      Company Name <span className="text-[#c6a43f]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full px-4 py-2 bg-[#111111] border rounded-lg focus:ring-2 focus:ring-[#c6a43f] focus:border-[#c6a43f] outline-none text-white placeholder-[#737373] ${
                        errors.companyName ? 'border-red-500' : 'border-[#2a2a2a]'
                      }`}
                      placeholder="Acme Corporation"
                    />
                    {errors.companyName && (
                      <p className="text-sm text-red-500 mt-1">{errors.companyName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#a3a3a3] mb-1">
                      Sector <span className="text-[#c6a43f]">*</span>
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className={`w-full px-4 py-2 bg-[#111111] border rounded-lg focus:ring-2 focus:ring-[#c6a43f] focus:border-[#c6a43f] outline-none text-white ${
                        errors.sector ? 'border-red-500' : 'border-[#2a2a2a]'
                      }`}
                    >
                      <option value="" className="bg-[#111111]">Select sector</option>
                      {sectors.map(sector => (
                        <option key={sector} value={sector} className="bg-[#111111]">{sector}</option>
                      ))}
                    </select>
                    {errors.sector && (
                      <p className="text-sm text-red-500 mt-1">{errors.sector}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#a3a3a3] mb-1">
                      Revenue Band
                    </label>
                    <select
                      value={formData.revenueBand}
                      onChange={(e) => setFormData({ ...formData, revenueBand: e.target.value })}
                      className="w-full px-4 py-2 bg-[#111111] border border-[#2a2a2a] rounded-lg focus:ring-2 focus:ring-[#c6a43f] focus:border-[#c6a43f] outline-none text-white"
                    >
                      <option value="" className="bg-[#111111]">Select revenue band</option>
                      {revenueBands.map(band => (
                        <option key={band} value={band} className="bg-[#111111]">{band}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* AI System Types */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
                <label className="block text-sm font-medium text-[#a3a3a3] mb-3">
                  AI System Types <span className="text-[#c6a43f]">*</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {aiSystemTypes.map((type) => (
                    <label
                      key={type.id}
                      className={`flex items-center gap-3 p-3 bg-[#111111] border rounded-lg cursor-pointer transition-colors ${
                        formData.aiSystemTypes.includes(type.id)
                          ? 'border-[#c6a43f] bg-[#c6a43f]/10'
                          : 'border-[#2a2a2a] hover:border-[#c6a43f]/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.aiSystemTypes.includes(type.id)}
                        onChange={() => handleMultiSelect('aiSystemTypes', type.id)}
                        className="w-4 h-4 text-[#c6a43f] border-[#2a2a2a] rounded focus:ring-[#c6a43f]"
                      />
                      <span className="text-sm text-[#a3a3a3]">{type.label}</span>
                    </label>
                  ))}
                </div>
                {errors.aiSystemTypes && (
                  <p className="text-sm text-red-500 mt-2">{errors.aiSystemTypes}</p>
                )}
              </div>

              {/* Market Exposure */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
                <label className="block text-sm font-medium text-[#a3a3a3] mb-3">
                  Market Exposure <span className="text-[#c6a43f]">*</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {marketExposure.map((market) => (
                    <label
                      key={market.id}
                      className={`flex items-center gap-3 p-3 bg-[#111111] border rounded-lg cursor-pointer transition-colors ${
                        formData.marketExposure.includes(market.id)
                          ? 'border-[#c6a43f] bg-[#c6a43f]/10'
                          : 'border-[#2a2a2a] hover:border-[#c6a43f]/50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.marketExposure.includes(market.id)}
                        onChange={() => handleMultiSelect('marketExposure', market.id)}
                        className="w-4 h-4 text-[#c6a43f] border-[#2a2a2a] rounded focus:ring-[#c6a43f]"
                      />
                      <span className="text-sm text-[#a3a3a3]">{market.label}</span>
                    </label>
                  ))}
                </div>
                {errors.marketExposure && (
                  <p className="text-sm text-red-500 mt-2">{errors.marketExposure}</p>
                )}
              </div>

              {/* Contact Details */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
                <h3 className="font-semibold text-white mb-4">Contact Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#a3a3a3] mb-1">
                      Contact Name <span className="text-[#c6a43f]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className={`w-full px-4 py-2 bg-[#111111] border rounded-lg focus:ring-2 focus:ring-[#c6a43f] focus:border-[#c6a43f] outline-none text-white placeholder-[#737373] ${
                        errors.contactName ? 'border-red-500' : 'border-[#2a2a2a]'
                      }`}
                      placeholder="Full name"
                    />
                    {errors.contactName && (
                      <p className="text-sm text-red-500 mt-1">{errors.contactName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#a3a3a3] mb-1">
                      Email <span className="text-[#c6a43f]">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      className={`w-full px-4 py-2 bg-[#111111] border rounded-lg focus:ring-2 focus:ring-[#c6a43f] focus:border-[#c6a43f] outline-none text-white placeholder-[#737373] ${
                        errors.contactEmail ? 'border-red-500' : 'border-[#2a2a2a]'
                      }`}
                      placeholder="email@company.com"
                    />
                    {errors.contactEmail && (
                      <p className="text-sm text-red-500 mt-1">{errors.contactEmail}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#a3a3a3] mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 bg-[#111111] border border-[#2a2a2a] rounded-lg focus:ring-2 focus:ring-[#c6a43f] focus:border-[#c6a43f] outline-none text-white placeholder-[#737373]"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#a3a3a3] mb-1">
                      Preferred Consultation Timeframe
                    </label>
                    <select
                      value={formData.preferredTimeframe}
                      onChange={(e) => setFormData({ ...formData, preferredTimeframe: e.target.value })}
                      className="w-full px-4 py-2 bg-[#111111] border border-[#2a2a2a] rounded-lg focus:ring-2 focus:ring-[#c6a43f] focus:border-[#c6a43f] outline-none text-white"
                    >
                      <option value="" className="bg-[#111111]">Select timeframe</option>
                      {timeframes.map(time => (
                        <option key={time} value={time} className="bg-[#111111]">{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-[#2a2a2a]">
                <label className="block text-sm font-medium text-[#a3a3a3] mb-1">
                  Additional Information (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-[#111111] border border-[#2a2a2a] rounded-lg focus:ring-2 focus:ring-[#c6a43f] focus:border-[#c6a43f] outline-none resize-none text-white placeholder-[#737373]"
                  placeholder="Tell us more about your AI governance needs or any specific challenges you're facing..."
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-[#0a0a0a] bg-[#c6a43f] hover:bg-[#d4b75a] rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#c6a43f]/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0a0a0a] border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Consultation
                    </>
                  )}
                </button>
                <p className="text-sm text-[#737373] text-center sm:text-left">
                  <AlertCircle className="w-4 h-4 inline mr-1" />
                  Confidential review; response within one business day
                </p>
              </div>
            </form>
          </div>

          {/* Office Locations */}
          <div className="space-y-6">
            <h3 className="font-semibold text-white">Our Offices</h3>
            
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.city} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 cursor-pointer hover:border-[#c6a43f]/50 transition-all">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c6a43f] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white">{office.city}</h4>
                      <p className="text-sm text-[#a3a3a3]">{office.address}</p>
                      <p className="text-sm text-[#737373] mt-1">{office.phone}</p>
                      <span className="inline-block mt-2 px-2 py-1 bg-[#c6a43f]/10 text-[#c6a43f] text-xs font-medium rounded">
                        {office.region}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
              <h4 className="font-medium text-white mb-4">Quick Contact</h4>
              <div className="space-y-3">
                <a href="mailto:contact@branksa.com" className="flex items-center gap-2 text-sm text-[#c6a43f] hover:text-[#d4b75a] transition-colors">
                  <Mail className="w-4 h-4" />
                  contact@branksa.com
                </a>
                <div className="flex items-center gap-2 text-sm text-[#a3a3a3]">
                  <Clock className="w-4 h-4" />
                  Response within 24 hours
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="w-full btn-secondary inline-flex items-center justify-center gap-2"
            >
              Download Corporate Brochure
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
