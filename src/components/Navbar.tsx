import React from 'react';
import { Shield, Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-purple-900">
                Digital Ally
              </span>
              <span className="text-xs text-purple-600">Women's Rights</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#map">Global Map</NavLink>
            <NavLink href="#report">Report Incident</NavLink>
            <NavLink href="#resources">Resources</NavLink>
            <button className="flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
              <Heart className="h-4 w-4 mr-2" />
              Emergency Help
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`
        md:hidden fixed inset-0 bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out transform
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="pt-20 pb-6 px-4 space-y-6">
          <MobileNavLink href="#map" onClick={() => setIsOpen(false)}>
            Global Map
          </MobileNavLink>
          <MobileNavLink href="#report" onClick={() => setIsOpen(false)}>
            Report Incident
          </MobileNavLink>
          <MobileNavLink href="#resources" onClick={() => setIsOpen(false)}>
            Resources
          </MobileNavLink>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium shadow-lg"
          >
            <Heart className="h-5 w-5 mr-2" />
            Emergency Help
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="relative text-purple-900 hover:text-purple-600 font-medium transition-colors duration-300 group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </a>
  );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block w-full text-center py-3 text-purple-900 hover:text-purple-600 font-medium text-lg transition-colors duration-300"
    >
      {children}
    </a>
  );
}