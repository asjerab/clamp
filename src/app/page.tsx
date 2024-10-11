import Nav from "./components/nav";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import Accordion from "./components/accordion";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Pricing />
      <Accordion />
    </div>
  );
}
