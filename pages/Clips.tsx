
import React from 'react';
import { Filter, Play, Download, Share2, Scissors, Check } from 'lucide-react';

const Clips: React.FC = () => {
  const clips = [
    { id: 1, title: 'The Winning Goal', source: 'Ninja / Twitch', duration: '00:58', score: 98, status: 'posted' },
    { id: 2, title: 'Epic Rage Montage', source: 'Kai Cenat / Twitch', duration: '01:15', score: 85, status: 'ready' },
    { id: 3, title: 'How to Build a PC', source: 'LTT / YouTube', duration: '00:45', score: 92, status: 'editing' },
    { id: 4, title: 'Funniest Jumpscare', source: 'Markiplier / YouTube', duration: '00:30', score: 78, status: 'ready' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">AI Clip Vault</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-xl border border-zinc-800 text-sm font-medium">
            <Filter size={18} /> Filter
          </button>
          <button className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-xl text-sm font-bold">
            <Scissors size={18} /> Manual Slice
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {clips.map(clip => (
          <div key={clip.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden group">
            <div className="relative aspect-video">
              <img src={`https://picsum.photos/seed/${clip.id+20}/400/225`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-[10px] font-bold">
                {clip.duration}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-zinc-950">
                  <Play fill="currentColor" size={24} />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-white uppercase">Viral Match: {clip.score}%</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg mb-1 truncate">{clip.title}</h3>
              <p className="text-xs text-zinc-500 mb-4">{clip.source}</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800">
                <div className="flex gap-1">
                  {clip.status === 'posted' ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">
                      <Check size={12} /> POSTED
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-purple-400 bg-purple-400/10 px-2 py-1 rounded">
                      READY TO GOAT
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 text-zinc-300">
                    <Download size={16} />
                  </button>
                  <button className="p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 text-zinc-300">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clips;
