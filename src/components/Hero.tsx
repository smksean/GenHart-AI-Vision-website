import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Package, Users, GraduationCap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const metrics = [
    { icon: Package, value: "15+", label: "Products Built", sublabel: "AI-powered solutions deployed" },
    { icon: Users, value: "50+", label: "Customers Served", sublabel: "Organizations transformed with AI" },
    { icon: GraduationCap, value: "1,000+", label: "Talent Trained", sublabel: "Professionals upskilled in AI" }
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden pt-24 pb-8">
      {/* Background with Gradient Overlay */}
      {/* Video background: drop files at /public/media/hero.webm or hero.mp4 */}
      <video
        className="absolute inset-0 w-full h-full object-cover motion-safe:block motion-reduce:hidden pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroImage}
        aria-hidden="true"
      >
        <source src="/media/hero.webm" type="video/webm" />
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-radial"></div>
      {/* Dark scrim for readability over video */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/60"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10 flex-grow flex items-center">
        <div className="animate-slide-in-left max-w-4xl">
          <div className="text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-soft hover:bg-white/15 hover:scale-105 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-white animate-pulse-slow" />
              <span className="text-sm font-medium text-white">Leading AI Innovation in Africa</span>
            </div>

            <h1 className="text-white leading-tight">
              Shaping a smarter world through {""}
              <span className="text-white">AI innovation and learning</span>
            </h1>

            <p className="text-white/85 text-lg md:text-xl max-w-2xl leading-relaxed">
              Where data meets intelligence, we design scalable AI systems and nurture the talent driving the next wave of innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <Button
                size="lg"
                className="bg-gradient-hero text-base md:text-lg px-8 py-6 shadow-medium hover:shadow-large transition-all duration-300 group hover:bg-transparent focus-visible:ring-white/60"
                onClick={() => scrollToSection("divisions")}
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 py-6 border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary focus-visible:ring-white/60 transition-all duration-300"
                onClick={() => scrollToSection("about")}
              >
                Discover GenHart EdTech
              </Button>
            </div>
          </div>
            </div>
          </div>

      {/* Metrics Bar */}
      <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl">
          {metrics.map((metric, index) => (
              <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <metric.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-white mb-1">{metric.value}</div>
                <div className="text-sm font-semibold text-white/90">{metric.label}</div>
                <div className="text-xs text-white/60 mt-0.5">{metric.sublabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
