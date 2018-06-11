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
    constructor(props) {
        super(props);
        const { name, version } = this.props.match.params;
        this.state = {
            name: name,
            version: version,
            parsedMarkdown: null,
            isLoading: true
        };
    }

    componentWillReceiveProps(nextProps) {
        const { name, version } = nextProps.match.params;
        if (this.state.name !== name) {
            this.setState({
                name: name
            })
        }

        if (this.state.version !== version) {
            this.setState({
                version: version
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState): boolean {
        const { name, version, isLoading } = nextState;
        if (this.state.name !== name) {
            console.log('should update');
            return true;
        }

        if (this.state.version !== version) {
            console.log('should update');
            return true;
        }

        if (this.state.isLoading !== isLoading) {
            console.log('should update');
            return true;
        }
    }

    componentDidMount() {
        console.log('did mount');
        this.fetchDocs();
    }

    componentDidUpdate() {
        console.log('did update');
        this.fetchDocs();
    }

    render() {
        return (
            <Section padding>
                <Container>
                    <Article title={this.state.name.charAt(0).toUpperCase() + this.state.name.substr(1)}>
                        {this.state.parsedMarkdown ? this.state.parsedMarkdown.tree : null}
                    </Article>
                </Container>
            </Section>
        );
    }

    private fetchDocs() {
        fetch(`/client/docs/${this.state.version}/${this.state.name}.md`)
            .then((res) => res.text())
            .then(text => {
                console.log(' did fetch');
                this.setState({
                    parsedMarkdown: compile(text),
                    isLoading: false
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }
}