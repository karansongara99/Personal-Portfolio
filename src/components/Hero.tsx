import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Name with animation */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-fade-in">
            Karan Songara
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            Full Stack Web Developer
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about creating scalable, user-friendly applications that make a difference.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              View My Work
              <ArrowRight className="h-5 w-5" />
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Contact Me
              <Mail className="h-5 w-5" />
            </button>
          </div>

          {/* Social media icons */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/karansongara99" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/karan-songara-985317270" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="mailto:karansongara90@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;