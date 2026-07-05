import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-bg-deep">
      {/* Animated Mesh Gradient Background Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] bg-purple-600/10 rounded-full blur-[100px] animate-float" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md animate-float" style={{ animationDuration: '8s' }}>
        <div className="flex flex-col items-center mb-10 gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.2)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary drop-shadow-[0_0_8px_rgba(37,211,102,0.5)]">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight glow-text text-white">9WhatsApp</h1>
        </div>
        
        {/* Child cards will naturally be glassy because we updated Card.tsx */}
        <div className="drop-shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}
