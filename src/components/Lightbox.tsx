import { X } from "lucide-react";

interface LightboxProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

const Lightbox = ({ src, alt = "Full size view", onClose }: LightboxProps) => (
  <div className="fixed inset-0 z-50 bg-navy-dark/90 flex items-center justify-center p-4" onClick={onClose}>
    <button className="absolute top-6 right-6 text-primary-foreground hover:text-gold transition-colors" onClick={onClose}>
      <X size={32} />
    </button>
    <img src={src} alt={alt} className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
  </div>
);

export default Lightbox;
