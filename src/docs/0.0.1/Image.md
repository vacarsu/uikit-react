Use the image component to load images as they enter the viewport

-------------

## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| src          | string        |  -      |  true    | image source |
| options      | string        |  -        |  false | add custom uikit image options |
| className    | boolean       |  false  |  false   | custom class names |
| width        | string        |  -      |  false   | image width |
| style        | object        |  -      |  false   | add custom styles |
| alt          | string        |  -      |  false   | alternate image name |


## Elements

``` tsx
<Image src="" />
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Image src="/src/images/image-1.jpg" alt="image-1" />
        </li>
        <li>
            <pre>
                <Code code='<Image src="/src/images/image-1.jpg" alt="image-1" />'
                />
            </pre>
        </li>
    </ul>
</div>

## Width

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Image width="300px" src="/src/images/image-1.jpg" alt="image-1" />
        </li>
        <li>
            <pre>
                <Code code='<Image width="300px" src="/src/images/image-1.jpg" alt="image-1" />'
                />
            </pre>
        </li>
    </ul>
</div>