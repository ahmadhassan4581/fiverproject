import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Why Branksa' },
    { path: '/clients', label: 'Clients' },
    { path: '/services', label: 'Services' },
    { path: '/engagements', label: 'Engagements' },
    { path: '/board-assurance', label: 'Board Assurance' },
    { path: '/resources', label: 'Resources' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#2a2a2a]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            onClick={handleLinkClick}
            className="flex items-center gap-2 flex-shrink-0"
          >
            <Shield className="w-8 h-8 text-[#c6a43f]" />
            <span className="text-xl font-bold text-white whitespace-nowrap">Branksa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className="text-xs font-medium text-[#a3a3a3] hover:text-[#a3a3a3] hover:bg-transparent transition-none uppercase tracking-wider whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:block flex-shrink-0">
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className="btn-primary text-sm py-2.5 px-4"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-[#a3a3a3] hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-[#111111] border-t border-[#2a2a2a] py-4">
            <div className="px-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-sm font-medium text-[#a3a3a3] hover:text-[#c6a43f] hover:bg-[#1a1a1a] rounded-lg transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="block mt-3 btn-primary text-center"
              >
                Request Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
