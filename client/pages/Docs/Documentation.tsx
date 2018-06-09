import * as React from 'react';
import * as Prism from 'prismjs';
import * as marked from 'marked';
import { Route, NavLink } from 'react-router-dom';

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
    constructor(props) {
        super(props);
        this.state = {
            parsedMarkdown: ''
        };
    }

    componentWillMount() {
        fetch('/client/docs/doc1.md')
            .then((res) => res.text())
            .then(text => {
                this.setState({
                    parsedMarkdown: marked(text)
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
        const { name } = this.props.match.params;
        return (
            <Section>
                <Container size="small">
                    <Article title={name}>
                        <p dangerouslySetInnerHTML={{ __html: this.state.parsedMarkdown }}></p>
                    </Article>
                </Container>
            </Section>
        );
    }
}