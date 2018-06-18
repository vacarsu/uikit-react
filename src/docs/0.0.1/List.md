Easily create beautiful lists

-------------

## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| type      | string        |  bullet      |  false    | the list types are ```bullet``` , ```divider``` , ```striped``` |

## Elements

``` tsx
<List>
  <ListItem>
  </ListItem>
</List>
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <List>
            <ListItem>
              Item 3
            </ListItem>
            <ListItem>
              Item 3
            </ListItem>
            <ListItem>
              Item 3
            </ListItem>
          </List>
        </li>
        <li>
            <pre>
                <Code code='<List><ListItem>Item 3</ListItem><ListItem>Item 3</ListItem><ListItem>Item 3</ListItem></List>'
                />
            </pre>
        </li>
    </ul>
</div>

## Type

#### Divider

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <List type="divider">
            <ListItem>
              Item 3
            </ListItem>
            <ListItem>
              Item 3
            </ListItem>
            <ListItem>
              Item 3
            </ListItem>
          </List>
        </li>
        <li>
            <pre>
                <Code code='<List type="divider"><ListItem>Item 3</ListItem><ListItem>Item 3</ListItem><ListItem>Item 3</ListItem></List>'
                />
            </pre>
        </li>
    </ul>
</div>

#### Striped

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <List type="striped">
            <ListItem>
              Item 3
            </ListItem>
            <ListItem>
              Item 3
            </ListItem>
            <ListItem>
              Item 3
            </ListItem>
          </List>
        </li>
        <li>
            <pre>
                <Code code='<List type="striped"><ListItem>Item 3</ListItem><ListItem>Item 3</ListItem><ListItem>Item 3</ListItem></List>'
                />
            </pre>
        </li>
    </ul>
</div>