import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const STORAGE_KEY = "mlf-announcement-2026-dismissed";

const AnnouncementBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="relative bg-gold-gradient overflow-hidden">
      <div
        className="flex w-max"
        style={{ animation: "marquee 25s linear infinite" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-10 py-2 text-navy-dark text-xs sm:text-sm font-medium whitespace-nowrap"
          >
            <span className="text-navy-dark/40" aria-hidden="true">✦</span>
            <span className="font-bold">MLF 4th Annual Conference</span>
            <span className="text-navy-dark/40">·</span>
            <span>26–28 June 2026</span>
            <span className="text-navy-dark/40">·</span>
            <span>ALTELEKKER Youth Campsite</span>
            <span className="text-navy-dark/40">·</span>
            <Link
              to="/events"
              className="font-bold underline underline-offset-2 hover:no-underline"
            >
              View details →
            </Link>
          </div>
        ))}
      </div>

      <button
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-navy-dark/10 transition-colors z-10 text-navy-dark"
      >
        <X size={14} />
      </button>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBanner;