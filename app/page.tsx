import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Benefits from "./components/Benefits";
import Scenarios from "./components/Scenarios";
import Comparison from "./components/Comparison";
import UseCases from "./components/UseCases";
import Pricing from "./components/Pricing";
import Trust from "./components/Trust";
import FAQ from "./components/FAQ";
import DemoForm from "./components/DemoForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <Benefits />
        <Scenarios />
        <Comparison />
        <UseCases />
        <Pricing />
        <Trust />
        <FAQ />
        <DemoForm />
      </main>
      <Footer />
    </>
  );
}
