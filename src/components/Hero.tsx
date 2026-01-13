import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-primary font-medium mb-4 animate-fade-in">
          Electronics Engineering • 3rd Year
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Hi, I'm <span className="text-gradient">Rahil Nisar</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Builder. Engineer. Problem Solver.
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          I build real-world tech products that bridge software, hardware, and AI. 
          From embedded systems to full-stack apps—I ship things that work.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="/resume.pdf"
            download
            className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
