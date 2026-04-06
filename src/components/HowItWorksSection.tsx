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

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-1 md:gap-0">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={s.step} className={`relative md:flex items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 150 + 200}ms` }}>
                  <div className={`md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "md:pr-16 md:text-right md:order-1 md:invisible"}`}>
                    {isLeft && (
                      <div className="bg-card rounded-xl p-6 card-elevated inline-block text-left">
                        <span className="text-xs font-bold text-primary">STEP {s.step}</span>
                        <h3 className="text-lg font-semibold mt-1 mb-2">{s.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground items-center justify-center z-10 glow-ring">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div className={`md:w-1/2 ${!isLeft ? "md:pl-16" : "md:pl-16 md:invisible"}`}>
                    {!isLeft && (
                      <div className="bg-card rounded-xl p-6 card-elevated inline-block text-left">
                        <span className="text-xs font-bold text-primary">STEP {s.step}</span>
                        <h3 className="text-lg font-semibold mt-1 mb-2">{s.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="md:hidden flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary">STEP {s.step}</span>
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                    </div>
                  </div>
                  <p className="md:hidden text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
