import React from 'react';
import { Play, Star, Share2 } from 'lucide-react';
import ScreenshotCarousel from './ScreenshotCarousel';

export default function PlayStorePreview({ icon, name, subtitle, screenshots, feature }) {
  const shots = (screenshots || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="overflow-hidden rounded-3xl border border-slate-200/10 bg-white/5 shadow-xl backdrop-blur">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3 text-white/80">
            <Play className="h-5 w-5" />
            <span className="text-sm">Google Play</span>
          </div>
          <button className="rounded-full bg-white/10 p-1.5 text-white/80 hover:bg-white/15" aria-label="Share">
            <Share2 className="h-4 w-4" />
          </button>
        </div>

        {/* Feature graphic */}
        <div className="relative h-48 w-full bg-slate-800">
          {feature ? (
            <img src={feature} alt="Feature graphic" className="h-full w-full object-cover" />
          ) : (
            <div className="h-full w-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
          )}
        </div>

        {/* App header */}
        <div className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center">
          <div className="h-20 w-20 overflow-hidden rounded-2xl ring-1 ring-white/15">
            {icon ? (
              <img src={icon} alt="App icon" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-emerald-500" />
            )}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-white">{name || 'Your App Name'}</h2>
            <p className="mt-0.5 text-sm text-white/70">{subtitle || 'Organize, track, and achieve more.'}</p>
            <div className="mt-2 flex items-center gap-3 text-xs text-white/70">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.8 • 10K reviews</span>
              </div>
              <span>5M+ downloads</span>
              <span>Everyone</span>
            </div>
          </div>
          <div>
            <button className="rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow hover:bg-emerald-300">
              Install
            </button>
          </div>
        </div>

        {/* Screenshots row */}
        <div className="grid gap-6 px-6 pb-8 sm:grid-cols-2 lg:grid-cols-3">
          <ScreenshotCarousel screenshots={shots} aspect="phone" />
          <ScreenshotCarousel screenshots={shots} aspect="phone" />
          <ScreenshotCarousel screenshots={shots} aspect="phone" />
        </div>
      </div>
    </section>
  );
}
