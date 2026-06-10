import { useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import campImg from "@/assets/camp-activity.jpg";

const mainEvent = {
  title: "MLF 4th Annual Conference",
  date: "26 – 28 June 2026",
  location: "Altelekker Youth Campsite",
  image: "https://i.postimg.cc/MG07b6fj/main-post.jpg",
};

const lineupEvents: string[] = [
  // Add lineup poster image URLs here, e.g.:
   "https://i.postimg.cc/m2whwPmW/Mr-Mabena-Poster.jpg",
   "https://i.postimg.cc/V6nkbvJp/bright-psoter.jpg",
   "https://i.postimg.cc/xddqTJh6/kenny-poster.jpg",
   "https://i.postimg.cc/q7t0589t/prince-poster.jpg",
];

const pastEvents = [
  {
    title: "2023 MLF Camp",
    date: "April 2023",
    location: "ALTELEKKER",
    desc: "Our largest camp to date with 103 boys — featuring guest speakers from finance, sports and entrepreneurship.",
    image: "https://i.postimg.cc/cCjTBf67/2023-event.jpg",
  },
  {
    title: "2025 Fund Raising",
    date: "June 2025",
    location: "Norkem Park Spur",
    desc: "67 boys gathered for a transformative weekend of mentorship, team building, and life-skills development.",
    image: "https://i.postimg.cc/vZvqpgK1/image-1000x700.png",
  },
  
  
];

const Events = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
  <>
    <section className="py-20 bg-navy-gradient">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">What's Coming</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Events</h1>
        <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">Join us at our upcoming events and be part of the change.</p>
      </div>
    </section>

    {/* Upcoming Events */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Mark Your Calendar</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Upcoming Event</h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Get Ready for our flagship conference</p>
        </div>

        {/* Headline / Main Poster */}
        <div className="max-w-sm mx-auto reveal">
          <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl border-2 border-gold card-premium">
            <div className="absolute top-4 left-4 z-10 bg-gold-gradient text-navy-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
              Headline Event
            </div>
            <button
              onClick={() => setLightboxImage({ src: mainEvent.image, alt: mainEvent.title })}
              className="block w-full cursor-pointer"
              aria-label={`View ${mainEvent.title} poster`}
            >
              <img
                src={mainEvent.image}
                alt={`${mainEvent.title} – ${mainEvent.date} – ${mainEvent.location}`}
                className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
              />
            </button>
          </div>
        </div>

        {/* Supporting Lineup */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="text-center mb-8 reveal">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs mb-2">The Lineup</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">Supporting The Event</h3>
          </div>
          {lineupEvents.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-[3/4] rounded-xl border-2 border-dashed border-border bg-secondary/40 flex flex-col items-center justify-center text-center p-6 reveal"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold mb-3">{i}</div>
                  <p className="text-sm text-muted-foreground">Lineup poster coming soon</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {lineupEvents.map((image, i) => (
                <div key={i} className="bg-card rounded-xl overflow-hidden shadow-md border border-border card-premium reveal">
                  <button
                    onClick={() => setLightboxImage({ src: image, alt: `Lineup poster ${i + 1}` })}
                    className="block w-full cursor-pointer"
                    aria-label={`View lineup poster ${i + 1}`}
                  >
                    <img
                      src={image}
                      alt={`Lineup poster ${i + 1}`}
                      className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-500"
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>

    {/* Past Events */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 reveal">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Looking Back</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Past Events</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pastEvents.map((event) => (
            <div key={event.title} className="bg-card rounded-lg overflow-hidden shadow-md border border-border card-premium reveal">
              <button
                onClick={() => setLightboxImage({ src: event.image as string, alt: event.title })}
                className="aspect-[16/9] w-full overflow-hidden cursor-pointer"
              >
                <img src={event.image as string} alt={`${event.title} – ${event.location}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </button>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{event.title}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-2"><CalendarDays size={16} className="text-gold" />{event.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={16} className="text-gold" />{event.location}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{event.desc}</p>
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

export default Events;