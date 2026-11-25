import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight, Heart } from "lucide-react";
import logo from "@/assets/mlf-logo.png";
import AnnouncementBanner from "./AnnouncementBanner";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

const contacts = [
  { label: "Chairman", number: "067 224 8962", tel: "+27672248962" },
  { label: "Vice Chairman", number: "081 215 0048", tel: "+27812150048" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Sliding pill indicator
  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState<{ left: number; width: number; visible: boolean }>({
    left: 0,
    width: 0,
    visible: false,
  });
  const [hovered, setHovered] = useState<string | null>(null);

  const target = hovered ?? location.pathname;

  useLayoutEffect(() => {
    const measure = () => {
      const el = linkRefs.current[target];
      const nav = navRef.current;
      if (!el || !nav) {
        setIndicator((i) => ({ ...i, visible: false }));
        return;
      }
      const navBox = nav.getBoundingClientRect();
      const box = el.getBoundingClientRect();
      setIndicator({ left: box.left - navBox.left, width: box.width, visible: true });
    };
    measure();
    window.addEventListener("resize", measure);
    // Fonts can shift widths once loaded
    document.fonts?.ready.then(measure).catch(() => {});
    return () => window.removeEventListener("resize", measure);
  }, [target]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div
        className={`pointer-events-auto grid transition-all duration-500 ${
          scrolled ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
        }`}
      >
        <div className="overflow-hidden">
          <AnnouncementBanner />
        </div>
      </div>

      <div className="px-3 sm:px-4 pt-3">
        <div
          className={`pointer-events-auto glass mx-auto max-w-6xl rounded-full pl-2 pr-2 py-2 flex items-center justify-between gap-3 transition-all duration-500 ${
            scrolled ? "shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]" : "shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5 rounded-full pr-3 group" aria-label="Men's Legacy Foundation home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 overflow-hidden">
              <img src={logo} alt="" className="h-8 w-auto" />
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display text-[15px] font-bold text-white">Men's Legacy</span>
              <span className="text-[11px] text-gold-light/90 tracking-wide">Foundation</span>
            </span>
          </Link>

          {/* Desktop pill nav */}
          <nav
            ref={navRef}
            onMouseLeave={() => setHovered(null)}
            className="relative hidden lg:flex items-center rounded-full bg-white/[0.04] p-1 ring-1 ring-white/[0.06]"
            aria-label="Main"
          >
            <span
              aria-hidden="true"
              className="absolute top-1 bottom-1 rounded-full bg-white/[0.12] ring-1 ring-white/10 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.visible ? 1 : 0,
              }}
            />
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  ref={(el) => (linkRefs.current[link.to] = el)}
                  onMouseEnter={() => setHovered(link.to)}
                  aria-current={active ? "page" : undefined}
                  className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    active ? "text-white" : "text-white/65 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute left-1/2 -bottom-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${contacts[0].tel}`}
              className="hidden xl:flex items-center gap-2 rounded-full px-3 py-2 text-xs text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Phone size={14} className="text-gold" />
              {contacts[0].number}
            </a>
            <Link
              to="/donate"
              className="btn-shine hidden sm:inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy-dark hover:shadow-[0_0_0_4px_hsl(var(--gold)/0.25)] transition-shadow"
            >
              <Heart size={15} className="fill-navy-dark/80" />
              Donate
            </Link>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10 hover:bg-white/15 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          className={`lg:hidden pointer-events-auto mx-auto max-w-6xl origin-top transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <nav className="glass !bg-[hsl(var(--navy-dark)/0.94)] mt-2 rounded-[28px] p-3 shadow-2xl" aria-label="Mobile">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center justify-between rounded-full px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-white text-navy-dark"
                        : "bg-white/[0.06] text-white/85 hover:bg-white/[0.12]"
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight size={15} className={active ? "text-navy-dark/60" : "text-white/35"} />
                  </Link>
                );
              })}
            </div>
            <Link
              to="/donate"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-5 py-3 text-sm font-semibold text-navy-dark"
            >
              <Heart size={15} className="fill-navy-dark/80" />
              Donate
            </Link>
            <div className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3">
              {contacts.map((c) => (
                <a
                  key={c.tel}
                  href={`tel:${c.tel}`}
                  className="flex items-center justify-between rounded-full px-4 py-2 text-xs text-white/70 hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <Phone size={13} className="text-gold" />
                    {c.label}
                  </span>
                  <span className="font-medium text-white/90">{c.number}</span>
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
