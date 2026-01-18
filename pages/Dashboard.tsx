
import React from 'react';
import { TrendingUp, Share2, Scissors, Zap, Users, PlayCircle } from 'lucide-react';

const StatCard = ({ label, value, icon: Icon, color }: any) => (
  <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-700 transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-20`}>
        <Icon className={color.replace('bg-', 'text-')} size={24} />
      </div>
      <span className="text-green-400 text-xs font-bold">+12%</span>
    </div>
    <h3 className="text-zinc-500 text-sm font-medium">{label}</h3>
    <p className="text-3xl font-bold mt-1">{value}</p>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <div className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-4xl font-bebas tracking-wider mb-2">Welcome Back, <span className="text-purple-500">Goat</span></h1>
            <p className="text-zinc-400">ClipGoat AI is currently processing 4 live streams.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="Total Clips Generated" value="1,284" icon={Scissors} color="bg-purple-500" />
          <StatCard label="Automated Shares" value="452" icon={Share2} color="bg-blue-500" />
          <StatCard label="Engagement Points" value="892K" icon={Zap} color="bg-yellow-500" />
          <StatCard label="Audience Reach" value="2.4M" icon={Users} color="bg-pink-500" />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <TrendingUp className="text-purple-500" /> Recent Hot Clips
            </h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group flex items-center gap-4 p-4 hover:bg-zinc-800/50 rounded-2xl transition-all cursor-pointer">
                  <div className="relative w-32 h-20 rounded-xl overflow-hidden shrink-0">
                    <img src={`https://picsum.photos/seed/${i + 10}/200/150`} className="object-cover w-full h-full" alt="Thumbnail" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-zinc-200">Insane Clutch Moment - Warzone 2.0</h4>
                    <p className="text-sm text-zinc-500">Processed 12m ago • Score: 98/100</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400 uppercase tracking-widest font-bold">TikTok</span>
                      <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-400 uppercase tracking-widest font-bold">YouTube Shorts</span>
                    </div>
                  </div>
                  <button className="p-2 hover:bg-zinc-700 rounded-lg text-zinc-400 transition-colors">
                    <Share2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/20 rounded-3xl p-8 goat-shadow">
            <h3 className="text-xl font-bold mb-4">Goat Intelligence</h3>
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              Our AI detected a massive spike in "LUL" in your Twitch chat. I've automatically prioritized the segment at 01:42:15 for immediate vertical formatting.
            </p>
            <button className="w-full py-3 bg-white text-zinc-950 rounded-xl font-bold text-sm hover:bg-zinc-200 transition-colors">
              Approve Post Now
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Channel Health</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Sync Frequency</span>
                <span className="text-green-400 font-mono">Real-time</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-400">Storage Used</span>
                <span className="text-zinc-200 font-mono">1.2 TB / Unlimited</span>
              </div>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-purple-500 h-full w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
