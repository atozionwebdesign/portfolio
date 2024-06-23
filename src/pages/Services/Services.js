import "./Services.css";
import { useEffect } from "react";
import gsap from "gsap";

import { useOutletContext } from "react-router-dom";

import { navAnimation, servicesAnimation } from "../../utils/Animate";

/* Components */
import Navigation from "../../components/Navigation/Navigation";
import ServicesComponent from "../../components/Services/ServicesComponent/Services";
import Footer from "../../components/Footer/Footer";

const Services = () => {

  useEffect(() => {

    const ctx = gsap.context(() => {
      navAnimation();
      servicesAnimation()
    });
    return () => ctx.revert();
  });

  return (
    <div id="servicesDiv">
      <Navigation page="services" />
      <ServicesComponent />
      <Footer />
    </div>
  );
};

export default Services;
