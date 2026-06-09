import { useState } from "react";
import { Image as ImageIcon, CalendarDays, MapPin, ShieldCheck } from "lucide-react";
import Lightbox from "@/components/Lightbox";

const samplePhotos = [
  { id: 1, src: "https://i.postimg.cc/FH1ddPNW/IMG-0895.jpg", title: "Group Arrival Photo", date: "2023-2025", location: "ALTELEKKER" },
  
  { id: 2, src: "https://i.postimg.cc/fTvm0Hpd/IMG-0921.jpg", title: "Workshop Session",  date: "2023-2025", location: "ALTELEKKER"},

  { id: 3, src: "https://i.postimg.cc/jdxJKx9N/IMG-0903.jpg", title: "Boys at the Venue",  date: "2023-2025", location: "ALTELEKKER"},
  
  { id: 4, src: "https://i.postimg.cc/P5F4qwwv/about-3.png", title: "Guest Speaker Session",  date: "2023-2025", location: "ALTELEKKER"},

 

  { id: 5, src: "https://i.postimg.cc/Nfd20hq2/IMG-0939.jpg", title: "Mentorship Circle", date: "2023-2025", location: "ALTELEKKER" },

  { id: 6, src: "https://i.postimg.cc/MKYVjsNj/IMG-0975.jpg", title: "Outdoor Activities",  date: "2023-2025", location: "ALTELEKKER"},

  { id: 7, src: "https://i.postimg.cc/HsY7HYKy/IMG-1015.jpg", title: "Closing Ceremony",  date: "2023-2025", location: "ALTELEKKER"},
  

  

  

  { id: 8, src: "https://i.postimg.cc/kX6y1yYk/Team-Building.jpg", title: "Group Photo",  date: "2023-2025", location: "ALTELEKKER"},
];

// Streamable provides oEmbed-style direct embed via /e/{id}
const sampleVideos = [
  {
    id: 1,
    youtubeId: "MwHekHQ2_TU",
    title: "MLF Camp 2024 Highlights",
  },
  {
    id: 2,
    youtubeId: "hrZHW4uXgTI",
    title: "Mentorship Programme",
  },
  {
    id: 3,
    youtubeId: "w4t3Ttke2d4",
    title: "Career Expo Recap",
  },
  {
    id: 4,
    youtubeId: "mD7ShhMlmfM",
    title: "Founder's Message",
  },
  {
    id: 5,
    youtubeId: "oo1T7FZhW30",
    title: "Founder's Message",
  },
  {
    id: 6,
    youtubeId: "tGcTlYQtzog",
    title: "Founder's Message",
  },
  {
    id: 7,
    youtubeId: "RAiJjrH3-R8",
    title: "Founder's Message",
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [lightboxPhoto, setLightboxPhoto] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Memories</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Gallery</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">Relive our events and see the impact we make together.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {(["photos", "videos"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-md font-semibold text-sm transition-colors ${
                  activeTab === tab
                    ? "bg-navy text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-border"
                }`}
              >
                {tab === "photos" ? "Photos" : "Videos"}
              </button>
            ))}
          </div>

          {activeTab === "photos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {samplePhotos.map((photo) => (
                <figure key={photo.id} className="group bg-card rounded-lg overflow-hidden border border-border card-premium reveal">
                  <button
                    onClick={() => setLightboxPhoto({ src: photo.src, alt: photo.title })}
                    className="aspect-square w-full overflow-hidden relative block"
                  >
                    {photo.src ? (
                      <img src={photo.src} alt={`${photo.title} – ${photo.location}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground gap-2">
                        <ImageIcon size={40} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors" />
                  </button>
                  <figcaption className="p-4">
                    <h3 className="font-display font-bold text-foreground text-sm mb-2 leading-snug">{photo.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
                      <CalendarDays size={12} className="text-gold shrink-0" />
                      <span>{photo.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin size={12} className="text-gold shrink-0" />
                      <span>{photo.location}</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {activeTab === "videos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sampleVideos.map((video) => (
                <div key={video.id} className="aspect-video bg-secondary rounded-lg overflow-hidden border border-border relative group">
                  {video.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground gap-2">
                      <div className="w-16 h-16 rounded-full bg-navy/20 flex items-center justify-center">
                        <Play size={28} className="ml-1" />
                      </div>
                      <span className="text-xs text-center px-2">{video.title}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Legal Consideration */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-secondary border-l-4 border-gold rounded-lg p-8 reveal">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center shrink-0">
                <ShieldCheck className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-gold font-semibold tracking-widest uppercase text-xs mb-2">Legal Consideration</p>
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">Media Release & Consent</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  For all future events involving minors, parent/guardian consent forms must include a media release clause. This explicitly authorises:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-3">
                  <li>Use of photographs and video footage</li>
                  <li>Promotional and commercial usage</li>
                  <li>Distribution across all platforms (web, social media, print)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed text-sm italic">
                  This protects the organisation legally and allows the foundation to share its impact freely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {lightboxPhoto && (
        <Lightbox src={lightboxPhoto.src} alt={lightboxPhoto.alt} onClose={() => setLightboxPhoto(null)} />
      )}
    </>
  );
};

export default Gallery;
