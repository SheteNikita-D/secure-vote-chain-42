import {
  Fingerprint,
  Blocks,
  FileCode2,
  EyeOff,
  Smartphone,
  BrainCircuit,
} from "lucide-react";

const features = [
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    desc: "Multi-modal biometric verification (fingerprint, facial recognition, iris scan) ensures only registered voters can cast ballots — eliminating impersonation.",
  },
  {
    icon: Blocks,
    title: "Blockchain Immutability",
    desc: "Each vote is cryptographically hashed and recorded on a distributed ledger, creating an unalterable audit trail visible to all stakeholders.",
  },
  {
    icon: FileCode2,
    title: "Smart Contract Rules",
    desc: "Self-executing smart contracts enforce voting rules — eligibility checks, time windows, duplicate prevention — with zero human intervention.",
  },
  {
    icon: EyeOff,
    title: "Zero-Knowledge Privacy",
    desc: "ZK-proof protocols allow vote verification without revealing the voter's choice, achieving the gold standard of ballot secrecy.",
  },
  {
    icon: Smartphone,
    title: "Device Binding",
    desc: "Cryptographic device fingerprinting ties each session to an authorized device, preventing remote hijacking or session replay attacks.",
  },
  {
    icon: BrainCircuit,
    title: "AI Fraud Detection",
    desc: "Machine-learning models analyze voting patterns in real time, flagging anomalies like coordinated bot activity or geographic impossibilities.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
          Key Features
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Six Pillars of Election Security
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Every layer of the system is purpose-built to address a specific
          vulnerability in traditional voting infrastructure.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group bg-card rounded-xl p-7 card-elevated opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <f.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
