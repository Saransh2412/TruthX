import { Link } from 'react-router-dom';

function TruthXTechnologies() {
    const steps = [
      {
        title: "Advanced AI Analysis",
        description: "Our state-of-the-art AI models analyze multiple layers of media to detect subtle manipulations.",
        icon: (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Multi-Modal Detection",
        description: "We combine visual, audio, and metadata analysis for comprehensive verification.",
        icon: (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
          </svg>
        )
      },
      {
        title: "Detailed Analysis Report",
        description: "Get comprehensive insights into authenticity with visual heatmaps and confidence scores.",
        icon: (
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      }
    ];
  
    return (
      <section id="how-it-works" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="w-24 h-24 relative">
              {/* AI Chip Logo */}
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* CPU/Chip Base */}
                <rect x="5" y="5" width="14" height="14" className="text-blue-500" stroke="currentColor" strokeWidth="1.5" rx="2"/>
                {/* Inner Grid Lines */}
                <path d="M9 5V19M15 5V19" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
                <path d="M5 9H19M5 15H19" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
                {/* Center Neural Network Pattern */}
                <circle cx="12" cy="12" r="2" className="text-blue-600" fill="currentColor"/>
                <circle cx="8" cy="8" r="1" className="text-blue-500" fill="currentColor"/>
                <circle cx="16" cy="8" r="1" className="text-blue-500" fill="currentColor"/>
                <circle cx="8" cy="16" r="1" className="text-blue-500" fill="currentColor"/>
                <circle cx="16" cy="16" r="1" className="text-blue-500" fill="currentColor"/>
                {/* Connection Lines */}
                <path d="M10 10L8 8M14 10L16 8M10 14L8 16M14 14L16 16" stroke="currentColor" strokeWidth="1" className="text-blue-400"/>
                {/* Outer Circuit Paths */}
                <path d="M3 9h-1M3 15h-1M22 9h-1M22 15h-1M9 3V2M15 3V2M9 22v-1M15 22v-1" stroke="currentColor" strokeWidth="1.5" className="text-blue-500"/>
              </svg>
              {/* Animated Circles */}
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute inset-0 rounded-full border-4 border-blue-200 opacity-20 animate-ping"></div>
                <div className="absolute inset-2 rounded-full border-4 border-blue-400 opacity-20 animate-ping" style={{animationDelay: "0.2s"}}></div>
                <div className="absolute inset-4 rounded-full border-4 border-blue-600 opacity-20 animate-ping" style={{animationDelay: "0.4s"}}></div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-4">How TruthX Works</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our advanced AI system uses multiple neural networks to analyze media authenticity with incredible precision.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 max-w-4xl mx-auto transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 md:w-2/3">
                <h3 className="text-3xl font-bold mb-4">TruthX Technology</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-400 flex items-center justify-center mr-4">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg">Deep learning models trained on millions of real and manipulated media samples</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-400 flex items-center justify-center mr-4">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg">Advanced neural networks for pattern recognition and anomaly detection</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-400 flex items-center justify-center mr-4">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg">Real-time analysis with detailed visual feedback</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white p-4 rounded-lg shadow-xl">
                  {/* Neural Network Animation */}
                  <svg className="w-full h-auto" viewBox="0 0 200 200" fill="none">
                    <g className="animate-pulse">
                      <circle cx="40" cy="40" r="8" fill="#3B82F6"/>
                      <circle cx="40" cy="100" r="8" fill="#3B82F6"/>
                      <circle cx="40" cy="160" r="8" fill="#3B82F6"/>
                      
                      <circle cx="100" cy="70" r="8" fill="#2563EB"/>
                      <circle cx="100" cy="130" r="8" fill="#2563EB"/>
                      
                      <circle cx="160" cy="100" r="8" fill="#1D4ED8"/>
                      
                      <path d="M48 40L92 70" stroke="#3B82F6" strokeWidth="2"/>
                      <path d="M48 40L92 130" stroke="#3B82F6" strokeWidth="2"/>
                      <path d="M48 100L92 70" stroke="#3B82F6" strokeWidth="2"/>
                      <path d="M48 100L92 130" stroke="#3B82F6" strokeWidth="2"/>
                      <path d="M48 160L92 70" stroke="#3B82F6" strokeWidth="2"/>
                      <path d="M48 160L92 130" stroke="#3B82F6" strokeWidth="2"/>
                      
                      <path d="M108 70L152 100" stroke="#2563EB" strokeWidth="2"/>
                      <path d="M108 130L152 100" stroke="#2563EB" strokeWidth="2"/>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Learn More Button */}
          <div className="mt-12 text-center">
            <Link 
              to="/model" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/model';
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }, 100);
              }}
            >
              <span>Explore Our AI Technology</span>
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  
  export default TruthXTechnologies;
