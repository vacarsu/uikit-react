import React from 'react';
import { Story, Meta } from '@storybook/react';
import './accordion.scss';

import { Accordion, AccordionItem } from '../../components/Accordion';

export default {
  title: 'Example/Accordion',
  component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = args => (
  <Accordion {...args}>
    <AccordionItem title="Item 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </AccordionItem>
    <AccordionItem title="Item 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </AccordionItem>
    <AccordionItem title="Item 3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </AccordionItem>
  </Accordion>
);

export const Default = Template.bind({});

export const DisableCollapse = Template.bind({});
DisableCollapse.args = {
  options: 'collapsible: false',
};

export const ExpandMultiple = Template.bind({});
ExpandMultiple.args = {
  options: 'multiple: true',
};
