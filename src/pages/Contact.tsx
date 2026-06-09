import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-20 bg-navy-gradient">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-2">Reach Out</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-primary-foreground/70 text-lg">We'd love to hear from you. Get in touch today.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Phone</p>
                    <p className="text-muted-foreground text-sm">Chairman: 067 224 8962</p>
                    <p className="text-muted-foreground text-sm">Vice Chairman: 081 215 0048</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Email</p>
                    <p className="text-muted-foreground text-sm">info@menslegacyfoundation.co.za</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Address</p>
                    <p className="text-muted-foreground text-sm">11 Izellah, Percy Steward Street, Rangeview, Krugersdorp, 1739</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Hours</p>
                    <p className="text-muted-foreground text-sm">Monday to Friday, 9am – 6pm</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden border border-border shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.7!2d27.77!3d-26.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA2JzAwLjAiUyAyN8KwNDYnMTIuMCJF!5e0!3m2!1sen!2sza!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Men's Legacy Foundation Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send a Message</h2>
              {submitted ? (
                <div className="bg-secondary rounded-lg p-8 text-center border border-border">
                  <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">Your message has been received. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea
                      id="message"
                      required
                      maxLength={1000}
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-navy text-primary-foreground font-semibold rounded-md hover:bg-navy-light transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-16 bg-gold-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-navy-dark mb-4">Support the Foundation</h2>
          <p className="text-navy-dark/80 max-w-xl mx-auto mb-8">
            Your contribution helps us reach more young boys and transform their futures. Every donation makes a difference.
          </p>
          <a href="mailto:info@menslegacyfoundation.org.za" className="inline-block px-8 py-4 bg-navy text-primary-foreground font-semibold rounded-md hover:bg-navy-light transition-colors text-lg">
            Donate Now
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
