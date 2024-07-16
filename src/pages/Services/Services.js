import "./Services.css";
import { useEffect } from "react";
import gsap from "gsap";
import { navAnimation, servicesAnimation } from "../../utils/Animate";

/* Components */
import Navigation from "../../components/Navigation/Navigation";
import ServicesHeader from "../../components/Services/ServicesHeader/ServicesHeader";
// import ServicesComponent from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import ServicesQuote from "../../components/Services/ServicesQuote";
import ServicesContent from "../../components/Services/ServicesContent/ServicesContent";

const Services = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      navAnimation();
      servicesAnimation();
    });
    return () => ctx.revert();
  });

  return (
    <div id="servicesDiv">
      <Navigation page="services" />
      <ServicesHeader />
      {/* <ServicesQuote /> */}
      <ServicesContent />
      <Footer />
    </div>
  );
};

export default Services;
