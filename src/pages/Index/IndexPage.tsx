import * as React from 'react';

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

export class IndexPage extends React.Component {
    render() {
        return (
            <Flex direction="column">
                <Light>
                    <Section color="secondary" padding="large">
                        <Flex alignment="center">
                            <object width="300" height="300" data="src/images/uikit-react.svg" />
                        </Flex>
                        <Flex alignment="center">
                            <h1>UIkit React</h1>
                        </Flex>
                        <Flex alignment="center">
                            <Button size="large" color="">Get Started</Button>
                        </Flex>
                    <Section padding="small">
                        <Flex alignment="center">
                            <h4> Use Uikit with React, a powerfully simple framwork </h4>
                        </Flex>
                    </Section>
                    </Section>
                </Light>
  
            </Flex>
        );
    }
}