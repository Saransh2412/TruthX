import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HelpSection = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate an API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form after successful submission
      setFeedback({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      setTimeout(() => {
        setFormVisible(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c387e] to-[#6200ea] text-white p-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
          How Can We Help?
        </h2>

        {/* FAQs Section */}
        <div className="mb-12 grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-10 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="text-purple-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Frequently Asked Questions
            </h3>
            <ul className="space-y-6">
              <li className="hover:translate-x-2 transition-transform duration-300">
                <h4 className="font-semibold text-lg text-purple-300">What is this application about?</h4>
                <p className="text-gray-300 mt-2">This application helps you determine whether a video is AI-generated or not.</p>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300">
                <h4 className="font-semibold text-lg text-purple-300">How do I provide feedback?</h4>
                <p className="text-gray-300 mt-2">You can provide feedback using the form below or contact us through email.</p>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300">
                <h4 className="font-semibold text-lg text-purple-300">How do I contact the support team?</h4>
                <p className="text-gray-300 mt-2">Simply fill out the "Contact Us" form or email us directly at support@example.com.</p>
              </li>
              <li className="hover:translate-x-2 transition-transform duration-300">
                <h4 className="font-semibold text-lg text-purple-300">Is my data secure?</h4>
                <p className="text-gray-300 mt-2">Yes, we take data security seriously and comply with all necessary security protocols to keep your data safe.</p>
              </li>
            </ul>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-10 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="text-purple-400 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Contact Us
            </h3>
            <button
              onClick={() => setFormVisible(!isFormVisible)}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-lg mb-4 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              {isFormVisible ? 'Close Form' : 'Open Feedback Form'}
            </button>

            {isFormVisible ? (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit} 
                className="space-y-4"
              >
                <div>
                  <input
                    type="text"
                    name="name"
                    value={feedback.name}
                    onChange={handleInputChange}
                    placeholder="Your Name (Optional)"
                    className="w-full p-3 bg-white bg-opacity-10 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={feedback.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full p-3 bg-white bg-opacity-10 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-white"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={feedback.message}
                    onChange={handleInputChange}
                    placeholder="Your Feedback or Message"
                    className="w-full p-3 bg-white bg-opacity-10 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400 text-white"
                    rows="4"
                  />
                </div>
                <div className="flex justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setFormVisible(false)}
                    className="flex-1 bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
                  </button>
                </div>
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center">Thank you for your feedback!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center">There was an error submitting your feedback. Please try again.</p>
                )}
              </motion.form>
            ) : (
              <div className="text-center space-y-4">
                <p className="text-gray-300">You can also reach us at:</p>
                <div className="flex items-center justify-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:support@example.com" className="text-purple-300 hover:text-purple-200">
                    support@example.com
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HelpSection;


