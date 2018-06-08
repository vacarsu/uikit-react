import * as React from 'react';
import * as Prism from 'prismjs';

import { Alert } from '../../components/Alert/Alert';
import { Flex } from '../../components/Flex/Flex';
import { Tab } from '../../components/Tab/Tab';
import { TabContainer } from '../../components/Tab/TabContainer';
import { TabContent } from '../../components/Tab/TabContent';

export class ColorsExample extends React.Component {
    componentDidMount() {
        Prism.highlightElement(document.getElementById('color-usage'));
    }

    render() {
        return (
            <TabContainer id="color-usage-tabs">
                <Tab key="tab">Example</Tab>
                <Tab key="tab">Code</Tab>
                <TabContent key="tab-content">
                    <Flex direction="column">
                        <Alert color="primary" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        <Alert color="success" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        <Alert color="warning" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                        <Alert color="danger" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                    </Flex>
                </TabContent>
                <TabContent key="tab-content">
                    <pre>
                        <code id="color-usage" className="language-tsx">
                            {
`<Alert color="primary" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
<Alert color="success" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
<Alert color="warning" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
<Alert color="danger" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />`}
                        </code>
                    </pre>
                </TabContent>
            </TabContainer>
        )
    }
}