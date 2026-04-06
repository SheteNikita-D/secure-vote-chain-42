import { UserCheck, ScanFace, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const steps = [
  { icon: UserCheck, step: "01", title: "Voter Registration", desc: "Citizens register once using government-issued ID and multi-modal biometric enrollment (fingerprint + face). Data is hashed — never stored in plaintext." },
  { icon: ScanFace, step: "02", title: "Biometric Verification", desc: "On election day, the voter authenticates via live biometric scan. Device binding and liveness detection prevent spoofing or replay." },
  { icon: ShieldCheck, step: "03", title: "Secure Ballot Casting", desc: "The authenticated voter casts an encrypted ballot. A smart contract validates eligibility, records the vote on-chain, and issues a ZK-proof receipt." },
  { icon: CheckCircle2, step: "04", title: "Transparent Tallying", desc: "Votes are tallied automatically by the blockchain. Any observer can verify totals match individual encrypted ballots — without compromising privacy." },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-24 px-4 bg-section-alt">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Registration to Results</h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          {/* Icons row with connecting line */}
          <div className="relative flex items-center justify-between mb-10">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`relative z-10 flex flex-col items-center transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-ring">
                  <s.icon className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`bg-card rounded-xl p-6 card-elevated text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 150 + 350}ms` }}
              >
                <span className="text-xs font-bold text-primary">STEP {s.step}</span>
                <h3 className="text-lg font-semibold mt-1 mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden space-y-8">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`flex gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5" />
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-4">
                <span className="text-xs font-bold text-primary">STEP {s.step}</span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
