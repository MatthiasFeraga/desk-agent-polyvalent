import React from "react";
import {
  Container,
  Header as TextHeader,
  Image,
  Grid,
  Card
} from "semantic-ui-react";

export default class LinksContainer extends React.Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Container className="links-container" id={this.props.anchor}>
          <Grid>
            <Grid.Column
              mobile={3}
              tablet={2}
              computer={1}
              className="links-container-icon-inner"
            >
              {this.props.icon}
            </Grid.Column>
            <Grid.Column width={11}>
              <TextHeader as="h2" className="links-container-header">
                {this.props.name}
              </TextHeader>
              <span>{this.props.description}</span>
            </Grid.Column>
          </Grid>

          <div className="links-container-body">
            <Grid>
              {this.props.links
                ? this.props.links.map(item => {
                    return (
                      <Grid.Column
                        key={item.description}
                        mobile={8}
                        tablet={4}
                        computer={3}
                      >
                        <a href={item.link} target="_blank">
                          <div>
                            <Card>
                              <Image
                                src={item.image}
                                size="small"
                                className="links-container-image"
                                centered
                                inline
                                verticalAlign="middle"
                              />
                              <Card.Content>
                                <Card.Description>
                                  {item.description}
                                </Card.Description>
                              </Card.Content>
                            </Card>
                          </div>
                        </a>
                      </Grid.Column>
                    );
                  })
                : null}
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}
