import React from "react";
import { Container } from "semantic-ui-react";

const Footer = () => (
  <div>
    <div id="footer">
      <hr />
      <Container id="footer-container">
        © 2018 - Desk - Service fourni par la DITP -{" "}
        <a href="mailto:feedbacks@ditp.fr">
          <i className="far fa-envelope" /> Contact
        </a>
      </Container>
    </div>
  </div>
);

export default Footer;
