
## Properties

| Property | Type          | Default | Required | Description |
| -------- |:-------------:| -------:| -------- | ----------- |
| Children | AccordionItem | -       | true     | An array of AccordionItems to be rendered inside the Accordian tag. |
| Options  | string        | -       | true     | A string of component modifiers.For a list of all modifiers see [UIkit Accordion](https://getuikit.com/docs/accordion#component-options). |

## Elements

``` tsx
<Accordion options="">
    <AccordionItem title="String" content="String" />
<Accordion>
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li class="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul class="uk-switcher">
        <li>
            <Accordion width="1-2">
                <AccordionItem 
                    title="Item 1"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

                <AccordionItem 
                    title="Item 2"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

                <AccordionItem 
                    title="Item 3" 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </Accordion>
        </li>
        <li>
            <pre>
                <code id="basic-usage" className="language-tsx">
                    &lt;Accordion width=&quot;1-2&quot;&gt;
                    <p>
                        &lt;AccordionItem 
                            title=&quot;Item 1&quot;
                            content=&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot; /&gt;
                    </p>
                    <p>
                        &lt;AccordionItem 
                            title=&quot;Item 2&quot;
                            content=&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot; /&gt;
                    </p>
                    <p>
                        &lt;AccordionItem 
                            title=&quot;Item 3&quot; 
                            content=&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&quot; /&gt;
                    </p>
                    &lt;/Accordion&gt;
                </code>
            </pre>
        </li>
    </ul>
</div>

## Disable Collapse

``` tsx
<Accordion options="collapsible: false;">
    <AccordionItem 
        title="Item 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

    <AccordionItem 
        title="Item 2"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

    <AccordionItem 
        title="Item 3" 
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
</Accordion>
```


## Expand Multiple

``` tsx
<Accordion options="multiple: true;">
    <AccordionItem 
        title="Item 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

    <AccordionItem 
        title="Item 2"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

    <AccordionItem 
        title="Item 3" 
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
</Accordion>
```
