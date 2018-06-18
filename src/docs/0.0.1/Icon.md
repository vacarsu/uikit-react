Place Uikit's vector icons anywhere in your content

-------------

## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| options      | string        |  -      |  true    | the name of the uikit icon ex. heart, check, github |
| href         | string        |  -      |  false   | define and href |
| button       | boolean       |  false  |  false   | specificy if the icon is a button |
| image        | string        |  -      |  false   | specificy a path to a custom background image |


## Elements

``` tsx
<Icon option="heart" />
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