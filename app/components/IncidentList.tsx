'use client';
import { useEffect, useState } from 'react';

interface Camera {
  location: string;
}

interface Incident {
  id: number;
  type: string;
  thumbnailUrl: string;
  tsStart: string;
  tsEnd: string;
  camera: Camera;
}

// Mock data for demonstration
const mockIncidents: Incident[] = [
  {
    id: 1,
    type: 'Unauthorized Access',
    thumbnailUrl: '/placeholder1.jpg',
    tsStart: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    tsEnd: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
    camera: { location: 'Main Entrance' },
  },
  {
    id: 2,
    type: 'Suspicious Activity',
    thumbnailUrl: '/placeholder2.jpg',
    tsStart: new Date(Date.now() - 15 * 60 * 1000).toISOString(),
    tsEnd: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    camera: { location: 'Parking Lot' },
  },
  {
    id: 3,
    type: 'Object Detection',
    thumbnailUrl: '/placeholder3.jpg',
    tsStart: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    tsEnd: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    camera: { location: 'Main Lobby' },
  },
];

// Component to handle time formatting on client side to avoid hydration issues
function TimeDisplay({ startTime, endTime }: { startTime: string; endTime: string }) {
  const [timeString, setTimeString] = useState('Loading...');

  useEffect(() => {
    const start = new Date(startTime).toLocaleTimeString();
    const end = new Date(endTime).toLocaleTimeString();
    setTimeString(`${start} – ${end}`);
  }, [startTime, endTime]);

  return <span>{timeString}</span>;
}

export default function IncidentList() {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);

  const resolveIncident = async (id: number) => {
    setIncidents(prev => prev.filter(i => i.id !== id));
    // No API call needed for mock data
  };

  return (
    <div className="h-full flex flex-col bg-slate-900 text-white">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold flex items-center gap-2">
            🔴 15 Unresolved Incidents
          </h2>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            📊 ❌ 4 resolved incidents
          </div>
        </div>
      </div>

      {/* Incidents List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {/* Unauthorised Access Incidents */}
        <div className="bg-slate-800 rounded-lg p-3 border-l-4 border-orange-500">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs">🚫</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-orange-400 font-medium text-sm">🔶 Unauthorised Access</span>
              </div>
              <div className="text-xs text-slate-400 mb-1">📍 Shop Floor Camera A</div>
              <div className="text-xs text-slate-500">⏰ 14:35 - 14:37 on 7-Jul-2025</div>
            </div>
            <button className="text-xs bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded font-medium">
              Resolve →
            </button>
          </div>
        </div>

        {/* Gun Threat */}
        <div className="bg-slate-800 rounded-lg p-3 border-l-4 border-red-500">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs">�</span>
            </div>
            <div className="flex-1">
              <div className="text-red-400 font-medium text-sm mb-1">🔶 Gun Threat</div>
              <div className="text-xs text-slate-400 mb-1">📍 Shop Floor Camera A</div>
              <div className="text-xs text-slate-500">⏰ 14:36 - 14:37 on 7-Jul-2025</div>
            </div>
            <button className="text-xs bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded font-medium">
              Resolve →
            </button>
          </div>
        </div>

        {/* Multiple Unauthorised Access Incidents */}
        {[1, 2, 3].map((index) => (
          <div key={index} className="bg-slate-800 rounded-lg p-3 border-l-4 border-orange-500">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">�</span>
              </div>
              <div className="flex-1">
                <div className="text-orange-400 font-medium text-sm mb-1">🔶 Unauthorised Access</div>
                <div className="text-xs text-slate-400 mb-1">📍 Shop Floor Camera A</div>
                <div className="text-xs text-slate-500">⏰ 14:35 - 14:37 on 7-Jul-2025</div>
              </div>
              <button className="text-xs bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded font-medium">
                Resolve →
              </button>
            </div>
          </div>
        ))}

        {/* Dynamic incidents from database */}
        {incidents.map((incident: Incident) => (
          <div key={incident.id} className="bg-slate-800 rounded-lg p-3 border-l-4 border-blue-500">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs">⚠️</span>
              </div>
              <div className="flex-1">
                <div className="text-blue-400 font-medium text-sm mb-1">🔶 {incident.type}</div>
                <div className="text-xs text-slate-400 mb-1">📍 {incident.camera.location}</div>
                <div className="text-xs text-slate-500">
                  ⏰ <TimeDisplay startTime={incident.tsStart} endTime={incident.tsEnd} />
                </div>
              </div>
              <button
                onClick={() => resolveIncident(incident.id)}
                className="text-xs bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded font-medium"
              >
                Resolve →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
