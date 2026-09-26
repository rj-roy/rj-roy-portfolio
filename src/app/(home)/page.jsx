import Contact from "@/components/portfolio/Contact";
import Hero from "@/components/portfolio/Hero";
import Journey from "@/components/portfolio/Journey";
import Notes from "@/components/portfolio/Notes";
import Process from "@/components/portfolio/Process";
import SiteFooter from "@/components/portfolio/SiteFooter";
import SiteHeader from "@/components/portfolio/SiteHeader";
import Skills from "@/components/portfolio/Skills";
import StackMarquee from "@/components/portfolio/StackMarquee";
import WhyPartner from "@/components/portfolio/WhyPartner";
import Work from "@/components/portfolio/Work";

export default function Home() {
  return (
    <div className="pf">
      <SiteHeader />
      <main>
        <Hero />
        <StackMarquee />
        <Work />
        <Skills />
        <WhyPartner />
        <Process />
        <Journey />
        <Notes />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
