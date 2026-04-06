import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Voter identity verification", traditional: false, ours: true },
  { feature: "Tamper-proof ballot storage", traditional: false, ours: true },
  { feature: "Real-time fraud detection", traditional: false, ours: true },
  { feature: "End-to-end voter privacy", traditional: false, ours: true },
  { feature: "Independent vote verification", traditional: false, ours: true },
  { feature: "Eliminates manual counting errors", traditional: false, ours: true },
  { feature: "Accessible remote voting", traditional: false, ours: true },
];

const WhyBetterSection = () => (
  <section id="why-better" className="py-24 px-4 bg-section-alt">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
          Why It's Better
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Traditional vs. Biometric Blockchain
        </h2>
      </div>

      <div className="bg-card rounded-xl overflow-hidden card-elevated">
        <div className="grid grid-cols-3 text-sm font-semibold border-b border-border">
          <div className="p-4">Feature</div>
          <div className="p-4 text-center">Traditional</div>
          <div className="p-4 text-center text-primary">Our System</div>
        </div>
        {comparisons.map((c, i) => (
          <div
            key={c.feature}
            className={`grid grid-cols-3 text-sm ${i < comparisons.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="p-4 text-muted-foreground">{c.feature}</div>
            <div className="p-4 flex justify-center">
              <X className="w-5 h-5 text-destructive/60" />
            </div>
            <div className="p-4 flex justify-center">
              <Check className="w-5 h-5 text-primary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyBetterSection;
