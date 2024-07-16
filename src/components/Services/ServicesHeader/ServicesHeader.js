import "./ServicesHeader.css";

const ServicesHeader = () => {
  return (
    <div className="jumbo-text-solid" id="servicesHeaderDiv">
      <div id="servicesHeader1" className="services-header">
        <div>
          I{" "}
          <span className="services-emphasis">
            DES
            <img
              id="paintBrush"
              src={require("../../../assets/services/paint-brush.svg").default}
              alt=""
            />
            GN{" "}
          </span>
        </div>
        <div>
          &{" "}
          <span className="services-emphasis">
            DEVEL
            <img
              id="gear"
              src={require("../../../assets/services/gear.svg").default}
              alt=""
            />
            P
          </span>{" "}
        </div>
        <div>WEBSITES</div>
      </div>
      <div id="servicesHeader2" className="services-header">
        <div>I ALSO DO</div>
        <div>
          <span className="services-emphasis">
            BR
            <img
              id="lightbulb"
              src={require("../../../assets/services/lightbulb.svg").default}
              alt=""
            />
            NDING
          </span>{" "}
          &
        </div>
        <div>
          <span className="services-emphasis">
            MARKETING
            <img
              id="bullhorn"
              src={require("../../../assets/services/bullhorn.svg").default}
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesHeader;
