import React from 'react';
import { Story, Meta } from '@storybook/react';
import './card.scss';

import { Card, CardBody, CardFooter, CardHeader, CardTitle } from '../../components/Card';

export default {
  title: 'Example/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = args => (
  <Card {...args}>
    <CardHeader>Card Header</CardHeader>
    <CardBody>Lorem Ipsum dolor sit amet!</CardBody>
    <CardFooter>Card Footer</CardFooter>
  </Card>
);

const ColorsTemplate: Story<CardProps> = args => (
  <div>
    <Card {...args[0]}>
      <CardHeader>Card Header</CardHeader>
      <CardBody>Lorem Ipsum dolor sit amet!</CardBody>
      <CardFooter>Card Footer</CardFooter>
    </Card>
    <Card {...args[1]}>
      <CardHeader>Card Header</CardHeader>
      <CardBody>Lorem Ipsum dolor sit amet!</CardBody>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  </div>
);

export const Default = Template.bind({});

export const Hover = Template.bind({});
Hover.args = { hover: true };

export const Colors = ColorsTemplate.bind({});
Colors.args = [{ color: 'primary' }, { color: 'secondary' }];
