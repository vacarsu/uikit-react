Create a fully responsive, fluid and nestable grid layout.

-------------

The Grid system of React-UIkit allows you to arrange block elements in columns. It works closely together with the Width component to determine how much space of the container each item will take up

## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| gutter    | string        |  medium   | false    | set the size of the gutter, options are ```small```, ```medium```, ```large```, or ```collapse```|
| divider    | boolean        |       | false    | a divider between items |
| match        | boolean        |         | false    | match the heights of card components  |


## Elements

``` tsx
<Grid></Grid>
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Grid gutter=" uk-child-width-expand@s uk-text-center">
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
          </Grid>
        </li>
        <li>
            <pre>
                <Code code='<Grid gutter=" uk-child-width-expand@s uk-text-center">
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                            </Grid>'
                />
            </pre>
        </li>
    </ul>
</div>

## Gutter

#### Small

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Grid gutter="small uk-child-width-expand@s uk-text-center">
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
          </Grid>
        </li>
        <li>
            <pre>
                <Code code='<Grid gutter="small uk-child-width-expand@s uk-text-center">
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                            </Grid>'
                />
            </pre>
        </li>
    </ul>
</div>

#### Medium

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Grid gutter="medium uk-child-width-expand@s uk-text-center">
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
          </Grid>
        </li>
        <li>
            <pre>
                <Code code='<Grid gutter="medium uk-child-width-expand@s uk-text-center">
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                            </Grid>'
                />
            </pre>
        </li>
    </ul>
</div>

#### Large

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Grid gutter="large uk-child-width-expand@s uk-text-center">
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
          </Grid>
        </li>
        <li>
            <pre>
                <Code code='<Grid gutter="large uk-child-width-expand@s uk-text-center">
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                            </Grid>'
                />
            </pre>
        </li>
    </ul>
</div>

#### Collapse

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Grid gutter="collapse uk-child-width-expand@s uk-text-center">
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
            <Section>
              <Card>
                <CardBody>Item</CardBody>
              </Card>
            </Section>
          </Grid>
        </li>
        <li>
            <pre>
                <Code code='<Grid gutter="collapse uk-child-width-expand@s uk-text-center">
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                              <Section>
                                <Card>
                                  <CardBody>Item</CardBody>
                                </Card>
                              </Section>
                            </Grid>'
                />
            </pre>
        </li>
    </ul>
</div>

## Divider


<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Grid gutter=" uk-child-width-expand@s" divider="true">
            <Section>
              <Card>
                <CardHeader>heading</CardHeader>
                <CardBody>Lorem ipsum dolor sit amet.</CardBody>
              </Card>
            </Section>
            <Section>
              <h3>Heading</h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Section>
          </Grid>
        </li>
        <li>
            <pre>
                <Code code=' <Grid gutter=" uk-child-width-expand@s" divider="true">
            <Section>
              <Card>
                <CardHeader>heading</CardHeader>
                <CardBody>Lorem ipsum dolor sit amet.</CardBody>
              </Card>
            </Section>
            <Section>
              <h3>Heading</h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Section>
          </Grid>'
                />
            </pre>
        </li>
    </ul>
</div>

## Match


<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
          <Grid gutter=" uk-child-width-expand@s" match="true">
            <Section>
              <Card>
                <CardHeader>Dynamic height</CardHeader>
                <CardBody>Lorem ipsum dolor sit amet.</CardBody>
              </Card>
            </Section>
            <Section>
              <h3>The card on the left matches this height</h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Section>
          </Grid>
        </li>
        <li>
            <pre>
                <Code code='<Grid gutter=" uk-child-width-expand@s" match="true">
            <Section>
              <Card>
                <CardHeader>Dynamic height</CardHeader>
                <CardBody>Lorem ipsum dolor sit amet.</CardBody>
              </Card>
            </Section>
            <Section>
              <h3>The card on the left matches this height</h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Section>
          </Grid>'
                />
            </pre>
        </li>
    </ul>
</div>