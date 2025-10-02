import { Card } from "@/components/ui/card";
import { Rocket, Users, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Rocket,
      title: "Product Development",
      description: "End-to-end AI product development from concept to deployment. We build scalable, production-ready solutions tailored to your needs.",
      features: ["Custom AI Models", "Data Pipeline Design", "Cloud Deployment", "Performance Optimization"]
    },
    {
      icon: Lightbulb,
      title: "Custom AI Solutions",
      description: "Strategic consulting to integrate AI into your business. We analyze, design, and implement AI systems that drive real results.",
      features: ["AI Strategy", "Technical Consulting", "Integration Support", "ROI Analysis"]
    },
    {
      icon: Users,
      title: "Education & Talent Development",
      description: "Comprehensive training programs to build AI capabilities within your organization or advance your personal skills.",
      features: ["Corporate Training", "Individual Courses", "Mentorship Programs", "Certification Paths"]
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Service Model</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions designed to meet your unique business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary/40 hover:shadow-medium transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-soft">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2.5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
