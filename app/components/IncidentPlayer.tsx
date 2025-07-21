'use client';
import { useState, useEffect } from 'react';

export default function IncidentPlayer() {
  const [selectedCamera, setSelectedCamera] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState('');

  const cameras = [
    { id: 1, name: 'Camera - 01', location: 'Main Entrance' },
    { id: 2, name: 'Camera - 02', location: 'Parking Lot' },
    { id: 3, name: 'Camera - 03', location: 'Main Lobby' },
  ];

  // Update time on client side to avoid hydration mismatch
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString());
    };
    
    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000); // Update every second
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Date/Time Header */}
      <div className="bg-slate-700 px-4 py-2 text-white text-sm border-b border-slate-600">
        📅 {new Date().toLocaleDateString('en-GB')} - {currentTime || '--:--:--'}
      </div>

      {/* Main Video Container */}
      <div className="flex-1 flex">
        {/* Main Video Feed */}
        <div className="flex-1 relative bg-slate-900">
          {/* Mock CCTV Feed - Jewelry Store Scene */}
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
            {/* Jewelry Store Background */}
            <div className="absolute inset-0 bg-slate-700 opacity-30"></div>
            
            {/* Mock jewelry display cases */}
            <div className="absolute top-8 left-8 w-32 h-24 bg-amber-200 opacity-20 rounded"></div>
            <div className="absolute top-8 right-8 w-32 h-24 bg-amber-200 opacity-20 rounded"></div>
            <div className="absolute bottom-16 left-8 w-32 h-24 bg-amber-200 opacity-20 rounded"></div>
            <div className="absolute bottom-16 right-8 w-32 h-24 bg-amber-200 opacity-20 rounded"></div>
            
            {/* Central safe/vault */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-40 bg-gray-600 rounded-lg">
              <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg border-4 border-gray-400">
                {/* Safe door */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-gray-800 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-gray-800 rounded-full"></div>
              </div>
            </div>

            {/* Person figure near safe */}
            <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 w-8 h-16 bg-blue-300 rounded-lg opacity-80">
              {/* Head */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-200 rounded-full"></div>
            </div>

            {/* Camera Info Overlay */}
            <div className="absolute top-4 left-4 bg-black bg-opacity-70 px-3 py-2 rounded">
              <div className="text-white font-medium text-sm">📹 {cameras[selectedCamera - 1].name}</div>
            </div>

            {/* Recording Indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black bg-opacity-70 px-3 py-2 rounded">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">REC</span>
            </div>

            {/* Motion Detection Areas */}
            <div className="absolute top-20 left-20 w-24 h-16 border-2 border-green-400 bg-green-400 bg-opacity-10">
              <div className="text-green-400 text-xs p-1">Motion</div>
            </div>
          </div>
        </div>

        {/* Camera Grid */}
        <div className="w-48 bg-slate-800 p-3 space-y-3 border-l border-slate-700">
          {cameras.map((camera) => (
            <button
              key={camera.id}
              onClick={() => setSelectedCamera(camera.id)}
              className={`w-full aspect-video rounded border-2 transition-all overflow-hidden ${
                selectedCamera === camera.id
                  ? 'border-blue-400 bg-blue-900 bg-opacity-20'
                  : 'border-slate-600 hover:border-slate-500 bg-slate-700'
              }`}
            >
              {/* Mini Camera Feed */}
              <div className="w-full h-full bg-slate-700 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800"></div>
                <div className="absolute bottom-1 left-1 text-white text-xs font-medium">
                  {camera.name}
                </div>
                <div className="absolute top-1 right-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                {/* Mock mini activity */}
                <div className="absolute center-center w-3 h-4 bg-gray-400 rounded opacity-60 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-slate-800 border-t border-slate-700">
        {/* Timeline Controls */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-700">
          <div className="flex items-center gap-4">
            <button className="text-slate-300 hover:text-white">⏮️</button>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-slate-600 hover:bg-slate-500 text-white px-3 py-1 rounded text-sm"
            >
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button className="text-slate-300 hover:text-white">⏭️</button>
            <span className="text-slate-300 text-sm">01:02:17 (15-Jun-2025)</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-slate-300 text-sm">100%</span>
            <button className="text-slate-300 hover:text-white">🔍</button>
          </div>
        </div>

        {/* Camera List and Timeline */}
        <div className="flex">
          {/* Camera List */}
          <div className="w-32 bg-slate-900 border-r border-slate-700 py-2">
            <div className="text-slate-400 text-xs px-3 mb-2">Camera List</div>
            {cameras.map((camera) => (
              <button
                key={camera.id}
                className={`w-full text-left px-3 py-1 text-xs transition-colors ${
                  selectedCamera === camera.id 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                📹 {camera.name}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="flex-1 p-4">
            {/* Time markers */}
            <div className="flex justify-between text-xs text-slate-400 mb-2">
              {Array.from({length: 13}, (_, i) => (
                <span key={i} className="w-16 text-center">{String(i).padStart(2, '0')}:00</span>
              ))}
            </div>
            
            {/* Timeline bar with incidents */}
            <div className="relative h-12 bg-slate-700 rounded">
              {/* Timeline events */}
              <div className="absolute top-1 left-16 w-20 h-4 bg-orange-500 rounded text-xs flex items-center justify-center text-white font-medium">
                🚨 Unauthorised Access
              </div>
              <div className="absolute top-6 left-32 w-16 h-4 bg-blue-500 rounded text-xs flex items-center justify-center text-white font-medium">
                � Face Recognised
              </div>
              <div className="absolute top-1 left-64 w-16 h-4 bg-red-600 rounded text-xs flex items-center justify-center text-white font-medium">
                🔫 Gun Threat
              </div>
              <div className="absolute top-6 left-80 w-20 h-4 bg-green-500 rounded text-xs flex items-center justify-center text-white font-medium">
                🚦 Traffic congestion
              </div>
              <div className="absolute top-1 right-32 w-20 h-4 bg-orange-500 rounded text-xs flex items-center justify-center text-white font-medium">
                🚨 Unauthorised Access
              </div>
              
              {/* Current time indicator */}
              <div className="absolute top-0 left-24 w-0.5 h-12 bg-yellow-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
