import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function PreviewControls({ values, onChange }) {
  const handle = (key) => (e) => onChange({ ...values, [key]: e.target.value });

  return (
    <section className="mx-auto -mt-16 w-full max-w-6xl px-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/10 bg-slate-900/70 p-5 shadow-2xl backdrop-blur">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-300/70">
            App Branding
          </p>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-2xl ring-1 ring-white/10">
              {values.icon ? (
                <img src={values.icon} alt="App icon" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-slate-800 text-slate-500">
                  <ImageIcon className="h-6 w-6" />
                </div>
              )}
            </div>
            <div className="grid w-full gap-2">
              <label className="text-xs text-slate-400">App icon URL</label>
              <input
                type="url"
                value={values.icon}
                onChange={handle('icon')}
                placeholder="https://.../icon.png"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-emerald-400/50"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200/10 bg-slate-900/70 p-5 shadow-2xl backdrop-blur">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-300/70">
            Screenshots (comma separated URLs)
          </p>
          <textarea
            value={values.screenshots}
            onChange={handle('screenshots')}
            placeholder="https://.../shot1.jpg, https://.../shot2.jpg, ..."
            rows={3}
            className="min-h-[48px] w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-emerald-400/50"
          />
          <p className="mt-2 text-xs text-slate-400">
            Tip: Use tall images for a phone look. Landscape works too.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/10 bg-slate-900/70 p-5 shadow-2xl backdrop-blur">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-300/70">
            Featured art & metadata
          </p>
          <div className="grid gap-3">
            <div className="grid gap-2">
              <label className="text-xs text-slate-400">Feature graphic URL</label>
              <input
                type="url"
                value={values.feature}
                onChange={handle('feature')}
                placeholder="https://.../feature.jpg"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-emerald-400/50"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-xs text-slate-400">App name</label>
              <input
                type="text"
                value={values.name}
                onChange={handle('name')}
                placeholder="Your App Name"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-emerald-400/50"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-xs text-slate-400">Short description</label>
              <input
                type="text"
                value={values.subtitle}
                onChange={handle('subtitle')}
                placeholder="Catchy one-liner about your app"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-emerald-400/50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
