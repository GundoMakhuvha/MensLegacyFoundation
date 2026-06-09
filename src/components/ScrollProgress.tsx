import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-gold-gradient transition-[width] duration-100 ease-out shadow-[0_0_8px_hsl(var(--gold))]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;