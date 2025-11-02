import React, { useMemo, useState } from 'react';
import Hero from './components/Hero';
import PreviewControls from './components/PreviewControls';
import AppStorePreview from './components/AppStorePreview';
import PlayStorePreview from './components/PlayStorePreview';
import { Apple, Play } from 'lucide-react';

export default function App() {
  const [state, setState] = useState({
    icon: '',
    screenshots: '',
    feature: '',
    name: 'NovaTasks',
    subtitle: 'Plan. Focus. Finish.'
  });

  // Example defaults for a quick demo look
  const merged = useMemo(() => {
    const defaults = {
      icon:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=256&auto=format&fit=crop',
      feature:
        'https://images.unsplash.com/photo-1557682268-e3955ed5d83f?q=80&w=1600&auto=format&fit=crop',
      screenshots:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1080&auto=format&fit=crop, https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1080&auto=format&fit=crop, https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1080&auto=format&fit=crop'
    };
    return {
      ...defaults,
      ...state,
    };
  }, [state]);

  const [store, setStore] = useState('appstore');

  return (
    <div className="min-h-dvh w-full bg-slate-950 text-white">
      <Hero />
      <PreviewControls values={state} onChange={setState} />

      <div className="mx-auto mt-8 w-full max-w-6xl px-6">
        <div className="inline-flex overflow-hidden rounded-full border border-white/10 bg-white/5 p-1 text-sm backdrop-blur">
          <button
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 transition ${
              store === 'appstore' ? 'bg-white text-slate-900' : 'text-white/80 hover:text-white'
            }`}
            onClick={() => setStore('appstore')}
          >
            <Apple className="h-4 w-4" /> App Store
          </button>
          <button
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 transition ${
              store === 'playstore' ? 'bg-white text-slate-900' : 'text-white/80 hover:text-white'
            }`}
            onClick={() => setStore('playstore')}
          >
            <Play className="h-4 w-4" /> Google Play
          </button>
        </div>
      </div>

      {store === 'appstore' ? (
        <AppStorePreview
          icon={merged.icon}
          name={merged.name}
          subtitle={merged.subtitle}
          screenshots={merged.screenshots}
        />
      ) : (
        <PlayStorePreview
          icon={merged.icon}
          name={merged.name}
          subtitle={merged.subtitle}
          screenshots={merged.screenshots}
          feature={merged.feature}
        />
      )}

      <footer className="mx-auto w-full max-w-6xl px-6 pb-16 text-center text-xs text-white/50">
        Built for previewing store listings. Drag the window to see responsive behavior.
      </footer>
    </div>
  );
}
