import React, { useEffect, useRef, useState } from "react";
import { Container } from "reactstrap";
import { useSelector } from 'react-redux'

function IndexHeader() {
  const darkmode = useSelector((state) => state.darkmode.value);
  const backgroundRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translateY = Math.min(0, -scrollY * 0.5);
  const opacity = darkmode?Math.max(0, 1 - scrollY * 0.002):0.3 *Math.max(0, 1 - scrollY * 0.002);

  return (
    <>
     <div
        className="section-dark"
        style={{
          backgroundColor: "black",
          
        }}
      >
      <div 
        className="page-header section-dark"
        ref={backgroundRef}
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
          transform: `translateY(${translateY}px)`,
          opacity: opacity- darkmode? 0.7 : 1,
          transition: "transform 0.3s, opacity 0.3s",
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
                style={{
                  transform: `scale(${1 - scrollY * 0.002})`,
                }}
              />

              <h1
                className="presentation-title"
                style={{
                  transform: `scale(${1 - scrollY * 0.002})`,
                  opacity:1
                }}
              >
                Full-Stack Engineer
              </h1>

              <div className="fog-low">
                <img alt="..." src={require("assets/img/fog-low.png")} style={{ zIndex: "10px",opacity: darkmode? 1 : 0.7, }} />
              </div>
              <div className="fog-low right" style={{ zIndex: "10px" }}>
                <img alt="..." src={require("assets/img/fog-low.png")} style={{ zIndex: "10px",opacity: darkmode? 1 : 0.7, }} />
              </div>
            </div>

            <h2 className="presentation-subtitle text-center" style={{ position: "relative", bottom: "10px", transform: `scale(${1 - scrollY * 0.002})` }}>
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

      
      </div>
    </>
  );
}

export default IndexHeader;
