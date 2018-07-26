import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/react';

require( 'uikit/dist/css/uikit.min.css' );
require( 'uikit' );

setOptions( {
    name: 'react-uikit',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: true,
    sidebarAnimations: false,
} );
addDecorator( withKnobs );
setAddon( JSXAddon );

// automatically import all files ending in *.stories.js
const req = require.context( '../stories', true, /.stories.js$/ );

function loadStories() {
    req.keys().forEach( filename => req( filename ) );
}

configure( loadStories, module );
