import { Shield, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-hero opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-in-up backdrop-blur-sm">
          <Shield className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-primary-foreground/90">
            Next-Generation Electoral Security
          </span>
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-primary-foreground"
          style={{ animationDelay: "0.15s" }}
        >
          Biometric Blockchain
          <br />
          <span className="text-gradient">Voting System</span>
        </h1>

        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-primary-foreground/70 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Combining biometric authentication, blockchain immutability, and
          AI-powered fraud detection to deliver tamper-proof, verifiable, and
          truly democratic elections.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary font-semibold text-primary-foreground hover:brightness-110 transition-all shadow-lg hover:shadow-xl"
          >
            Learn More
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-primary-foreground/20 font-semibold text-primary-foreground/90 hover:bg-primary-foreground/10 transition-all backdrop-blur-sm"
          >
            Explore Features
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary-foreground/50 animate-float"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default HeroSection;
