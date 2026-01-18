
import React, { useState } from 'react';
import { Play, Square, Save, Music, Layers, Volume2, Mic2 } from 'lucide-react';

const SoundLab: React.FC = () => {
  const [bpm, setBpm] = useState(128);
  const [activeStep, setActiveStep] = useState(0);

  const tracks = [
    { id: 1, name: 'AI Bassline', color: 'bg-purple-500' },
    { id: 2, name: 'Trap Percs', color: 'bg-blue-500' },
    { id: 3, name: 'Stream Vox', color: 'bg-pink-500' },
    { id: 4, name: 'Cinematic Atmos', color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Music className="text-purple-500" /> Sound Lab Pro
          </h1>
          <p className="text-zinc-500">Create royalty-free background music and sound effects for your clips.</p>
        </div>
        <div className="flex gap-3">
          <button className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 hover:text-white"><Play size={20} fill="currentColor" /></button>
          <button className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 hover:text-white"><Square size={20} fill="currentColor" /></button>
          <button className="px-6 bg-purple-600 rounded-xl font-bold flex items-center gap-2 hover:bg-purple-500">
            <Save size={18} /> Export Audio
          </button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
        <div className="p-6 border-b border-zinc-800 flex items-center gap-8 bg-zinc-900/50">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-zinc-500 uppercase">Tempo</span>
            <input 
              type="range" min="60" max="200" value={bpm} 
              onChange={(e) => setBpm(parseInt(e.target.value))}
              className="accent-purple-500 h-1.5 w-32"
            />
            <span className="font-mono text-purple-400 font-bold">{bpm} BPM</span>
          </div>
          <div className="h-6 w-px bg-zinc-800"></div>
          <div className="flex items-center gap-4">
            <Layers size={18} className="text-zinc-500" />
            <span className="text-sm font-bold text-zinc-300">Goat-Engine Master V2</span>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {tracks.map(track => (
            <div key={track.id} className="flex items-center gap-6">
              <div className="w-48 flex items-center gap-3">
                <div className={`w-1 h-8 rounded-full ${track.color}`}></div>
                <div>
                  <h4 className="font-bold text-sm">{track.name}</h4>
                  <div className="flex gap-1">
                    <button className="text-[9px] font-bold text-zinc-500 hover:text-zinc-300">MUTE</button>
                    <button className="text-[9px] font-bold text-zinc-500 hover:text-zinc-300">SOLO</button>
                  </div>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-16 gap-1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <button 
                    key={i} 
                    className={`h-12 rounded-lg transition-all ${
                      i % 4 === 0 ? 'bg-zinc-800/80' : 'bg-zinc-800/40'
                    } hover:bg-zinc-700/60`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Volume2 size={16} className="text-zinc-600" />
                <div className="w-16 h-1 bg-zinc-800 rounded-full">
                  <div className="w-2/3 h-full bg-purple-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex items-center gap-4">
          <Mic2 className="text-purple-500" size={32} />
          <div>
            <h4 className="font-bold">AI Voiceover</h4>
            <p className="text-xs text-zinc-500">Generate narrator voices instantly.</p>
          </div>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex items-center gap-4">
          <Volume2 className="text-blue-500" size={32} />
          <div>
            <h4 className="font-bold">Sound FX Library</h4>
            <p className="text-xs text-zinc-500">10,000+ meme sounds & impacts.</p>
          </div>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl flex items-center gap-4">
          <Music className="text-green-500" size={32} />
          <div>
            <h4 className="font-bold">Auto-Sync Beats</h4>
            <p className="text-xs text-zinc-500">Match video cuts to the beat.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoundLab;
