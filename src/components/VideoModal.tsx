import React, { useState } from 'react';
import { X, Play, Pause, Volume2, Maximize2, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onOpenQuote }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  if (!isOpen) return null;

  const chapters = [
    { title: 'Overview & Villa Installation', time: '0:00 - 1:15' },
    { title: '8.5 Ft Rooftop Pergola Engineering', time: '1:16 - 2:30' },
    { title: 'Net Metering & 70% Bill Savings', time: '2:31 - 3:45' },
    { title: 'Subsidy Approval Process', time: '3:46 - 4:50' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs transition-opacity animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#0F131A] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden text-white">
        
        {/* Top bar */}
        <div className="px-5 py-3.5 bg-[#171B24] border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-bold text-gray-200">
              R. S. Bhandari Solar — Project Showcase Video
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          <img
            src="/assets/solar/hero_house_full.png"
            alt="Solar installation showcase"
            className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
          />

          {/* Video Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

          {/* Central Play/Pause Trigger */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-16 h-16 rounded-full bg-[#F8B814]/90 hover:bg-[#F8B814] text-gray-950 flex items-center justify-center shadow-xl transition-transform hover:scale-110 cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-current" />
            ) : (
              <Play className="w-7 h-7 fill-current ml-1" />
            )}
          </button>

          {/* Overlay Tag in Video */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-xs font-semibold">
            <span>Chapter {activeChapter + 1}: {chapters[activeChapter].title}</span>
          </div>

          {/* Bottom Video Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 to-transparent">
            {/* Timeline Bar */}
            <div className="w-full h-1.5 bg-gray-700 rounded-full mb-3 overflow-hidden cursor-pointer">
              <div
                className="h-full bg-[#F8B814] transition-all duration-300"
                style={{ width: `${(activeChapter + 1) * 25}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-gray-300">
              <div className="flex items-center space-x-3">
                <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white">
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <Volume2 className="w-4 h-4 hover:text-white cursor-pointer" />
                <span className="font-mono text-[11px]">02:15 / 04:50</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="bg-[#1C202B] px-2 py-0.5 rounded text-[10px] font-bold text-[#F8B814]">
                  4K Ultra HD
                </span>
                <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Chapters selection */}
        <div className="p-4 sm:p-5 bg-[#141822] border-t border-gray-800">
          <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
            Key Video Highlights
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {chapters.map((chap, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`p-2.5 rounded-xl text-left border transition-all text-xs cursor-pointer ${
                  activeChapter === idx
                    ? 'bg-[#1F2533] border-[#F8B814] text-white'
                    : 'bg-[#10141D] border-gray-800 text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="text-[10px] font-mono text-[#F8B814]">{chap.time}</div>
                <div className="font-semibold text-[11px] mt-0.5 line-clamp-1">{chap.title}</div>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-gray-400">
              Ready to save on your home electricity bills like our 4,200+ clients?
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="bg-[#F8B814] hover:bg-[#e5a812] text-gray-950 font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Get Free Site Survey
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
