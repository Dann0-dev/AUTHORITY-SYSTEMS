import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SuccessModal } from './components/SuccessModal';

const App: React.FC = () => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleOptInSuccess = () => {
    setIsSuccessOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-950 selection:bg-brand-500 selection:text-white">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <Header />
      
      <main className="flex-grow z-10 flex flex-col justify-center">
        <Hero onSuccess={handleOptInSuccess} />
      </main>

      <Footer />
      
      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={() => setIsSuccessOpen(false)} 
      />
    </div>
  );
};

export default App;