import "./Home.css";
import { useEffect, useState } from "react";
import gsap from "gsap";

import { useOutletContext } from "react-router-dom";

import {
  navAnimation,
  homeAnimation,
  aboutAnimation,
  headerAnimation,
} from "../../utils/Animate";

/* Components */
import HomeLoader from "../../loaders/HomeLoader/HomeLoader";
import Header from "../../components/Home/Header/Header";
import About from "../../components/Home/About/About";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  useEffect(() => {
    // changeColor("var(--dark-gray");
    let ctx;
    if (!sessionStorage.getItem("visited")) {
      ctx = gsap.context(() => {
        navAnimation();
        homeAnimation();
        aboutAnimation();
      });

      sessionStorage.setItem("visited", "true");
    } else {
      ctx = gsap.context(() => {
        navAnimation();
        headerAnimation();
        aboutAnimation();
      });
    }
    return () => ctx.revert();
  }, []);

  return (
    <div id="homeDiv">
      {!sessionStorage.getItem("visited") ? <HomeLoader /> : ""}
      <Navigation page="home" />
      <Header />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
