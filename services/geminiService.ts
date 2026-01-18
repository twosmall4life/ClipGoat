
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeVideoForClips = async (videoTitle: string, description: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analyze this video content and identify 3 potential viral clip segments. 
      Title: ${videoTitle}
      Description: ${description}
      Format as JSON list of objects with title, start_time, end_time, and viral_reason.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              start_time: { type: Type.STRING },
              end_time: { type: Type.STRING },
              viral_reason: { type: Type.STRING }
            },
            required: ["title", "start_time", "end_time", "viral_reason"]
          }
        }
      }
    });
    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("AI Analysis failed:", error);
    return [];
  }
};

export const generateCaptions = async (clipTitle: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Create short, punchy, high-engagement TikTok/Reels style captions and hashtags for a clip titled: "${clipTitle}". Make it sound like a top-tier streamer.`,
    });
    return response.text;
  } catch (error) {
    return "🔥 Check out this crazy moment! #viral #streamer #clipgoat";
  }
};
