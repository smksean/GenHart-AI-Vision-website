import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, BookOpen, MessageSquare, TrendingUp, ExternalLink, GraduationCap } from "lucide-react";
import productImage from "@/assets/product-ai.jpg";
import edtechImage from "@/assets/edtech-icon.jpg";

const Divisions = () => {
  const products = [
    {
      icon: Bot,
      name: "JobAI",
      description: "AI-powered recruitment platform matching talent with opportunities.",
      gradient: "from-purple-500 to-blue-500"
    },
    {
      icon: BookOpen,
      name: "EduAI",
      description: "Personalized learning experiences driven by artificial intelligence.",
      gradient: "from-blue-500 to-emerald-500"
    },
    {
      icon: MessageSquare,
      name: "ChatSME",
      description: "Intelligent chatbot solutions for small and medium enterprises.",
      gradient: "from-emerald-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      name: "TradeWise",
      description: "Data-driven insights for smarter trading and investment decisions.",
      gradient: "from-purple-500 to-emerald-500"
    }
  ];

  return (
    <section id="divisions" className="py-20 bg-gradient-light">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-14 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Divisions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Two powerful divisions working together to drive AI innovation across Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* GenHart HQ */}
          <Card className="p-8 bg-card border-border hover:border-primary/40 hover:shadow-large transition-all duration-500 group animate-fade-in">
            <div className="relative h-64 mb-8 rounded-xl overflow-hidden shadow-soft">
              <img 
                src={productImage} 
                alt="AI Product Innovation" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"></div>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                <span className="font-display font-bold text-lg">HQ</span>
              </div>
              <h3 className="font-display text-3xl font-bold">GenHart HQ</h3>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              The innovation hub for AI product development and strategic consulting. We build 
              cutting-edge solutions and help organizations transform with AI.
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="font-display text-xl font-semibold">Featured Products</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {products.map((product, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-muted hover:bg-muted/70 transition-colors group/product"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-3`}>
                      <product.icon className="w-5 h-5 text-white" />
                    </div>
                    <h5 className="font-semibold mb-1 group-hover/product:text-primary transition-colors">{product.name}</h5>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full bg-gradient-hero group/btn">
              Explore Products
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Card>

          {/* GenHart EdTech */}
          <Card className="p-8 bg-card border-border hover:border-accent/40 hover:shadow-large transition-all duration-500 group animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative h-64 mb-8 rounded-xl overflow-hidden shadow-soft">
              <img 
                src={edtechImage} 
                alt="GenHart EdTech" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"></div>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display text-3xl font-bold">GenHart EdTech</h3>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our education and training division dedicated to building Africa's AI talent pipeline. 
              Offering comprehensive programs from beginner to advanced levels.
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="font-display text-xl font-semibold">What We Offer</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <div>
                    <p className="font-semibold">Self-Paced Online Courses</p>
                    <p className="text-sm text-muted-foreground">Learn at your own pace with structured curricula</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <div>
                    <p className="font-semibold">Intensive Bootcamps</p>
                    <p className="text-sm text-muted-foreground">Hands-on training with industry experts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <div>
                    <p className="font-semibold">Physical Learning Hub</p>
                    <p className="text-sm text-muted-foreground">Collaborative space for in-person training</p>
                  </div>
                </div>
              </div>
            </div>

            <Button className="w-full bg-gradient-accent group/btn">
              Visit EdTech Platform
              <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Divisions;
