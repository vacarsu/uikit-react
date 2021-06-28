import React from 'react';
import { Story, Meta } from '@storybook/react';
import './breadcrumb.scss';

import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Link } from '../../components/Link/Link';

export default {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
} as Meta;

const Template: Story<BreadcrumbProps> = args => (
  <Breadcrumb {...args}>
    <Link href="#">Test</Link>
    <Link href="#">Test</Link>
    <Link href="#">Test</Link>
  </Breadcrumb>
);

export const Default = Template.bind({});
