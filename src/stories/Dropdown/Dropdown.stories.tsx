import React from 'react';
import { Story, Meta } from '@storybook/react';
import './dropdown.scss';

import { Button } from '../../components/Button/Button';
import { Container } from '../../components/Container/Container';
import { Dropdown } from '../../components/Dropdown/Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = args => (
  <Container>
    <Button>Dropdown</Button>
    <Dropdown {...args}>Just look at that!</Dropdown>
  </Container>
);

export const Default = Template.bind({});
export const Click = Template.bind({});
Click.args = { options: 'mode: click' };
