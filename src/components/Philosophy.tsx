import { Zap, Rocket, Target } from "lucide-react";

const philosophies = [
  {
    icon: Zap,
    title: "Learn by Building",
    description:
      "Theory is important, but nothing beats getting your hands dirty. Every project teaches something new, and every failure is a lesson in disguise.",
  },
  {
    icon: Rocket,
    title: "Ship Fast",
    description:
      "Perfect is the enemy of done. I believe in iterating quickly, getting feedback early, and improving continuously. A working prototype beats a perfect plan.",
  },
  {
    icon: Target,
    title: "Solve Real Problems",
    description:
      "Technology for its own sake is pointless. I focus on building things that people actually need—solutions that make a tangible difference in the real world.",
  },
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-gradient">Philosophy</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          The principles that guide how I approach building and problem-solving.
        </p>
        <div className="space-y-8">
          {philosophies.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <item.icon size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
