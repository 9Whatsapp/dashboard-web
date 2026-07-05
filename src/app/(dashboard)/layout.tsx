import Link from "next/link";
import React from "react";
import { LogoutButton } from "@/components/ui/LogoutButton";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-bg-surface/80 backdrop-blur-md">
        <div className="flex h-16 items-center px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-primary-glow flex items-center justify-center shadow-[0_0_15px_rgba(37,211,102,0.1)]">
              {/* Placeholder icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </div>
            <span className="font-semibold text-lg">9WhatsApp</span>
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <span className="nav-badge flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping opacity-60"></span>
              Dashboard
            </span>
            <LogoutButton />
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border-subtle bg-bg-deep hidden md:block">
          <nav className="flex flex-col gap-2 p-4">
            <Link href="/" className="px-3 py-2 text-sm font-medium rounded-md hover:bg-bg-elevated text-ink-primary transition-colors">
              Overview
            </Link>
            <Link href="/devices" className="px-3 py-2 text-sm font-medium rounded-md text-ink-muted hover:text-ink-primary hover:bg-bg-elevated transition-colors">
              Devices
            </Link>
            <Link href="/messages" className="px-3 py-2 text-sm font-medium rounded-md text-ink-muted hover:text-ink-primary hover:bg-bg-elevated transition-colors">
              Messages
            </Link>
            <Link href="#" className="px-3 py-2 text-sm font-medium rounded-md text-ink-muted hover:text-ink-primary hover:bg-bg-elevated transition-colors mt-8">
              Settings
            </Link>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </>
  );
}
