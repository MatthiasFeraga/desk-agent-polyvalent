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

const style = { marginTop: "3em" };

export default class Search extends React.Component {
  state = {};

  componentDidMount() {}
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
        console.log(json);
        this.setState({
          searchingLoading: false,
          searchResults: json.items,
          searchTotalResults: json.searchInformation.totalResults
        });
        this.props.setShowSearchResults(true);
      });
  };

  getLinkIcon = link => {
    if (link.includes(Config.servicePublicURL)) {
      const lastPartOfURL = link.substr(link.lastIndexOf("/") + 1);

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
        <Container text style={style}>
          <Input
            icon
            placeholder="Chercher une information ou une démarche..."
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
        </Container>
        ;
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
                            <a href={displayLinkUrl} style={{ color: "black" }}>
                              {result.displayLink}
                            </a>
                          </Label>
                        </List.Content>
                        {this.getLinkIcon(result.link)}
                        <List.Content>
                          <a href={result.link}>
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
