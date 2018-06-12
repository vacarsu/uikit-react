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

import { Container } from '../src/components/Container/Container';
import { Light } from '../src/components/Light/Light';
import { Icon } from '../src/components/Icon/Icon';
import { Link } from '../src/components/Link/Link';
import { List } from '../src/components/List/List';
import { ListItem } from '../src/components/List/ListItem';
import { Offcanvas } from '../src/components/Offcanvas/Offcanvas';
import { OffcanvasContainer } from '../src/components/Offcanvas/OffcanvasContainer';
import { Navbar } from '../src/components/Navbar/Navbar';
import { NavbarContainer } from '../src/components/Navbar/NavbarContainer';
import { NavbarSticky } from '../src/components/Navbar/NavbarSticky';
import { Section } from '../src/components/Section/Section';
import * as uikit from '../lib/uikit-react';


import { DocsPage } from './pages/Docs/DocsPage';
import { IndexPage } from './pages/Index/IndexPage';

document.addEventListener('DOMContentLoaded', () => {
    console.log(uikit);
    render(
        <ExamplePage />,
        document.getElementById('root')
    );
}, false);

class ExamplePage extends React.Component<any, any> {
    render() {
        return (
            <OffcanvasContainer>
                <Router>
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
                                    <NavLink to="/client/">Home</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to="/client/docs/accordion">Accordion</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to="/client/docs/alert">Alert</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to="/client/docs/article">Article</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to="/client/docs/badge">Badge</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to="/client/docs/icon">Icon</NavLink>
                                </ListItem>
                            </List>
                        </Offcanvas>
                        <Route exact path="/client/" component={IndexPage} />
                        <Route path="/client/docs" component={DocsPage} />
                    </Section>
                </Router>
            </OffcanvasContainer>
        )
    }
}