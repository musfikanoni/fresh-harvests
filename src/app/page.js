import Image from "next/image";
import OurProductsSection from "./components/OurProductsSection";
import Banner from "./components/Banner";
import About from "./components/AboutUs/About";
import SpecialOffer from "./components/specialOffer/SpecialOffer";

export default function Home() {
  return (
    <div>
      <Banner />
      <OurProductsSection></OurProductsSection>
      <About></About>
      <SpecialOffer />
    </div>
  );
}
