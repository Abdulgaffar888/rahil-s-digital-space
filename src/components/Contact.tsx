import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Got a project idea, opportunity, or just want to chat about tech? 
          I'd love to hear from you.
        </p>
        <a
          href="mailto:rahilnisar@gmail.com"
          className="inline-flex items-center gap-3 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-glow text-lg"
        >
          <Mail size={22} />
          Email Me
        </a>
        <p className="mt-6 text-sm text-muted-foreground">
          Or reach out on social media—links below.
        </p>
      </div>
    </section>
  );
};

export default Contact;
