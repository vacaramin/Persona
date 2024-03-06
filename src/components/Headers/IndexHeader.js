import React, { useEffect, useRef } from "react";
import { Container} from "reactstrap";
import { useSelector } from 'react-redux'

function IndexHeader() {
  const darkmode = useSelector((state) => state.darkmode.value)
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundPositionY = `${scrollTop * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div
        className="page-header section-dark"
        ref={backgroundRef}
        style={{
          backgroundColor: "#000",
          backgroundImage: darkmode ? "url(" + require("assets/img/antoine-barres.jpg") + ")" : "none",
          height: "10em",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <img
                alt="..."
                className="img-circle img-responsive img-raised title-image"
                width={"35%"}
                src={require("assets/img/faces/vacaramin.png")}
              />

              <h1 className="presentation-title" >Full-Stack Engineer</h1>

              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} style={{ zIndex: "10px" }} />
              </div>
              <div className="fog-low right" style={{ zIndex: "10px" }}>
                <img alt="..." src={require("assets/img/fog-low.png")} style={{ zIndex: "10px" }} />
              </div>
            </div>

            <h2 className="presentation-subtitle text-center" style={{ position: "relative", bottom: "10px" }}>
              Code Craftsman | Software Designer | Devops Engineer
            </h2>


          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
