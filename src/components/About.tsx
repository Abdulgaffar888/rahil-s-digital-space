const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a third-year Electronics Engineering student with a passion for 
            building technology that solves real problems. My journey spans across 
            <span className="text-foreground font-medium"> software development</span>, 
            <span className="text-foreground font-medium"> artificial intelligence</span>, 
            <span className="text-foreground font-medium"> embedded systems</span>, and 
            <span className="text-foreground font-medium"> hardware design</span>.
          </p>
          <p>
            I believe in learning by doing. Whether it's designing a PCB, training a 
            machine learning model, or building a full-stack application—I'm always 
            hands-on, iterating fast, and shipping products that work in the real world.
          </p>
          <p>
            When I'm not coding or soldering, you'll find me exploring the startup 
            ecosystem, reading about emerging technologies, and thinking about how 
            to build the next thing that matters.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projects Built", value: "15+" },
            { label: "Tech Stacks", value: "10+" },
            { label: "Hackathons", value: "5+" },
            { label: "Years Coding", value: "4+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-lg bg-card border border-border">
              <p className="text-3xl font-bold text-gradient">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
