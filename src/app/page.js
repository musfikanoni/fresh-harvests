import Image from "next/image";
import OurProductsSection from "./components/OurProductsSection";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <OurProductsSection></OurProductsSection>
    </div>
  );
}
