import React, { useState } from 'react';
import { Upload, Camera, Mic } from 'lucide-react';

function SoilAnalysis() {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">Soil Analysis</h1>
        <p className="mt-2 text-gray-600">Upload data or images for instant AI-powered analysis</p>
      </header>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 px-6 focus:outline-none ${
              activeTab === 'upload' ? 'bg-green-50 text-green-600' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('upload')}
          >
            <div className="flex items-center justify-center space-x-2">
              <Upload className="h-5 w-5" />
              <span>Upload Data</span>
            </div>
          </button>
          <button
            className={`flex-1 py-4 px-6 focus:outline-none ${
              activeTab === 'camera' ? 'bg-green-50 text-green-600' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('camera')}
          >
            <div className="flex items-center justify-center space-x-2">
              <Camera className="h-5 w-5" />
              <span>Soil Photo</span>
            </div>
          </button>
          <button
            className={`flex-1 py-4 px-6 focus:outline-none ${
              activeTab === 'voice' ? 'bg-green-50 text-green-600' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab('voice')}
          >
            <div className="flex items-center justify-center space-x-2">
              <Mic className="h-5 w-5" />
              <span>Voice Input</span>
            </div>
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'upload' && (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Drag and drop your soil test data file here</p>
                <p className="text-sm text-gray-500 mt-2">or</p>
                <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Browse Files
                </button>
              </div>
            </div>
          )}

          {activeTab === 'camera' && (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Take or upload a photo of your soil</p>
                <div className="mt-4 space-x-4">
                  <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                    Take Photo
                  </button>
                  <button className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                    Upload Photo
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'voice' && (
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <Mic className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Click to start recording your soil test results</p>
                <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                  Start Recording
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Analysis Results</h2>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Analysis results will appear here</p>
        </div>
      </div>
    </div>
  );
}

export default SoilAnalysis;