import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

// Lucide doesn't ship a TikTok icon — inline SVG matching the Lucide stroke style.
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

const Footer = () => (
  <footer className="bg-navy-gradient text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="font-display text-lg font-bold text-gold mb-4">Men's Legacy Foundation</h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            From Boy Child to a Man of Value. Empowering the next generation of young men through mentorship, education, and community.
          </p>
          <p className="text-xs text-primary-foreground/50 mt-4">NPO Reg Number: 290-062 NPO</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-display text-lg font-bold text-gold mb-4">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Our Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/events", label: "Events" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg font-bold text-gold mb-4">Contact Us</h3>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <div className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 text-gold shrink-0" />
              <div>
                
                <p>Vice Chairman (Wandile): +27 81 215 0048</p>
               </div>
            </div>
            <div className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 text-gold shrink-0" />
              <span>info@menslegacyfoundation.org.za</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
              <span>11 Izellah, Percy Steward Street, Rangeview, Krugersdorp, 1739</span>
            </div>
            <div className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 text-gold shrink-0" />
              <span>Mon – Fri, 9am – 6pm</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-display text-lg font-bold text-gold mb-4">Follow Us</h3>
          <p className="text-sm text-primary-foreground/70 mb-4">Stay connected on social media for updates and events.</p>
          <div className="flex gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80 hover:bg-gold hover:text-navy-dark hover:scale-110 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/40">
      © {new Date().getFullYear()} Men's Legacy Foundation. All rights reserved.
      <p> 
       Developed By: Capvtal Innovations.
       <br></br>
    </p>
    </div>
    
  </footer>
);

export default Footer;
