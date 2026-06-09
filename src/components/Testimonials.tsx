import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "MLF gave my son the male role models he never had at home. He came back from camp standing taller, speaking with purpose, and carrying himself like a young man of value.",
    name: "Nomsa M.",
    role: "Parent, Krugersdorp",
  },
  {
    quote:
      "The mindset and self-respect sessions changed how I see myself. I learnt that being a man is about responsibility and discipline, not noise.",
    name: "Sipho N.",
    role: "MLF Alumnus, 2024 Camp",
  },
  {
    quote:
      "Partnering with Men's Legacy Foundation has been one of the most rewarding community investments we've made. Real boys, real change, real impact.",
    name: "Thabo K.",
    role: "Community Partner",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[i];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Voices of Change</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">What People Are Saying</h2>
        </div>
        <div className="max-w-3xl mx-auto reveal">
          <div className="relative bg-card rounded-2xl shadow-xl border border-border p-8 md:p-12 card-premium">
            <Quote className="absolute -top-5 left-8 w-12 h-12 text-gold bg-card rounded-full p-2 shadow-md" />
            <div key={i} className="animate-fade-in">
              <p className="text-base md:text-lg text-foreground leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-display font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setI((p) => (p - 1 + testimonials.length) % testimonials.length)}
                    aria-label="Previous testimonial"
                    className="w-9 h-9 rounded-full border border-border hover:bg-navy hover:text-primary-foreground hover:border-navy transition-colors flex items-center justify-center"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setI((p) => (p + 1) % testimonials.length)}
                    aria-label="Next testimonial"
                    className="w-9 h-9 rounded-full border border-border hover:bg-navy hover:text-primary-foreground hover:border-navy transition-colors flex items-center justify-center"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-1.5 mt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-8 bg-gold" : "w-1.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;