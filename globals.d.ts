interface BaseProps {
  id?: string
  className?: string
  style?: object
}

interface BaseContainerProps extends BaseProps {
  align?: string
  height?: string
  width?: string
  background?: string
  position?: string
}

interface AccordionProps extends BaseContainerProps {
  children: any
  options?: string
  onBeforeShow?: (e: Event, accordionState: any) => boolean | void
  onBeforeHide?: (e: Event, accordionState: any) => boolean | void
  onShow?: (e: Event, accordionState: any) => void
  onShown?: (e: Event, accordionState: any) => void
  onHide?: (e: Event, accordionState: any) => void
  onHidden?: (e: Event, accordionState: any) => void
}

interface AccordionItemProps extends BaseProps {
  title: string
  children: string | JSX.Element
}

interface AlertProps extends BaseProps {
  content: string
  color?: string
  duration?: number
  isClosable?: boolean
  onBeforeHide?: Function
  onHide?: Function
}

interface ArticleProps extends BaseContainerProps {
  children: any
  title: string
  meta?: string
  lead?: string
}

interface BadgeProps extends BaseProps {
  count: number
}

interface BreadcrumbProps extends BaseProps {}

interface ButtonProps extends BaseProps {
  toggleOptions?: string
  color?: string
  size?: string
  href?: string
  onClick?: any
}

interface CardProps extends BaseContainerProps {
  hover?: boolean
  color?: string
  size?: string
}

interface ContainerProps extends BaseContainerProps {
  size?: string
}

interface CoverProps extends BaseProps {
  src: string
  alt?: string
  type: 'video' | 'image'
  videoFormat?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsinline?: boolean
  width?: string
  height?: string
  responsive?: boolean
}

interface DropdownProps extends BaseContainerProps {
  options?: string
}

interface FlexProps extends BaseContainerProps {
  alignment?: string
  direction?: string
  wrap?: string
}

interface FormProps extends React.HTMLProps<HTMLFormElement> {
  layout?: string
  custom?: boolean
}

interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
  color?: 'danger' | 'success' | 'blank'
  layout?: 'small' | 'large'
  width?: 'large' | 'medium' | 'small' | 'xsmall'
}

interface FormSelectProps extends React.HTMLProps<HTMLSelectElement> {
  color?: 'danger' | 'success' | 'blank'
  layout?: 'small' | 'large'
  width?: 'large' | 'medium' | 'small' | 'xsmall'
}

interface FormTextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  children?: string
  color?: 'danger' | 'success' | 'blank'
  layout?: 'small' | 'large'
  width?: 'large' | 'medium' | 'small' | 'xsmall'
}

interface GridProps extends BaseContainerProps {
  gutter?: 'small' | 'medium' | 'large' | 'collapse'
  divider?: boolean
  match?: boolean
  options?: string
}

interface IconProps extends BaseProps {
  options: string
  href?: string
  button?: boolean
  image?: string
}

interface ImageProps extends React.HTMLProps<HTMLImageElement> {
  options?: string
}

interface LabelProps extends BaseProps {
  color?: string
  content: string
}

interface LightboxProps extends BaseProps {
  options: string
}

interface LightboxItemProps extends BaseProps {
  href: string
  caption?: string
}

interface LinkProps extends BaseProps {
  type?: 'muted' | 'text' | 'heading' | 'reset'
  href?: string
  toggleOptions?: string
}

interface ListProps extends BaseProps {
  type?: 'bullet' | 'divider' | 'striped'
}

interface MarginProps extends BaseContainerProps {
  type: string
  dynamicWrapping?: boolean
}

interface NavProps extends BaseProps {
  preset?: 'default' | 'primary' | 'center'
  options?: string
  accordion?: boolean
  child?: boolean
}

interface NavItemProps extends BaseProps {
  type?: 'header' | 'divider'
  parent?: boolean
}

interface NavbarProps extends BaseProps {
  left?: boolean
  right?: boolean
}

interface NavbarContainerProps extends BaseProps {
  options?: string
  dropbar?: boolean
  transparent?: boolean
}

interface NavbarStickyProps extends BaseProps {
  id?: string
  options?: string
  onActive?: any
  onInactive?: any
}

interface OffcanvasProps extends BaseProps {
  id: string
  options?: string
  onBeforeShow?: Function
  onShow?: Function
  onShown?: Function
  onBeforeHide?: Function
  onHide?: Function
  onHidden?: Function
}

interface OverlayProps extends BaseProps {
  position?: string
  type?: 'default' | 'primary'
  showIcon?: boolean
}

interface PanelProps extends BaseProps {
  isScrollable?: boolean
}

interface ParallaxProps extends BaseProps {
  options: string
}

interface ProgressProps extends BaseProps {
  value: number
  max: number
}

interface ProgressState {
  value: number
}

interface ScrollspyProps extends BaseProps {
  options: string
}

interface SectionProps extends BaseContainerProps {
  padding?: boolean
  color?: string
  size?: string
  preserveColor?: boolean
}

interface SidebarProps extends BaseContainerProps {
  visibility?: string
}

interface SlideshowProps extends BaseProps {
  options?: string
  navigation?: boolean
  navigationStyle?: 'dark' | 'light'
}

interface SlideshowItemProps extends BaseProps {
  src: string
  alt?: string
  type: 'image' | 'video'
  videoFormat?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsinline?: boolean
}

interface TabContainerProps extends BaseProps {
  id?: string
  options?: string
  onBeforeShow?: Function
  onShow?: Function
  onShown?: Function
  onBeforeHide?: Function
  onHide?: Function
  onHidden?: Function
}

interface TableProps extends BaseProps {
  divider?: boolean
  striped?: boolean
  hover?: boolean
  justify?: boolean
  center?: boolean
  responsive?: boolean
  size?: string
}

declare interface TableDataProps extends BaseProps {
  shrink?: boolean
  expand?: boolean
  width?: string
}

declare interface TableHeadProps extends BaseProps {
  shrink?: boolean
  expand?: boolean
  width?: string
}

declare interface TableHeaderProps extends BaseProps {
  shrink?: boolean
  expand?: boolean
  width?: string
}
