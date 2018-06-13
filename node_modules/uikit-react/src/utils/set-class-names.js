const classNames = require('classnames');
export function setClassNames(props) {
    var isHeightSet = props.height ? true : false;
    var isWidthSet = props.width ? true : false;
    var isAlignSet = props.align ? true : false;
    var isBackgroundSet = props.background ? true : false;
    var isPositionSet = props.position ? true : false;
    return classNames((_a = {},
        _a["uk-align-" + props.align] = isAlignSet,
        _a["uk-height-" + props.height] = isHeightSet,
        _a["uk-width-" + props.width] = isWidthSet,
        _a["uk-background-" + props.background] = isBackgroundSet,
        _a["uk-position-" + props.position] = isPositionSet,
        _a));
    var _a;
}
