import React, { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function ScreenshotCarousel({ screenshots = [], aspect = 'phone', rounded = 'lg' }) {
  const validShots = useMemo(
    () => (screenshots && screenshots.length ? screenshots : []),
    [screenshots]
  );
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + validShots.length) % validShots.length);
  const next = () => setIndex((i) => (i + 1) % validShots.length);

  const frameClass = useMemo(() => {
    switch (aspect) {
      case 'tablet':
        return 'aspect-[4/3]';
      case 'landscape':
        return 'aspect-[16/9]';
      default:
        return 'aspect-[9/19.5]'; // modern phone ratio
    }
  }, [aspect]);

  if (!validShots.length) {
    return (
      <div className={`relative w-full ${frameClass} rounded-${rounded} border border-slate-200/20 bg-slate-900/40 p-6 text-center`}> 
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-400">
          <ImageIcon className="h-8 w-8" />
          <p className="text-sm">Add screenshots to preview here</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${frameClass}`}>
      <img
        src={validShots[index]}
        alt={`Screenshot ${index + 1}`}
        className={`h-full w-full rounded-${rounded} object-cover shadow-2xl ring-1 ring-slate-200/10`}
        onError={(e) => {
          e.currentTarget.style.opacity = '0.2';
        }}
      />
      {validShots.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-2 text-white shadow-md backdrop-blur transition hover:bg-slate-900/90"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-slate-900/70 p-2 text-white shadow-md backdrop-blur transition hover:bg-slate-900/90"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
            {validShots.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
