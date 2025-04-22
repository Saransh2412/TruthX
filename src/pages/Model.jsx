import React from 'react';
import { motion } from 'framer-motion';

const Model = () => {
  return (
    <div id="model-top" className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 mb-12">
          DeepFake Detection Model Architecture
        </h1>

        <div className="space-y-12">
          {/* Model Overview */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-10 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Advanced Model Architecture</h2>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Our deepfake detection system employs a sophisticated Convolutional Neural Network (CNN) architecture, 
                meticulously designed to identify manipulated video content. The model, stored in best_deepfake_model.h5, 
                represents a state-of-the-art approach to synthetic media detection.
              </p>
              
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-xl">
                <h3 className="text-xl text-white mb-4">Key Technical Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg text-purple-300 mb-2">Input Processing</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Input Shape: 128x128x3 RGB frames</li>
                      <li>Batch normalization for input standardization</li>
                      <li>Frame sampling at 30 FPS</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg text-purple-300 mb-2">CNN Architecture</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>5 Convolutional blocks with increasing filters (64-512)</li>
                      <li>ReLU activation functions</li>
                      <li>Spatial and channel attention mechanisms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-xl">
                <h3 className="text-xl text-white mb-4">Detection Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg text-purple-300 mb-2">Visual Analysis</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Facial texture inconsistency detection</li>
                      <li>Temporal coherence analysis</li>
                      <li>Artifact and compression analysis</li>
                      <li>Color space manipulation detection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg text-purple-300 mb-2">Advanced Features</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      <li>Multi-scale feature extraction</li>
                      <li>Frequency domain analysis</li>
                      <li>Noise pattern detection</li>
                      <li>Blending boundary analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Architecture Diagram */}
            <div className="mt-8 bg-gray-900 bg-opacity-50 p-6 rounded-xl">
              <h3 className="text-xl text-white mb-4">Neural Network Architecture</h3>
              <div className="relative h-64">
                {/* Layer visualization */}
                {[
                  { label: "Input Layer", color: "blue", width: "15%" },
                  { label: "Conv2D + BatchNorm", color: "purple", width: "20%" },
                  { label: "MaxPooling", color: "green", width: "15%" },
                  { label: "Dense Layers", color: "orange", width: "20%" },
                  { label: "Output", color: "red", width: "15%" }
                ].map((layer, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-y-1/2"
                    style={{
                      top: "50%",
                      left: `${index * 20}%`,
                      width: layer.width
                    }}
                  >
                    <div className={`h-32 rounded-lg bg-${layer.color}-500 bg-opacity-30 border-2 border-${layer.color}-400 p-2`}>
                      <span className="text-white text-sm">{layer.label}</span>
                    </div>
                    {index < 4 && (
                      <svg className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2" width="40" height="20">
                        <path d="M0 10 L40 10" stroke="white" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      </svg>
                    )}
                  </div>
                ))}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="white" />
                  </marker>
                </defs>
              </div>
            </div>
          </motion.section>

          {/* Model Processing Pipeline */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-10 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Processing Pipeline</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Frame Extraction */}
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl">
                <h3 className="text-xl text-white mb-3">Frame Extraction</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-300">Frame sampling rate: 1/20</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Resolution: 128x128px</span>
                  </div>
                </div>
              </div>

              {/* Feature Analysis */}
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl">
                <h3 className="text-xl text-white mb-3">Feature Analysis</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-300">Facial landmarks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-300">Texture patterns</span>
                  </div>
                </div>
              </div>

              {/* Prediction */}
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl">
                <h3 className="text-xl text-white mb-3">Classification</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">Binary classification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-300">Confidence threshold: 0.5</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Training Process */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-10 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Training Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Training Metrics */}
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl">
                <h3 className="text-xl text-white mb-4">Training Metrics</h3>
                <div className="space-y-4">
                  {[
                    { label: "Training Accuracy", value: 97.5 },
                    { label: "Validation Accuracy", value: 95.2 },
                    { label: "Test Set Performance", value: 94.8 }
                  ].map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-gray-300">
                        <span>{metric.label}</span>
                        <span>{metric.value}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                          style={{ width: `${metric.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dataset Composition */}
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-xl">
                <h3 className="text-xl text-white mb-4">Training Dataset</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Real Videos</span>
                    <span className="text-gray-300">50%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-green-500 h-4 rounded-full" style={{ width: "50%" }} />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">DeepFake Videos</span>
                    <span className="text-gray-300">50%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div className="bg-red-500 h-4 rounded-full" style={{ width: "50%" }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Accuracy and Limitations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-10 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Accuracy and Limitations</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              While our model is highly effective, it's important to note that deepfake technology is continuously evolving. 
              The model performs best under these conditions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { text: "Clear and well-lit video quality", accuracy: 95 },
                { text: "Subject's face clearly visible", accuracy: 90 },
                { text: "Minimal compression artifacts", accuracy: 85 },
                { text: "Consistent frame rate", accuracy: 88 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 + (index * 0.1) }}
                  className="bg-white bg-opacity-5 rounded-lg p-4"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{item.text}</span>
                    <span className="text-purple-300">{item.accuracy}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.accuracy}%` }}
                      transition={{ duration: 1, delay: 1.2 + (index * 0.1) }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Usage Tips */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-10 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Best Practices for Use</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Upload videos in their original quality when possible",
                "Ensure the video contains clear facial content",
                "Consider multiple analysis runs for critical verification",
                "Use the confidence score as a guide, not absolute truth"
              ].map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.2 + (index * 0.1) }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{tip}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
};

export default Model;

