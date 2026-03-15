import { Metadata } from 'next';
import { TerminalEmulator } from '@/components/TerminalEmulator';

export const metadata: Metadata = {
  title: 'Chisomo Misomali - Geek Mode',
  description: 'Interactive terminal-based portfolio exploration. Use Linux commands to explore my skills, projects, and achievements.',
  openGraph: {
    title: 'Chisomo Misomali - Geek Mode',
    description: 'Interactive terminal-based portfolio exploration',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chisomo Misomali Portfolio',
      },
    ],
  },
};

export default function GeekModePage() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <TerminalEmulator />
    </main>
  );
}
