import Header from "./components/Header";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import UseCases from "./components/UseCases";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import DemoForm from "./components/DemoForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoBar />
        <HowItWorks />
        <Features />
        <Benefits />
        <UseCases />
        <Pricing />
        <FAQ />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
