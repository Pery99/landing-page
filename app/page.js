import Cards from "@/components/Cards";
import Details from "@/components/Details";
import Hero from "@/components/Hero";
import Others from "@/components/Others";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <Details />
      <Cards />
      <Others />
    </>
  );
};

export default page;
