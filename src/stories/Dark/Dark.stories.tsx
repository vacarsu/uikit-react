import React from 'react';
import { Story, Meta } from '@storybook/react';
import './dark.scss';

import { Button } from '../../components/Button/Button';
import { Section } from '../../components/Section/Section';
import { Dark } from '../../components/Dark/Dark';

export default {
  title: 'Example/Dark',
  component: Dark,
} as Meta;

const Template: Story<BaseContainerProps> = args => (
  <Section className="uk-background-muted">
    <Dark {...args}>
      <Button color="primary">Makes contents appear darker on light backgrounds</Button>
      <span>Look at me! I look so good :)</span>
    </Dark>
  </Section>
);

export const Default = Template.bind({});
