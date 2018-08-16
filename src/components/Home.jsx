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
                <i
                  style={{ fontSize: "3em" }}
                  className="fas fa-clipboard-list"
                />
              }
              description="Effectuer une démarche"
              anchor="demarches"
              links={Data.demarches}
            />
            <LinksContainer
              name="Informations"
              icon={
                <i style={{ fontSize: "3em" }} className="fas fa-info-circle" />
              }
              description="Trouver l'information"
              anchor="informations"
              links={Data.informations}
            />
            <LinksContainer
              name="Réseau"
              icon={
                <i
                  style={{ fontSize: "3em" }}
                  className="fas fa-hands-helping"
                />
              }
              description="Questionner le réseau pour trouver une réponse"
              anchor="reseau"
              links={Data.reseau}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
