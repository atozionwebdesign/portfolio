/* Styles */
import "./HomeLoader.css";
import { useEffect } from "react";

import gsap from "gsap";

// import { loaderAnimation } from "../../utils/Animate";

function HomeLoader() {
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     loaderAnimation();
  //   });
  //   return () => {
  //     ctx.revert();
  //   };
  // }, []);

  return (
    <div className="Loader">
      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div id="quote">
        <span id="quoteText">For the love of Zion</span>
        <span id="quoteDots">...</span>
      </div>
    </div>
  );
}

export default HomeLoader;
