Easily create nice looking notification badges.

-------------
## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| Count        | number        | -       | true     | The count to display in the badge |

## Elements

``` tsx
<Badge count={Number} />
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li class="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul class="uk-switcher">
        <li>
            <Badge count={1000} />
        </li>
        <li>
            <pre>
                <Code code='<Badge count={1000} />'
                />
            </pre>
        </li>
    </ul>
</div>