import * as React from 'react';
import * as Prism from 'prismjs';
import * as marked from 'marked';
import { Route, NavLink } from 'react-router-dom';
import { Markdown } from './parse-markdown';
import { compile } from './marksy-components';
import {
    Article,
    Container,
    Flex,
    List,
    ListItem,
    Nav,
    NavItem,
    Section,
    Sidebar
} from 'uikit-react';

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
            }, () => this.fetchDocs());
        }

        if (this.state.version !== version) {
            this.setState({
                version: version
            }, () => this.fetchDocs());
        }
    }

    shouldComponentUpdate(nextProps, nextState): boolean {
        const { name, version } = nextProps.match.params;
        if (this.state.name !== name) {
            return true;
        }

        if (this.state.version !== version) {
            return true;
        }

        if (this.state.isLoading !== nextState.isLoading) {
            return true;
        }

        return false;
    }

    componentDidMount() {
        this.fetchDocs();
    }

    render() {
        return (
            <Section padding>
                <Article title={this.state.name.charAt(0).toUpperCase() + this.state.name.substr(1)}>
                    {this.state.parsedMarkdown ? this.state.parsedMarkdown.tree : null}
                </Article>
            </Section>
        );
    }

    private fetchDocs() {
        this.setState({ isLoading: true });
        console.log(this.state.name);
        fetch(`src/docs/${this.state.version}/${this.state.name.charAt(0).toUpperCase() + this.state.name.substr(1)}.md`)
            .then((res) => res.text())
            .then(text => {
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