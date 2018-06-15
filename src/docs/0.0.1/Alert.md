Display success, warning and error messages.

-------------
## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| Content      | string        | -       | true     | Text to render inside the alert |
| Color        | string        | default | false    | The color of the Alert, can be ```default```, ```primary```, ```danger```, ```warning```, or ```success```|
| Duration     | number        | -       | false    | The length of time the alter will display in milliseconds|
| isClosable   | boolean       | false   | false    | If provided a close button will be rendered which removes the alert on click|
| onBeforeHide | Function      | -       | false     | Function to run right before the alert is about to hide |
| onHide       | Function      | -       | false     | Function to run after the alert has been hidden |

## Elements

``` tsx
<Alert content="String" options="" color="String" isClosable />
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
            <Alert content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        </li>
        <li>
            <pre>
                <Code code='<Alert content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />'
                />
            </pre>
        </li>
    </ul>
</div>

## Closable

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
            <Alert content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." isClosable />
        </li>
        <li>
            <pre>
                <Code code='<Alert content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." isClosable />'
                />
            </pre>
        </li>
    </ul>
</div>


## Colors

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
            <Alert content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." isClosable />
            <Alert color="primary" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." isClosable />
            <Alert color="success" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." isClosable />
            <Alert color="danger" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." isClosable />
            <Alert color="warning" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." isClosable />
        </li>
        <li>
            <pre>
                <Code code='
                    <Alert content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." isClosable />
                    <Alert color="primary" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." isClosable />
                    <Alert color="success" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." isClosable />
                    <Alert color="danger" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." isClosable />
                    <Alert color="warning" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." isClosable />
                '
                />
            </pre>
        </li>
    </ul>
</div>