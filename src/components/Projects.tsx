import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Smart Home Automation",
    description: "IoT-based home automation system with voice control and mobile app integration. Controls lights, fans, and appliances remotely.",
    tech: ["ESP32", "React Native", "Firebase", "MQTT"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Document Analyzer",
    description: "ML-powered document processing tool that extracts, summarizes, and categorizes information from PDFs and images.",
    tech: ["Python", "OpenCV", "TensorFlow", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics dashboard.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Embedded Weather Station",
    description: "Custom PCB weather monitoring system with multiple sensors, OLED display, and cloud data logging capabilities.",
    tech: ["STM32", "KiCad", "C++", "ThingSpeak"],
    github: "#",
    demo: null,
  },
  {
    title: "Portfolio Generator",
    description: "CLI tool that generates beautiful portfolio websites from a simple YAML configuration file.",
    tech: ["Python", "Jinja2", "Tailwind CSS", "GitHub Actions"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-time Chat App",
    description: "Scalable chat application with end-to-end encryption, file sharing, and group messaging features.",
    tech: ["React", "Socket.io", "Redis", "MongoDB"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A selection of projects I've built, ranging from embedded systems to full-stack applications.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="card-gradient border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={16} />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
