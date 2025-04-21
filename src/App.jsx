// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UploadSection from './components/UploadSection';
import ResultsSection from './components/ResultsSection';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

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
      // Create form data to send the video file
      const formData = new FormData();
      formData.append('file', uploadedFile);

      // Send the video to the Flask API
      const response = await fetch(API_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      // Parse the response from the model
      const result = await response.json();
      
      // Format the result to match your frontend expectations
      // The Python model returns result with isDeepfake, confidenceScore, etc.
      setAnalysisResult(result);
    } catch (err) {
      console.error('Analysis error:', err);
      setError(`Failed to analyze video: ${err.message}`);
    } finally {
      setIsAnalyzing(false);
    }
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
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;