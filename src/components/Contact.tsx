import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "karansongara90@email.com",
      action: "mailto:john.developer@email.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+91 6353263735",
      action: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Rajkot, Gujarat, India",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {info.details}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl">
              <h4 className="text-white font-semibold mb-2">Quick Response</h4>
              <p className="text-gray-400 text-sm">
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to give me a call directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-gray-900/50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="Karan Songara"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                    placeholder="karansongara90@gmail.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-400 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-600 text-white px-4 py-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="mb-6 flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-3 rounded-lg border border-green-400/20">
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-lg border border-red-400/20">
                  <AlertCircle className="h-5 w-5" />
                  <span>Failed to send message. Please try again later.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-600 hover:to-purple-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;