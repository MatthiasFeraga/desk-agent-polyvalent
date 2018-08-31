import React from "react";
import { Container, Grid } from "semantic-ui-react";

import DITPImage from "images/ditp.png";
import DINSICImage from "images/dinsic.png";

const Footer = () => (
  <div id="footer">
    <Container id="footer-container">
      <Grid columns="2">
        <Grid.Column floated="left" streched="true">
          <p>
            <i>
              Un service fourni par la DITP <br />
              et porté par la DINSIC
            </i>
            <br />
            <a href="http://www.modernisation.gouv.fr" target="_blank">
              <img
                style={{ height: "100px", marginTop: "1em" }}
                src={DITPImage}
              />
              <img
                style={{
                  height: "100px",
                  marginTop: "1em",
                  marginLeft: "10px"
                }}
                src={DINSICImage}
              />
            </a>
          </p>
        </Grid.Column>
        <Grid.Column floated="right" streched="true">
          <Grid.Row>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            eget mi id libero eleifend accumsan non sit amet risus. Quisque
            turpis sem, pharetra in nibh ac, volutpat imperdiet mi.
          </Grid.Row>
          <Grid.Row style={{ marginTop: "1em" }}>
            <a href="mailto:feedbacks@ditp.fr">
              <span
                className="far fa-envelope"
                title="mail"
                aria-hidden="true"
              />
              <span className="outer-window">Mail</span> Contact
            </a>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

export default Footer;
