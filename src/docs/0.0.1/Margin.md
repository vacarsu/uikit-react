 Margin enables addition of spacing between elements.

-------------

## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| type         | string        |  bullet |  true    | the margin types are ```default``` , ```top``` , ```bottom``` , ```left``` , or ```right``` |

#### Margin amount
```small-top``` , ```medium-bottom``` , ```large-left``` , or ```xlarge-right```

#### Remove margin
```remove-top``` , ```remove-bottom``` , ```remove-left``` , or ```remove-right```

## Elements

``` tsx
<Margin type="right" />
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Flex aligment="center">
              <Card color="default uk-width-expand"><CardBody>item 1</CardBody></Card>
              <Margin type="right" />
              <Card color="default uk-width-expand"><CardBody>item 2</CardBody></Card>
          </Flex>
        </li>
        <li>
            <pre>
                <Code code=' <Flex aligment="center">
              <Card color="default uk-width-expand"><CardBody>item 1</CardBody></Card>
              <Margin type="right" />
              <Card color="default uk-width-expand"><CardBody>item 2</CardBody></Card>
          </Flex>'
                />
            </pre>
        </li>
    </ul>
</div>