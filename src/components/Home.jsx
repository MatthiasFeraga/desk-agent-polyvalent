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
              icon={<i className="fas fa-clipboard-list" />}
              links={Data.demarches}
            />
            <LinksContainer
              name="Informations"
              icon={<i className="fas fa-info-circle" />}
              links={Data.informations}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
