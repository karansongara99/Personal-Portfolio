import React from 'react';
import { Code, Database, Zap,PencilRuler } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "React.js", level: 80 }
      ]
    },
    {
      title: "Backend",
      icon: <PencilRuler className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 88 },
        { name: "PHP", level: 85 },
        { name: "C#", level: 82 },
        { name: "Express.js", level: 90 },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Zap className="h-6 w-6" />,
      skills: [
        { name: "Git", level: 95 },
        { name: "Postman", level: 80 },
        { name: "Figma", level: 85 },
        { name: "Swagger", level: 85 },
        { name: "Netlify", level: 85 },
      ]
    },
    {
      title: "Database ",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MS SQL Server", level: 95 },
        { name: "MYSQL", level: 82 },
        { name: "MongoDB", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-900/50 p-6 rounded-xl hover:bg-gray-900/70 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                   </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical badges */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'JavaScript', 'React', 'Node.js', '.Net Core WEB API', 'ASP.NET (MVC)','MongoDB', 'Git', 'REST APIs', 'Tailwind CSS', 'Express.js', 'PHP','C#','MS SQL Server'
            ].map((tech, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;