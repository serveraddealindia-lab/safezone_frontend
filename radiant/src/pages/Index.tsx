import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import KeepUpToDate from "@/components/KeepUpToDate";
import PrestigiousProjects from "@/components/PrestigiousProjects";
import MarketsWeServe from "@/components/MarketsWeServe";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <KeepUpToDate />
        <PrestigiousProjects />
        <MarketsWeServe />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
