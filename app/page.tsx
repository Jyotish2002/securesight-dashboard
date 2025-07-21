import IncidentPlayer from './components/IncidentPlayer';
import IncidentList from './components/IncidentList';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-slate-900">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col bg-slate-800">
          <IncidentPlayer />
        </div>
        
        {/* Right Sidebar - Incidents */}
        <div className="w-80 bg-slate-900 border-l border-slate-700 flex flex-col">
          <IncidentList />
        </div>
      </div>
    </div>
  );
}
