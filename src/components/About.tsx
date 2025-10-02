import { Card } from "@/components/ui/card";
import { Brain, Code, GraduationCap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Product Development",
      description: "Innovative AI solutions tailored for African markets and beyond."
    },
    {
      icon: Brain,
      title: "Consulting",
      description: "Expert guidance to integrate AI into your business operations."
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Training the next generation of AI talent through GenHart EdTech."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            About <span className="bg-gradient-accent bg-clip-text text-transparent">GenHart</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            GenHart is Africa's leading AI technology company, dedicated to building scalable, 
            data-driven solutions that empower businesses and individuals. We operate through 
            two key divisions: GenHart HQ for product innovation and consulting, and GenHart EdTech 
            for education and talent development.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is to position Africa at the forefront of the global AI revolution by 
            delivering cutting-edge products, strategic consulting, and comprehensive education programs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-center">{feature.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
