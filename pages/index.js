// 'use client'
// import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import PropertyByArea from "../components/property-by-area";
import FeaturedAreaCard from "../components/featured-area-card";
import RentPropertiesCard from "../components/rent-properties-card";
import RentalCardContainer from "../components/rental-card-container";
import Contact from "../components/contact";
import FooterCard from "../components/footer-card";

const LandingPage = () => {
  return (
    <main className="relative bg-gray-white w-full flex flex-col items-center justify-start">
      <Header showHamburgerMenuIcon={false} realStateMargin="0" />
      <Hero />
      <PropertyByArea />
      <FeaturedAreaCard />
      <RentPropertiesCard />
      <RentalCardContainer />
      <Contact />
      <FooterCard />
    </main>
  );
};

export default LandingPage;
