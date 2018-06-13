import * as React from 'react';
import * as _classNames from 'classnames'; let classNames = _classNames;

declare interface props {
    options: string;
    href?: string;
    button?: boolean;
    image?: string;
}

export class Icon extends React.Component<props, any> {
    render() {
        return (
            this.renderIconType()
        );
    }

    private renderIconType() {
        if (this.props.href) {
            return (
                <a
                    className={this.getClassNames()}
                    href={this.props.href}
                    uk-icon={this.props.options}
                />
            );
        } else if (this.props.image) {
            return (
                <span
                    className={this.getClassNames()}
                    style={{ backgroundImage: `url(${this.props.image})` }}
                    uk-icon={this.props.options}
                />
            );
        } else {
            return (
                <em
                    className={this.getClassNames()}
                    uk-icon={this.props.options}
                />
            );
        }
            
    }

    private getClassNames(): string {
        const isLink = this.props.href ? true : false;
        const isImage = this.props.image ? true : false;
        return classNames({
            [`uk-icon`]: true,
            [`uk-icon-button`]: this.props.button,
            [`uk-icon-link`]: isLink,
            [`uk-icon-image`]: isImage
        });
    }
}