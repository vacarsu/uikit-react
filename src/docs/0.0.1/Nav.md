Defines different styles for list navigations.

-------------

## Nav Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| accordion    | boolean       | false   | false    | Creates an accordion style navigation |
| child        | boolean       | false   | false    | Sets the Nav as a child of a NavItem |
| preset       | string        | -       | false    | Sets preset styling, the options are ```default```, ```primary```, and ```center``` |
| options      | string        | -       | false    | The name of the component option |

## NavItem Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| parent       | boolean       | false   | false    | Sets the NavItem as a Parent of a Nav |

## Options
| Modifier       | Value         | Default            | Description |
| --------       |:-------------:| -------:           | --------    |
| `targets`      | CSS Selector  | ```> .uk-parent``` | Elements to toggle. |
| `toggle`       | CSS Selector  | ```> a```          | The toggle elements. |
| `content`      | CSS Selector  | ```> ul```         | The content elements. |
| `collapsible`  | boolean       | ```true```         | Allow item to be closed. |
| `multiple`     | boolean       | ```false```        | Allow multiple opened items. |
| `transition`   | string        | ```ease```         | The transition to use. |
| `animation`    | string        | ```true```         | The space separated names of animations to use. Comma separate for animation out. |
| `duration`     | number        | ```200```          | The animation duration in milliseconds. |

## Elements
``` tsx
<<<<<<< HEAD
<Nav>
  <NavItem>
  </NavItem>
</Nav>
```

## Basic Usage
<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Nav preset="default">
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
          </Nav>
        </li>
        <li>
            <pre>
                <Code code='<Nav preset="default">
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
          </Nav>'
                />
            </pre>
        </li>
    </ul>
</div>

## Nested Navs
<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Nav accordion preset="default" options="multiple: true">
            <NavItem parent>
                <Link href="#">Parent</Link>
                <Nav child>
                    <NavItem>
                        <Link href="#">Link</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#">Link</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#">Link</Link>
                    </NavItem>
                </Nav>
            </NavItem>
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
          </Nav>
        </li>
        <li>
            <pre>
                <Code code='<Nav accordion preset="default" options="multiple: true">
            <NavItem parent>
                <Link href="#">Parent</Link>
                <Nav child>
                    <NavItem>
                        <Link href="#">Link</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#">Link</Link>
                    </NavItem>
                    <NavItem>
                        <Link href="#">Link</Link>
                    </NavItem>
                </Nav>
            </NavItem>
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
          </Nav>'
                />
            </pre>
        </li>
    </ul>
</div>

## Header and Divider
<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Nav preset="default">
            <NavItem type="header">
                Header
            </NavItem>
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
            <NavItem type="divider" />
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
          </Nav>
        </li>
        <li>
            <pre>
                <Code code='<Nav preset="default">
            <NavItem type="header">
                Header
            </NavItem>
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
            <NavItem type="divider" />
            <NavItem>
                <Link href="#">Link</Link>
            </NavItem>
          </Nav>'
                />
            </pre>
        </li>
    </ul>
</div>