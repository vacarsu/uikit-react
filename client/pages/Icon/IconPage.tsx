import * as React from 'react';

import { Card } from '../../components/Card/Card';
import { CardHeader } from '../../components/Card/CardHeader';
import { CardBody } from '../../components/Card/CardBody';
import { Icon } from '../../components/Icon/Icon';
import { Section } from '../../components/Section/Section';

export class IconPage extends React.Component {
    render() {
        return (
            <Section style="small">
                <Card color="default">
                    <CardHeader>
                        <h3>Test</h3>
                    </CardHeader>
                    <CardBody>
                        <Icon
                            options="close"
                            button
                        />
                    </CardBody>
                </Card>
            </Section>
        );
    }
}