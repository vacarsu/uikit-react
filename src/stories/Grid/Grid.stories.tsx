import React from 'react';
import { Story, Meta } from '@storybook/react';
import './grid.scss';

import { Card } from '../../components/Card/Card';
import { CardBody } from '../../components/Card/CardBody';
import { Grid } from '../../components/Grid/Grid';
import { Section } from '../../components/Section/Section';

export default {
  title: 'Example/Grid',
  component: Grid,
} as Meta;

const Template: Story<GridProps> = args => (
  <Grid {...args}>
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
  </Grid>
);

const DividerTemplate: Story<GridProps> = args => (
  <Grid {...args}>
    <Section>
      <Card>
        <CardBody>item 1</CardBody>
      </Card>
    </Section>
    <Section>
      <h3>Heading</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </Section>
  </Grid>
);

export const Default = Template.bind({});
export const GutterSmall = Template.bind({});
export const GutterMedium = Template.bind({});
export const GutterLarge = Template.bind({});
export const GutterCollapse = Template.bind({});
export const Divider = DividerTemplate.bind({});
export const Match = DividerTemplate.bind({});
GutterSmall.args = { gutter: 'small' };
GutterMedium.args = { gutter: 'medium' };
GutterLarge.args = { gutter: 'large' };
GutterCollapse.args = { gutter: 'collapse' };
Divider.args = { divider: true };
Match.args = { match: true };
