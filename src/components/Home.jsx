import React from "react";
import {
  Container,
  Header as TextHeader,
  Message,
  Input,
  Icon,
  List,
  Label,
  Image
} from "semantic-ui-react";

import { LinksContainer, Search } from "Components";
import Data from "Data";

export default class Home extends React.Component {
  state = {
    showSearchResults: false
  };

  componentDidMount() {}
  componentWillUnmount() {}

  setShowSearchResults = showSearchResults =>
    this.setState({ showSearchResults: showSearchResults });

  render() {
    return (
      <div>
        <Search
          showSearchResults={this.state.showSearchResults}
          setShowSearchResults={this.setShowSearchResults}
        />

        {!this.state.showSearchResults ? (
          <div>
            <LinksContainer
              name="Démarches"
              icon={
                <i className="fas fa-list-ol links-container-icon demarches-color" />
              }
              description="Effectuer une démarche"
              anchor="demarches"
              links={Data.demarches}
            />
            <LinksContainer
              name="Informations"
              icon={
                <i className="fas fa-info-circle links-container-icon informations-color" />
              }
              description="Trouver l'information"
              anchor="informations"
              links={Data.informations}
            />
            <LinksContainer
              name="Réseau"
              icon={
                <i className="fas fa-hands-helping links-container-icon reseaux-color" />
              }
              description="Questionner le réseau pour trouver une réponse"
              anchor="reseaux"
              links={Data.reseaux}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
