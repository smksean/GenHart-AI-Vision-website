import { ArrowRight, Code, Brain, GraduationCap } from "lucide-react";

const StrategicAdvantage = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,78,122,0.08),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
        {/* Title and Subtitle */}
        <div className="text-center space-y-4 mb-16 animate-fade-in max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold">
            Our <span className="text-primary">Strategic Advantage</span>
          </h2>
          <p className="text-xl text-foreground/70 leading-relaxed">
            An integrated ecosystem where products, consulting, and education reinforce one another.
          </p>
        </div>

        {/* Circular Flywheel Diagram */}
        <div className="max-w-4xl mx-auto mb-16 animate-scale-in">
          <div className="relative aspect-square max-w-2xl mx-auto">
            {/* Center Circle - Flywheel Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/10 border-4 border-primary/30 flex items-center justify-center z-20 animate-pulse-slow">
              <div className="text-center">
                <div className="text-xs font-semibold text-primary">Continuous</div>
                <div className="text-lg font-display font-bold text-primary">Growth</div>
              </div>
            </div>

            {/* Circular Path - Animated Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="35"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="0.5"
                strokeDasharray="3 3"
                className="opacity-40 animate-spin"
                style={{ animationDuration: '20s' }}
              />
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="0.3"
                strokeDasharray="2 2"
                className="opacity-30"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#004e7a" stopOpacity="0.8"/>
                  <stop offset="50%" stopColor="#004e7a" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#004e7a" stopOpacity="0.8"/>
                </linearGradient>
              </defs>
            </svg>

            {/* Products - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-primary text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 min-w-[160px]">
                <Code className="w-8 h-8 mx-auto mb-2" />
                <div className="font-display font-bold text-xl text-center">Products</div>
              </div>
              <p className="text-sm text-center text-muted-foreground mt-3 max-w-[180px]">
                Real-world solutions tested through client work
              </p>
            </div>

            {/* Consulting - Right */}
            <div className="absolute right-0 top-1/2 translate-x-8 -translate-y-1/2 group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 min-w-[160px]">
                <Brain className="w-8 h-8 mx-auto mb-2" />
                <div className="font-display font-bold text-xl text-center">Consulting</div>
              </div>
              <p className="text-sm text-center text-muted-foreground mt-3 max-w-[180px]">
                Client insights drive innovation
              </p>
            </div>

            {/* Education - Left */}
            <div className="absolute left-0 top-1/2 -translate-x-8 -translate-y-1/2 group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-primary text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 min-w-[160px]">
                <GraduationCap className="w-8 h-8 mx-auto mb-2" />
                <div className="font-display font-bold text-xl text-center">Education</div>
              </div>
              <p className="text-sm text-center text-muted-foreground mt-3 max-w-[180px]">
                Talent pipeline for sustained growth
              </p>
            </div>

            {/* Curved Arrows - Showing Flow */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              {/* Arrow 1: Products to Consulting */}
              <path
                d="M 58 15 Q 75 25, 75 45"
                fill="none"
                stroke="#004e7a"
                strokeWidth="1.5"
                strokeDasharray="4 2"
                markerEnd="url(#arrowhead)"
                className="opacity-60"
              />
              {/* Arrow 2: Consulting to Education */}
              <path
                d="M 70 58 Q 55 75, 35 75"
                fill="none"
                stroke="#004e7a"
                strokeWidth="1.5"
                strokeDasharray="4 2"
                markerEnd="url(#arrowhead)"
                className="opacity-60"
              />
              {/* Arrow 3: Education to Products */}
              <path
                d="M 25 45 Q 25 25, 42 15"
                fill="none"
                stroke="#004e7a"
                strokeWidth="1.5"
                strokeDasharray="4 2"
                markerEnd="url(#arrowhead)"
                className="opacity-60"
              />
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#004e7a" opacity="0.8"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        {/* Description - Below Diagram */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg leading-relaxed text-foreground/80">
            This synergy creates a <span className="font-bold text-primary text-xl">powerful flywheel effect</span>: 
            our products inform our consulting, our consulting shapes our education, 
            and our education supplies talent back to products and consulting. 
            This integrated approach positions GenHart as a <span className="font-bold text-primary text-xl">comprehensive AI partner</span>, 
            not just a service provider.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StrategicAdvantage;
