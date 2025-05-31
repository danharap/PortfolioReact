import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { validateForm, sendContactEmail } from '../services/contactService';

const ContactSection = ({ darkMode }) => {
  const [titleRef, isTitleVisible] = useScrollAnimation();
  const [contentRef, isContentVisible] = useScrollAnimation({ rootMargin: '0px 0px -100px 0px' });

  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [submitMessage, setSubmitMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus(null);

    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
      
      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-800 ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can work together!
          </p>
        </div>        
        <div 
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-300 ${
            isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact Form */}
          <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg`}>
            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Send a Message
            </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
              {/* Status Messages */}
              {submitStatus && (
                <div className={`p-4 rounded-md flex items-center space-x-2 ${
                  submitStatus === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-200' 
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span>{submitMessage}</span>
                </div>
              )}

              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-md border transition-colors ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500' 
                      : darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-md border transition-colors ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-md border transition-colors resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20`}
                  placeholder="Tell me about your project, question, or just say hello!"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-md transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                } text-white font-medium`}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin" size={16} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg`}>
              <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Let's Connect
              </h3>
              
              <div className="space-y-4">                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-600" size={20} />
                  <a 
                    href="mailto:daniel@harapiak.com"
                    className={`hover:text-blue-600 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    daniel@harapiak.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                    Burlington, Ontario, Canada
                  </span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Follow Me
                </h4>                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/danielharapiak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/danharap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg text-center`}>
              <div className="text-4xl mb-4">☕</div>
              <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Coffee Chat?
              </h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm always up for a good conversation about technology, projects, or career opportunities over coffee!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
