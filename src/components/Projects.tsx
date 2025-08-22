import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';
import chatbot from "../images/chatbot.png"
import logistic from "../images/logistic.png"
import hr from "../images/hrportal.png"
import news from "../images/news.png"
import dynamic from "../images/dataanalysis.png"
import shares from "../images/shares.png"

const Projects = () => {
  const projects = [
    {
      title: "Question to SQL Query Generator AI Assistant",
      description: "The SQL Query Generator AI Assistant is a tool or system designed to help users automatically generate SQL (Structured Query Language) queries from natural language input.",
      image: chatbot,
      technologies: ["React.js", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://captilance-sql-query-generator.netlify.app/",
      githubUrl: "https://github.com/karansongara99/SQL-Query-Generator-AI-Assistant",
      category: "web"
    },
    {
      title: "Logistic Management System",
      description: "The Logistic Management System is a comprehensive application designed to manage and optimize logistics operations. It typically includes features for tracking shipments, managing inventory, and coordinating transportation.",
      image: logistic,
      technologies: [".Net Core WEB API", "MS SQL Server", "React.js"],
      liveUrl: "https://logistic-management-system.netlify.app/",
      githubUrl: "https://github.com/karansongara99/Logistic-Management-System",
      category: "web"
    },
    {
      title: "Hr Portal Management System",
      description: "The HR Portal Management System is a web application designed to manage human resources operations. It typically includes features for employee management, payroll processing, and performance tracking.",
      image: hr,
      technologies: ["PHP", "MySQL", "React.js", "Bootstrap","Laravel"],
      liveUrl: "https://hrportal-management-system.netlify.app/",
      githubUrl: "https://github.com/karansongara99/Hr-Portal-Management-System",
      category: "web"
    },
    {
      title: "News Website",
      description: "The News Website is a web application designed to provide users with access to current news and updates. It typically includes features for news categorization, search functionality, and user-friendly navigation.",
      image: news,
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB"],
      liveUrl: "https://captilance-news-website.netlify.app/",
      githubUrl: "https://github.com/karansongara99/News-Website",
      category: "web"
    },
    {
      title: "Dynamic Data Visualization",
      description: "The Dynamic Data Visualization is a web application designed to provide users with access to current news and updates. It typically includes features for news categorization, search functionality, and user-friendly navigation.",
      image: dynamic,
      technologies: ["React.js", "Chart.js", "D3.js", "Tailwind CSS"],
      liveUrl: "https://captilance-data-visualizer.netlify.app/",
      githubUrl: "https://github.com/karansongara99/Dynamic-Data-Visualizer",
      category: "web"
    },
    {
      title: "Shares Trading Analysis",
      description: "The Shares Trading Analysis is a web application designed to provide users with access to current news and updates. It typically includes features for news categorization, search functionality, and user-friendly navigation.",
      image: shares,
      technologies: ["React.js", "Tailwind.css"],
      liveUrl: "https://captilance-shares-analysis.netlify.app/",
      githubUrl: "https://github.com/karansongara99/Shares-Trading-Dashboard",
      category: "web"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work spanning web applications and full-stack solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category icon */}
                <div className="absolute top-4 left-4 bg-blue-500/20 backdrop-blur-sm p-2 rounded-lg">
                  {project.category === 'mobile' ? (
                    <Smartphone className="h-5 w-5 text-blue-400" />
                  ) : (
                    <Globe className="h-5 w-5 text-blue-400" />
                  )}
                </div>

                {/* Hover actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="bg-blue-500/20 backdrop-blur-sm p-2 rounded-lg hover:bg-blue-500/40 transition-colors duration-300"
                  >
                    <ExternalLink className="h-5 w-5 text-blue-400" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="bg-gray-500/20 backdrop-blur-sm p-2 rounded-lg hover:bg-gray-500/40 transition-colors duration-300"
                  >
                    <Github className="h-5 w-5 text-gray-300" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg text-center text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex-1 bg-gray-700 text-gray-300 py-2 px-4 rounded-lg text-center text-sm font-medium hover:bg-gray-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Code className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            <a href="https://github.com/karansongara99">View All Projects on GitHub</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;