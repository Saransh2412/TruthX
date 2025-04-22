import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c387e] to-[#6200ea] text-white p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-shadow">Meet the Team Behind TruthX</h1>
        <p className="text-xl mb-12 leading-relaxed tracking-wider max-w-3xl mx-auto">
          TruthX was founded with a mission to bring clarity and confidence in an age of misinformation. 
          Using cutting-edge AI, we help people detect deepfakes and manipulated content with precision and ease.
        </p>

        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {/* Team Member 1 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out border border-purple-300/30 flex flex-col h-full">
            <div className="flex-grow">
              <img
                src="src\assets\Saransh_pic.jpg"
                alt="Saransh Sethi"
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-purple-400/50 shadow-lg"
              />
              <h2 className="text-3xl font-semibold text-purple-200 mb-2">Saransh Sethi</h2>
              <p className="text-lg font-medium text-purple-300 mb-4">Co-Founder & Lead AI Engineer</p>
              <p className="text-md text-gray-300 mb-6 leading-relaxed">
                Second-year AI student at Bennett University (2023-2027). As the Lead AI Engineer, passionate about fighting misinformation with cutting-edge technology. Fun fact: Built this entire frontend in just one night! 🚀
              </p>
            </div>
            <div className="flex justify-center space-x-6 mt-auto">
              <a href="https://www.linkedin.com/in/saransh-sethi/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
                <FaLinkedin className="text-purple-300 hover:text-white text-2xl" />
              </a>
              <a href="https://www.instagram.com/i.saranshh/?hl=en" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
                <FaInstagram className="text-purple-300 hover:text-white text-2xl" />
              </a>
              <a href="https://github.com/Saransh2412" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
                <FaGithub className="text-purple-300 hover:text-white text-2xl" />
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out border border-purple-300/30 flex flex-col h-full">
            <div className="flex-grow">
              <img
                src="src/assets/Shaurya_pic.jpg"
                alt="Shaurya Bansal"
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-purple-400/50 shadow-lg"
              />
              <h2 className="text-3xl font-semibold text-purple-200 mb-2">Shaurya Bansal</h2>
              <p className="text-lg font-medium text-purple-300 mb-4">Co-Founder & Tech Lead Don</p>
              <p className="text-md text-gray-300 mb-6 leading-relaxed">
                Our Tech Lead extraordinaire! Spent a legendary 25 hours straight training our deepfake detection model. When he's not coding, he's probably thinking about coding! 💻
              </p>
            </div>
            <div className="flex justify-center space-x-6 mt-auto">
              <a href="https://www.linkedin.com/in/shauryabansal/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
                <FaLinkedin className="text-purple-300 hover:text-white text-2xl" />
              </a>
              <a href="https://www.instagram.com/shauryabansal/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
                <FaInstagram className="text-purple-300 hover:text-white text-2xl" />
              </a>
              <a href="https://github.com/ShauryaBansal" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
                <FaGithub className="text-purple-300 hover:text-white text-2xl" />
              </a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out border border-purple-300/30 flex flex-col h-full">
            <div className="flex-grow">
              <img
                src="src/assets/tanisha_pic.jpg"
                alt="Tanisha Gupta"
                className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-purple-400/50 shadow-lg"
              />
              <h2 className="text-3xl font-semibold text-purple-200 mb-2">Tanisha Gupta</h2>
              <p className="text-lg font-medium text-purple-300 mb-4">Design & UX – The Best 💜</p>
              <p className="text-md text-gray-300 mb-6 leading-relaxed">
                The girly pop of this team! 💁‍♀️ As the creative mind behind TruthX's stunning design, made sure our one-night frontend sprint looked absolutely fabulous! ✨
              </p>
            </div>
            <div className="flex justify-center space-x-6 mt-auto">
              <a href="https://www.linkedin.com/in/tanishagupta/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
                <FaLinkedin className="text-purple-300 hover:text-white text-2xl" />
              </a>
              <a href="https://www.instagram.com/tanishagupta/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
                <FaInstagram className="text-purple-300 hover:text-white text-2xl" />
              </a>
              <a href="https://github.com/TanishaGupta" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
                <FaGithub className="text-purple-300 hover:text-white text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-lg text-purple-200 max-w-3xl mx-auto">
          <p>
            TruthX is currently in beta. We're constantly evolving to stay ahead of misinformation. 
            Join us on our journey to a more authentic digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


