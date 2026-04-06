import { Shield } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-hero py-16 px-4">
    <div className="max-w-6xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Shield className="w-6 h-6 text-accent" />
        <span className="text-lg font-bold text-primary-foreground">
          CivicLedger
        </span>
      </div>
      <p className="text-primary-foreground/60 text-sm max-w-md mx-auto mb-8">
        Empowering democracies with tamper-proof, privacy-preserving, and
        universally accessible digital elections.
      </p>
      <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/50 mb-8">
        <a href="#about" className="hover:text-primary-foreground/80 transition-colors">About</a>
        <a href="#features" className="hover:text-primary-foreground/80 transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-primary-foreground/80 transition-colors">How It Works</a>
        <a href="#tech-stack" className="hover:text-primary-foreground/80 transition-colors">Tech Stack</a>
        <a href="#use-cases" className="hover:text-primary-foreground/80 transition-colors">Use Cases</a>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} CivicLedger. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
