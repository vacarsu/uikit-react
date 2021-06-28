import React from 'react';
import { Story, Meta } from '@storybook/react';
import './alert.scss';

import { Alert } from '../../components/Alert/Alert';

export default {
  title: 'Example/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = args => <Alert {...args} />;

const content = 'Lorem Ipsum';

export const Default = Template.bind({});
Default.args = {
  content,
};

export const Closable = Template.bind({});
Closable.args = {
  content,
  isClosable: true,
};

// export const ExpandMultiple = Template.bind({})
// ExpandMultiple.args = {
//     options: 'multiple: true'
// }
