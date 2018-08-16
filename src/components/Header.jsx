import React from "react";
import { Container, Header as TextHeader } from "semantic-ui-react";

export default class Header extends React.Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <Container text>
        <a href="/home">
          <TextHeader as="h1" style={{ margin: "0.5em 0 1em 0" }}>
            <i className="fas fa-desktop" /> Desk Agent Polyvalent
          </TextHeader>
        </a>
      </Container>
    );
  }
}
