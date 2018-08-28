import React from "react";
import {
  Container,
  Input,
  Icon,
  List,
  Label,
  Breadcrumb,
  Grid,
  Header
} from "semantic-ui-react";

import Config from "Config";

export default class Search extends React.Component {
  state = {};

  componentWillUnmount() {}

  search = () => {
    if (this.state.inputSearchValue === "") {
      this.setState({
        searchingLoading: false
      });
      this.props.setShowSearchResults(false);
      return;
    }

    this.setState({
      searchingLoading: true
    });

    let googleSearchURL = `${Config.googleSearchURL}=${
      this.state.inputSearchValue
    }`;

    return fetch(googleSearchURL)
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          searchingLoading: false,
          searchResults: json.items,
          searchTotalResults: json.searchInformation.totalResults
        });
        this.props.setShowSearchResults(true);
      });
  };

  getLinkIcon = link => {
    const lastPartOfURL = link.substr(link.lastIndexOf("/") + 1);

    if (link.includes(Config.servicePublicURL)) {
      if (lastPartOfURL.startsWith(Config.servicePublicURLInfo.info)) {
        return (
          <List.Icon className="fas fa-info-circle" verticalAlign="middle" />
        );
      } else if (
        lastPartOfURL.startsWith(Config.servicePublicURLInfo.demarche)
      ) {
        return (
          <List.Icon className="fas fa-clipboard-list" verticalAlign="middle" />
        );
      } else if (
        lastPartOfURL.startsWith(Config.servicePublicURLInfo.actualite) ||
        link.includes("actualites")
      ) {
        return (
          <List.Icon className="far fa-newspaper" verticalAlign="middle" />
        );
      } else if (
        lastPartOfURL.startsWith(Config.servicePublicURLInfo.dossier)
      ) {
        return <List.Icon className="fas fa-folder" verticalAlign="middle" />;
      }
    } else if (lastPartOfURL.endsWith(".pdf")) {
      return <List.Icon className="fas fa-file-pdf" verticalAlign="middle" />;
    }
  };

  updateInputValue = event => {
    this.setState({
      inputSearchValue: event.target.value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.search();
    }
  };

  render() {
    return (
      <div>
        <div id="search">
          <Container text id="search-container">
            <h3 id="search-text">Chercher une information ou une démarche</h3>
            <Input
              icon
              placeholder="Ex: Changement d'adresse en ligne"
              size="big"
              fluid
              loading={this.state.searchingLoading}
            >
              <input
                id="search-input"
                onChange={event => this.updateInputValue(event)}
                onKeyPress={this.handleKeyPress}
              />
              <Icon name="search" link onClick={this.search} />
            </Input>
          </Container>
        </div>

        {this.props.showSearchResults ? (
          <Container>
            <Grid id="search-results-container">
              <Grid.Column floated="left" width={5}>
                <Breadcrumb>
                  <Breadcrumb.Section href="/home">Accueil</Breadcrumb.Section>
                  <Breadcrumb.Divider icon="right arrow" />
                  <Breadcrumb.Section active>Recherche</Breadcrumb.Section>
                </Breadcrumb>
              </Grid.Column>
              <Grid.Column floated="right" width={2}>
                <i>{this.state.searchTotalResults} résultat(s)</i>
              </Grid.Column>
            </Grid>

            <List
              id="search-results-list"
              divided
              verticalAlign="middle"
              size="big"
              link
              relaxed
            >
              {this.state.searchTotalResults === "0" ? (
                <Header as="h3" icon textAlign="center">
                  <Icon name="meh" circular />
                  <Header.Content>Aucun résultat</Header.Content>
                </Header>
              ) : null}
              {Array.isArray(this.state.searchResults)
                ? this.state.searchResults.map(result => {
                    const displayLinkUrl = `http://${result.displayLink}`;
                    return (
                      <List.Item
                        key={result.title}
                        className="search-results-list-item"
                      >
                        <List.Content floated="right">
                          <Label>
                            <a href={displayLinkUrl} target="_blank">
                              {result.displayLink}
                            </a>
                          </Label>
                        </List.Content>
                        {this.getLinkIcon(result.link)}
                        <List.Content>
                          <a href={result.link} target="_blank">
                            <List.Header
                              as="h4"
                              className="search-results-title"
                            >
                              {result.title}
                            </List.Header>
                            {result.snippet}
                          </a>
                        </List.Content>
                      </List.Item>
                    );
                  })
                : null}
            </List>
          </Container>
        ) : null}
      </div>
    );
  }
}
