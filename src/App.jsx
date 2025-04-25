// src/App.jsx
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import UploadSection from './components/UploadSection';
import ResultsSection from './components/ResultsSection';
import Footer from './components/Footer';
import Help from './pages/Help';
import Articles from './pages/Articles';
import About from './pages/AboutUs';
import Model from './pages/Model';
import TruthXTechnologies from './components/TruthX-technologies';

// API endpoint for the Flask backend
const API_URL = 'http://localhost:5000/api/analyze';

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = (file) => {
    setUploadedFile(file);
    setAnalysisResult(null);
    setIsAnalyzing(false);
    setError(null);
  };

  const handleAnalyze = async () => {
    if (!uploadedFile) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', uploadedFile);

      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      setAnalysisResult(result);
    } catch (err) {
      console.error('Analysis error:', err);
      setError(`Failed to analyze video: ${err.message}`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">
                <Hero />
                <UploadSection 
                  onFileUpload={handleFileUpload} 
                  onAnalyze={handleAnalyze}
                  uploadedFile={uploadedFile}
                  isAnalyzing={isAnalyzing}
                />
                
                {error && (
                  <div className="container mx-auto px-4 py-6">
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
                      <p>{error}</p>
                    </div>
                  </div>
                )}
                
                {analysisResult && (
                  <ResultsSection result={analysisResult} file={uploadedFile} />
                )}
                <TruthXTechnologies />
              </main>
            </div>
          } />
          <Route path="/help" element={<Help />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
          <Route path="/model" element={<Model />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;