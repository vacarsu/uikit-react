import React from 'react';
import { Story, Meta } from '@storybook/react';
import './cover.scss';

import { Cover } from '../../components/Cover/Cover';

export default {
  title: 'Example/Cover',
  component: Cover,
} as Meta;

const Template: Story<CoverProps> = args => (
  <Cover {...args}>
    <div></div>
  </Cover>
);

export const Default = Template.bind({});
