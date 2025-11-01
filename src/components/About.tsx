import { Card } from "@/components/ui/card";
import { Brain, Code, GraduationCap } from "lucide-react";
import aboutImage from "@/assets/annie-spratt-sggw4-qDD54-unsplash.jpg";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Product Development",
      description: "Innovative AI solutions tailored for global markets and beyond."
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
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Soft gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,78,122,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,78,122,0.03),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
                About <span className="text-primary">GenHart</span>
              </h2>
              {/* Accent line under heading */}
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full"></div>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              <strong className="text-foreground font-semibold">GenHart</strong> is a global <strong className="text-foreground font-semibold">AI technology company</strong> focused on delivering scalable, data-driven solutions that create real impact for businesses and individuals. We operate through two core divisions: GenHart HQ, which drives product innovation and consulting, and GenHart EdTech, dedicated to AI education and talent development.
            </p>
            
            {/* Mission Statement - Distinguished */}
            <p className="text-lg leading-relaxed max-w-xl bg-primary/5 border-l-4 border-primary pl-6 pr-4 py-4 rounded-r-md text-foreground/90">
              <strong className="text-foreground">Our mission</strong> is to advance the adoption of artificial intelligence by developing cutting-edge products, providing strategic consulting, and equipping people with the skills needed to thrive in an AI-powered world.
            </p>
          </div>

          {/* Right Column - Image with AI Overlay */}
          <div className="hidden lg:block relative animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square rounded-[5px] overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_50px_rgb(0,78,122,0.25)] transition-all duration-500 animate-float">
              {/* Main Image */}
              <img 
                src={aboutImage} 
                alt="Diverse Team Collaborating with AI Technology" 
                className="w-full h-full object-cover"
              />
              
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Three Feature Cards - Modern Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="relative p-8 bg-white border-t-4 border-t-primary border-x border-x-gray-200 border-b border-b-gray-200 hover:shadow-[0_10px_40px_-5px_rgba(0,78,122,0.2)] hover:-translate-y-[3px] transition-all duration-300 animate-fade-in group rounded-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md group-hover:shadow-xl">
                  <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
