import React from "react";
import { Container } from "semantic-ui-react";

const Footer = () => (
  <Container text>
    <hr />
    <div style={{ fontSize: "small" }}>
      © 2018 Desk DITP -{" "}
      <a href="mailto:feedbacks@ditp.fr">
        <i className="far fa-envelope" /> Contact
      </a>
    </div>
  </Container>
);

export default Footer;
