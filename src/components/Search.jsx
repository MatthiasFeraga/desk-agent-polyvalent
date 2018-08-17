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
import { Loader } from "semantic-ui-react";

import Config from "Config";

const style = { paddingTop: "2em", paddingBottom: "3em" };

export default class Search extends React.Component {
  state = {};

  componentDidMount() {
    // const scriptGSCRenderer = document.createElement("script");
    // scriptGSCRenderer.src = "https://cse.google.com/query_renderer.js";
    // scriptGSCRenderer.async = true;
    // document.body.appendChild(scriptGSCRenderer);
    // const scriptGSCAPI = document.createElement("script");
    // scriptGSCAPI.src =
    //   "https://cse.google.com/api/016550067971777540424/cse/on93fby9gya/queries/js?view=overall&callback=(new+PopularQueryRenderer(document.getElementById(%22queries%22))).render";
    // scriptGSCAPI.async = true;
    // document.body.appendChild(scriptGSCAPI);
  }
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
        <div
          style={{
            backgroundColor: "#0b6ba8"
          }}
        >
          <Container text style={style}>
            <h3
              style={{
                color: "white",
                paddingBottom: "0.3em",
                textAlign: "center"
              }}
            >
              Chercher une information ou une démarche
            </h3>
            <Input
              icon
              placeholder="Ex: Changement d'adresse en ligne"
              size="big"
              fluid
              loading={this.state.searchingLoading}
            >
              <input
                style={{ borderRadius: "500rem" }}
                onChange={event => this.updateInputValue(event)}
                onKeyPress={this.handleKeyPress}
              />
              <Icon name="search" link onClick={this.search} />
            </Input>
            {/* <div
              style={{
                color: "white",
                textAlign: "center"
              }}
            >
              Recherches populaires :{" "}
              <span
                style={{
                  color: "white"
                }}
                id="queries"
              />
            </div> */}
          </Container>
        </div>

        {this.props.showSearchResults ? (
          <Container>
            <Grid style={{ marginTop: "1em" }}>
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
              style={{ marginTop: "2em" }}
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
                        style={{ marginTop: "0.3em" }}
                      >
                        <List.Content floated="right">
                          <Label>
                            <a
                              href={displayLinkUrl}
                              style={{ color: "black" }}
                              target="_blank"
                            >
                              {result.displayLink}
                            </a>
                          </Label>
                        </List.Content>
                        {this.getLinkIcon(result.link)}
                        <List.Content>
                          <a href={result.link} target="_blank">
                            <List.Header
                              as="h4"
                              style={{ marginBottom: "0.2em" }}
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
