Easily create nice looking buttons, which come in different styles.

-------------
## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| href         | string         | -      | false     | Make the button navigate somwhere. |
| color        | string         |default | false     | Change the color of the button. Possible options are ```default```, ```primary```, ```secondary```, ```danger```, ```text```, or ```link``` |
| size         | string         | -      | false     | Change the size of the button. Possible options are ```small``` or ```large``` |
| width        | string         | -      | false     | Change the width of the button. See [UIkit Width](https://getuikit.com/docs/width#usage) for width options. |
| toggleOptions| string         | -      | false     | Options for toggling other elements. See [UIkit Toggle](https://getuikit.com/docs/toggle#component-options) for more options. |
| onClick      | Function       | -      | false     | Do something specific on click. |


## Elements

``` tsx
<Button
    href="String"
    color="String"
    size="String"
    width="String"
    toggleOptions="String"
    onClick="function">
    Text
</Button>
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li class="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul class="uk-switcher">
        <li>
            <Button>Hello!</Button>
        </li>
        <li>
            <pre>
                <Code code='<Button>Hello!</Button>'
                />
            </pre>
        </li>
    </ul>
</div>

## Colors

<div>
    <ul uk-tab="">
        <li class="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul class="uk-switcher">
        <li>
            <Button color="primary">Hello!</Button>
            <Button color="secondary">Hello!</Button>
            <Button color="danger">Hello!</Button>
            <Button color="text">Hello!</Button>
            <Button color="link">Hello!</Button>
        </li>
        <li>
            <pre>
                <Code code='<Button color="primary">Hello!</Button>
            <Button color="secondary">Hello!</Button>
            <Button color="danger">Hello!</Button>
            <Button color="text">Hello!</Button>
            <Button color="link">Hello!</Button>'
                />
            </pre>
        </li>
    </ul>
</div>

## Sizes

<div>
    <ul uk-tab="">
        <li class="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul class="uk-switcher">
        <li>
            <Button size="small">Hello!</Button>
            <Button size="large">Hello!</Button>
        </li>
        <li>
            <pre>
                <Code code='<Button size="small">Hello!</Button>
            <Button size="large">Hello!</Button>'
                />
            </pre>
        </li>
    </ul>
</div>

## Width

<div>
    <ul uk-tab="">
        <li class="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul class="uk-switcher">
        <li>
            <Button width="1-1">Hello!</Button>
        </li>
        <li>
            <pre>
                <Code code='<Button width="1-1">Hello!</Button>'
                />
            </pre>
        </li>
    </ul>
</div>