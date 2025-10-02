import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import Services from "@/components/Services";
import Team from "@/components/Team";
import StrategicAdvantage from "@/components/StrategicAdvantage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Divisions />
        <Services />
        <Team />
        <StrategicAdvantage />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
