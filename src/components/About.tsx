import img from "../images/coathand.jpg"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Image */}
          <div className="relative">
            <div className="w-50 aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl overflow-hidden">
              <img 
                src={img} 
                alt="Developer" 
                className="w-50 h-50 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I'm a passionate full stack developer with creating 
              digital solutions that bridge the gap between design and functionality. 
              I specialize in building scalable web applications using modern technologies 
              and best practices.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community. 
              I believe in writing clean, maintainable code that not only works but tells a story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
