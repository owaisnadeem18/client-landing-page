import About from "./About";
import ContactSection from "./Contact";
import Home from "./Home";
import Packages from "./Packages";
import Services from "./Services";


export function Hero() {
  return (
    <>
        <Home />
        <Services/>
        <About/>
        <ContactSection/>
    </>
  )
}
