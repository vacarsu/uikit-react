import * as React from 'react';
import * as Prism from 'prismjs';

import { Accordion } from '../../components/Accordion/Accordion';
import { AccordionItem } from '../../components/Accordion/AccordionItem';
import { Tab } from '../../components/Tab/Tab';
import { TabContainer } from '../../components/Tab/TabContainer';
import { TabContent } from '../../components/Tab/TabContent';

export class ExpandMultipleExample extends React.Component {
    componentDidMount() {
        Prism.highlightElement(document.getElementById('expand-multiple-usage'));
    }

    render() {
        const accordionItems = [
            { title: "Item 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { title: "Item 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { title: "Item 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
        ];

        return (
            <TabContainer id="basic-usage-tabs">
                <Tab key="tab">Example</Tab>
                <Tab key="tab">Code</Tab>
                <TabContent key="tab-content">
                    <Accordion
                        width="1-2"
                        options="multiple: true;"
                    >
                        {accordionItems.map(item => (<AccordionItem title={item.title} content={item.content} />))}
                    </Accordion>
                </TabContent>
                <TabContent key="tab-content">
                    <pre>
                        <code id="expand-multiple-usage" className="language-tsx">
                            {
`const accordionItems: AccordianItem[] = [
    { title: "Test", content: "Test" },
    { title: "Test", content: "Test" },
    { title: "Test", content: "Test" }
];

<Accordion options="multiple: true;" items={accordionItems} />
`
                            }
                        </code>
                    </pre>
                </TabContent>
            </TabContainer>
        )
    }
}