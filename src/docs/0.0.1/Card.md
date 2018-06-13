Create layout boxes with different styles.

-------------
## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| children     | Nodes        | -       | false     | Use the other card elements modify the way the card looks |
| color        | string       | default | false     | Change the color of the card. |
| hover        | boolen       | false   | false     | Animate the card on hover. |
| size         | string       | -       | false     | Change the size of the card. |


## Elements

``` tsx
<Card
    <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardBody>
            Content body of the Card
        </CardBody>
        <CardFooter>
            Footer of the Card
        </CardFooter>
    </CardHeader>
</Card>
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
            <Card>
                <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardBody>
                        Content body of the Card
                    </CardBody>
                    <CardFooter>
                        Footer of the Card
                    </CardFooter>
                </CardHeader>
            </Card>
        </li>
        <li>
            <pre>
                <Code code='<Card>
                <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardBody>
                        Content body of the Card
                    </CardBody>
                    <CardFooter>
                        Footer of the Card
                    </CardFooter>
                </CardHeader>
            </Card>'
                />
            </pre>
        </li>
    </ul>
</div>

## hover

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
            <Card hover>
                <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardBody>
                        Content body of the Card
                    </CardBody>
                    <CardFooter>
                        Footer of the Card
                    </CardFooter>
                </CardHeader>
            </Card>
        </li>
        <li>
            <pre>
                <Code code='<Card hover>
                <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardBody>
                        Content body of the Card
                    </CardBody>
                    <CardFooter>
                        Footer of the Card
                    </CardFooter>
                </CardHeader>
            </Card>'
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
            <Card size="small" color="primary">
                <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardBody>
                        Content body of the Card
                    </CardBody>
                    <CardFooter>
                        Footer of the Card
                    </CardFooter>
                </CardHeader>
            </Card>
            <Card size="small" color="secondary">
                <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardBody>
                        Content body of the Card
                    </CardBody>
                    <CardFooter>
                        Footer of the Card
                    </CardFooter>
                </CardHeader>
            </Card>
        </li>
        <li>
            <pre>
                <Code code='<Card size="small" color="primary">
                <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardBody>
                        Content body of the Card
                    </CardBody>
                    <CardFooter>
                        Footer of the Card
                    </CardFooter>
                </CardHeader>
            </Card>
            <Card size="small" color="secondary">
                <CardHeader>
                    <CardTitle>Title</CardTitle>
                    <CardBody>
                        Content body of the Card
                    </CardBody>
                    <CardFooter>
                        Footer of the Card
                    </CardFooter>
                </CardHeader>
            </Card>'
                />
            </pre>
        </li>
    </ul>
</div>