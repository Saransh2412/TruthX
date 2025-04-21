// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UploadSection from './components/UploadSection';
import ResultsSection from './components/ResultsSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    setAnalysisResult(null);
    setIsAnalyzing(false);
  };

  const handleAnalyze = () => {
    if (!uploadedFile) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      const result = {
        isDeepfake: Math.random() > 0.5,
        confidenceScore: Math.floor(Math.random() * 40) + 60,
        manipulationRegions: Math.random() > 0.5 ? ['face', 'eyes'] : ['mouth', 'voice'],
        analysisTime: (Math.random() * 2 + 1).toFixed(1),
      };

      setAnalysisResult(result);
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <UploadSection 
          onFileUpload={handleFileUpload} 
          onAnalyze={handleAnalyze}
          uploadedFile={uploadedFile}
          isAnalyzing={isAnalyzing}
        />
        {analysisResult && (
          <ResultsSection result={analysisResult} file={uploadedFile} />
        )}
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
