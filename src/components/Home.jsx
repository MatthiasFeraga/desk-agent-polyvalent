import React from "react";
import {
  Container,
  Header as TextHeader,
  Message,
  Search
} from "semantic-ui-react";

import { LinksContainer } from "Components";
import Data from "Data";

const style = { marginTop: "1em" };

export default class Home extends React.Component {
  state = {
    informationIsVisible: false
  };

  componentDidMount() {}
  componentWillUnmount() {}

  toggleInformationsVisibility = () =>
    this.setState({ informationIsVisible: !this.state.informationIsVisible });

  render() {
    return (
      <div>
        <Container text style={style}>
          <Search
            input={{
              fluid: true,
              placeholder: "Chercher une information ou une démarche..."
            }}
            size="big"
            open={false}
          />
        </Container>
        <LinksContainer
          name="Démarches"
          icon={<i className="fas fa-clipboard-list" />}
          links={Data.demarches}
        />
        <LinksContainer
          name="Informations"
          icon={<i className="fas fa-info-circle" />}
          links={Data.informations}
        />
      </div>
    );
  }
}
