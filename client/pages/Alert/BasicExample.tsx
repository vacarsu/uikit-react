import * as React from 'react';
import * as Prism from 'prismjs';

import { Alert } from '../../components/Alert/Alert';
import { Tab } from '../../components/Tab/Tab';
import { TabContainer } from '../../components/Tab/TabContainer';
import { TabContent } from '../../components/Tab/TabContent';

export class BasicExample extends React.Component {
    componentDidMount() {
        Prism.highlightElement(document.getElementById('basic-usage'));
    }

    render() {
        return (
            <TabContainer id="basic-usage-tabs">
                <Tab key="tab">Example</Tab>
                <Tab key="tab">Code</Tab>
                <TabContent key="tab-content">
                    <Alert content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                </TabContent>
                <TabContent key="tab-content">
                    <pre>
                        <code id="basic-usage" className="language-tsx">
                            {`<Alert content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />`}
                        </code>
                    </pre>
                </TabContent>
            </TabContainer>
        )
    }
}