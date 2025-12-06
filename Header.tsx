import React from 'react';
import { Layers } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-8 flex justify-between items-center z-20">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/20">
          <Layers className="w-5 h-5 text-white" />
        </div>
        <span className="font-bold text-lg tracking-tight text-white uppercase">
          AUTHORITY<span className="text-brand-500">SYSTEMS</span>
        </span>
      </div>
    </header>
  );
};