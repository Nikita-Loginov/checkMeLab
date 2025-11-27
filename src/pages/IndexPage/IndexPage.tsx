import Contact from "./Contact/Contact";
import ForWho from "./ForWho/ForWho";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import PersonalPlans from "./PersonalPlans/PersonalPlans";
import Pricing from "./Pricing/Pricing";
import Services from "./Services/Services";
import Technology from "./Technology/Technology";
import VIPProducts from "./VIPProducts/VIPProducts";

export const IndexPage = () => {
  return (
    <>
      <Hero />
      
      <Technology />
      
      <ForWho />
      
      <PersonalPlans />
      
      <Services />
      
      <HowItWorks />
      
      <Pricing />
      
      <VIPProducts />
      
      <Contact />
    </>
  );
};
