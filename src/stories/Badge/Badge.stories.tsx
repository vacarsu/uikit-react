import React from 'react';
import { Story, Meta } from '@storybook/react';
import './badge.scss';

import { Badge } from '../../components/Badge/Badge';

export default {
  title: 'Example/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = args => <Badge {...args} />;

const count = 10;

export const Default = Template.bind({});
Default.args = {
  count,
};
