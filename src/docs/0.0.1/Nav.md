Use to create customizable styles for navigation.

-------------

## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| options      | string        |  -      |  true    | the name of the component option. |

## Options
| Modifier | Value | Default | Description |
| -------- |:-------------:| -------:| -------- |
| `targets` | CSS Selector | `>.uk-parent` | The element(s) to toggle. |
| `toggle` | CSS Selector | `>a` | The toggle elements |
| `content` | CSS Selector | `>ul` | The content element(s) |
| `collapsible` | Boolean | `true` | Creates closable items. |
| `multiple` | Boolean |  `false` | Allow multiple items to be open simultaneously. |
| `transition` | String | `ease` | Which transition to use. |
| `animation` | String  | `true` |Space seperated animations to use. Comma seperate animation out. |
| `duration` | Number  | `200` |Animation duration (milliseconds). |


## Elements

``` tsx
<Nav option="heart"></Nav>
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Icon options="heart" />
          <Icon options="check" />
        </li>
        <li>
            <pre>
                <Code code='<Icon options="heart" /><Icon options="check" />'
                />
            </pre>
        </li>
    </ul>
</div>

## Href

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Icon href="https://github.com/vacarsu/uikit-react" options="github" />
        </li>
        <li>
            <pre>
                <Code code='<Icon href="https://github.com/vacarsu/uikit-react" options="github" />'
                />
            </pre>
        </li>
    </ul>
</div>

## Button

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Icon button="true" options="github" />
        </li>
        <li>
            <pre>
                <Code code='<Icon options="heart" /><Icon options="check" />'
                />
            </pre>
        </li>
    </ul>
</div>

## Image

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Icon image="src/images/background.jpeg" options="star" />
        </li>
        <li>
            <pre>
                <Code code='<Icon image="src/images/background.jpeg" options="star" />'
                />
            </pre>
        </li>
    </ul>
</div>