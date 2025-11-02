import React from 'react';
import { Apple, Star, Share2, Download } from 'lucide-react';
import ScreenshotCarousel from './ScreenshotCarousel';

export default function AppStorePreview({ icon, name, subtitle, screenshots }) {
  const shots = (screenshots || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="rounded-3xl border border-slate-200/10 bg-white/5 p-6 shadow-xl backdrop-blur">
        {/* Top bar */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white/80">
            <Apple className="h-5 w-5" />
            <span className="text-sm">App Store</span>
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <button className="rounded-full bg-white/10 px-3 py-1.5 text-xs hover:bg-white/15">Open</button>
            <button className="rounded-full bg-white/10 p-1.5 hover:bg-white/15" aria-label="Share">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="h-24 w-24 overflow-hidden rounded-3xl ring-1 ring-white/15">
            {icon ? (
              <img src={icon} alt="App icon" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-indigo-500 to-pink-500" />
            )}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">{name || 'Your App Name'}</h2>
            <p className="mt-1 text-sm text-white/70">{subtitle || 'A delightful app experience.'}</p>
            <div className="mt-3 flex items-center gap-4 text-xs text-white/70">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.9 • 12K Ratings</span>
              </div>
              <span>Age 4+</span>
              <span>Category • Productivity</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow hover:bg-slate-100">
              <Download className="h-4 w-4" /> Get
            </button>
          </div>
        </div>

        {/* Screenshots */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ScreenshotCarousel screenshots={shots} aspect="phone" />
          <ScreenshotCarousel screenshots={shots} aspect="phone" />
          <ScreenshotCarousel screenshots={shots} aspect="phone" />
        </div>

        {/* Description */}
        <div className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
          <h3 className="text-base font-semibold text-white">Description</h3>
          <p>
            {name || 'This app'} helps you stay organized and productive. Create tasks, track progress, and collaborate
            with a beautiful, intuitive interface crafted for speed and clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
