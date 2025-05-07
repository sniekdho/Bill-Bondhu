import React from "react";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Feedbacks from "../components/Feedbacks";
import Partners from "../components/Partners";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Features></Features>

      <HowItWorks></HowItWorks>

      <Feedbacks></Feedbacks>

      <Partners></Partners>
    </div>
  );
};

export default Home;
