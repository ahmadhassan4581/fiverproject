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
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Consultation Request Received</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your inquiry. Our team will review your requirements and respond 
              within one business day to schedule your confidential consultation.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
              <ol className="space-y-2 text-gray-600">
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
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Request Confidential Consultation
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Complete the form below to request a confidential board-level consultation. 
            All information is held in strict confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Company Information</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                        errors.companyName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Acme Corporation"
                    />
                    {errors.companyName && (
                      <p className="text-sm text-red-600 mt-1">{errors.companyName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sector <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                        errors.sector ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select sector</option>
                      {sectors.map(sector => (
                        <option key={sector} value={sector}>{sector}</option>
                      ))}
                    </select>
                    {errors.sector && (
                      <p className="text-sm text-red-600 mt-1">{errors.sector}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Revenue Band
                    </label>
                    <select
                      value={formData.revenueBand}
                      onChange={(e) => setFormData({ ...formData, revenueBand: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="">Select revenue band</option>
                      {revenueBands.map(band => (
                        <option key={band} value={band}>{band}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* AI System Types */}
              <div className="bg-gray-50 rounded-xl p-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  AI System Types <span className="text-red-500">*</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {aiSystemTypes.map((type) => (
                    <label
                      key={type.id}
                      className={`flex items-center gap-3 p-3 bg-white border rounded-lg cursor-pointer transition-colors ${
                        formData.aiSystemTypes.includes(type.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.aiSystemTypes.includes(type.id)}
                        onChange={() => handleMultiSelect('aiSystemTypes', type.id)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{type.label}</span>
                    </label>
                  ))}
                </div>
                {errors.aiSystemTypes && (
                  <p className="text-sm text-red-600 mt-2">{errors.aiSystemTypes}</p>
                )}
              </div>

              {/* Market Exposure */}
              <div className="bg-gray-50 rounded-xl p-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Market Exposure <span className="text-red-500">*</span>
                </label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {marketExposure.map((market) => (
                    <label
                      key={market.id}
                      className={`flex items-center gap-3 p-3 bg-white border rounded-lg cursor-pointer transition-colors ${
                        formData.marketExposure.includes(market.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.marketExposure.includes(market.id)}
                        onChange={() => handleMultiSelect('marketExposure', market.id)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{market.label}</span>
                    </label>
                  ))}
                </div>
                {errors.marketExposure && (
                  <p className="text-sm text-red-600 mt-2">{errors.marketExposure}</p>
                )}
              </div>

              {/* Contact Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Contact Details</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                        errors.contactName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Full name"
                    />
                    {errors.contactName && (
                      <p className="text-sm text-red-600 mt-1">{errors.contactName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.contactEmail}
                      onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${
                        errors.contactEmail ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="email@company.com"
                    />
                    {errors.contactEmail && (
                      <p className="text-sm text-red-600 mt-1">{errors.contactEmail}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Consultation Timeframe
                    </label>
                    <select
                      value={formData.preferredTimeframe}
                      onChange={(e) => setFormData({ ...formData, preferredTimeframe: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="">Select timeframe</option>
                      {timeframes.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div className="bg-gray-50 rounded-xl p-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Information (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                  placeholder="Tell us more about your AI governance needs or any specific challenges you're facing..."
                />
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white btn-primary rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Request Consultation
                    </>
                  )}
                </button>
                <p className="text-sm text-gray-500 text-center sm:text-left">
                  <AlertCircle className="w-4 h-4 inline mr-1" />
                  Confidential review; response within one business day
                </p>
              </div>
            </form>
          </div>

          {/* Office Locations */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900">Our Offices</h3>
            
            <div className="space-y-4">
              {offices.map((office) => (
                <div key={office.city} className="bg-gray-50 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-gray-900">{office.city}</h4>
                      <p className="text-sm text-gray-600">{office.address}</p>
                      <p className="text-sm text-gray-500 mt-1">{office.phone}</p>
                      <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                        {office.region}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="bg-blue-50 rounded-xl p-5">
              <h4 className="font-medium text-blue-900 mb-4">Quick Contact</h4>
              <div className="space-y-3">
                <a href="mailto:contact@branksa.com" className="flex items-center gap-2 text-sm text-blue-700 hover:text-blue-800">
                  <Mail className="w-4 h-4" />
                  contact@branksa.com
                </a>
                <div className="flex items-center gap-2 text-sm text-blue-700">
                  <Clock className="w-4 h-4" />
                  Response within 24 hours
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-blue-700 bg-white border-2 border-blue-200 hover:border-blue-300 rounded-xl transition-colors"
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
