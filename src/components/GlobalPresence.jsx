import { useState } from 'react';
import { MapPin, Building2, Mail, ArrowRight, Globe } from 'lucide-react';

const GlobalPresence = () => {
  const [activeOffice, setActiveOffice] = useState(null);

  const offices = [
    {
      id: 'london',
      city: 'London',
      country: 'UK',
      role: 'EMEA Headquarters',
      address: 'London, United Kingdom',
      email: 'example@gmail.com',
      region: 'Europe',
      coordinates: { cx: 190, cy: 70 },
    },
    {
      id: 'brussels',
      city: 'Brussels',
      country: 'Belgium',
      role: 'EU Regulatory Hub',
      address: 'Brussels, Belgium',
      email: 'example@gmail.com',
      region: 'Europe',
      coordinates: { cx: 200, cy: 65 },
    },
    {
      id: 'newyork',
      city: 'New York',
      country: 'US',
      role: 'Americas Center',
      address: 'New York, United States',
      email: 'example@gmail.com',
      region: 'Americas',
      coordinates: { cx: 80, cy: 80 },
    },
    {
      id: 'singapore',
      city: 'Singapore',
      country: 'APAC',
      role: 'APAC Gateway',
      address: 'Singapore',
      email: 'example@gmail.com',
      region: 'Asia Pacific',
      coordinates: { cx: 300, cy: 100 },
    },
  ];

  return (
    <section id="global-presence" className="py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1a1a1a] border border-[#c6a43f]/30 text-[#c6a43f] text-sm font-medium rounded-full mb-4">
            <Globe className="w-4 h-4" />
            Global Reach
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Global Presence
          </h2>
          <p className="text-lg text-[#a3a3a3] leading-relaxed">
            With offices across major financial and regulatory centers, we provide 
            enterprise AI governance advisory with local expertise and global perspective.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* World Map - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-[#111111] to-[#1a1a1a] rounded-2xl p-8 overflow-hidden border border-[#2a2a2a]">
              <svg viewBox="0 0 400 200" className="w-full h-auto">
                {/* World map background outline */}
                <path 
                  d="M60,80 Q80,60 100,70 T140,75" 
                  fill="none" 
                  stroke="#2a2a2a" 
                  strokeWidth="2" 
                />
                <path 
                  d="M160,50 Q200,40 240,55 T280,60" 
                  fill="none" 
                  stroke="#2a2a2a" 
                  strokeWidth="2" 
                />
                <path 
                  d="M280,70 Q320,75 350,90 T380,100" 
                  fill="none" 
                  stroke="#2a2a2a" 
                  strokeWidth="2" 
                />
                <path 
                  d="M100,130 Q120,140 140,135" 
                  fill="none" 
                  stroke="#2a2a2a" 
                  strokeWidth="2" 
                />
                
                {/* Connection lines between offices */}
                <path 
                  d="M80,80 Q135,72 190,70" 
                  fill="none" 
                  stroke="#c6a43f" 
                  strokeWidth="1" 
                  strokeDasharray="4" 
                  opacity="0.5" 
                />
                <path 
                  d="M190,70 Q195,67 200,65" 
                  fill="none" 
                  stroke="#c6a43f" 
                  strokeWidth="1" 
                  strokeDasharray="4" 
                  opacity="0.5" 
                />
                <path 
                  d="M200,65 Q250,82 300,100" 
                  fill="none" 
                  stroke="#c6a43f" 
                  strokeWidth="1" 
                  strokeDasharray="4" 
                  opacity="0.5" 
                />

                {/* Office markers */}
                {offices.map((office) => (
                  <g
                    key={office.id}
                    className="map-marker"
                    onMouseEnter={() => setActiveOffice(office.id)}
                    onMouseLeave={() => setActiveOffice(null)}
                  >
                    {/* Pulsing circle animation */}
                    <circle
                      cx={office.coordinates.cx}
                      cy={office.coordinates.cy}
                      r={activeOffice === office.id ? 14 : 10}
                      className={`transition-all duration-300 ${
                        activeOffice === office.id 
                          ? 'fill-[#c6a43f] opacity-20' 
                          : 'fill-[#c6a43f] opacity-10'
                      }`}
                    />
                    <circle
                      cx={office.coordinates.cx}
                      cy={office.coordinates.cy}
                      r={activeOffice === office.id ? 7 : 5}
                      className={`transition-all duration-300 ${
                        activeOffice === office.id 
                          ? 'fill-[#c6a43f] stroke-white stroke-2' 
                          : 'fill-[#c6a43f]'
                      }`}
                    />
                    
                    {/* Tooltip - shown on hover */}
                    {activeOffice === office.id && (
                      <g>
                        <rect
                          x={office.coordinates.cx - 60}
                          y={office.coordinates.cy - 50}
                          width="120"
                          height="35"
                          rx="6"
                          className="fill-[#1a1a1a]"
                        />
                        <text
                          x={office.coordinates.cx}
                          y={office.coordinates.cy - 30}
                          textAnchor="middle"
                          className="fill-white text-xs font-medium"
                        >
                          {office.city}, {office.country}
                        </text>
                        <polygon
                          points={`${office.coordinates.cx - 6},${office.coordinates.cy - 15} ${office.coordinates.cx + 6},${office.coordinates.cy - 15} ${office.coordinates.cx},${office.coordinates.cy - 8}`}
                          className="fill-[#1a1a1a]"
                        />
                      </g>
                    )}
                  </g>
                ))}
              </svg>

              {/* Legend */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                {offices.map((office) => (
                  <button
                    key={office.id}
                    onMouseEnter={() => setActiveOffice(office.id)}
                    onMouseLeave={() => setActiveOffice(null)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                      activeOffice === office.id
                        ? 'bg-[#c6a43f] text-[#0a0a0a] shadow-lg'
                        : 'bg-[#1a1a1a] text-[#a3a3a3] border border-[#2a2a2a] hover:border-[#c6a43f]/50'
                    }`}
                  >
                    {office.city}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Office List - Takes 1 column */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Our Offices</h3>
            {offices.map((office) => (
              <div
                key={office.id}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  activeOffice === office.id
                    ? 'border-[#c6a43f] bg-[#1a1a1a] shadow-lg shadow-[#c6a43f]/10'
                    : 'border-[#2a2a2a] bg-[#1a1a1a] hover:border-[#c6a43f]/50'
                }`}
                onMouseEnter={() => setActiveOffice(office.id)}
                onMouseLeave={() => setActiveOffice(null)}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg transition-colors duration-300 ${
                    activeOffice === office.id ? 'bg-[#c6a43f]/20' : 'bg-[#2a2a2a]'
                  }`}>
                    <MapPin className={`w-5 h-5 transition-colors duration-300 ${
                      activeOffice === office.id ? 'text-[#c6a43f]' : 'text-[#a3a3a3]'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white">{office.city}</h4>
                    <p className="text-sm text-[#a3a3a3]">{office.role}</p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-[#737373]">
                      <Building2 className="w-3 h-3" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#737373]">
                      <Mail className="w-3 h-3" />
                      <span>{office.email}</span>
                    </div>
                    <span className="inline-block mt-2 px-2 py-1 bg-[#c6a43f]/10 text-[#c6a43f] text-xs font-medium rounded">
                      {office.region}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              className="w-full mt-4 btn-primary inline-flex items-center justify-center gap-2"
            >
              Contact Our Offices
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
