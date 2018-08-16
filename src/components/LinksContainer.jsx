import React from "react";
import {
  Container,
  Header as TextHeader,
  Image,
  Grid,
  Card
} from "semantic-ui-react";

const style = { marginTop: "2em" };

export default class LinksContainer extends React.Component {
  state = {};

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Container style={style} id={this.props.anchor}>
          <Grid>
            <Grid.Column
              mobile={3}
              tablet={2}
              computer={1}
              style={{ textAlign: "right" }}
            >
              {this.props.icon}
            </Grid.Column>
            <Grid.Column width={11}>
              <TextHeader as="h2" style={{ marginBottom: "0em" }}>
                {this.props.name}
              </TextHeader>
              <span>{this.props.description}</span>
            </Grid.Column>
          </Grid>

          <div style={{ textAlign: "center", marginTop: "1em" }}>
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
                        <a
                          href={item.link}
                          style={{
                            bottom: "0"
                          }}
                        >
                          <div>
                            <Card>
                              <Image
                                src={item.image}
                                size="small"
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
