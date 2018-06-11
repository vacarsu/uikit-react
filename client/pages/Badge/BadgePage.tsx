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
import { Badge } from '../../components/Badge/Badge';
import { Tab } from '../../components/Tab/Tab';
import { TabContainer } from '../../components/Tab/TabContainer'
import { TabContent } from '../../components/Tab/TabContent'

export class BadgePage extends React.Component {
  componentDidMount() {
      Prism.highlightElement(document.getElementById('elements-usage'));
  }

  render() {
      const articleTitle = 'Badge';
      const articleContent = `Easily create nice looking notification badges.`;
      
      return (
        
          <Section size="small">
              <Container size="small">
                  <Article title={articleTitle}>
                      <p>
                          {articleContent}
                      </p>
                      <h3>Usage</h3>
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
                                  <TableData shrink>Count</TableData>
                                  <TableData width="small">
                                      <code>{`Number`}</code>
                                  </TableData>
                                  <TableData><code>-</code></TableData>
                                  <TableData><code>true</code></TableData>
                                  <TableData>
                                      The number to display in the badge.
                                  </TableData>
                              </TableRow>
                          </TableBody>
                          <TableFoot></TableFoot>
                      </Table>
                      <h3>Elements</h3>
                      <pre>
                          <code id="elements-usage" className="language-tsx">
                              {`<Badge count={Number} />`}
                          </code>
                      </pre>
                      <Section size="small">
                        <TabContainer id="basic-usage-tabs">
                          <Tab key="tab">Example</Tab>
                          <Tab key="tab">Code</Tab>
                          <TabContent key="tab-content">
                            <Badge count={10002} />
                          </TabContent>
                          <TabContent key="tab-content">
                              <pre>
                                  <code id="basic-usage" className="language-tsx">
                                      {
                                    `<Badge count={10002} />`
                                      }
                                  </code>
                              </pre>
                          </TabContent>
                      </TabContainer>
                    </Section>
                  </Article>
              </Container>
          </Section>
      );
  }
}