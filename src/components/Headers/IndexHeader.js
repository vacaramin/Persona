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
