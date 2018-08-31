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
import ServicePublicImage from "images/service-public.png";
import Data from "Data";

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

  getImageFromURL = url => {
    const linksArray = [
      ...Data.informations,
      ...Data.demarches,
      ...Data.reseaux
    ];

    const image = linksArray
      .filter(site => {
        return site.link.includes(url);
      })
      .map(site => {
        return site.image;
      });

    return image ? image.reduce((_, value) => value) : null;
  };

  getLinkIcon = link => {
    const lastPartOfURL = link.substr(link.lastIndexOf("/") + 1);

    if (link.includes(Config.servicePublicURL)) {
      if (
        lastPartOfURL.startsWith(Config.servicePublicURLInfo.info) ||
        lastPartOfURL.startsWith(Config.servicePublicURLInfo.dossier)
      ) {
        return (
          <List.Icon
            className="fas fa-info-circle big-icon informations-color"
            title="Information"
            verticalAlign="middle"
          />
        );
      } else if (
        lastPartOfURL.startsWith(Config.servicePublicURLInfo.demarche)
      ) {
        return (
          <List.Icon
            className="fas fa-list-ol big-icon demarches-color"
            title="Démarche"
            verticalAlign="middle"
          />
        );
      } else if (
        lastPartOfURL.startsWith(Config.servicePublicURLInfo.actualite) ||
        link.includes("actualites")
      ) {
        return (
          <List.Icon
            className="far fa-newspaper big-icon icon-grey"
            title="Actualité"
            verticalAlign="middle"
          />
        );
      }
    } else if (lastPartOfURL.endsWith(".pdf")) {
      return (
        <List.Icon
          className="fas fa-file-pdf big-icon icon-grey"
          verticalAlign="middle"
        />
      );
    } else {
      return (
        <List.Icon className="blank-icon" verticalAlign="middle">
          {" "}
        </List.Icon>
      );
    }
  };

  getLinkAccessibilityName = link => {
    const lastPartOfURL = link.substr(link.lastIndexOf("/") + 1);

    if (link.includes(Config.servicePublicURL)) {
      if (lastPartOfURL.startsWith(Config.servicePublicURLInfo.info)) {
        return <span className="outer-window">Information</span>;
      } else if (
        lastPartOfURL.startsWith(Config.servicePublicURLInfo.demarche)
      ) {
        return <span className="outer-window">Démarche</span>;
      } else if (
        lastPartOfURL.startsWith(Config.servicePublicURLInfo.actualite) ||
        link.includes("actualites")
      ) {
        return <span className="outer-window">Actualité</span>;
      } else if (
        lastPartOfURL.startsWith(Config.servicePublicURLInfo.dossier)
      ) {
        return <span className="outer-window">Dossier</span>;
      }
    } else if (lastPartOfURL.endsWith(".pdf")) {
      return <span className="outer-window">Fichier PDF</span>;
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
                        {this.getLinkAccessibilityName(result.link)}
                        {/* <List.Content floated="right">
                          <Label className="search-label">
                            <a href={displayLinkUrl} target="_blank">
                              {result.displayLink}
                            </a>
                          </Label>
                        </List.Content> */}
                        {this.getLinkIcon(result.link)}
                        <List.Content style={{ fontSize: "1rem" }}>
                          <Grid>
                            <Grid.Column
                              width="2"
                              textAlign="center"
                              verticalAlign="middle"
                              style={{ maxWidth: "80px" }}
                            >
                              <img
                                style={{ maxWidth: "80px", maxHeight: "30px" }}
                                src={this.getImageFromURL(
                                  result.displayLink.replace("www.", "")
                                )}
                              />
                              <br />
                              <span className="search-label">
                                {result.displayLink.replace("www.", "")}
                              </span>
                            </Grid.Column>
                            <Grid.Column width="14">
                              <List.Header className="search-results-title">
                                <a href={result.link} target="_blank">
                                  {result.title}
                                </a>
                              </List.Header>

                              {result.snippet}
                            </Grid.Column>
                          </Grid>
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
