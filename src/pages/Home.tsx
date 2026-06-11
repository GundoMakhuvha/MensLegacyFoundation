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
      <section className="relative min-h-[100svh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden">
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
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-navy-dark/75 z-[1]" />

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === i
                  ? "bg-gold w-7"
                  : "bg-primary-foreground/40 hover:bg-primary-foreground/60 w-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-5 text-center">
          {/* Typing headline */}
          <h1 className="font-display text-[2.1rem] leading-[1.15] sm:text-5xl md:text-7xl font-bold text-primary-foreground mb-5 min-h-[2.4em] sm:min-h-[1.2em]">
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
          <div
            className={`transition-all duration-700 ${
              showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="max-w-2xl mx-auto text-primary-foreground/80 text-base sm:text-lg mb-8 px-2">
              From Boy Child To A Man Of Value
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center px-4 sm:px-0">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-gold-gradient text-navy-dark font-semibold rounded-md hover:opacity-90 transition-opacity text-base sm:text-lg text-center"
              >
                Get Involved
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-md hover:bg-primary-foreground/10 transition-colors text-base sm:text-lg text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Address */}
      <section className="py-14 sm:py-20 bg-secondary">
        <div className="container mx-auto px-5">
          <div className="text-center mb-10 sm:mb-14 reveal">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2">
              What We Do
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Problems We Address
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
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
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card rounded-lg p-6 sm:p-8 shadow-md border border-border group card-premium reveal"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-navy flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-gold transition-colors">
                  <item.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-14 sm:py-20 bg-navy-gradient">
        <div className="container mx-auto px-5">
          <div className="text-center mb-10 sm:mb-14 reveal">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2">
              Our Reach
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground">
              Impact in Numbers
            </h2>
          </div>
          {/* Horizontal pill layout on mobile, grid on sm+ */}
          <div className="flex flex-row justify-center gap-4 sm:grid sm:grid-cols-3 sm:gap-8 sm:max-w-3xl sm:mx-auto overflow-x-auto pb-1">
            {[
              { year: "2023", end: 103, suffix: "", label: "Boys at Annual Event" },
              { year: "2024", end: 67, suffix: "", label: "Boys at Annual Event" },
              { year: "2025", end: 74, suffix: "", label: "Boys at Annual Event" },
            ].map((item, i) => (
              <div
                key={item.year}
                className="flex-shrink-0 text-center reveal bg-white/5 rounded-xl px-6 py-5 sm:bg-transparent sm:rounded-none sm:px-0 sm:py-0"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <p className="text-gold font-semibold text-xs tracking-widest mb-1 sm:mb-2">
                  {item.year}
                </p>
                <CountUp
                  end={item.end}
                  suffix={item.suffix}
                  className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary-foreground mb-1 sm:mb-2 block"
                />
                <p className="text-primary-foreground/60 text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image first on mobile for visual impact */}
            <button
              onClick={() => setLightboxImage(campImg)}
              className="rounded-lg overflow-hidden shadow-xl cursor-pointer reveal order-first md:order-last"
            >
              <img
                src={campImg}
                alt="Boys participating in team activities"
                className="w-full h-56 sm:h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>
            <div className="reveal">
              <p className="text-gold font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2">
                About Us
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                A Bridge for the Boy Child
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                The Men's Legacy Foundation is a nonprofit organization committed to empowering and
                educating the boy child. We serve as a bridge for boys from fatherless homes and
                communities lacking positive male role models.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                We believe every young man deserves the guidance, skills, and support needed to
                navigate life's challenges and build a successful future.
              </p>
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-navy text-primary-foreground font-semibold rounded-md hover:bg-navy-light transition-colors text-sm sm:text-base"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Donation CTA */}
      <section className="py-12 sm:py-16 bg-gold-gradient">
        <div className="container mx-auto px-5 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-3 sm:mb-4">
            Help Shape the Future
          </h2>
          <p className="text-navy-dark/80 max-w-xl mx-auto mb-2 text-base sm:text-lg">
            Your sponsorship and donations directly impact young lives.
          </p>
          {/* Contact pills — much cleaner on mobile */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-7 sm:mb-8">
            <a
              href="tel:0812150048"
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy-dark/10 hover:bg-navy-dark/20 transition-colors rounded-full text-navy-dark font-medium text-sm"
            >
              <span className="font-semibold">Vice Chairman (Wandile)</span>
              <span>081 215 0048</span>
            </a>
            <a
              href="tel:0792727490"
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy-dark/10 hover:bg-navy-dark/20 transition-colors rounded-full text-navy-dark font-medium text-sm"
            >
              <span className="font-semibold">Chairman (Bafana)</span>
              <span>079 272 7490</span>
            </a>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center px-4 sm:px-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-navy text-primary-foreground font-semibold rounded-md hover:bg-navy-light transition-colors text-base sm:text-lg text-center"
            >
              Sponsor a Boy
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 border-2 border-navy-dark/30 text-navy-dark font-semibold rounded-md hover:bg-navy-dark/10 transition-colors text-base sm:text-lg text-center"
            >
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