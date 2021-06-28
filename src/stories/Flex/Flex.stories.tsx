import React from 'react';
import { Story, Meta } from '@storybook/react';
import './flex.scss';

import { Flex } from '../../components/Flex/Flex';
import { Card } from '../../components/Card/Card';
import { CardBody } from '../../components/Card/CardBody';

export default {
  title: 'Example/Flex',
  component: Flex,
} as Meta;

const Template: Story<FlexProps> = args => (
  <Flex {...args}>
    <div>
      <Card>
        <CardBody>item 1</CardBody>
      </Card>
    </div>
    <div>
      <Card>
        <CardBody>item 2</CardBody>
      </Card>
    </div>
    <div>
      <Card>
        <CardBody>item 3</CardBody>
      </Card>
    </div>
  </Flex>
);

const WrapTemplate: Story<FlexProps> = args => (
  <Flex {...args}>
    <div>
      <Card>
        <CardBody>item 1</CardBody>
      </Card>
    </div>
    <div>
      <Card>
        <CardBody>item 2</CardBody>
      </Card>
    </div>
    <div>
      <Card>
        <CardBody>item 3</CardBody>
      </Card>
    </div>
    <div>
      <Card>
        <CardBody>This large item makes the Flex wrap</CardBody>
      </Card>
    </div>
    <div>
      <Card color="default uk-margin-right uk-margin-top">
        <CardBody>Item Added to the next row</CardBody>
      </Card>
    </div>
  </Flex>
);

export const Default = Template.bind({});
export const Center = Template.bind({});
export const Right = Template.bind({});
export const Column = Template.bind({});
export const ReverseColumn = Template.bind({});
export const RowColumn = Template.bind({});
export const Wrap = WrapTemplate.bind({});
Center.args = { alignment: 'center' };
Right.args = { alignment: 'right' };
Column.args = { direction: 'column' };
ReverseColumn.args = { direction: 'column-reverse' };
RowColumn.args = { direction: 'row-reverse' };
Wrap.args = { wrap: 'wrap' };
