import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      degree: 'CBSE',
      institution: 'Krishna International School',
      location: 'Rajkot',
      period: '2019 - 2021',
      description:
        'Specialized in Software Engineering and Machine Learning. Graduated Magna Cum Laude.',
      achievements: ['GPA: 3.8/4.0', "Dean's List", 'Research Assistant'],
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Darshan University',
      location: 'Rajkot , Gujarat',
      period: '2015 - 2019',
      description:
        'Strong foundation in computer science fundamentals and software development practices.',
      achievements: ['GPA: 3.7/4.0', 'President of Coding Club', 'Hackathon Winner'],
    },
    {
      degree: 'BTECH in Computer Engineering',
      institution: 'Darshan University',
      location: 'Rajkot , Gujarat',
      period: '2015 - 2019',
      description:
        'Intensive 6-month program covering modern web development technologies and practices.',
      achievements: ['Top 5% of class', 'Team Lead for final project', 'Mentor for junior students'],
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My educational journey that shaped my expertise in software development and computer
            science.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative" ref={timelineRef}>
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 animate-pulse opacity-50"></div>
          </div>

          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0; // 1st and 3rd left, 2nd right
            return (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative w-full flex mb-16 transition-all duration-1000 transform ${
                  visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center transition-all duration-500 ${
                    visibleItems.includes(index) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}
                  style={{
                    transitionDelay: visibleItems.includes(index) ? `${index * 200 + 300}ms` : '0ms',
                  }}
                >
                  <GraduationCap className="h-4 w-4 text-white" />
                  <div
                    className={`absolute inset-0 rounded-full border-2 border-blue-400 animate-ping ${
                      visibleItems.includes(index) ? 'opacity-75' : 'opacity-0'
                    }`}
                  ></div>
                </div>

                {/* Content card */}
                <div
                  className={`w-full md:w-1/2 px-6 ${
                    isLeft ? 'md:pr-16 text-right' : 'md:pl-16 text-left'
                  }`}
                  style={{
                    transitionDelay: visibleItems.includes(index) ? `${index * 200 + 500}ms` : '0ms',
                  }}
                >
                  <div
                    className={`relative bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 ${
                      visibleItems.includes(index)
                        ? 'translate-x-0 opacity-100'
                        : isLeft
                        ? 'translate-x-8 opacity-0'
                        : '-translate-x-8 opacity-0'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <Calendar className="h-4 w-4 animate-pulse" />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 hover:text-blue-400 transition-colors duration-300">
                      {edu.degree}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-400 mb-3">
                      <MapPin className="h-4 w-4" />
                      <span>
                        {edu.institution}, {edu.location}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4">{edu.description}</p>

                    <div className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 transition-all duration-300 transform ${
                            visibleItems.includes(index)
                              ? 'translate-x-0 opacity-100'
                              : '-translate-x-4 opacity-0'
                          }`}
                          style={{
                            transitionDelay: visibleItems.includes(index)
                              ? `${index * 200 + 700 + idx * 100}ms`
                              : '0ms',
                          }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span className="text-gray-400 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
