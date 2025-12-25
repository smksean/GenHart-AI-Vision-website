import { Card } from "@/components/ui/card";
import { Brain, Code, GraduationCap, Zap, Globe, Users } from "lucide-react";
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
          <div className="space-y-7 animate-slide-in-left">
            {/* Top badges */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full group hover:bg-primary/20 transition-all duration-300 cursor-default">
                <Globe className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-primary">Global Reach</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full group hover:bg-primary/20 transition-all duration-300 cursor-default">
                <Zap className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-primary">AI-Powered</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full group hover:bg-primary/20 transition-all duration-300 cursor-default">
                <Users className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-primary">Talent-Focused</span>
              </div>
            </div>

            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 leading-tight">
                About <span className="text-primary relative inline-block">
                  GenHart
                  <span className="absolute -bottom-1 left-0 w-full h-3 bg-primary/10 -z-10"></span>
                </span>
              </h2>
              {/* Accent line under heading */}
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-primary/70 to-primary/30 rounded-full animate-pulse-slow"></div>
            </div>
            
            {/* Main description with better formatting */}
            <div className="space-y-4 max-w-xl">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="text-xl font-bold text-primary">GenHart</span> is a global <span className="font-semibold text-foreground bg-primary/5 px-2 py-1 rounded">AI technology company</span> focused on delivering scalable, data-driven solutions that create <span className="font-semibold text-primary">real impact</span> for businesses and individuals.
              </p>
              
              <div className="flex gap-3 items-start p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-2 border-primary">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>
                <p className="text-base text-foreground/90 leading-relaxed">
                  We operate through <strong className="text-foreground">two core divisions:</strong> <span className="font-semibold text-primary">GenHart HQ</span>, which drives product innovation and consulting, and <span className="font-semibold text-primary">GenHart EdTech</span>, dedicated to AI education and talent development.
                </p>
              </div>
            </div>
            
            {/* Mission Statement - More Dynamic */}
            <div className="relative max-w-xl group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg blur-sm group-hover:blur-md transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm border-l-4 border-primary pl-6 pr-5 py-5 rounded-r-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-primary/60 mb-1">Our Mission</div>
                    <p className="text-base leading-relaxed text-foreground/90">
                      To advance the adoption of artificial intelligence by developing <strong className="text-foreground">cutting-edge products</strong>, providing <strong className="text-foreground">strategic consulting</strong>, and equipping people with the <strong className="text-foreground">skills needed to thrive</strong> in an AI-powered world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
