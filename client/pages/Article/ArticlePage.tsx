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

export class ArticlePage extends React.Component {
    componentDidMount() {
        Prism.highlightElement(document.getElementById('elements-usage'));
    }

    render() {
        const articleTitle = 'Article';
        const articleContent = `Create articles within your page.`;
        
        return (
            <Section size="small">
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
                                    <TableData shrink>Children</TableData>
                                    <TableData width="small">
                                        <code>any</code>
                                    </TableData>
                                    <TableData><code>-</code></TableData>
                                    <TableData><code>true</code></TableData>
                                    <TableData>
                                        Child elements that compose the article content.
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>Title</TableData>
                                    <TableData><code>string</code></TableData>
                                    <TableData><code>-</code></TableData>
                                    <TableData><code>true</code></TableData>
                                    <TableData>
                                        The title of the article.
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>Meta</TableData>
                                    <TableData><code>string</code></TableData>
                                    <TableData><code>-</code></TableData>
                                    <TableData><code>false</code></TableData>
                                    <TableData>
                                        Renders a meta section of the article for displaying author details if provided.
                                    </TableData>
                                </TableRow>
                                <TableRow>
                                    <TableData>Lead</TableData>
                                    <TableData><code>string</code></TableData>
                                    <TableData><code>-</code></TableData>
                                    <TableData><code>false</code></TableData>
                                    <TableData>
                                        Renders a lead section of the article if provided
                                    </TableData>
                                </TableRow>
                            </TableBody>
                            <TableFoot></TableFoot>
                        </Table>
                        <h3>Elements</h3>
                        <pre>
                            <code id="elements-usage" className="language-tsx">
                                {
    `<Article title="String" meta="String" lead="String">
    </Article>`}
                            </code>
                        </pre>
                        <Section padding>
                            <h3>Basic Usage</h3>
                            <BasicExample />
                        </Section>
                    </Article>
                </Container>
            </Section>
        );
    }
}