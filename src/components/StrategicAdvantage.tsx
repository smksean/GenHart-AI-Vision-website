import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const StrategicAdvantage = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-light">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Strategic Advantage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            An integrated ecosystem where products, consulting, and education reinforce one another.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border-border shadow-medium relative overflow-hidden animate-fade-in">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10">
              {/* Diagram */}
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {/* Products */}
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-hero flex items-center justify-center text-2xl font-display font-bold">
                    Products
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Real-world solutions tested and refined through client work
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                </div>

                {/* Consulting */}
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-2xl font-display font-bold">
                    Consulting
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Client insights drive product innovation and training content
                  </p>
                </div>
              </div>

              <div className="flex justify-center my-8">
                <ArrowRight className="w-8 h-8 text-primary rotate-90 animate-pulse" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-start-2 text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-accent flex items-center justify-center text-2xl font-display font-bold">
                    Education
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Talent pipeline creates skilled professionals for products and consulting
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mt-12 text-center max-w-3xl mx-auto">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  This synergy creates a <span className="text-foreground font-semibold">powerful flywheel effect</span>: 
                  our products inform our consulting, our consulting shapes our education, 
                  and our education supplies talent back to products and consulting. 
                  This integrated approach positions GenHart as a <span className="text-foreground font-semibold">comprehensive AI partner</span>, 
                  not just a service provider.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StrategicAdvantage;
