'use client';
import { useState } from 'react';

export default function Navbar() {
  const [activeCamera, setActiveCamera] = useState(1);

  return (
    <nav className="bg-slate-900 text-white px-6 py-3 flex items-center justify-between border-b border-slate-700">
      {/* Logo and Navigation */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM5 8a1 1 0 000 2h8a1 1 0 100-2H5z"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold">SECURESIGHT</h1>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white">
            <span>📊</span>
            <span>Dashboard</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800">
            <span>📹</span>
            <span>Cameras</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800">
            <span>🎬</span>
            <span>Scenes</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800">
            <span>⚠️</span>
            <span>Incidents</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800">
            <span>👥</span>
            <span>Users</span>
          </button>
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-red-400">15 Unresolved Incidents</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">MA</span>
          </div>
          <div className="text-sm">
            <div className="font-medium">Mohammed Ajhas</div>
            <div className="text-gray-400 text-xs">ajhas@mandlac.com</div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
