// src/components/Hero.jsx
function Hero() {
    return (
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Detect Deepfakes with Confidence</h1>
          <p className="text-xl md:max-w-2xl mx-auto mb-8">
            TruthX uses advanced AI to identify manipulated media with industry-leading accuracy.
            Protect yourself from misinformation in the digital age.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#upload" className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium">
              Analyze Media Now
            </a>
            <a href="#how-it-works" className="border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium">
              Learn How It Works
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;