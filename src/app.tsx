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
    Section,
    Flex,
    Button,
    Dark
    
} from 'uikit-react';


import { DocsPage } from './pages/Docs/DocsPage';
import { IndexPage } from './pages/Index/IndexPage';

document.addEventListener('DOMContentLoaded', () => {
    console.log(Section);
    render(
        <ExamplePage />,
        document.getElementById('root')
    );
}, false);
let navPath="src/images/uikit-react-simple-text.svg"


/*
replace line 55 with this to get moving navbar
<NavbarSticky options="sel-target:.uk-navbar-container; cls-inactive:uk-navbar-transparent uk-light; top:100" 
                            onActive={this.switchLight.bind(this)}
                            onInactive={this.switchDark.bind(this)}
                            >

*/
class ExamplePage extends React.Component<any, any> {
    render() {
        return (

                <Router basename="/uikit-react">
                    <Section position="relative">
               
                            <NavbarSticky options="sel-target:.uk-navbar-container; cls-inactive:uk-navbar-transparent uk-light; cls-active:uk-navbar-transparent uk-light;">
                            <Section color="secondary" preserveColor>
                                <NavbarContainer>
                                    <Navbar left>
                                        <ListItem padding="small">
                                                <a href="/"><img width="200" height="200" src={navPath}/></a>
                                        </ListItem>
                                    </Navbar>
                                    <Navbar right>
                                            <ListItem>
                                                <NavLink to="/docs/0.0.1/Introduction">
                                                    <Button size="small" >Documentation</Button>
                                                </NavLink>
                                            </ListItem>
                                            <ListItem>
                                                <Link>
                                                    Changelog
                                                </Link>
                                            </ListItem>
                                            <ListItem>
                                        
                                            <Link ClasName="test" href="https://github.com/vacarsu/uikit-react">
                                                <Icon options="github" button />
                                            </Link>
                                        </ListItem>
                                    </Navbar>
                                </NavbarContainer>
                                </Section>

                            </NavbarSticky>

                        <Route exact path="/" component={IndexPage} />
                        <Route path="/docs" component={DocsPage} />
                    </Section>
                </Router>
                

        )
        
}
/*
private switchLight(){
    navPath="src/images/uikit-react-simple-text-invert.svg";
    render(
        <ExamplePage />,
        document.getElementById('root')
    );
}
private switchDark(){
    navPath="src/images/uikit-react-simple-text.svg";
    render(
        <ExamplePage />,
        document.getElementById('root')
    );
}
*/
}