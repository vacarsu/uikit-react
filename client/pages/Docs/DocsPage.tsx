import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';

import { Container } from '../../../src/components/Container/Container';
import { Flex } from '../../../src/components/Flex/Flex';
import { Form } from '../../../src/components/Form/Form';
import { InputContainer } from '../../../src/components/Form/InputContainer';
import { Label } from '../../../src/components/Form/Label';
import { Select } from '../../../src/components/Form/Select';
import { SelectOption } from '../../../src/components/Form/SelectOption';
import { List } from '../../../src/components/List/List';
import { ListItem } from '../../../src/components/List/ListItem';
import { Nav } from '../../../src/components/Nav/Nav';
import { NavItem } from '../../../src/components/Nav/NavItem';
import { Section } from '../../../src/components/Section/Section';
import { Sidebar } from '../../../src/components/Sidebar/Sidebar';

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
                        <Container>
                            <Sidebar 
                                style={{
                                    top: '80px',
                                    bottom: '0',
                                    boxSizing: 'border-box',
                                    padding: '40px 40px 60px 40px',
                                    borderRight: '1px #e5e5e5 solid',
                                    height: 'auto',
                                    overflow: 'auto'
                                }}
                                position="fixed">
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
                        <Container size="1-1" style={{ paddingLeft: '220' }}>
                            <Route path={`${this.props.match.url}/:version/:name`} component={Documentation} />
                        </Container>
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