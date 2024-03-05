
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  // Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Button,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const [darkmode, setDarkmode] = React.useState(true);
  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };
  const hireMe = () => {
    window.open("https://www.upwork.com/freelancers/~011c4b9d085baee533")
  }
  const darkmodeToggle = () => {
    setDarkmode(!darkmode);
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor, "mt-n3")} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            target="_blank"
            title="Coded By Waqar Amin"
            style={{ fontSize: "15px" }}
            href="/Persona"
          >
            @Vacaramin
          </NavbarBrand>

          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink>
              <input type="checkbox" className="checkbox" id="checkbox" defaultChecked onChange={darkmodeToggle}/>
                <label htmlFor="checkbox" className="checkboxLabel">
                  <i class="fa fa-moon"/>
                  <i class="fa fa-sun"/>
                  <span class="ball"/>
                </label>
                </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.github.com/vacaramin"
                target="_blank"
                title="Take a sneak on my GitHub"
              >
                <i className="fa fa-github" style={{ fontSize: "30px" }} />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://wa.link/5x48ip"
                target="_blank"
                title="Contact me on Whatsapp"
              >
                <i className="fa fa-whatsapp" style={{ fontSize: "30px" }} />
                <p className="d-lg-none">Whatsapp</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.reddit.com/user/wacaramin/"
                target="_blank"
                title="Follow me on Reddit"
              >
                <i className="fa fa-reddit-alien" style={{ fontSize: "30px" }} />
                <p className="d-lg-none">Reddit</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/vacaramin"
                target="_blank"
                title="Follow me on Twitter"
              >
                <i className="fa fa-twitter" style={{ fontSize: "30px" }} />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <Button color="info" style={{ marginTop: "18px" }} onClick={hireMe}>Hire Me ?</Button>
            </NavItem>

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
