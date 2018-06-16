import * as React from 'react';
import { Route, NavLink } from 'react-router-dom';

import {
    Container,
    Flex,
    Form,
    InputContainer,
    Label,
    Select,
    SelectOption,
    List,
    ListItem,
    Nav,
    NavItem,
    Section,
    Sidebar,
    Cover,
    Margin,
    Button
} from 'uikit-react';

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
                                {/* <NavItem>
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
                                </NavItem> */}
                                {this.renderMenu2()}
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
    private renderMenu2(){
        return (
            <ListItem>
                <NavItem>GETTING STARTED</NavItem>
                <NavItem type={"divider"}></NavItem>
                <NavItem>
                    <ListItem>
                        <NavLink to={`/docs/${this.state.version}/Introduction`} style={{ fontSize: "15", color: "#333" }}>Introduction</NavLink>
                    </ListItem>
                </NavItem>
                <Margin type="bottom"></Margin>
                <NavItem>COMPONENTS</NavItem>
                <NavItem type={"divider"}></NavItem>
                <ListItem>
                    {this.renderList()}
                </ListItem>
            </ListItem>
        )
    }
    private renderList(){
        let count = 0;
        return Object.keys(docsNav).map((k) => {
            count++;
            return (
                <ListItem>
                <NavItem key={k}>
                    <NavLink to={`/docs/${this.state.version}/${docsNav[k].toLowerCase()}`}style={{ fontSize: "15", color: "#333" }}>{docsNav[k]}</NavLink>
                </NavItem>
                </ListItem>
            );
        });
    }
   
}

