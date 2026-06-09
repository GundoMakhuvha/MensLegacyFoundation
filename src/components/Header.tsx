import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mlf-logo.png";
import ContactBar from "./ContactBar";
import AnnouncementBanner from "./AnnouncementBanner";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-navy-gradient shadow-lg">
      <AnnouncementBanner />
      <ContactBar />
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Men's Legacy Foundation Logo" className="h-10 w-auto" />
          <div className="hidden sm:block">
            <span className="text-lg font-display font-bold text-primary-foreground">Men's Legacy Foundation</span>
            <span className="block text-xs text-gold-light tracking-wide">From Boy Child to a Man of Value</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.to
                  ? "bg-primary-foreground/15 text-gold"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="ml-3 px-5 py-2 bg-gold-gradient text-navy-dark text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-navy-dark border-t border-primary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-gold bg-primary-foreground/10"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link
              to="/donate"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-5 py-2 bg-gold-gradient text-navy-dark text-sm font-semibold rounded-md"
            >
              Donate
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
