import { useState } from "react";
import { Users, Sparkles } from "lucide-react";
import Lightbox from "@/components/Lightbox";

const teamMembers = [
  { name: "Mr. Mabena", role: "Chairman", bio: "A passionate leader dedicated to shaping the next generation of men.", image: "https://i.postimg.cc/8cdLGFhZ/Mabena.png" },
  { name: "Mr. Dlodlo", role: "Vice Chairman", bio: "Committed to building strong communities through mentorship and education.", image: "https://i.postimg.cc/GhF10b60/Wandi.png" },
  { name: "Mr. Sathekge", role: "Photographer", bio: "Captures and drives impactful programmes that transform young lives.", image: "https://i.postimg.cc/N0r9Y9tG/North-Face.png" },
  { name: "Mr. Kgole", role: "Fitness Coach", bio: "Health & Fittness for foundation with families and communities who need us most.", image: "https://i.postimg.cc/c44vC5Zy/Eish.png" },
];

const About = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Who We Are</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">Empowering boys to become men of value.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl reveal">
          <p className="text-muted-foreground leading-relaxed text-lg mb-6">
            The Men's Legacy Foundation is a nonprofit organization committed to empowering and educating the boy child. We believe that every young man deserves the guidance, skills, and support needed to navigate life's challenges and build a successful future.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg">
            We serve as a bridge for boys from fatherless homes and communities lacking positive male role models. Through our programmes, we provide the mentorship, life skills, and community they need to thrive.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg p-8 shadow-md border border-border card-premium reveal">
              <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">Changing the outlook of the Boy child in our country.</p>
              <p className="text-gold font-display italic text-lg">"Seeds for a better tomorrow."</p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-md border border-border card-premium reveal">
              <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building the boy child's mindset and perspective to make good decisions going forward. We equip young men with tools for success in all areas of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Started */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="reveal">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2 flex items-center gap-2">
                <Sparkles size={14} className="text-gold" /> Our Origin
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">How We Started</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Men's Legacy Foundation was born out of a simple but urgent observation: too many boys in our communities are growing up without the male role models they need to thrive. Founded in Krugersdorp, the foundation began as a small circle of men committed to investing in the next generation — fathers, mentors, and leaders who refused to stand by while another generation lost its way.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Inspired by personal stories of absent fathers, fractured homes, and the silent struggles young men face, our founders set out to build a bridge — a safe space where boys could be heard, mentored, and equipped with the mindset, skills, and self-respect needed to navigate life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as one camp with a handful of boys has grown into an annual movement reaching over 100 young men, supported by a community of mentors, sponsors, and families who believe that every boy deserves the chance to become a man of value.
              </p>
            </div>
            <div className="reveal grid grid-cols-2 gap-4">
              <button
                onClick={() => setLightboxImage({ src: "https://i.postimg.cc/bvTBLJDv/about-1.png", alt: "Founders meeting" })}
                className="aspect-square rounded-lg overflow-hidden shadow-lg col-span-2 cursor-pointer"
              >
                <img src="https://i.postimg.cc/bvTBLJDv/about-1.png" alt="The founding circle" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </button>
              <button
                onClick={() => setLightboxImage({ src: "https://i.postimg.cc/fTvm0Hpd/IMG-0921.jpg", alt: "Early camp moment" })}
                className="aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer"
              >
                <img src="https://i.postimg.cc/fTvm0Hpd/IMG-0921.jpg" alt="Early camp moment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </button>
              <button
                onClick={() => setLightboxImage({ src: "https://i.postimg.cc/P5F4qwwv/about-3.png", alt: "Mentors and boys" })}
                className="aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer"
              >
                <img src="https://i.postimg.cc/P5F4qwwv/about-3.png" alt="Mentors and boys" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 reveal">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Leadership</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Team</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.role} className="group relative bg-card rounded-lg overflow-hidden shadow-md border border-border card-premium reveal">
                <button
                  className="aspect-square w-full bg-secondary flex items-center justify-center cursor-pointer"
                  onClick={() => member.image && setLightboxImage({ src: member.image, alt: member.name })}
                >
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <Users className="text-muted-foreground" size={64} />
                  )}
                </button>
                <div className="p-4 text-center">
                  <h4 className="font-display font-bold text-foreground">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                {/* Hover bio overlay */}
                <div className="absolute inset-0 bg-navy/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-primary-foreground text-sm text-center leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <Lightbox src={lightboxImage.src} alt={lightboxImage.alt} onClose={() => setLightboxImage(null)} />
      )}
    </>
  );
};

export default About;
