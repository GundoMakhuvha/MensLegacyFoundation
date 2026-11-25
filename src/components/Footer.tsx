import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, ArrowUpRight, Heart } from "lucide-react";
import logo from "@/assets/mlf-logo.png";

// Lucide doesn't ship a TikTok icon, so this inline SVG matches the Lucide style.
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.91a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.34Z" />
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/men.slegacyfoundation?igsh=aGZnam5qb3ViZWdr&utm_source=qr", Icon: Instagram },
  { label: "TikTok", href: "https://www.tiktok.com/@mens.legacy.found?_r=1&_t=ZS-96ADxh4zBJK", Icon: TikTokIcon },
  { label: "Facebook", href: "https://www.facebook.com/share/1H4LBwA8Cn/?mibextid=wwXIfr", Icon: Facebook },
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
  { to: "/donate", label: "Donate" },
];

const Footer = () => (
  <footer className="bg-navy-gradient text-primary-foreground">
    <div className="container mx-auto px-4 pt-16 pb-8">
      {/* CTA card */}
      <div className="relative overflow-hidden rounded-[32px] bg-white/[0.04] ring-1 ring-white/10 p-8 sm:p-12 mb-16">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="text-gold text-xs font-semibold uppercase tracking-[0.25em] mb-3">Be part of the legacy</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold max-w-xl leading-tight">
              Help a boy become a man of value.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/donate"
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 font-semibold text-navy-dark"
            >
              <Heart size={16} className="fill-navy-dark/80" /> Donate
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold ring-1 ring-white/25 hover:bg-white/10 transition-colors"
            >
              Get involved <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* About */}
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center gap-3 mb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
              <img src={logo} alt="" className="h-9 w-auto" />
            </span>
            <span className="font-display text-lg font-bold">Men's Legacy Foundation</span>
          </Link>
          <p className="text-sm text-white/60 leading-relaxed max-w-sm">
            From Boy Child to a Man of Value. Empowering the next generation of young men through mentorship, education, and community.
          </p>
          <span className="mt-5 inline-flex rounded-full bg-white/[0.06] px-3 py-1 text-[11px] text-white/55 ring-1 ring-white/10">
            NPO Reg Number: 290-062 NPO
          </span>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">Explore</h3>
          <nav className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-white/70 hover:text-gold transition-colors w-fit">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="lg:col-span-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">Contact</h3>
          <div className="flex flex-col gap-3.5 text-sm text-white/70">
            <a href="tel:+27672248962" className="flex items-start gap-3 hover:text-gold transition-colors">
              <Phone size={16} className="mt-0.5 text-gold shrink-0" />
              <span>Chairman: 067 224 8962</span>
            </a>
            <a href="tel:+27812150048" className="flex items-start gap-3 hover:text-gold transition-colors">
              <Phone size={16} className="mt-0.5 text-gold shrink-0" />
              <span>Vice Chairman (Wandile): 081 215 0048</span>
            </a>
            <a href="mailto:info@menslegacyfoundation.co.za" className="flex items-start gap-3 hover:text-gold transition-colors">
              <Mail size={16} className="mt-0.5 text-gold shrink-0" />
              <span>info@menslegacyfoundation.co.za</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
              <span>11 Izellah, Percy Steward Street, Rangeview, Krugersdorp, 1739</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 text-gold shrink-0" />
              <span>Mon to Fri, 9am to 6pm</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">Follow</h3>
          <div className="flex gap-2.5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10 text-white/80 hover:bg-gold hover:text-navy-dark hover:ring-gold transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 pb-20 sm:pb-0 sm:px-16 text-xs text-white/45">
        <p>© {new Date().getFullYear()} Men's Legacy Foundation. All rights reserved.</p>
        <a
          href="https://capvtal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] px-4 py-2 ring-1 ring-white/10 hover:ring-gold/50 hover:text-white transition-all"
        >
          Developed by <span className="font-semibold text-white/80 group-hover:text-gold transition-colors">Capvtal Innovations</span>
          <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
