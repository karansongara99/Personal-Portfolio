import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Karan Songara
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Passionate full stack developer creating exceptional digital experiences 
              with modern technologies and clean, maintainable code.
            </p>
            <div className="flex space-x-4">
              <a 
              href="https://github.com/karansongara99" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
              href="https://www.linkedin.com/in/karan-songara-985317270" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
              href="mailto:karansongara90@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'Web Design',
                'UI/UX Design',
                'Consulting'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by Karan Songara</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-gray-400 text-sm">
              © {currentYear} All rights reserved
            </span>
            
            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;