import * as React from 'react';

declare interface props {
    type: string;
    dynamicWrapping?: boolean;
}

export class Margin extends React.Component<props, any> {
    render() {
        return (
            <div uk-margin={this.props.dynamicWrapping} className={this.setClassNames()}>
                {this.props.children}
            </div>
        );
    }

    private setClassNames() {
        const stringArray = this.props.type.split('; ');
        let classString: string;
        
        stringArray.map((string, idx) => {
            classString = `${classString} uk-margin-${string}`;
        });

        return classString;
    }
}