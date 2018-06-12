import * as React from 'react';

declare interface props extends BaseProps {
  options: string;
}


export class Parallax extends React.Component<props, any> {
    render() {
        return (
            <div>
                {this.applyParallaxFiltersToChild()}
            </div>
        );
    }

    private applyParallaxFiltersToChild() {
        return React.Children.map(this.props.children, (child: React.ReactChild, idx: number) => {
            if (idx > 0) return child;
            return React.cloneElement(child as React.ReactElement<any>, { 'uk-parallax': this.props.options });
        });
    }
}