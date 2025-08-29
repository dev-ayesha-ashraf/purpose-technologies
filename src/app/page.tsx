
import AboutCompanySection from "./components/AboutCompanySection";
import AjarPayCollectionsSection from "./components/AjarPayCollectionsSection";
import AjarPayProducts from "./components/AjarPayProduct";
import AjarPaySection from "./components/AjarPaySection";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import CoreValues from "./components/CoreValues";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <AjarPaySection />
    <AjarPayProducts />
    <AboutCompanySection />
    <CoreValues />
    <AjarPayCollectionsSection />
    <Clients />
    <Contact />
    <Footer />
    </>
  )
}
