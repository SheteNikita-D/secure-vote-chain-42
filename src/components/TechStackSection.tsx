import { Blocks, Server, Cpu, Database, Globe, ShieldCheck } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const techs = [
  { icon: Blocks, name: "Ethereum / Polygon", category: "Blockchain" },
  { icon: ShieldCheck, name: "ZK-SNARKs", category: "Privacy Layer" },
  { icon: Cpu, name: "TensorFlow / PyTorch", category: "AI & ML" },
  { icon: Server, name: "IPFS / Filecoin", category: "Decentralized Storage" },
  { icon: Database, name: "Solidity / Hardhat", category: "Smart Contracts" },
  { icon: Globe, name: "React / Node.js", category: "Frontend & API" },
];

const TechStackSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="tech-stack" className="py-24 px-4">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Technology Stack</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built on Proven Foundations</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">We leverage battle-tested open-source technologies and cutting-edge cryptographic research.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {techs.map((t, i) => (
            <div key={t.name} className={`flex flex-col items-center text-center bg-card rounded-xl p-6 card-elevated transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 100 + 200}ms` }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <t.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{t.name}</h3>
              <p className="text-xs text-muted-foreground">{t.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
