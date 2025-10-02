import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const Team = () => {
  const coreTeam = [
    { name: "CEO & Founder", role: "Strategic Leadership" },
    { name: "Head of Operations", role: "Business Operations" },
    { name: "Lead Data Engineer", role: "Technical Architecture" },
    { name: "Product Manager", role: "Product Strategy" },
  ];

  const expansionTeam = [
    { name: "EdTech Lead", role: "Education Programs" },
    { name: "Marketing Manager", role: "Brand & Growth" },
    { name: "Sales & Partnerships", role: "Business Development" },
    { name: "Software Engineer", role: "Product Development" },
  ];

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-hero bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A diverse team of innovators, engineers, and educators driving AI forward in Africa.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Core Team */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-8 text-center">Core Leadership</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreTeam.map((member, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary/40 hover:shadow-medium transition-all duration-300 text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-hero flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-soft">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="font-display text-lg font-bold mb-2">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Expansion Team */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-8 text-center">Expansion Team</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {expansionTeam.map((member, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:border-accent/40 hover:shadow-medium transition-all duration-300 text-center group animate-fade-in"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-soft">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="font-display text-lg font-bold mb-2">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
