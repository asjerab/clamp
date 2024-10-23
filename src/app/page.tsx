import Nav from "./components/nav";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Accordion from "./components/accordion";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Pricing />
      <Accordion />
      <Footer />
    </div>
  );
}
