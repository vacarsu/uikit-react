Highlight important content

-------------

## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| content      | string        |  -      |  true    | the Label content |
| color        | string        |  -      |  false   | the Label color options are ```default```, ```success```, ```warning```, or ```danger``` |


## Elements

``` tsx
<Label content="" />
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Label content="label" />
        </li>
        <li>
            <pre>
                <Code code='<Label content="label" />'
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
          <Label ClassName="uk-label-success" content="label" />
          <Label ClassNames="success" content="label" />
          <Label ClassNames="warning" content="label" />
          <Label ClassNames="danger" content="label" />
        </li>
        <li>
            <pre>
                <Code code=
                  '<Label color="defualt" content="label" />
                  <Label color="success" content="label" />
                  <Label color="warning" content="label" />
                  <Label color="danger" content="label" />'
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
              <Label content="label" />
            </Flex>
            <CardBody>
            <CardTitle>Title</CardTitle>
            <p>Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </CardBody>
            </Card>
            <Card size="medium" width="1-2">
            <Flex alignment="right">
              <Label color="success" content="label" />
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
                      <Label content="label" />
                    </Flex>
                    <CardBody>
                    <CardTitle>Title</CardTitle>
                    <p>Lorem ipsum color sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </CardBody>
                    </Card>
                    <Card size="medium" width="1-2">
                    <Flex alignment="right">
                      <Label color="success" content="label" />
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