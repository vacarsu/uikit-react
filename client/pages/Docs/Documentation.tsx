import * as React from 'react';
import * as Prism from 'prismjs';
import * as marked from 'marked';
import { Route, NavLink } from 'react-router-dom';
import { Markdown } from './parse-markdown';
import { compile } from './marksy-components';

import { Article } from '../../components/Article/Article';
import { Container } from '../../components/Container/Container';
import { Flex } from '../../components/Flex/Flex';
import { List } from '../../components/List/List';
import { ListItem } from '../../components/List/ListItem';
import { Nav } from '../../components/Nav/Nav';
import { NavItem } from '../../components/Nav/NavItem';
import { Section } from '../../components/Section/Section';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export class Documentation extends React.Component<any, any> {
    name: string;
    version: string;
    constructor(props) {
        super(props);
        const { name, version } = this.props.match.params;
        this.name = name;
        this.version = version;
        this.state = {
            parsedMarkdown: ''
        };
    }

    componentWillMount() {
        let markdown = new Markdown();
        fetch(`/client/docs/${this.version}/${this.name}.md`)
            .then((res) => res.text())
            .then(text => {
                this.setState({
                    parsedMarkdown: compile(text)
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    componentDidUpdate() {
        Prism.highlightAll();
    }

    render() {
        console.log(this.state.parsedMarkdown);
        return (
            <Section>
                <Container size="small">
                    <Article title={this.name.toUpperCase()}>
                        {/* <p dangerouslySetInnerHTML={{ __html: this.state.parsedMarkdown }}></p> */}
                        {this.state.parsedMarkdown.tree}
                        {compile('<BasicAccordionExample />').tree}
                    </Article>
                </Container>
            </Section>
        );
    }
}