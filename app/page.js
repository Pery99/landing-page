import Cards from "@/components/home/Cards";
import Details from "@/components/home/Details";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import Others from "@/components/home/Others";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Details />
      <Cards />
      <Others />
      <Newsletter />
    </>
  );
};

export default page;
