import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './../src/components/Button/Button';

import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react';

const stories = storiesOf('Components/Button', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => (
  <Button disabled={boolean('Disabled', false)}>{text('Content', 'Default')}</Button>
));

stories.add('with a button', () => (
  <Button disabled={boolean('Disabled', false)}>{text('Content', 'Hello Storybook')}</Button>
));

// Knobs as dynamic variables.
stories.add('as dynamic variables', () => {
  const name = text('Name', 'Arunoda Susiripala');
  const age = number('Age', 89);

  const content = `I am ${name} and I'm ${age} years old.`;
  return <div>{content}</div>;
});
