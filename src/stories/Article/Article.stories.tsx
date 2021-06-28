import React from 'react';
import { Story, Meta } from '@storybook/react';
import './article.scss';

import { Article } from '../../components/Article/Article';

export default {
  title: 'Example/Article',
  component: Article,
} as Meta;

const Template: Story<ArticleProps> = args => (
  <Article {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua.
  </Article>
);

const title = 'Lorem Ipsum';
const meta = 'Dolor Sit';
const lead = 'magna aliqua';

export const Default = Template.bind({});
Default.args = {
  title,
  meta,
  lead,
};
