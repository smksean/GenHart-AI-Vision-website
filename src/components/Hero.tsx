import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/8 border border-primary/15 shadow-soft">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Leading AI Innovation in Africa</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Empowering Africa with{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              AI-Driven Innovation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building scalable products, consulting solutions, and training the next generation of AI talent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-gradient-hero text-lg px-8 py-6 shadow-medium hover:shadow-large transition-all duration-300 group"
              onClick={() => scrollToSection("divisions")}
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              onClick={() => scrollToSection("about")}
            >
              Discover GenHart EdTech
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
