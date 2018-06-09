import * as React from 'react';
import * as Prism from 'prismjs';
import * as marked from 'marked';

import { Accordion } from '../../components/Accordion/Accordion';
import { Article } from '../../components/Article/Article';
import { Container } from '../../components/Container/Container';
import { Flex } from '../../components/Flex/Flex';
import { Section } from '../../components/Section/Section';
import { Table } from '../../components/Table/Table';
import { TableBody } from '../../components/Table/TableBody';
import { TableData } from '../../components/Table/TableData';
import { TableFoot } from '../../components/Table/TableFoot';
import { TableHead } from '../../components/Table/TableHead';
import { TableHeader } from '../../components/Table/TableHeader';
import { TableRow } from '../../components/Table/TableRow';

import { BasicExample } from './BasicExample';
import { DisableCollapseExample } from './DisableCollapseExample';
import { ExpandMultipleExample } from './ExpandMultipleExample';

export class AccordionPage extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            parsedMarkdown: ''
        };
    }

    componentWillMount() {
        fetch('/client/docs/doc1.md')
            .then((res) => res.text())
            .then(text => {
                this.setState({
                    parsedMarkdown: marked(text)
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    componentDidUpdate() {
        Prism.highlightAll();
    }

    render() {
        const articleTitle = 'Accordion';
        const articleContent = `Create a list of items that can be shown individually by clicking an item's header.`;
        
        return (
            <Section style="small">
                <Container size="small">
                    <Article title={articleTitle}>
                        <p dangerouslySetInnerHTML={{__html: this.state.parsedMarkdown}}>
                        </p>
                        <h3>Properties</h3>
                        <Table divider size="small">
                            <TableHead>
                                <TableRow>
                                    <TableHeader shrink>Property</TableHeader>
                                    <TableHeader width="small">Type</TableHeader>
                                    <TableHeader width="small">Default</TableHeader>
                                    <TableHeader width="small">Required</TableHeader>
                                    <TableHeader>Description</TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableData shrink>Children</TableData>
                                    <TableData width="small">
                                        <code>{`<AccordionItem />`}</code>
                                    </TableData>
                                    <TableData><code>-</code></TableData>
                                    <TableData><code>true</code></TableData>
                                    <TableData>
                                        An array of AccordionItems to be rendered inside the Accordian tag.
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>Options</TableData>
                                    <TableData><code>string</code></TableData>
                                    <TableData><code>-</code></TableData>
                                    <TableData><code>false</code></TableData>
                                    <TableData>
                                        A string of component modifiers.
                                        For a list of all modifiers see <a href="https://getuikit.com/docs/accordion#component-options">UIkit Accordian</a>
                                    </TableData>
                                </TableRow>
                            </TableBody>
                            <TableFoot></TableFoot>
                        </Table>
                        <h3>Elements</h3>
                        <pre>
                            <code id="elements-usage" className="language-tsx">
                                {
`<Accordion options="">
    <AccordionItem title="String" content="String" />
<Accordion>`}
                            </code>
                        </pre>
                        <Section padding>
                            <h3>Basic Usage</h3>
                            <BasicExample />
                        </Section>
                        <Section padding>
                            <h3>Disable Collapse</h3>
                            <Flex>
                            <DisableCollapseExample />
                            </Flex>
                        </Section>
                        <Section padding>
                            <h3>Expand Multiple</h3>
                            <ExpandMultipleExample />
                        </Section>
                    </Article>
                </Container>
            </Section>
        );
    }
}