'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Award, Bookmark, History } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export const BottomNav: React.FC = () => {
  const { currentUser } = useAuth();
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !currentUser) return null;

  // Don't show bottom nav inside active workout player to keep player full-focus
  if (pathname?.startsWith('/latihan/')) return null;

  const tabs = [
    { label: 'Beranda', path: '/home', icon: Home },
    { label: 'Skill', path: '/skills', icon: Award },
    { label: 'Library', path: '/library', icon: Bookmark },
    { label: 'Riwayat', path: '/riwayat', icon: History },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#15171A]/95 backdrop-blur border-t border-[#2E3238] safe-area-pb">
      <div className="grid grid-cols-4 max-w-md mx-auto h-16">
        {tabs.map((tab) => {
          const isActive = pathname === tab.path || (tab.path === '/skills' && pathname?.startsWith('/skills'));
          const Icon = tab.icon;
          return (
            <Link
              key={tab.path}
              href={tab.path}
              className={`flex flex-col items-center justify-center min-h-[48px] gap-1 transition-colors ${
                isActive ? 'text-[#C8F135]' : 'text-[#8A929C] hover:text-[#EEF1F4]'
              }`}
            >
              <div className={`p-1 rounded-lg ${isActive ? 'bg-[#C8F135]/15' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[#C8F135] stroke-[2.5]' : 'stroke-current'}`} />
              </div>
              <span className={`text-[11px] leading-none ${isActive ? 'font-bold text-[#C8F135]' : 'font-medium'}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
