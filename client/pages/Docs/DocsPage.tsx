import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';

import { Container } from '../../components/Container/Container';
import { Flex } from '../../components/Flex/Flex';
import { Form } from '../../components/Form/Form';
import { InputContainer } from '../../components/Form/InputContainer';
import { Label } from '../../components/Form/Label';
import { Select } from '../../components/Form/Select';
import { SelectOption } from '../../components/Form/SelectOption';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/List/ListItem';
import { Nav } from '../../components/Nav/Nav';
import { NavItem } from '../../components/Nav/NavItem';
import { Section } from '../../components/Section/Section';
import { Sidebar } from '../../components/Sidebar/Sidebar';

import { Documentation } from './Documentation';
import { docsNav } from './docs-nav';

export class DocsPage extends React.Component<any, any> {
    constructor (props) {
        super(props);
        this.state = { version: '0.0.1' };
    }

    private onVersionChange(event) {
        this.setState({
            version: event.target.value
        });
    }

    render() {
        return (
            <Section>
                <Container>
                    <Flex direction="row">
                        <Container width="1-6">
                            <Sidebar position="fixed">
                                <Nav preset="default">
                                    <NavItem>
                                        <Form>
                                            <InputContainer>
                                                <Label htmlFor="version">Version</Label>
                                                <Select
                                                    id="version"
                                                    value={this.state.version}
                                                    onChange={this.onVersionChange.bind(this)}>
                                                    <SelectOption value="0.0.1">0.0.1</SelectOption>
                                                    <SelectOption value="0.0.2">0.0.2</SelectOption>
                                                </Select>
                                            </InputContainer>
                                        </Form>
                                    </NavItem>
                                    {this.renderMenu()}
                                </Nav>
                            </Sidebar>
                        </Container>
                        <Container size="small">
                            <Route path={`${this.props.match.url}/:version/:name`} component={Documentation} />
                        </Container>
                    </Flex>
                </Container>
            </Section>
        );
    }

    private renderMenu() {
        let count = 0;
        return Object.keys(docsNav).map((k) => {
            count++;
            return (
                <NavItem type={count === 1 ? "divider" : null}>
                    <NavLink to={`/client/docs/${this.state.version}/${docsNav[k].toLowerCase()}`}>{docsNav[k]}</NavLink>
                </NavItem>
            );
        });
    }
}