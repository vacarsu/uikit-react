import * as React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { DocsPage } from '../../pages/Docs/DocsPage';

import { Button } from 'uikit-react';
import { Container } from 'uikit-react';
import { Flex } from 'uikit-react';
import { Light } from 'uikit-react';
import { List } from 'uikit-react';
import { ListItem } from 'uikit-react';
import { Section } from 'uikit-react';
import { Image } from 'uikit-react';
import { Dark } from 'uikit-react';
import { Link } from 'uikit-react';
import { Icon } from 'uikit-react';
import { Cover } from 'uikit-react';
import { Navbar } from 'uikit-react';

export class IndexPage extends React.Component {
    render() {
        return (
            <Flex direction="column"  >
                <Light>
                    <Container size="expand" type="image" style={{ padding:"0px",backgroundImage: 'url("src/images/background.svg")', repeat: 'no-repeat', width: "expand", height:"expand"}}>
                        <Flex alignment="center">
                            <object width="300" height="300" data="src/images/uikit-react.svg" />
                        </Flex>
                        <Flex alignment="center">
                        <h1>UIkit React</h1>
                        </Flex>
                        <Flex alignment="center">
                            <NavLink to="/docs/0.0.1/Introduction">
                                <Button size="large" color="">Get Started</Button>
                            </NavLink>
                        </Flex>
                            <Section padding="small">
                                <Flex alignment="center">
                                    <h4> Use Uikit with React, a powerfully simple framework </h4>
                                </Flex>
                            </Section>
                        </Container>
                </Light>
            </Flex>
        );
    }
}
