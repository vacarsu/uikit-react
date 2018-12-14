Create a navigation bar that can be used for your main site navigation.

-------------

## NavbarContainer Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| transparent  | boolean       | false   | false    | Determines whether the Navbar is transparent or not  |
| options      | string        | -       | false    | The name of the component option |

## Navbar Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| left         | boolean       | true    | false    | Aligns the navigation left |
| right        | boolean       | false   | false    | Aligns the navigation right |

## NavbarContainer Options
| Modifier       | Value         | Default            | Description |
| --------       |:-------------:| -------:           | --------    |
| `mode`         | string        | ```click, hover``` | Comma separated list of dropdown trigger behavior modes: ```click```, ```hover```. |
| `delay-show`   | number        | ```0```            | Delay time in hover mode before a dropdown is shown in milliseconds. |
| `delay-hide`   | number        | ```800```          | Delay time in hover mode before a dropdown is hidden in milliseconds. |
| `boundary`     | CSS Selector  | ```window```       | Referenced element to keep the dropdown's visibility. |
|`boundary-align`| boolean       | ```false```        | Align the dropdown to the boundary. |
| `offset`       | number        | ```0```            | The offset of the dropdown container. |
| `dropbar`      | boolean       | ```false```        | Enable or disable dropbar behavior. |
| `dropbar-mode` | string        | ```slide```        | The mode in which the dropbar appears: ```slide```, ```push``` |
| `duration`     | number        | ```200```          | The dropbar transition duration. |

## Elements

``` tsx
<NavbarSticky>
    <NavbarContainer>
        <Navbar>
            <NavbarDropdown></NavbarDropdown>
        </Navabr>
    </NavbarContainer>
</NavbarSticky>
```

## Basic Usage
<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <NavbarContainer>
            <Navbar left>
                <NavItem>
                    <Link href="#">Link</Link>
                </NavItem>
                <NavItem>
                    <Link href="#">Link</Link>
                </NavItem>
                <NavItem>
                    <Link href="#">Link</Link>
                </NavItem>
            </Navbar>
          </NavbarContainer>
        </li>
        <li>
            <pre>
                <Code code='<NavbarContainer>
            <Navbar left>
                <NavItem>
                    <Link href="#">Link</Link>
                </NavItem>
                <NavItem>
                    <Link href="#">Link</Link>
                </NavItem>
                <NavItem>
                    <Link href="#">Link</Link>
                </NavItem>
            </Navbar>
          </NavbarContainer>'
                />
            </pre>
        </li>
    </ul>
</div>

## Dropdown in Navbar
<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <NavbarContainer>
            <Navbar left>
                <NavItem>
                    <Link>Dropdown</Link>
                    <NavbarDropdown>
                        <NavItem>
                            <Link href="#">Link</Link>
                        </NavItem>
                    </NavbarDropdown>
                </NavItem>
                <NavItem>
                    <Link href="#">Link</Link>
                </NavItem>
                <NavItem>
                    <Link href="#">Link</Link>
                </NavItem>
            </Navbar>
          </NavbarContainer>
        </li>
        <li>
            <pre>
                <Code code='<NavbarContainer>
            <Navbar left>
                <NavItem>
                    <Link>Dropdown</Link>
                    <NavbarDropdown>
                        <NavItem>
                            <Link href="#">Link</Link>
                        </NavItem>
                    </NavbarDropdown>
                </NavItem>
                <NavItem>
                    <Link href="#">Link</Link>
                </NavItem>
                <NavItem>
                    <Link href="#">Link</Link>
                </NavItem>
            </Navbar>
          </NavbarContainer>'
                />
            </pre>
        </li>
    </ul>
</div>

## Sticky Navbar
<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
            <NavbarSticky>
                <NavbarContainer>
                    <Navbar left>
                        <NavItem>
                            <Link>Dropdown</Link>
                            <NavbarDropdown>
                                <NavItem>
                                    <Link href="#">Link</Link>
                                </NavItem>
                            </NavbarDropdown>
                        </NavItem>
                        <NavItem>
                            <Link href="#">Link</Link>
                        </NavItem>
                        <NavItem>
                            <Link href="#">Link</Link>
                        </NavItem>
                    </Navbar>
                </NavbarContainer>
            </NavbarSticky>
        </li>
        <li>
            <pre>
                <Code code='<NavbarSticky>
                <NavbarContainer>
                    <Navbar left>
                        <NavItem>
                            <Link>Dropdown</Link>
                            <NavbarDropdown>
                                <NavItem>
                                    <Link href="#">Link</Link>
                                </NavItem>
                            </NavbarDropdown>
                        </NavItem>
                        <NavItem>
                            <Link href="#">Link</Link>
                        </NavItem>
                        <NavItem>
                            <Link href="#">Link</Link>
                        </NavItem>
                    </Navbar>
                </NavbarContainer>
            </NavbarSticky>'
                />
            </pre>
        </li>
    </ul>
</div>

<div style={{ height: "900px" }}>
</div>