import * as _classNames from 'classnames'
const classNames = _classNames

export function setClassNames(props) {
  const isClassNameSet = props.className ? true : false
  const isHeightSet = props.height ? true : false
  const isWidthSet = props.width ? true : false
  const isAlignSet = props.align ? true : false
  const isBackgroundSet = props.background ? true : false
  const isPositionSet = props.position ? true : false

  return classNames({
    [`${props.className}`]: isClassNameSet,
    [`uk-align-${props.align}`]: isAlignSet,
    [`uk-height-${props.height}`]: isHeightSet,
    [`uk-width-${props.width}`]: isWidthSet,
    [`uk-background-${props.background}`]: isBackgroundSet,
    [`uk-position-${props.position}`]: isPositionSet,
  })
}
