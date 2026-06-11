import { Heart, Building2, Copy, Check } from "lucide-react";
import { useState } from "react";

const fields = [
  { label: "Bank", value: "FNB", copyable: false },
  { label: "Account Name", value: "Men's Legacy Foundation NPO", copyable: true },
  { label: "Account Number", value: "63096549987", copyable: true },
  { label: "Branch Code", value: "256955", copyable: true },
  { label: "Reference", value: "Name, Surname and Age", copyable: false },
];

const Donate = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (value: string, label: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="relative bg-navy-dark text-primary-foreground py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Heart className="mx-auto text-gold mb-4" size={48} />
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Donations Temporarily Unavailable
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We are currently completing final payment gateway testing and
            verification with Capvtal Innovations and PayFast. Online donations
            will be available shortly. Thank you for your patience and continued
            support. In the meantime, please use the manual option below. 
          </p>
        </div>
      </section>

      {/* ── Banking Details ── */}
      <section className="container mx-auto px-6 py-16 max-w-xl">
        <div className="text-center mb-10">
          <Building2 className="mx-auto text-gold mb-3" size={36} />
          <h2 className="text-2xl font-display font-bold mb-2">
            Donate via EFT
          </h2>
          <p className="text-muted-foreground text-sm">
            You can still support us by making a direct bank transfer using the
            details below.
          </p>
        </div>

        {/* Banking card */}
        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
          {/* Card header */}
          <div className="bg-navy-dark px-6 py-4 flex items-center gap-3">
            <Building2 size={18} className="text-gold" />
            <p className="text-primary-foreground font-semibold text-sm uppercase tracking-wider">
              MLF Bank Details
            </p>
          </div>

          {/* Fields */}
          <div className="divide-y divide-border">
            {fields.map(({ label, value, copyable }) => (
              <div
                key={label}
                className="flex items-center justify-between px-6 py-4"
              >
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
                {copyable && (
                  <button
                    onClick={() => copyToClipboard(value, label)}
                    className="ml-4 flex items-center gap-1.5 text-xs text-muted-foreground hover:text-gold transition-colors shrink-0"
                  >
                    {copied === label ? (
                      <>
                        <Check size={14} className="text-green-500" />
                        <span className="text-green-500">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        Copy
                      </>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          
        </div>

        {/* Reference reminder */}
        <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl px-5 py-4 text-center">
          <p className="text-sm text-foreground">
            <span className="font-semibold text-gold">Important:</span> Use
            your <span className="font-semibold">Name, Surname and Age</span> as
            your payment reference so we can identify your donation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Donate;