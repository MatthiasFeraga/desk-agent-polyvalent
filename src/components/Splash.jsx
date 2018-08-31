import React from "react";
import {
  Container,
  Header as TextHeader,
  Message,
  Grid
} from "semantic-ui-react";
import { Form, Input } from "semantic-ui-react";
import { Redirect } from "react-router";
import Data from "Data";

export default class Splash extends React.Component {
  state = {
    loggedIn: false,
    emailInput: "",
    loginError: ""
  };

  handleChange = e => {
    this.setState({ emailInput: e.target.value });
  };

  signIn = () => {
    const containEmailDomain = Data.emailDomains.some(domain => {
      return this.state.emailInput.includes(domain);
    });

    if (containEmailDomain) {
      this.setState({ loggedIn: true, loginError: "" });
    } else {
      this.setState({
        loginError: `L'adresse email "${
          this.state.emailInput
        }" ne permet pas de se connecter au service Desk.`
      });
    }
  };

  render() {
    this.state.loggedIn ? (window.location.pathname = "/home") : null;
    return (
      <Container text id="splash-container" style={{ textAlign: "center" }}>
        <Grid>
          <Grid.Column mobile={8} tablet={13} computer={13} floated="right">
            <Form id="splash-form">
              <Form.Group>
                <Form.Input
                  placeholder="email@cahors.fr"
                  onChange={this.handleChange}
                />
                <Form.Button onClick={this.signIn}>
                  <span>Me connecter</span>
                </Form.Button>
              </Form.Group>
            </Form>
            {this.state.loginError ? (
              <Message warning>
                <p>{this.state.loginError}</p>
              </Message>
            ) : null}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
