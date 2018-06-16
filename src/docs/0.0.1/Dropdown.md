Defines different styles for a toggleable dropdown.

-------------


## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| options      | string        |    -    | false    | change the type of dropwown ex. mode: click, |


## Elements

``` tsx
<Dropdown></Dropdown>
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Container>
            <Button>Dropdown</Button>
            <Dropdown>Just look at that!</Dropdown>
          </Container>
        </li>
        <li>
            <pre>
                <Code code='<Container>
                              <Button>Dropdown</Button>
                              <Dropdown>Just look at that!</Dropdown>
                            </Container>'
                />
            </pre>
        </li>
    </ul>
</div>

## Clickable

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Container>
            <Button>Dropdown</Button>
              <Dropdown options="mode: click">Just look at that, clickable!</Dropdown>
          </Container>
        </li>
        <li>
            <pre>
                <Code code='<Container>
                              <Button>Dropdown</Button>
                                <Dropdown>Just look at that clickable!</Dropdown>
                            </Container>'
                />
            </pre>
        </li>
    </ul>
</div>
