import React from 'react';
import { CheckCircle, Download } from 'lucide-react';

interface HeroProps {
  onSuccess: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSuccess }) => {
  return (
    <section className="relative pt-8 pb-20 lg:pt-20 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Copy */}
        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 font-medium text-xs uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            For Coaches & Consultants
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            THE AUTOMATED <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
              AUTHORITY SYSTEM
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Stop chasing leads. Get the simple 4 phase blueprint that captures attention, builds trust, and fills your calendar on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0 mb-6">
            <button 
              type="button" 
              className="px-10 py-4 bg-slate-900 border border-brand-500/30 text-brand-500 font-bold rounded-xl tracking-[0.2em] cursor-default hover:bg-slate-900/80 transition-colors w-full sm:w-auto shadow-[0_0_20px_-5px_rgba(234,88,12,0.1)]"
            >
              COMING SOON
            </button>
          </div>
        </div>

        {/* Right Column: Visual Mockup */}
        <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none perspective-1000 animate-fade-in delay-100">
            {/* Glow behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-600/20 blur-[60px] rounded-full"></div>
            
            {/* Book Mockup Container */}
            <div className="relative z-10 transform transition-transform hover:scale-[1.02] duration-500 group">
                {/* 3D Book Shape */}
                <div className="relative aspect-[3/4] bg-slate-900 rounded-r-xl rounded-l-sm border-r-[12px] border-b-[12px] border-slate-950 shadow-2xl flex flex-col overflow-hidden">
                    
                    {/* Spine Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-slate-800 to-slate-900 z-20"></div>

                    {/* Cover Design */}
                    <div className="flex-1 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 flex flex-col items-center border border-slate-700/50 relative overflow-hidden">
                        
                        {/* Decorative Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                        {/* Top Branding */}
                        <div className="w-full text-center border-b border-white/10 pb-4 z-10 mb-8">
                            <span className="text-brand-500 font-bold tracking-widest text-xs uppercase">Private Briefing</span>
                        </div>

                        {/* Title */}
                        <div className="text-center z-10 mb-auto">
                            <h2 className="text-5xl sm:text-6xl font-black text-white leading-none mb-6 tracking-tighter">THE<br/>AUTHORITY<br/><span className="text-brand-500">BLUEPRINT</span></h2>
                            <div className="h-2 w-24 bg-brand-500 mx-auto rounded-full"></div>
                        </div>

                        {/* Bottom Info - Author */}
                        <div className="w-full text-center z-10 mt-8">
                            <p className="text-sm text-slate-400 font-medium tracking-wide">By Daniel Bailey</p>
                            <p className="text-brand-500 text-[10px] uppercase tracking-[0.2em] font-bold mt-1">Systems Architect</p>
                        </div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                    </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -right-4 top-10 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-slide-up" style={{animationDelay: '0.5s'}}>
                   <div className="bg-green-500/20 p-2 rounded-full">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                   </div>
                   <div>
                      <p className="text-xs text-slate-400 font-medium uppercase">Conversion Rate</p>
                      <p className="text-white font-bold text-lg">+12.5%</p>
                   </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -left-4 bottom-20 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-3 animate-slide-up" style={{animationDelay: '0.8s'}}>
                   <div className="bg-brand-500/20 p-2 rounded-full">
                      <Download className="w-5 h-5 text-brand-500" />
                   </div>
                   <div>
                      <p className="text-xs text-slate-400 font-medium uppercase">Free Guide</p>
                      <p className="text-white font-bold">14 Pages</p>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};