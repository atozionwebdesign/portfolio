import { useEffect } from "react";

// import { crownAnimation } from "../../utils/Animate";

/* Components */
import Header from "../../components/Header/Header";
import CrownAnimation from "../../components/CrownAnimation/CrownAnimation";
import Services from "../../components/Services/Services";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";

const Home = () => {

    useEffect(() => {
        // crownAnimation();
    })

  return (
    <>
      <Header />
      {/* <CrownAnimation /> */}
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
