Create a list of items that can be shown individually by clicking an item's header.

-------------
## Properties

| Property | Type          | Default | Required | Description |
| -------- |:-------------:| -------:| -------- | ----------- |
| Children | AccordionItem | -       |    yes   | An array of Items to be rendered inside the Accordian tag. |
| Options  | string        | -       |    yes   | A string of component modifiers.  |

## Modifiers

| Modifier | Value | Default | Description |
| -------- |:-------------:| -------:| -------- |
|`active`| Number |`false`| Index of the element to open initially. |
|`animation`| Boolean |`true`| Reveal item directly or with a transition. |
|`collapsable`| Boolean |`true`| Allow all items to be closed. |
|`content`| String |`> .uk-acordion-content`| The content selector, which selects the accordion content elements. |
|`duration`| Number |`200`| Animation duration in milliseconds. |
|`multiple`| Boolean |`false`| Allow multiple open items. |
|`targets`| String |`> *`| CSS selector of the element(s) to toggle. |
|`toggle`| String |`> .uk-accordion-false`| The toggle selector, which toggles accordion items. |
|`transition`| String |`ease`| The transition to use when revealing items. Use keyword for [easing functions.](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#Keywords_for_common_timing-functions) |

## Elements

``` tsx
<Accordion options="">
    <AccordionItem title="String" content="String" />
<Accordion>
```

## Basic Usage

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
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
                <Code code='
                    <Accordion>
                        <AccordionItem 
                            title="Item 1"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

                        <AccordionItem 
                            title="Item 2"
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

                        <AccordionItem 
                            title="Item 3" 
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    </Accordion>'
                />
            </pre>
        </li>
    </ul>
</div>

## Disable Collapse

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
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
        </li>
        <li>
            <pre>
                <Code code='
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
                    </Accordion>'
                />
            </pre>
        </li>
    </ul>
</div>


## Expand Multiple

<div>
    <ul uk-tab="">
        <li className="uk-active"><a href="#">Usage</a></li>
        <li><a href="#">Code</a></li>
    </ul>
    <ul className="uk-switcher">
        <li>
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
        </li>
        <li>
            <pre>
                <Code code='
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
                    </Accordion>'
                />
            </pre>
        </li>
    </ul>
</div>
