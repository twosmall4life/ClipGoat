
export enum Platform {
  YouTube = 'YouTube',
  Twitch = 'Twitch',
  TikTok = 'TikTok',
  Instagram = 'Instagram',
  Facebook = 'Facebook'
}

export interface Channel {
  id: string;
  name: string;
  platform: Platform;
  url: string;
  avatar: string;
  isConnected: boolean;
  subscriberCount: number;
}

export interface Clip {
  id: string;
  channelId: string;
  title: string;
  thumbnail: string;
  duration: string;
  timestamp: string;
  score: number; // Viral potential score
  status: 'pending' | 'editing' | 'ready' | 'posted';
  platforms: Platform[];
  caption: string;
}

export interface AnalyticsData {
  date: string;
  views: number;
  shares: number;
  engagement: number;
}
