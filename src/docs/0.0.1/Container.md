Create layout boxes with different styles.

-------------
#### This component allows you to align and center your page content.

Add the <Container> component to a block element to give it a max-width and wrap the main content of your website. The element will be centered and have padding on the sides, that adapts automatically for large screens.

## Properties

| Property     | Type          | Default | Required | Description |
| --------     |:-------------:| -------:| -------- | ----------- |
| size         | string       | -       | false     | Change the size of the container. |


## Elements

``` tsx
<Container>
  Add any child components
</Container>
```

## Basic Usage

You can apply this component to modify the width of content inside sections from the <Section> component.

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
        <div class="uk-section uk-section-muted">
         <div class="uk-container uk-container-small">Add your child components</div>
        </div>
        </li>
        <li>
            <pre>
                <Code code='<Containter size="expannd" background="muted">Add your child components</Container>'
                />
            </pre>
        </li>
    </ul>
</div>

## Size

Add one of the following properties to the container to apply a different max-width.

| Property |  Description
| --------     |:-------------:| -------:| -------- | ----------- |
| small | Add this class for a narrower container. |
| large | Add this class for a wider container. |
| large | Add this class, if you do not want to limit the container width but still want the dynamic horizontal padding. |
