import { Landmark, Building2, GraduationCap, Globe2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const cases = [
  { icon: Landmark, title: "National Elections", desc: "Secure presidential, parliamentary, and congressional elections at scale with full auditability." },
  { icon: Building2, title: "Corporate Governance", desc: "Shareholder voting and board elections with verifiable results and regulatory compliance." },
  { icon: GraduationCap, title: "University & Union Elections", desc: "Student body and trade union elections that are transparent, accessible, and tamper-proof." },
  { icon: Globe2, title: "International Organizations", desc: "Cross-border voting for the UN, EU, and NGOs — eliminating logistical barriers and fraud risk." },
];

const UseCasesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="use-cases" className="py-24 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Use Cases</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Applicable Across Domains</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <div key={c.title} className={`bg-card rounded-xl p-7 card-elevated text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 100 + 200}ms` }}>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                <c.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
