Highlight important content

-------------

## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| content      | string        |  -      |  true    | the labels content |
| color        | string        |  -      |  false   | the labels color options are ```default```, ```success```, ```warning```, or ```danger```,|


## Elements

``` tsx
<Labels content="" />
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Labels content="label" />
        </li>
        <li>
            <pre>
                <Code code='<Labels content="label" />'
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
          <Labels color="defualt" content="label" />
          <Labels color="success" content="label" />
          <Labels color="warning" content="label" />
          <Labels color="danger" content="label" />
        </li>
        <li>
            <pre>
                <Code code=
                  '<Labels color="defualt" content="label" />
                  <Labels color="success" content="label" />
                  <Labels color="warning" content="label" />
                  <Labels color="danger" content="label" />'
                />
            </pre>
        </li>
    </ul>
</div>

## With Card

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Flex>
            <Card size="medium" width="1-2">
            <Flex alignment="right">
              <Labels content="label" />
            </Flex>
            <CardBody>
            <CardTitle>Title</CardTitle>
            <p>Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </CardBody>
            </Card>
            <Card size="medium" width="1-2">
            <Flex alignment="right">
              <Labels color="success" content="label" />
            </Flex>
            <CardBody>
            <CardTitle>Title</CardTitle>
              <p>Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </CardBody>
            </Card>
          </Flex>
        </li>
        <li>
            <pre>
                <Code code=
                  '<Flex>
                    <Card size="medium" width="1-2">
                    <Flex alignment="right">
                      <Labels content="label" />
                    </Flex>
                    <CardBody>
                    <CardTitle>Title</CardTitle>
                    <p>Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </CardBody>
                    </Card>
                    <Card size="medium" width="1-2">
                    <Flex alignment="right">
                      <Labels color="success" content="label" />
                    </Flex>
                    <CardBody>
                    <CardTitle>Title</CardTitle>
                      <p>Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </CardBody>
                    </Card>
                    </Flex>'
                />
            </pre>
        </li>
    </ul>
</div>