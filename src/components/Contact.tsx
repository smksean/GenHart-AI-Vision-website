import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for joining our newsletter.",
    });
    setEmail("");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  Let's Build <span className="bg-gradient-hero bg-clip-text text-transparent">Together</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Ready to transform your business with AI? Get in touch with our team.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">contact@genhart.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+234 (0) XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <button className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-muted hover:bg-secondary/20 flex items-center justify-center transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Newsletter & CTA */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8 bg-card border-border">
                <h3 className="font-display text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter for the latest AI insights, product updates, and training opportunities.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background"
                  />
                  <Button type="submit" className="w-full bg-gradient-accent">
                    Subscribe Now
                  </Button>
                </form>
              </Card>

              <Card className="p-8 bg-gradient-hero border-none text-center">
                <h3 className="font-display text-2xl font-bold mb-4">Join Our Team</h3>
                <p className="text-white/90 mb-6">
                  We're always looking for talented individuals passionate about AI and innovation.
                </p>
                <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  View Open Positions
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
