import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[56vh] min-h-[420px] overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to improve text contrast (do not block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            Live App Listing Preview
          </div>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            See your app exactly like it appears on the stores
          </h1>
          <p className="mt-3 max-w-xl text-sm text-white/70 sm:text-base">
            Upload your icon and screenshots, tweak metadata, and instantly preview a
            pixel‑perfect listing inspired by both the App Store and Google Play.
          </p>
        </div>
      </div>
    </section>
  );
}
