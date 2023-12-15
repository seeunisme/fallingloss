import '@styles/global.css';

import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: '박세은이다',
  description: '박세은이다',
};

export default function AlphaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${raleway.className} h-screen overflow-hidden bg-black font-thin`}>
      <header className="flex h-20 w-full items-center justify-center bg-black  text-white">
        Release memories of your loss.
      </header>
      {children}
    </div>
  );
}
