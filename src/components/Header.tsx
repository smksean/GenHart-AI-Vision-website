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
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <nav className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-xl bg-white/10 border border-white/20 text-white">
              G
            </div>
            <span className="font-display font-bold text-2xl text-white">GenHart</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-white/80 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("divisions")} className="text-white/80 hover:text-white transition-colors">
              Divisions
            </button>
            <button onClick={() => scrollToSection("services")} className="text-white/80 hover:text-white transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("team")} className="text-white/80 hover:text-white transition-colors">
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
            {mobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-4 space-y-2 animate-fade-in bg-black/60 rounded-lg border border-white/10 px-4 py-3">
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-white/80 hover:text-white transition-colors">                                                                                                                                                          
              About
            </button>
            <button onClick={() => scrollToSection("divisions")} className="block w-full text-left text-white/80 hover:text-white transition-colors">                                                                                                                                                      
              Divisions
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left text-white/80 hover:text-white transition-colors">                                                                                                                                                       
              Services
            </button>
            <button onClick={() => scrollToSection("team")} className="block w-full text-left text-white/80 hover:text-white transition-colors">                                                                                                                                                           
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
