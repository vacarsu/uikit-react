const Adapter = require( 'enzyme-adapter-react-16' );


global.UIkit = require( 'uikit' );

require( 'enzyme' ).configure( {
    adapter: new Adapter(),
} );
