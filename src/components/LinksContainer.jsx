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
        <Container style={style}>
          <TextHeader as="h2">
            {this.props.icon} {this.props.name}
          </TextHeader>
          <div style={{ textAlign: "center" }}>
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
                                verticalAlign
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
