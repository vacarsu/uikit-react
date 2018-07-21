import React from 'react';
import { storiesOf } from '@storybook/react';
import { Panel } from './../src/components/Panel/Panel';

import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react';

const stories = storiesOf('Components/Panel', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('default', () => (
  <Panel>{text('Content', 'Default Panel')}</Panel>
));

stories.addWithJSX('with props', () => (
	<Panel 
		id={text('Id', 'panel-id')}
		isScrollable={boolean('isScrollable', true)}
		className={text('Class Name', null)}
		style={text('Styles', null)}>
		{text('Content', 'Panel with all properties set')}
	</Panel>
));