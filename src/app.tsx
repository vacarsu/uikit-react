import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import 'prismjs';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-tsx.min';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-css.min';

import {
    Container,
    Light,
    Icon,
    Link,
    List,
    ListItem,
    Offcanvas,
    OffcanvasContainer,
    Navbar,
    NavbarContainer,
    NavbarSticky,
    Section
} from 'uikit-react';


import { DocsPage } from './pages/Docs/DocsPage';
import { IndexPage } from './pages/Index/IndexPage';
import { docsNav } from './pages/Docs/docs-nav';

document.addEventListener('DOMContentLoaded', () => {
    console.log(Section);
    render(
        <ExamplePage />,
        document.getElementById('root')
    );
}, false);

class ExamplePage extends React.Component<any, any> {
    render() {
        return (
            <OffcanvasContainer>
                <Router basename="/uikit-react">
                    <Section position="relative">
                        <Section color="secondary" preserveColor>
                            <NavbarSticky options="animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 556;">
                                <NavbarContainer transparent>
                                    <Navbar>
                                        <ListItem>
                                            <Link toggleOptions="target: #menu;" href="#">
                                                <Icon options="menu" button />
                                            </Link>
                                        </ListItem>
                                    </Navbar>
                                    <Navbar align="right">
                                        <ListItem>
                                            <Link href="https://github.com/vacarsu/dimension-cms">
                                                <Icon options="github" button />
                                            </Link>
                                        </ListItem>
                                    </Navbar>
                                </NavbarContainer>
                            </NavbarSticky>
                        </Section>
                        <Offcanvas id="menu" options="overlay: true">
                            <List type="divider">
                                <ListItem>
                                    <NavLink to="/">Home</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to={`/docs/0.0.1/Introduction`}>{"Introduction"}</NavLink>
                                </ListItem>
                            </List>
                        </Offcanvas>
                        <Route exact path="/" component={IndexPage} />
                        <Route path="/docs" component={DocsPage} />
                    </Section>
                </Router>
            </OffcanvasContainer>
        )
    }
}