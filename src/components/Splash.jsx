import React from "react";
import { Container, Header as TextHeader, Message } from "semantic-ui-react";
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
    return this.state.loggedIn ? (
      <Redirect to="/home" />
    ) : (
      <Container text>
        <Message>
          <Message.Header>Connexion</Message.Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac
            nunc sapien. Donec dapibus ipsum est, vitae tincidunt justo
            vestibulum at. Nunc accumsan augue sit amet urna scelerisque ornare.
          </p>
        </Message>
        <Form id="splash-form">
          <Form.Group>
            <Form.Input
              placeholder="email@cahors.fr"
              onChange={this.handleChange}
            />
            <Form.Button onClick={this.signIn}>
              <i className="fas fa-sign-in-alt" />
            </Form.Button>
          </Form.Group>
        </Form>
        {this.state.loginError ? (
          <Message warning>
            <p>{this.state.loginError}</p>
          </Message>
        ) : null}
      </Container>
    );
  }
}
