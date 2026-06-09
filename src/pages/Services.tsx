import { Tent, Users, GraduationCap, Briefcase, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Tent,
    title: "Weekend Camp",
    desc: "A weekend away held at ALTELEKKER venue. The foundation provides food, transport, beds, and guest speakers to address important topics with the boys.",
  },
  {
    icon: Users,
    title: "Teamwork Building / Facilitators",
    desc: "Team games and activities that prepare boys for the working environment by teaching collaboration with people they don't know.",
  },
  {
    icon: GraduationCap,
    title: "Educational Camps",
    desc: "Unique learning environments where boys engage, grow, and develop valuable skills in a supportive and interactive setting.",
  },
  {
    icon: Briefcase,
    title: "Business Education",
    desc: "Teaching business principles, practices, and management to equip boys with the knowledge and attitudes needed to succeed.",
  },
  {
    icon: HeartHandshake,
    title: "Mentorship Guidance",
    desc: "Ongoing one-on-one and group mentorship support. If you need help or advice, the foundation will assist where they can.",
  },
];

const Services = () => (
  <>
    <section className="py-20 bg-navy-gradient">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">What We Offer</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">
          Comprehensive programmes designed to develop, educate, and empower young men.
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`bg-card rounded-lg p-8 shadow-md border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                i === services.length - 1 && services.length % 3 !== 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-5">
                <service.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
