import * as React from 'react';

import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container/Container';
import { Flex } from '../../components/Flex/Flex';
import { Light } from '../../components/Light/Light';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/List/ListItem';
import { Section } from '../../components/Section/Section';
import { Image } from '../../components/Image/Image';

export class IndexPage extends React.Component {
    render() {
        return (
            <Flex direction="column">
                <Light>
                    <Section style="secondary" padding>
                        <Flex alignment="center">
                            <object width="300" height="300" data="/client/images/uikit-react.svg" />
                        </Flex>
                        <Flex alignment="center">
                            <h2>React UIkit</h2>
                        </Flex>
                        <Flex alignment="center">
                            <Button size="large" color="primary">Get Started</Button>
                        </Flex>
                    </Section>
                </Light>
                <Section style="default" padding>
                    <Container>
                        <Flex alignment="center" direction="row">
                            <List type="divider">
                                <ListItem>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Praesent mauris. Fusce nec tellus sed augue semper porta. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b>. Sed dignissim lacinia nunc. </p>
                                </ListItem>
                                <ListItem> 
                                    <p>Curabitur tortor. Pellentesque nibh. <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. </p>
                                </ListItem>
                                <ListItem>
                                    <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit</i>. Quisque volutpat condimentum velit. <i>Sed dignissim lacinia nunc</i>. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. <b>Proin ut ligula vel nunc egestas porttitor</b>. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. </p>
                                </ListItem>
                                <ListItem>
                                    <p>Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. <b>Suspendisse in justo eu magna luctus suscipit</b>. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. <b>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui</b>. Nulla facilisi. Integer lacinia sollicitudin massa. </p>
                                </ListItem>
                            </List>
                        </Flex>
                    </Container>
                </Section>
            </Flex>
        );
    }
}