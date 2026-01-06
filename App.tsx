import React from 'react';
import ProcessTimeline from './components/ProcessTimeline';
import ProcessAccordion from './components/ProcessAccordion';
import ProcessBento from './components/ProcessBento';
import ProcessCards from './components/ProcessCards';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-[#1a73e8] rounded-lg flex items-center justify-center">
               <span className="text-white font-bold text-xl">R</span>
             </div>
             <span className="font-bold text-slate-900 text-lg tracking-tight">RestoreUI</span>
           </div>
           <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
             <a href="#timeline" className="hover:text-[#1a73e8]">Timeline</a>
             <a href="#accordion" className="hover:text-[#1a73e8]">Accordion</a>
             <a href="#bento" className="hover:text-[#1a73e8]">Bento</a>
             <a href="#cards" className="hover:text-[#1a73e8]">Cards</a>
           </nav>
        </div>
      </header>

      <main>
        {/* Variant 1: Horizontal Timeline */}
        <div id="timeline">
           <div className="bg-slate-50 py-4 text-center border-b border-slate-200">
             <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Variant 01: Horizontal Timeline</span>
           </div>
           <ProcessTimeline />
        </div>

        {/* Variant 2: Vertical Accordion */}
        <div id="accordion">
           <div className="bg-white py-4 text-center border-t border-b border-slate-200">
             <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Variant 02: Vertical Accordion</span>
           </div>
           <ProcessAccordion />
        </div>

        {/* Variant 3: Bento Grid */}
        <div id="bento">
            <div className="bg-slate-50 py-4 text-center border-b border-slate-200">
             <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Variant 03: Bento Grid</span>
           </div>
           <ProcessBento />
        </div>

        {/* Variant 4: Progress Cards */}
        <div id="cards">
            <div className="bg-white py-4 text-center border-t border-b border-slate-200">
             <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Variant 04: Progress Cards</span>
           </div>
           <ProcessCards />
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-12 text-center">
        <p className="text-slate-400 text-sm">© 2024 RestoreUI Components. Built for restoration professionals.</p>
      </footer>
    </div>
  );
};

export default App;