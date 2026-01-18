
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Tv, 
  Video, 
  Music, 
  BarChart3, 
  Settings, 
  Zap,
  PlusCircle,
  TrendingUp,
  Share2,
  MoreVertical,
  Scissors
} from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Channels from './pages/Channels';
import Clips from './pages/Clips';
import SoundLab from './pages/SoundLab';
import Analytics from './pages/Analytics';

const SidebarLink = ({ to, icon: Icon, label, active }: { to: string, icon: any, label: string, active: boolean }) => (
  <Link 
    to={to} 
    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
      active ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </Link>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex h-screen bg-zinc-950 overflow-hidden text-zinc-100">
        {/* Sidebar */}
        <aside className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col p-6 space-y-8">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-2 rounded-lg">
              <Zap className="text-white" size={24} fill="white" />
            </div>
            <h1 className="text-2xl font-bebas tracking-wider font-bold gradient-text">CLIPGOAT</h1>
          </div>

          <nav className="flex-1 space-y-2">
            <SidebarNav />
          </nav>

          <div className="pt-6 border-t border-zinc-800">
            <div className="bg-zinc-900 rounded-2xl p-4 flex items-center space-x-3">
              <img src="https://picsum.photos/40/40" className="rounded-full ring-2 ring-purple-500" alt="Avatar" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">Pro Gamer</p>
                <p className="text-xs text-zinc-500 truncate">Goat Plan • 100% Free</p>
              </div>
              <MoreVertical size={16} className="text-zinc-500" />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto scrollbar-hide">
          <header className="sticky top-0 z-50 glass h-16 px-8 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-zinc-300">Overview</h2>
            <div className="flex items-center space-x-4">
              <div className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-bold text-green-400 animate-pulse flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                LIVE SYNC ACTIVE
              </div>
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-bold flex items-center gap-2 transition-colors">
                <PlusCircle size={18} />
                Connect Source
              </button>
            </div>
          </header>

          <div className="p-8">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/channels" element={<Channels />} />
              <Route path="/clips" element={<Clips />} />
              <Route path="/sound-lab" element={<SoundLab />} />
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </div>
        </main>
      </div>
    </HashRouter>
  );
};

const SidebarNav = () => {
  const location = useLocation();
  return (
    <>
      <SidebarLink to="/" icon={LayoutDashboard} label="Dashboard" active={location.pathname === '/'} />
      <SidebarLink to="/channels" icon={Tv} label="Connected Channels" active={location.pathname === '/channels'} />
      <SidebarLink to="/clips" icon={Video} label="AI Clip Vault" active={location.pathname === '/clips'} />
      <SidebarLink to="/sound-lab" icon={Music} label="Sound Lab" active={location.pathname === '/sound-lab'} />
      <SidebarLink to="/analytics" icon={BarChart3} label="Performance" active={location.pathname === '/analytics'} />
      <SidebarLink to="/settings" icon={Settings} label="Engine Settings" active={location.pathname === '/settings'} />
    </>
  );
};

export default App;
