import * as React from 'react';

declare interface props {
    id?: string;
    options?: string;
    onActive?: Function;
    onInactive?: Function;
}

export class NavbarSticky extends React.Component<props, any> {
    componentDidMount(){   
        if(this.props.onActive){
            this.validateIdProp();
            UIkit.util.on(this.props.id, 'active', this.props.onActive);
        }
        if(this.props.onInactive){
            this.validateIdProp();
            UIkit.util.on(this.props.id, 'active', this.props.onInactive);
        }
        }
 
    render() {
        return (
            <div uk-sticky={`
                sel-target: .uk-navbar-container;
                cls-active: uk-navbar-sticky;
                ${this.props.options ? this.props.options : ''}
            `}>
                {this.props.children}
            </div>
        );
    }
    private validateIdProp() {
        if (!this.props.id) {
            console.error("ID property is required to register to Navbar Sticky events");
        }
    }
}