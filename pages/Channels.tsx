
import React, { useState } from 'react';
import { Platform } from '../types';
import { Plus, Link as LinkIcon, Youtube, Globe, CheckCircle2, AlertCircle } from 'lucide-react';

const Channels: React.FC = () => {
  const [url, setUrl] = useState('');
  const [channels, setChannels] = useState([
    { id: '1', name: 'Ninja', platform: Platform.Twitch, url: 'https://twitch.tv/ninja', subs: '19M', active: true },
    { id: '2', name: 'Ludwig', platform: Platform.YouTube, url: 'https://youtube.com/ludwig', subs: '5M', active: true },
    { id: '3', name: 'Official Clip Hub', platform: Platform.TikTok, url: 'tiktok.com/@clipgoat', subs: '120K', active: true },
  ]);

  const handleConnect = () => {
    if (!url) return;
    const newChannel = {
      id: Math.random().toString(),
      name: 'Syncing Channel...',
      platform: url.includes('twitch') ? Platform.Twitch : Platform.YouTube,
      url,
      subs: 'Fetching...',
      active: true
    };
    setChannels([newChannel, ...channels]);
    setUrl('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-2">Connect Your Source</h2>
        <p className="text-zinc-500 mb-6">Paste your YouTube channel, Twitch link, or stream URL to start AI-clipping.</p>
        
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={20} />
            <input 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://youtube.com/channel/..." 
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
            />
          </div>
          <button 
            onClick={handleConnect}
            className="px-8 bg-purple-600 hover:bg-purple-500 rounded-xl font-bold transition-all shadow-lg shadow-purple-600/20"
          >
            Connect
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-bold">Active Sources (3/100)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {channels.map((chan) => (
            <div key={chan.id} className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4 hover:border-zinc-700 transition-all">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center">
                {chan.platform === Platform.YouTube ? <Youtube className="text-red-500" /> : <Globe className="text-purple-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold truncate">{chan.name}</h4>
                  {chan.active && <CheckCircle2 size={14} className="text-green-500" />}
                </div>
                <p className="text-xs text-zinc-500 truncate">{chan.subs} Subscribers</p>
              </div>
              <div className="text-xs font-bold text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full">
                SYNCING
              </div>
            </div>
          ))}
          
          <button className="border-2 border-dashed border-zinc-800 rounded-2xl p-5 flex items-center justify-center gap-2 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 transition-all">
            <Plus size={20} /> Add New Source
          </button>
        </div>
      </section>

      <div className="bg-blue-600/10 border border-blue-500/20 p-6 rounded-2xl flex gap-4">
        <AlertCircle className="text-blue-500 shrink-0" />
        <div>
          <h4 className="font-bold text-blue-400">Pro Tip</h4>
          <p className="text-sm text-blue-300/80 leading-relaxed">
            Connecting multiple sources allows the AI to cross-reference trends. If your Twitch stream goes viral, ClipGoat automatically pulls the high-quality VOD from YouTube to render your 4K shorts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Channels;
