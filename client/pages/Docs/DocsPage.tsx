import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';

import { Container } from '../../components/Container/Container';
import { Flex } from '../../components/Flex/Flex';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/List/ListItem';
import { Nav } from '../../components/Nav/Nav';
import { NavItem } from '../../components/Nav/NavItem';
import { Section } from '../../components/Section/Section';
import { Sidebar } from '../../components/Sidebar/Sidebar';

import { Documentation } from './Documentation';
import { docsNav } from './docs-nav';
// import { AccordionPage } from '../Accordion/AccordionPage';
// import { AlertPage } from '../Alert/AlertPage';
// import { ArticlePage } from '../Article/ArticlePage';
// import { BadgePage } from '../Badge/BadgePage';
// import { IconPage } from '../Icon/IconPage';

export class DocsPage extends React.Component<any, any> {
    constructor (props) {
        super(props);
        this.state = { version: '0.0.1' };
    }

    render() {
        return (
            <Section>
                <Container>
                    <Flex direction="row">
                        <Container width="1-6">
                            <Sidebar position="fixed">
                                <Nav preset="default">
                                    {this.renderMenu()}
                                </Nav>
                            </Sidebar>
                        </Container>
                        <Section>
                            <Route path={`${this.props.match.url}/:name`} component={Documentation} />
                        </Section>
                    </Flex>
                </Container>
            </Section>
        );
    }

    private renderMenu() {
        return Object.keys(docsNav).map((k) => {
            return (
                <NavItem>
                    <NavLink to={`/client/docs/${docsNav[k].toLowerCase()}`}>{docsNav[k]}</NavLink>
                </NavItem>
            )
        });
    }
}