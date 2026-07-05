import Link from "next/link";
import React from "react";
import { LogoutButton } from "@/components/ui/LogoutButton";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen bg-bg-deep flex flex-col overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-[-20%] w-[60vw] h-[30vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Navbar */}
      <header className="relative z-50 w-full border-b border-white/5 bg-white/5 backdrop-blur-xl">
        <div className="flex h-16 items-center px-6">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.15)] group-hover:shadow-[0_0_25px_rgba(37,211,102,0.3)] transition-all duration-300">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary drop-shadow-[0_0_5px_rgba(37,211,102,0.5)]">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight glow-text text-white">9WhatsApp</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <span className="nav-badge flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Operational
            </span>
            <LogoutButton />
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden relative z-10">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/5 bg-white/5 backdrop-blur-md hidden md:block">
          <nav className="flex flex-col gap-2 p-4">
            <Link href="/" className="px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-white/10 hover:translate-x-1 text-ink-primary transition-all duration-300 flex items-center gap-3 border border-transparent hover:border-white/5">
              Dashboard
            </Link>
            <Link href="/devices" className="px-3 py-2.5 text-sm font-medium rounded-lg text-ink-muted hover:text-ink-primary hover:bg-white/10 hover:translate-x-1 transition-all duration-300 flex items-center gap-3 border border-transparent hover:border-white/5">
              Devices
            </Link>
            <Link href="/messages" className="px-3 py-2.5 text-sm font-medium rounded-lg text-ink-muted hover:text-ink-primary hover:bg-white/10 hover:translate-x-1 transition-all duration-300 flex items-center gap-3 border border-transparent hover:border-white/5">
              Messages
            </Link>
            
            <div className="my-2 border-t border-white/5" />
            
            <Link href="#" className="px-3 py-2.5 text-sm font-medium rounded-lg text-ink-muted hover:text-ink-primary hover:bg-white/10 hover:translate-x-1 transition-all duration-300 flex items-center gap-3 border border-transparent hover:border-white/5">
              Settings
            </Link>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
