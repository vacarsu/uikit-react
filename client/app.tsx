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

import { Button } from './components/Button/Button';
import { Container } from './components/Container/Container';
import { Icon } from './components/Icon/Icon';
import { Link } from './components/Link/Link';
import { List } from './components/List/List';
import { ListItem } from './components/List/ListItem';
import { Offcanvas } from './components/Offcanvas/Offcanvas';
import { OffcanvasContainer } from './components/Offcanvas/OffcanvasContainer';
import { Navbar } from './components/Navbar/Navbar';
import { NavbarContainer } from './components/Navbar/NavbarContainer';
import { NavbarSticky } from './components/Navbar/NavbarSticky';
import { Scrollspy } from './components/Scrollspy/Scrollspy';
import { Section } from './components/Section/Section';
import { Light } from './components/Light/Light';
import { Flex } from './components/Flex/Flex';
import { Parallax } from './components/Parallax/Parallax';
import { Sidebar } from './components/Sidebar/Sidebar';

import { AccordionPage } from './pages/Accordion/AccordionPage';
import { AlertPage } from './pages/Alert/AlertPage';
import { ArticlePage } from './pages/Article/ArticlePage';
import { BadgePage } from './pages/Badge/BadgePage';
import { IconPage } from './pages/Icon/IconPage';
import { IndexPage } from './pages/Index/IndexPage';

document.addEventListener('DOMContentLoaded', () => {
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
                                    <NavLink to="/client/accordion">Accordion</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to="/client/alert">Alert</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to="/client/article">Article</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to="/client/badge">Badge</NavLink>
                                </ListItem>
                                <ListItem>
                                    <NavLink to="/client/icon">Icon</NavLink>
                                </ListItem>
                            </List>
                        </Offcanvas>
                        <Flex direction="row">
                            <Sidebar position="fixed">
                                <List type="divider">
                                    <ListItem>
                                        <NavLink to="/client/">Home</NavLink>
                                    </ListItem>
                                    <ListItem>
                                        <NavLink to="/client/accordion">Accordion</NavLink>
                                    </ListItem>
                                    <ListItem>
                                        <NavLink to="/client/alert">Alert</NavLink>
                                    </ListItem>
                                    <ListItem>
                                        <NavLink to="/client/article">Article</NavLink>
                                    </ListItem>
                                    <ListItem>
                                        <NavLink to="/client/badge">Badge</NavLink>
                                    </ListItem>
                                    <ListItem>
                                        <NavLink to="/client/icon">Icon</NavLink>
                                    </ListItem>
                                </List>
                            </Sidebar>
                            <Route exact path="/client/" component={IndexPage} />
                            <Route exact path="/client/accordion" component={AccordionPage}/>
                            <Route exact path="/client/alert" component={AlertPage}/>
                            <Route exact path="/client/article" component={ArticlePage}/>
                            <Route exact path="/client/badge" component={BadgePage}/>
                            <Route exact path="/client/icon" component={IconPage}/>
                        </Flex>
                    </Section>
                </Router>
            </OffcanvasContainer>
        )
    }
}