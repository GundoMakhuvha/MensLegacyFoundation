import { Phone } from "lucide-react";

const ContactBar = () => (
  <div className="bg-navy-dark text-primary-foreground/90 text-xs sm:text-sm border-b border-primary-foreground/10">
    <div className="container mx-auto px-4 py-1.5 flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-1">
      <a
        href="tel:+27672248962"
        className="flex items-center gap-1.5 hover:text-gold transition-colors"
      >
        <Phone size={13} className="text-gold" />
        <span className="font-medium">Chairman:</span>
        <span>067 224 8962</span>
      </a>
      <span className="hidden sm:inline text-primary-foreground/30">|</span>
      <a
        href="tel:+27812150048"
        className="flex items-center gap-1.5 hover:text-gold transition-colors"
      >
        <Phone size={13} className="text-gold" />
        <span className="font-medium">Vice Chairman:</span>
        <span>081 215 0048</span>
      </a>
    </div>
  </div>
);

export default ContactBar;