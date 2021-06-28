import React from 'react';
import { Story, Meta } from '@storybook/react';
import './button.scss';

import { Button } from '../../components/Button/Button';
import { Link } from '../../components/Link/Link';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args}>Hello!</Button>;

const ColorsTemplate: Story<ButtonProps> = args => (
  <div>
    <Button {...args[0]}>Hello!</Button>
    <Button {...args[1]}>Hello!</Button>
    <Button {...args[2]}>Hello!</Button>
    <Button {...args[3]}>Hello!</Button>
    <Button {...args[4]}>Hello!</Button>
  </div>
);

export const Default = Template.bind({});

export const Colors = ColorsTemplate.bind({});
Colors.args = [
  { color: 'primary' },
  { color: 'secondary' },
  { color: 'danger' },
  { color: 'text' },
  { color: 'link' },
];
