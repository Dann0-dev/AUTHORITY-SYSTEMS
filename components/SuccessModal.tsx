import React from 'react';
import { X, CheckCircle, Mail, ArrowRight } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-md p-8 shadow-2xl shadow-brand-500/20 transform animate-slide-up">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">
            You're In!
          </h3>
          
          <p className="text-slate-400 mb-8">
            The Authority Blueprint is on its way to your inbox. Please allow 5-10 minutes for delivery.
          </p>

          <div className="w-full bg-slate-800/50 rounded-xl p-4 border border-slate-700 mb-6 text-left flex items-start gap-4">
            <div className="bg-brand-500/20 p-2 rounded-lg shrink-0">
               <Mail className="w-5 h-5 text-brand-500" />
            </div>
            <div>
               <h4 className="text-white font-medium text-sm">Next Step: Check your email</h4>
               <p className="text-slate-500 text-xs mt-1">Look for an email from "Authority Systems" with your download link.</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            Got it, thanks
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};