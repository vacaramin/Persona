import React from 'react'

export default function AboutMe() {
  return (
    <div>
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
  )
}
