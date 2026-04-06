import { Vote, Lock, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const pillars = [
  {
    icon: Vote,
    title: "Democratic Integrity",
    desc: "Every vote is authenticated, encrypted, and permanently recorded — ensuring one person, one vote.",
  },
  {
    icon: Lock,
    title: "Tamper-Proof Records",
    desc: "Blockchain's immutable ledger makes it mathematically impossible to alter or delete any ballot.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    desc: "Voters can independently verify their ballot was counted while their identity remains private.",
  },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 px-4 bg-section-alt">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            About the Project
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Reinventing Electoral Trust
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            The Biometric Blockchain Voting System fuses cutting-edge biometric
            authentication with decentralized ledger technology to eliminate fraud,
            guarantee voter privacy, and restore confidence in democratic processes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`bg-card rounded-xl p-8 card-elevated text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
