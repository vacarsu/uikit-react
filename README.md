# UIkit React [![codecov](https://codecov.io/gh/vacarsu/uikit-react/branch/master/graph/badge.svg)](https://codecov.io/gh/vacarsu/uikit-react) [![Build Status](https://travis-ci.org/vacarsu/uikit-react.svg?branch=master)](https://travis-ci.org/vacarsu/uikit-react)
**A library of UIkit components for use in React** 

<img src="/images/uikit-react.svg" width="256"/>

## This library is currently a work in progress
**If you decide to use this library please report any bugs. Pull requests are also gladly accepted**

## Get Started
**NPM**
```
npm install uikit-react --save
```
**Yarn**
```
yarn add uikit-react
```

## Documentation
#### [UIkit React Docs](https://vacarsu.github.io/uikit-react)
#### [UIkit Docs](https://getuikit.com/docs/introduction)

#### Sample layout with Offcanvas
```jsx
import * as React from 'react';
import { 
    Container,
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
} from 'uikit-react';

export default class HomePage extends React.Component<any, any> {
    render() {
        return (
            <OffcanvasContainer>
                <Section>
                    <NavbarSticky options="animation: uk-animation-slide-top; cls-inactive: uk-navbar-transparent uk-light; top: 556;">
                        <NavbarContainer>
                            <Navbar>
                                <ListItem>
                                    <Link toggleOptions="target: #menu;" href="#">
                                        <Icon options="menu" button />
                                    </Link>
                                </ListItem>
                            </Navbar>
                        </NavbarContainer>
                    </NavbarSticky>
                    <Offcanvas id="menu" options="overlay: true">
                        <List type="divider">
                            <ListItem>
                                <Link href="/">Home</Link>
                            </ListItem>
                        </List>
                    </Offcanvas>
                </Section>
            </OffcanvasContainer>
        )
    }
}
```


### uikit-react logo
created by Stian Didriksen

### MIT Licence
Copyright 2018 Alex Lopez

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
