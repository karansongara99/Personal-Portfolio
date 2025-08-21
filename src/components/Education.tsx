import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

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
      degree: '10th CBSE',
      institution: 'Krishna International School',
      location: 'Rajkot',
      period: '2019 - 2021',
      achievements: ['History of Management'],
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Darshan University',
      location: 'Rajkot, Gujarat',
      period: '2021 - 2024',
      achievements: ['CGPA: 8.40/10', 'Project Presentation'],
    },
    {
      degree: 'BTECH in Computer Engineering',
      institution: 'Darshan University',
      location: 'Rajkot, Gujarat',
      period: '2024 - 2027',
      achievements: ['CGPA: 8.60/10', 'Team Lead for final project', 'Code A Thon','Hackathon at Darshan University'],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
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

        <div className="max-w-6xl mx-auto relative" ref={timelineRef}>
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-green-500 to-green-400">
            <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-green-500 to-green-400 animate-pulse opacity-50"></div>
          </div>

          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0; // Even indices on left, odd on right
            return (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative w-full flex mb-20 transition-all duration-1000 transform ${
                  visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full border-4 border-gray-900 z-10 flex items-center justify-center transition-all duration-500 ${
                    visibleItems.includes(index) ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
                  }`}
                  style={{
                    transitionDelay: visibleItems.includes(index) ? `${index * 200 + 300}ms` : '0ms',
                  }}
                >
                  <GraduationCap className="h-6 w-6 text-white" />
                  <div
                    className={`absolute inset-0 rounded-full border-2 border-green-400 animate-ping ${
                      visibleItems.includes(index) ? 'opacity-75' : 'opacity-0'
                    }`}
                  ></div>
                </div>

                {/* Content card - Left side */}
                {isLeft && (
                  <div
                    className="w-full md:w-5/12 md:pr-16 text-right"
                    style={{
                      transitionDelay: visibleItems.includes(index) ? `${index * 200 + 500}ms` : '0ms',
                    }}
                  >
                    <div
                      className={`relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                        visibleItems.includes(index)
                          ? 'translate-x-0 opacity-100'
                          : 'translate-x-8 opacity-0'
                      }`}
                    >
                      {/* Year and Title */}
                      <div className="mb-3">
                        <div className="text-2xl font-bold text-gray-600 mb-1">{edu.period}</div>
                        <div className="text-lg font-semibold text-gray-500">{edu.degree}</div>
                      </div>

                      {/* Institution and Location */}
                      <div className="flex items-center justify-end gap-2 text-gray-400 mb-3">
                        <span className="text-sm">
                          {edu.institution}, {edu.location}
                        </span>
                        <MapPin className="h-4 w-4" />
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center justify-end gap-2 transition-all duration-300 transform ${
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
                            <span className="text-gray-600 text-sm">{achievement}</span>
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Content card - Right side */}
                {!isLeft && (
                  <div
                    className="w-full md:w-5/12 md:pl-16 text-left ml-auto"
                    style={{
                      transitionDelay: visibleItems.includes(index) ? `${index * 200 + 500}ms` : '0ms',
                    }}
                  >
                    <div
                      className={`relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                        visibleItems.includes(index)
                          ? 'translate-x-0 opacity-100'
                          : '-translate-x-8 opacity-0'
                      }`}
                    >
                      {/* Year and Title */}
                      <div className="mb-3">
                        <div className="text-2xl font-bold text-gray-600 mb-1">{edu.period}</div>
                        <div className="text-lg font-semibold text-gray-500">{edu.degree}</div>
                      </div>

                      {/* Institution and Location */}
                      <div className="flex items-center gap-2 text-gray-400 mb-3">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">
                          {edu.institution}, {edu.location}
                        </span>
                      </div>

                      {/* Achievements */}
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
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-gray-600 text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
