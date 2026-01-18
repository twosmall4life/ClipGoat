
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Eye, Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';

const data = [
  { name: 'Mon', views: 4000, engagement: 2400 },
  { name: 'Tue', views: 3000, engagement: 1398 },
  { name: 'Wed', views: 2000, engagement: 9800 },
  { name: 'Thu', views: 2780, engagement: 3908 },
  { name: 'Fri', views: 1890, engagement: 4800 },
  { name: 'Sat', views: 2390, engagement: 3800 },
  { name: 'Sun', views: 3490, engagement: 4300 },
];

const PerformanceMetric = ({ label, value, icon: Icon, color }: any) => (
  <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-2xl">
    <div className="flex justify-between items-center mb-2">
      <Icon className={color} size={20} />
      <span className="text-[10px] font-bold text-green-400">+4.2%</span>
    </div>
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1 font-bold">{label}</p>
  </div>
);

const Analytics: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Performance Insights</h1>
          <p className="text-zinc-500">Detailed stats for your distributed clips.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-zinc-900 rounded-lg text-sm border border-zinc-800">Last 7 Days</button>
          <button className="px-4 py-2 bg-zinc-900 rounded-lg text-sm border border-zinc-800">Export PDF</button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <PerformanceMetric label="Total Views" value="452,192" icon={Eye} color="text-purple-500" />
        <PerformanceMetric label="Avg. Likes" value="12,042" icon={Heart} color="text-red-500" />
        <PerformanceMetric label="Total Comments" value="3,109" icon={MessageCircle} color="text-blue-500" />
        <PerformanceMetric label="Total Shares" value="8,492" icon={Share2} color="text-green-500" />
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-xl">View Growth Trend</h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-xs text-zinc-400">Total Views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-xs text-zinc-400">Engagement</span>
            </div>
          </div>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" vertical={false} />
              <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Area type="monotone" dataKey="views" stroke="#a855f7" fillOpacity={1} fill="url(#colorViews)" />
              <Area type="monotone" dataKey="engagement" stroke="#3b82f6" fillOpacity={1} fill="url(#colorEngagement)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-3xl flex items-center justify-between">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Platform Comparison</h3>
          <p className="text-white/80">TikTok is currently your #1 driver for new subscribers.</p>
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold">58%</p>
            <p className="text-xs font-bold uppercase">TikTok</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">24%</p>
            <p className="text-xs font-bold uppercase">YT Shorts</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">18%</p>
            <p className="text-xs font-bold uppercase">Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
