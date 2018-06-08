import * as React from 'react';
import * as Prism from 'prismjs';

import { Alert } from '../../components/Alert/Alert';
import { Tab } from '../../components/Tab/Tab';
import { TabContainer } from '../../components/Tab/TabContainer';
import { TabContent } from '../../components/Tab/TabContent';

export class CloseButtonExample extends React.Component {
    componentDidMount() {
        Prism.highlightElement(document.getElementById('close-usage'));
    }

    render() {
        return (
            <TabContainer id="close-usage-tabs">
                <Tab key="tab">Example</Tab>
                <Tab key="tab">Code</Tab>
                <TabContent key="tab-content">
                    <Alert isClosable content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                </TabContent>
                <TabContent key="tab-content">
                    <pre>
                        <code id="close-usage" className="language-tsx">
                            {`<Alert isClosable content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />`}
                        </code>
                    </pre>
                </TabContent>
            </TabContainer>
        )
    }
}