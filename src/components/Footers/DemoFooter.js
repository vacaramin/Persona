
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function IndexFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                {/* <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  Play a Game?
                </a> */}
              </li>
              <li>
                <a
                  href="https://www.chess.com/member/vacaramin"
                  target="_blank"
                >
                  Chess.com?
                </a>
              </li>
              <li>
                {/* <a
                  href="https://www.creative-tim.com/license?ref=pkr-footer"
                  target="_blank"
                >
                  I'm a Chess Player
                </a> */}
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              {new Date().getFullYear()}{" "}
              <i className="fa fa-heart heart" />
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default IndexFooter;
