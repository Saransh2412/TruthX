import { useState, useRef } from 'react';

function UploadSection({ onFileUpload, onAnalyze, uploadedFile, isAnalyzing }) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onFileUpload(e.target.files[0]);
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <section id="upload" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Analyze Your Media</h2>
        
        <div className="max-w-2xl mx-auto">
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
            } ${uploadedFile ? "bg-blue-50" : ""}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input 
              ref={inputRef}
              type="file" 
              className="hidden" 
              onChange={handleChange}
              accept="image/*, video/*"
            />

            {!uploadedFile ? (
              <div>
                <div className="mb-4 text-gray-500">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  Supported formats: JPG, PNG, MP4, MOV (max 50MB)
                </p>
                <button 
                  type="button"
                  onClick={handleClick}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Select File
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-4 text-blue-500 flex items-center justify-center">
                  <svg className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">File uploaded!</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {uploadedFile.name} ({(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB)
                </p>
                <div className="flex justify-center gap-4">
                  <button 
                    type="button"
                    onClick={handleClick}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    Change File
                  </button>
                  <button 
                    type="button"
                    onClick={onAnalyze}
                    disabled={isAnalyzing}
                    className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
                      isAnalyzing ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                    }`}
                  >
                    {isAnalyzing ? "Analyzing..." : "Analyze Now"}
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {isAnalyzing && (
            <div className="mt-8 text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
              <p className="mt-4 text-lg font-medium">Analyzing your media for deepfake indicators...</p>
              <p className="text-sm text-gray-500">This may take a few seconds</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default UploadSection;