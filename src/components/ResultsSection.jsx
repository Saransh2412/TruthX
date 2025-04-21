import { useState, useEffect } from 'react';

function ResultsSection({ result, file }) {
    const [videoUrl, setVideoUrl] = useState('');
    const gaugeColor = result.isDeepfake ? 'bg-red-500' : 'bg-green-500';
    const verdict = result.isDeepfake ? 'Deepfake Detected' : 'Authentic Video';
    const percentage = `${result.confidenceScore}%`;
    
    useEffect(() => {
        // Create object URL for video display
        if (file && file.type.startsWith('video/')) {
            const url = URL.createObjectURL(file);
            setVideoUrl(url);
            
            // Clean up URL when component unmounts
            return () => URL.revokeObjectURL(url);
        }
    }, [file]);
    
    return (
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Analysis Results</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border rounded-xl p-6 md:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  {file && file.type.startsWith('video/') && videoUrl ? (
                    <div className="w-full">
                      <video 
                        src={videoUrl} 
                        controls
                        className="w-full h-auto rounded-lg border border-gray-300"
                      />
                      <p className="text-xs text-gray-500 mt-2 text-center">{file.name}</p>
                    </div>
                  ) : (
                    <div className="bg-gray-200 w-full h-48 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Video Preview</span>
                    </div>
                  )}
                </div>
                
                <div className="md:w-2/3">
                  <div className="flex items-center mb-6">
                    <div className={`rounded-full w-4 h-4 ${gaugeColor} mr-3`}></div>
                    <h3 className={`text-2xl font-bold ${result.isDeepfake ? 'text-red-600' : 'text-green-600'}`}>
                      {verdict}
                    </h3>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">AI Confidence Score</span>
                      <span className={`text-sm font-medium ${result.isDeepfake ? 'text-red-600' : 'text-green-600'}`}>
                        {percentage}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${gaugeColor}`} 
                        style={{ width: percentage }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {result.confidenceScore >= 90 ? 'High confidence' : 
                       result.confidenceScore >= 70 ? 'Medium confidence' : 'Low confidence'}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {result.isDeepfake && result.manipulationRegions.length > 0 && (
                      <div>
                        <h4 className="font-medium mb-2">Detected Manipulation</h4>
                        <div className="flex flex-wrap gap-2">
                          {result.manipulationRegions.map((region, index) => (
                            <span 
                              key={index} 
                              className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm capitalize"
                            >
                              {region}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-medium mb-2">Analysis Details</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Processing time: {result.analysisTime} seconds</li>
                        <li>• Video format: {file.type.split('/')[1].toUpperCase()}</li>
                        <li>• File size: {(file.size / (1024 * 1024)).toFixed(2)} MB</li>
                        <li>• Analysis method: EfficientNet Deep Learning Model</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-100 p-4 rounded-lg mt-4">
                      <h4 className="font-medium mb-2">Result Interpretation</h4>
                      <p className="text-sm text-gray-700">
                        {result.isDeepfake 
                          ? 'This video shows signs of AI manipulation. Our model has detected potential deepfake indicators in the content. Exercise caution when sharing this material.'
                          : 'This video appears to be authentic according to our detection model. No significant signs of AI manipulation were detected.'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-3">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Download Report
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        Analyze Another Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
  
export default ResultsSection;