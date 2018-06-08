import * as React from 'react';
import { alignClass } from '../../utils/align-class';
import { heightClass } from '../../utils/height-class';
import { widthClass } from '../../utils/width-class';

declare interface props {
    gutter?: string;
    divider?: boolean;
    match?: boolean;
    masonry?: boolean;
}

export class Grid extends React.Component<props, any> {
    render() {
        return (
            <div className={`
                    ${this.setGutter()}
                    ${this.setDivider()}
                    ${this.setMatch()}
                `}
                 uk-grid={`
                    ${this.setMasonry()}
                 `}
            >
                {this.props.children}
            </div>
        );
    }

    private setGutter(): string {
        if (this.props.gutter) {
            return `uk-grid-${this.props.gutter}`
        }
    }

    private setDivider(): string {
        if (this.props.divider) {
            return `uk-grid-divider`;
        }
    }

    private setMatch(): string {
        if (this.props.match) {
            return `uk-grid-match`;
        }
    }

    private setMasonry(): string {
        if (this.props.masonry) {
            return 'masonry: true;'
        }
    }
}