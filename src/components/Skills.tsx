const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "React Native"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Python", "FastAPI", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "LangChain"],
  },
  {
    title: "Embedded / Hardware",
    skills: ["STM32", "ESP32", "Arduino", "KiCad", "FPGA", "Raspberry Pi"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          My toolkit spans across multiple domains—from low-level hardware to high-level AI systems.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-secondary text-secondary-foreground px-3 py-1.5 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
