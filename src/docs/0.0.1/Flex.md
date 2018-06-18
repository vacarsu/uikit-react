Defines different styles for a toggleable dropdown.

-------------


## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| alignment    | string        |  left   | false    | set the alignment ex. left, cetner, right, top, middle |
| direction    | string        |   row    | false    | set the flex direction |
| wrap         | string        |    nowrap     | false    | set the flex wrap properties |


## Elements

``` tsx
<Flex></Flex>
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Flex>
            <Card color="default uk-margin-right"><CardBody>item 1</CardBody></Card>
            <Card color="default uk-margin-right"><CardBody>item 2</CardBody></Card>
            <Card><CardBody>item 3</CardBody></Card>
          </Flex>
        </li>
        <li>
            <pre>
                <Code code='<Flex>
                              <Card><CardBody>item 1</CardBody></Card>
                              <Card><CardBody>item 2</CardBody></Card>
                              <Card><CardBody>item 3</CardBody></Card>
                            </Flex>'
                />
            </pre>
        </li>
    </ul>
</div>

## Alignment

#### alignment="center"

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Flex alignment="center">
            <Card color="default uk-margin-right"><CardBody>item 1</CardBody></Card>
            <Card color="default uk-margin-right"><CardBody>item 2</CardBody></Card>
            <Card><CardBody>item 3</CardBody></Card>
          </Flex>
        </li>
        <li>
            <pre>
                <Code code='<Flex alignment="center">
                              <Card><CardBody>item 1</CardBody></Card>
                              <Card><CardBody>item 2</CardBody></Card>
                              <Card><CardBody>item 3</CardBody></Card>
                            </Flex>'
                />
            </pre>
        </li>
    </ul>
</div>

#### alignment="right"

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Flex alignment="right">
            <Card color="default uk-margin-right"><CardBody>item 1</CardBody></Card>
            <Card color="default uk-margin-right"><CardBody>item 2</CardBody></Card>
            <Card><CardBody>item 3</CardBody></Card>
          </Flex>
        </li>
        <li>
            <pre>
                <Code code='<Flex alignment="right">
                              <Card><CardBody>item 1</CardBody></Card>
                              <Card><CardBody>item 2</CardBody></Card>
                              <Card><CardBody>item 3</CardBody></Card>
                            </Flex>'
                />
            </pre>
        </li>
    </ul>
</div>

## Direction

#### direction="column"

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Flex direction="column">
            <Card color="default uk-width-1-3"><CardBody>item 1</CardBody></Card>
            <Card color="default uk-margin-top uk-width-1-3"><CardBody>item 2</CardBody></Card>
            <Card color="default uk-margin-top uk-width-1-3"><CardBody>item 3</CardBody></Card>
          </Flex>
        </li>
        <li>
            <pre>
                <Code code='<Flex direction="column">
                              <Card><CardBody>item 1</CardBody></Card>
                              <Card><CardBody>item 2</CardBody></Card>
                              <Card><CardBody>item 3</CardBody></Card>
                            </Flex>'
                />
            </pre>
        </li>
    </ul>
</div>

#### direction="column-reverse"

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Flex direction="column-reverse" alignment="center">
            <Card color="default uk-width-1-3"><CardBody>item 1</CardBody></Card>
            <Card color="default uk-margin-right uk-width-1-3"><CardBody>item 2</CardBody></Card>
            <Card color="default uk-margin-right uk-width-1-3"><CardBody>item 3</CardBody></Card>
          </Flex>
        </li>
        <li>
            <pre>
                <Code code='<Flex direction="row-reverse">
                              <Card><CardBody>item 1</CardBody></Card>
                              <Card><CardBody>item 2</CardBody></Card>
                              <Card><CardBody>item 3</CardBody></Card>
                            </Flex>'
                />
            </pre>
        </li>
    </ul>
</div>

#### direction="row-reverse"

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Flex direction="row-reverse" alignment="center">
            <Card><CardBody>item 1</CardBody></Card>
            <Card color="default uk-margin-right"><CardBody>item 2</CardBody></Card>
            <Card color="default uk-margin-right"><CardBody>item 3</CardBody></Card>
          </Flex>
        </li>
        <li>
            <pre>
                <Code code='<Flex direction="row-reverse">
                              <Card><CardBody>item 1</CardBody></Card>
                              <Card><CardBody>item 2</CardBody></Card>
                              <Card><CardBody>item 3</CardBody></Card>
                            </Flex>'
                />
            </pre>
        </li>
    </ul>
</div>

## Wrap

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Flex wrap="wrap">
            <Card color="default uk-margin-right"><CardBody>item 1</CardBody></Card>
            <Card color="default uk-margin-right"><CardBody>item 2</CardBody></Card>
            <Card color="default uk-margin-right"><CardBody>item 1</CardBody></Card>
            <Card color="default uk-margin-right"><CardBody>item 2</CardBody></Card>
            <Card color="default uk-margin-right"><CardBody>This large item makes the Flex wrap</CardBody></Card>
            <Card color="default uk-margin-right uk-margin-top"><CardBody>Item Added to the next row</CardBody></Card>
          </Flex>
        </li>
        <li>
            <pre>
                <Code code='<Flex alignment="center">
                              <Card><CardBody>item 1</CardBody></Card>
                              <Card><CardBody>item 2</CardBody></Card>
                              <Card><CardBody>item 3</CardBody></Card>
                            </Flex>'
                />
            </pre>
        </li>
    </ul>
</div>
