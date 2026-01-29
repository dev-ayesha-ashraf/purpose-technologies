// Page.tsx
import AboutCompanySection from "./about/page";
import CollectionsSection from "./collections/page";
import Products from "./Products/page";
import Clients from "./clients/page";
import Contact from "./contact/page";
import CoreValues from "./components/CoreValues";

import PurposeHome from "./components/Home";

export default function Home() {
  return (
    <>
      <PurposeHome />
      <Products />
      <AboutCompanySection />
      <CoreValues />
      <CollectionsSection />
      <Clients />
      <Contact />

    </>
  )
}
