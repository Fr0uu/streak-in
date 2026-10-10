import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';
import { Header } from '@/components/layout/Header';
import { BottomNav } from '@/components/layout/BottomNav';

export const metadata: Metadata = {
  title: 'Calisthenic Siswa Sibuk - Latihan Ringkas Mandiri',
  description: 'Website latihan calisthenic untuk siswa SMA/SMK yang sibuk dengan sesi 10-30 menit.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body
        className="bg-[#15171A] text-[#EEF1F4] min-h-screen flex flex-col selection:bg-[#C8F135] selection:text-[#15171A]"
        suppressHydrationWarning
      >
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">{children}</div>
            <BottomNav />
          </div>
        </Providers>
      </body>
    </html>
  );
}

