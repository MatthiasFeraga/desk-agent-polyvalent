import React from "react";
import { Container, Header as TextHeader, Grid, Menu } from "semantic-ui-react";

import MarianneImage from "images/marianne.png";

export default class HeaderLogin extends React.Component {
  state = {};

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div id="header">
        <Container>
          <Grid>
            <Grid.Column
              mobile={8}
              tablet={4}
              computer={4}
              id="header-left"
              verticalAlign="middle"
              floated="right"
            >
              <img id="marianne-logo" src={MarianneImage} />
            </Grid.Column>
            <Grid.Column width="9">
              <TextHeader
                as="h1"
                id="title-header-left"
                style={{ fontSize: "1.1em" }}
              >
                <a href="/">Desk Agent Polyvalent</a>
              </TextHeader>
              <span>Cahors</span>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
