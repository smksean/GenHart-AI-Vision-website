import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center font-display font-bold text-xl">
              G
            </div>
            <span className="font-display font-bold text-2xl">GenHart</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("about")} className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("divisions")} className="text-muted-foreground hover:text-foreground transition-colors">
              Divisions
            </button>
            <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("team")} className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-gradient-accent">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("divisions")} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
              Divisions
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("team")} className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors">
              Team
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-gradient-accent">
              Contact
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
