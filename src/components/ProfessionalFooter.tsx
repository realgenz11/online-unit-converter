import { Calculator, Github, Twitter, Mail, ExternalLink } from 'lucide-react';

export function ProfessionalFooter() {
  const quickLinks = [
    { name: 'Length Converter', href: '#converter' },
    { name: 'Weight Converter', href: '#converter' },
    { name: 'Temperature Converter', href: '#converter' },
    { name: 'Volume Converter', href: '#converter' },
    { name: 'Area Converter', href: '#converter' },
    { name: 'Time Converter', href: '#converter' },
  ];

  const resources = [
    { name: 'How to Use', href: '#how-to-use' },
    { name: 'Conversion Formulas', href: '#formulas' },
    { name: 'Unit Categories', href: '#blog' },
    { name: 'Tips & Tricks', href: '#blog' },
    { name: 'API Documentation', href: '#' },
    { name: 'Mobile App', href: '#' },
  ];

  const categories = [
    'Length & Distance',
    'Weight & Mass', 
    'Temperature',
    'Volume & Capacity',
    'Area & Surface',
    'Time & Duration',
    'Energy & Power',
    'Pressure & Force',
    'Speed & Velocity',
    'Digital Storage',
    'Angle & Rotation',
    'Frequency & Data'
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-accent">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">
                  Online Unit Converter
                </h3>
                <p className="text-sm text-background/80">Professional & Accurate</p>
              </div>
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              The most comprehensive, accurate, and professional unit converter. 
              Trusted by engineers, students, and professionals worldwide for 
              instant daily conversions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-background">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors flex items-center group"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-background">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href}
                    className="text-background/80 hover:text-background transition-colors flex items-center group"
                  >
                    {resource.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-background">Categories</h4>
            <ul className="space-y-2">
              {categories.slice(0, 8).map((category) => (
                <li key={category}>
                  <span className="text-sm text-background/80">• {category}</span>
                </li>
              ))}
              <li>
                <span className="text-sm text-background/60">+ 4 more categories</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-background/60 text-sm">
                © 2024 Online Unit Converter. Made by Aayan Sharma. All rights reserved.
              </p>
              <p className="text-background/50 text-xs mt-1">
                250+ units across 12 categories • Mobile optimized • Always free
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}