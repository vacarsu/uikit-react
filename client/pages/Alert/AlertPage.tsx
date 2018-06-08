import * as React from 'react';
import * as Prism from 'prismjs';

import { Alert } from '../../components/Alert/Alert';
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
import { CloseButtonExample } from './CloseButtonExample';
import { ColorsExample } from './ColorsExample';

export class AlertPage extends React.Component {
    componentDidMount() {
        Prism.highlightElement(document.getElementById('elements-usage'));
    }

    render() {
        const articleTitle = 'Alert';
        const articleContent = `Display success, warning and error messages.`;
        
        return (
            <Section style="small">
                <Container size="small">
                    <Article title={articleTitle}>
                        <p>
                            {articleContent}
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
                                    <TableData shrink>Content</TableData>
                                    <TableData width="small">
                                        <code>{`String`}</code>
                                    </TableData>
                                    <TableData><code>-</code></TableData>
                                    <TableData><code>true</code></TableData>
                                    <TableData>
                                        The message content to display in the alert.
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>Color</TableData>
                                    <TableData><code>string</code></TableData>
                                    <TableData><code>-</code></TableData>
                                    <TableData><code>false</code></TableData>
                                    <TableData>
                                        Change the color style of the alert.
                                        You can provide <code>primary</code>, <code>success</code>,
                                        <code>warning</code>, or <code>danger</code>
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>Options</TableData>
                                    <TableData><code>string</code></TableData>
                                    <TableData><code>-</code></TableData>
                                    <TableData><code>false</code></TableData>
                                    <TableData>
                                        A string of component modifiers.
                                        For a list of all modifiers see <a href="https://getuikit.com/docs/alert#component-options">UIkit Alert</a>
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>isClosable</TableData>
                                    <TableData><code>boolean</code></TableData>
                                    <TableData><code>false</code></TableData>
                                    <TableData><code>false</code></TableData>
                                    <TableData>
                                        This will render a close icon which will remove the alert when clicked.
                                    </TableData>
                                </TableRow>
                            </TableBody>
                            <TableFoot></TableFoot>
                        </Table>
                        <h3>Elements</h3>
                        <pre>
                            <code id="elements-usage" className="language-tsx">
                                {`<Alert content="String" options="" color="String" isClosable />`}
                            </code>
                        </pre>
                        <Section padding>
                            <h3>Basic Usage</h3>
                            <BasicExample />
                        </Section>
                        <Section padding>
                            <h3>Close Button</h3>
                            <CloseButtonExample />
                        </Section>
                        <Section padding>
                            <h3>Colors</h3>
                            <ColorsExample />
                        </Section>
                    </Article>
                </Container>
            </Section>
        );
    }
}