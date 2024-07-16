import "./Portfolio.css";
import { useEffect } from "react";
import gsap from "gsap";

import { navAnimation } from "../../utils/Animate";

/* Components */
import Navigation from "../../components/Navigation/Navigation";
import PortfolioComponent from "../../components/Portfolio/Portfolio";
import Footer from "../../components/Footer/Footer";

const Portfolio = () => {
  // const [color, changeColor] = useState("var(--lighter-yellow)");
  useEffect(() => {
    const ctx = gsap.context(() => {
      navAnimation();
    });
    return () => ctx.revert();
  });

  return (
    <div id="portfolioDiv">
      <Navigation page="portfolio" />
      <PortfolioComponent />
      <Footer />
    </div>
  );
};

export default Portfolio;
