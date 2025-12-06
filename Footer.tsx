import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-900 bg-slate-950 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Authority Systems. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-slate-700 text-xs hover:text-brand-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-700 text-xs hover:text-brand-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};