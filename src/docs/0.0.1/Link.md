Create beautiful links for many use cases

-------------

## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| type      | string        |  -      |  false    | the link types are ```default``` , ```muted``` , ```text``` , ```heading``` |
| href        | string        |  -      |  true   |  |
| toggleOptions        | string        |  -      |  false   | use the link as a toggle |


## Elements

``` tsx
<Link href="/"></Link>
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Link href="/">Link</Link>
          <p>Lorem ipsum dolor sit amet,</p>
        </li>
        <li>
            <pre>
                <Code code='<Link href="/"></Link>'
                />
            </pre>
        </li>
    </ul>
</div>

## Type

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Link href="/">Default link</Link>
          <p>Lorem ipsum dolor sit amet,</p>
          <Link type="text" href="/">Text link</Link>
          <p>Lorem ipsum dolor sit amet,</p>
          <Link type="muted" href="/">Muted link</Link>
          <p>Lorem ipsum dolor sit amet,</p>
          <h3><Link type="heading" href="/">Heading link</Link></h3>
          <p>Lorem ipsum dolor sit amet,</p>
        </li>
        <li>
            <pre>
                <Code code='<Link href="/">Default link</Link>
          <p>Lorem ipsum dolor sit amet,</p>
          <Link type="text" href="/">Text link</Link>
          <p>Lorem ipsum dolor sit amet,</p>
          <Link type="muted" href="/">Muted link</Link>
          <p>Lorem ipsum dolor sit amet,</p>
          <h3><Link type="heading" href="/">Heading link</Link></h3>
          <p>Lorem ipsum dolor sit amet,</p>'
                />
            </pre>
        </li>
    </ul>
</div>

## Toggle

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Link toggleOptions="target: #my-id">Link</Link>
          <p id="my-id">Lorem ipsum dolor sit amet,</p>
        </li>
        <li>
            <pre>
                <Code code='<Link toggleOptions="target: #my-id">Link</Link>
          <p id="my-id">Lorem ipsum dolor sit amet,</p>'
                />
            </pre>
        </li>
    </ul>
</div>


