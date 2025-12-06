import React from 'react';
import { Magnet, ShieldCheck, FileText, PhoneCall } from 'lucide-react';

const phases = [
  {
    id: "01",
    title: "THE MAGNET",
    description: "Exchange value for an email with a high conversion lead magnet.",
    icon: Magnet,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20"
  },
  {
    id: "02",
    title: "TRUST ENGINE",
    description: "A 7-Day email sequence that builds trust in your expertise.",
    icon: ShieldCheck,
    color: "text-brand-400",
    bg: "bg-brand-400/10",
    border: "border-brand-400/20"
  },
  {
    id: "03",
    title: "SALES LETTER",
    description: "The story based sales letter that logically proves your lead needs your help.",
    icon: FileText,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20"
  },
  {
    id: "04",
    title: "DIAGNOSTIC CALL",
    description: "Diagnose, and prescribing your solutions to your qualified leads.",
    icon: PhoneCall,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20"
  }
];

export const Phases: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What's Inside The Blueprint?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">The exact 4-step framework we use to generate high-ticket clients consistently.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div 
              key={phase.id} 
              className={`group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/10`}
            >
              <div className="absolute top-6 right-6 text-5xl font-black text-slate-800/50 group-hover:text-slate-800 transition-colors select-none">
                {phase.id}
              </div>
              
              <div className={`w-12 h-12 rounded-lg ${phase.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <phase.icon className={`w-6 h-6 ${phase.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                {phase.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {phase.description}
              </p>
              
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-500 to-transparent w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};