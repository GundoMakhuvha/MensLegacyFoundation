import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain, Shield, Lightbulb } from "lucide-react";
import { useTypingEffect, phrases } from "@/hooks/useTypingEffect";
import Lightbox from "@/components/Lightbox";
import Testimonials from "@/components/Testimonials";
import CountUp from "@/components/CountUp";
import heroBg1 from "@/assets/hero-bg.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";
import campImg from "@/assets/camp-activity.jpg";
import logo from "@/assets/mlf-logo.png";

const heroImages = [heroBg1, heroBg2, heroBg3, heroBg4];



const Home = () => {
  const { displayText, isComplete, phraseIndex } = useTypingEffect(phrases, 70, 40, 1200);
  const [showContent, setShowContent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    if (isComplete) {
      const t = setTimeout(() => setShowContent(true), 400);
      return () => clearTimeout(t);
    }
  }, [isComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Slideshow background */}
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentSlide === i ? 1 : 0 }}
          >
            <img
              src={img}
              alt={`Men's Legacy Foundation slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-navy-dark/75 z-[1]" />

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === i ? "bg-gold w-8" : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Typing headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 min-h-[1.2em]">
            {!isComplete && (
              <>
                {displayText}
                <span className="inline-block w-[3px] h-[0.85em] bg-gold ml-1 animate-pulse align-middle" />
              </>
            )}
            {isComplete && (
              <>
                Men's <span className="text-gold">Legacy</span> Foundation
              </>
            )}
          </h1>

          {/* Content that fades in after typing */}
          <div className={`transition-all duration-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <p className="max-w-2xl mx-auto text-primary-foreground/80 text-lg mb-8">
              From Boy Child To A Man Of Value
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gold-gradient text-navy-dark font-semibold rounded-md hover:opacity-90 transition-opacity text-lg">
                Get Involved
              </Link>
              <Link to="/about" className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition-colors text-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Address */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 reveal">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Problems We Address</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Mindset Development",
                desc: "Mindsets shape thoughts, feelings, and behaviors. We address all 8 types: fixed, growth, abundance, scarcity, positive, negative, open, and closed mindsets — helping boys develop a growth-oriented perspective.",
              },
              {
                icon: Shield,
                title: "Self-Respect",
                desc: "The inner sense of pride, worth, and dignity. We foster self-awareness, self-acceptance, self-care, boundary setting, integrity, and self-forgiveness in every young man.",
              },
              {
                icon: Lightbulb,
                title: "Entrepreneurial Skills",
                desc: "Essential for identifying opportunities, developing innovative solutions, and building successful ventures. We teach risk-taking, innovation, creativity, financial management, and emotional intelligence.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="bg-card rounded-lg p-8 shadow-md border border-border group card-premium reveal"
              >
                <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5 group-hover:bg-gold transition-colors">
                  <item.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 reveal">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Our Reach</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { year: "2023", end: 103, suffix: "", label: "Boys at Annual Event" },
              { year: "2024", end: 67, suffix: "", label: "Boys at Annual Event" },
              { year: "2025", end: 74, suffix: "", label: "Boys at Annual Event" },
            ].map((item, i) => (
              <div key={item.year} className="text-center reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <p className="text-gold font-semibold text-sm tracking-widest mb-2">{item.year}</p>
                <CountUp
                  end={item.end}
                  suffix={item.suffix}
                  className="font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-2 block"
                />
                <p className="text-primary-foreground/60 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">About Us</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">A Bridge for the Boy Child</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Men's Legacy Foundation is a nonprofit organization committed to empowering and educating the boy child. We serve as a bridge for boys from fatherless homes and communities lacking positive male role models.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe every young man deserves the guidance, skills, and support needed to navigate life's challenges and build a successful future.
              </p>
              <Link to="/about" className="inline-block px-6 py-3 bg-navy text-primary-foreground font-semibold rounded-md hover:bg-navy-light transition-colors">
                Read Our Story
              </Link>
            </div>
            <button onClick={() => setLightboxImage(campImg)} className="rounded-lg overflow-hidden shadow-xl cursor-pointer reveal">
              <img src={campImg} alt="Boys participating in team activities" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Donation CTA */}
      <section className="py-16 bg-gold-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-dark mb-4">Help Shape the Future</h2>
          <p className="text-navy-dark/80 max-w-xl mx-auto mb-8 text-lg">
            Your sponsorship and donations directly impact young lives.<br></br> 
            Vice chairman (Wandile): 081 215 0048 <br></br> Chairman (Bafana): 079 272-7490
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-navy text-primary-foreground font-semibold rounded-md hover:bg-navy-light transition-colors text-lg">
              Sponsor a Boy
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-navy-dark/30 text-navy-dark font-semibold rounded-md hover:bg-navy-dark/10 transition-colors text-lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {lightboxImage && (
        <Lightbox src={lightboxImage} alt="Full size view" onClose={() => setLightboxImage(null)} />
      )}
    </>
  );
};

export default Home;
