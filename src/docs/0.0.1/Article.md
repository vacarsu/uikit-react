Create articles within your page.

-------------
## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| Children     | String / Nodes| -       | true     | The children to be rendered as the articles content |
| title        | string        | -       | true     | The color of the Alert, can be ```default```, ```primary```, ```danger```, ```warning```, or ```success```|
| meta         | string        | -       | false    | The meta of the article, useful for display written by and date information |
| lead         | string        | -       | false    | The lead of the article. |

## Elements

``` tsx
<Article title="String" meta="String" lead="String">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</Article>
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
            <Article title="Lorem Ipsum" meta="Written by Alex Lopez" lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Article>
        </li>
        <li>
            <pre>
                <Code code='<Article title="Lorem Ipsum" meta="Written by Alex Lopez" lead="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Article>'
                />
            </pre>
        </li>
    </ul>
</div>