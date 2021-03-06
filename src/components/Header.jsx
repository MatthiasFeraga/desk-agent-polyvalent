import React from "react";
import { Container, Header as TextHeader, Grid, Menu } from "semantic-ui-react";

import Data from "Data";
import MarianneImage from "images/marianne.png";

export default class Header extends React.Component {
  state = {};

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    const MAX_NUMBER = 1000;
    let randomNumber = Math.floor(Math.random() * MAX_NUMBER + 1);
    let homeURLWithReload = "/home?reload=" + randomNumber;

    const linkType = Data.encartTypes;
    const links = Object.keys(linkType).reduce((newObject, key) => {
      newObject[key] = homeURLWithReload + "#" + key;
      return newObject;
    }, {});

    return (
      <div id="header">
        <Container>
          <Grid columns="2">
            <Grid.Column floated="left" streched="true">
              <Grid>
                <Grid.Column
                  mobile={8}
                  tablet={4}
                  computer={4}
                  id="header-left"
                  verticalAlign="middle"
                >
                  <img id="marianne-logo" src={MarianneImage} />
                </Grid.Column>
                <Grid.Column width="12">
                  <TextHeader
                    as="h1"
                    id="title-header-left"
                    style={{ fontSize: "1.1em" }}
                  >
                    <a href="/home">Desk Agent Polyvalent</a>
                  </TextHeader>
                  <span>Cahors</span>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column floated="right" id="header-right" streched="true">
              <Menu text stackable floated="right">
                <Menu.Item
                  as="a"
                  href={links.demarches}
                  link
                  name={linkType.demarches}
                  style={{ marginLeft: "1em" }}
                >
                  <i className="fas fa-list-ol demarches-color" />{" "}
                  <span className="header-right-menu-item">Démarches</span>
                </Menu.Item>
                <Menu.Item
                  as="a"
                  href={links.informations}
                  link
                  name="informations"
                  style={{ marginLeft: "1em" }}
                >
                  <i className="fas fa-info-circle informations-color" />
                  <span className="header-right-menu-item">Informations</span>
                </Menu.Item>
                <Menu.Item
                  as="a"
                  href={links.reseaux}
                  link
                  name="reseaux"
                  style={{ marginLeft: "1em" }}
                >
                  <i className="fas fa-hands-helping reseaux-color" />
                  <span className="header-right-menu-item">Réseau</span>
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
