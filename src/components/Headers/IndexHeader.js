import React, { useEffect, useRef, useState } from "react";

function IndexHeader() {
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
  
  return (
    <>
     
      <div 
        className="page-header section-dark"
        ref={backgroundRef}
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
          transform: `translateY(${translateY}px)`,
          opacity: 1,
          transition: "transform 0.3s, opacity 0.3s",
        }}
      >
        <div className="filter" />
        
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
