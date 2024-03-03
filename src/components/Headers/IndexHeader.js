
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
            <img
                  alt="..."
                  className="img-circle img-responsive img-raised title-image"
                  width={"40%"}
                  src={require("assets/img/faces/vacaramin.png")}
                />

              <h1 className="presentation-title" style={{ position:"relative", bottom:"20px" }} >Full-Stack Engineer</h1>
              
                           
              <div className="fog-low"  >
                <img alt="..." src={require("assets/img/fog-low.png")} style={{zIndex:"10px"}} />
              </div>
              <div className="fog-low right" style={{zIndex:"10px"}} >
                <img alt="..." src={require("assets/img/fog-low.png")} style={{zIndex:"10px"}} />
              </div>
            </div>
                
            <h2 className="presentation-subtitle text-center" style={{ position:"relative", bottom:"10px" }}>
              Code Craftsman | Software Designer |  Devops Engineer
            </h2>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
        
      </div>
    </>
  );
}

export default IndexHeader;
