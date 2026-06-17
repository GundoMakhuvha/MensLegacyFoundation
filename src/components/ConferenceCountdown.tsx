import { useState, useEffect } from "react";
import { X } from "lucide-react";

const TARGET = new Date("2026-06-26T00:00:00+02:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const ConferenceCountdown = () => {
  const [visible, setVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hrs: 0, mins: 0, secs: 0 });
  const [past, setPast] = useState(false);

  useEffect(() => {
    const tick = () => {
      const diff = TARGET.getTime() - Date.now();
      if (diff <= 0) { setPast(true); return; }
      const s = Math.floor(diff / 1000);
      const m = Math.floor(s / 60);
      const h = Math.floor(m / 60);
      const d = Math.floor(h / 24);
      setTimeLeft({ days: d, hrs: h % 24, mins: m % 60, secs: s % 60 });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!visible) return null;

  return (
    <div className="mx-auto max-w-5xl px-4 pt-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gold/40 bg-navy-dark px-5 py-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-gold mb-1">
            Upcoming event
          </p>
          <p className="text-sm font-medium text-gold/90">
            MLF 4th Annual Conference &nbsp;·&nbsp; 26 – 28 June 2026
          </p>
        </div>

        {past ? (
          <p className="text-sm font-medium text-gold">The conference has begun! 🎉</p>
        ) : (
          <div className="flex gap-2.5 flex-wrap">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: pad(timeLeft.hrs) },
              { label: "Mins", value: pad(timeLeft.mins) },
              { label: "Secs", value: pad(timeLeft.secs) },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex min-w-[54px] flex-col items-center rounded-xl border border-gold/30 bg-gold/10 px-3.5 py-2"
              >
                <span className="text-2xl font-bold tabular-nums text-gold leading-none">
                  {value}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-widest text-gold/50">
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss countdown"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-gold/30 text-gold/50 hover:bg-gold/10 hover:text-gold transition-colors self-start"
        >
          <X size={15} />
        </button>
      </div>
    </div>
  );
};

export default ConferenceCountdown;