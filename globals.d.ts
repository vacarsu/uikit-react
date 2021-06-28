interface BaseProps {
  id?: string;
  className?: string;
  style?: object;
}

interface BaseContainerProps extends BaseProps {
  children: any;
  align?: string;
  height?: string;
  width?: string;
  background?: string;
  position?: string;
}

interface AccordionProps extends BaseContainerProps {
  options?: string;
  onBeforeShow?: (e: Event, accordionState: any) => boolean | void;
  onBeforeHide?: (e: Event, accordionState: any) => boolean | void;
  onShow?: (e: Event, accordionState: any) => void;
  onShown?: (e: Event, accordionState: any) => void;
  onHide?: (e: Event, accordionState: any) => void;
  onHidden?: (e: Event, accordionState: any) => void;
}

interface AccordionItemProps extends BaseProps {
  title: string;
  children: string | JSX.Element;
}

interface AlertProps extends BaseProps {
  content: string;
  color?: string;
  duration?: number;
  isClosable?: boolean;
  onBeforeHide?: Function;
  onHide?: Function;
}

interface ArticleProps extends BaseContainerProps {
  title: string;
  meta?: string;
  lead?: string;
}

interface BadgeProps extends BaseProps {
  count: number;
}

interface BreadcrumbProps extends BaseProps {
  children: any;
}

interface ButtonProps extends BaseProps {
  children: any;
  toggleOptions?: string;
  color?: string;
  size?: string;
  href?: string;
  onClick?: any;
}

interface CardProps extends BaseContainerProps {
  hover?: boolean;
  color?: string;
  size?: string;
}

interface ContainerProps extends BaseContainerProps {
  size?: string;
}

interface CoverProps extends BaseProps {
  src: string;
  alt?: string;
  type: 'video' | 'image';
  videoFormat?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  width?: string;
  height?: string;
  responsive?: boolean;
}

interface DropdownProps extends BaseContainerProps {
  options?: string;
}

interface FlexProps extends BaseContainerProps {
  alignment?: string;
  direction?: string;
  wrap?: string;
}

interface FormProps extends React.HTMLProps<HTMLFormElement> {
  layout?: string;
  custom?: boolean;
}

interface FormInputProps extends React.HTMLProps<HTMLInputElement> {
  color?: 'danger' | 'success' | 'blank';
  layout?: 'small' | 'large';
  width?: 'large' | 'medium' | 'small' | 'xsmall';
}

interface FormSelectProps extends React.HTMLProps<HTMLSelectElement> {
  color?: 'danger' | 'success' | 'blank';
  layout?: 'small' | 'large';
  width?: 'large' | 'medium' | 'small' | 'xsmall';
}

interface FormTextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  children?: string;
  color?: 'danger' | 'success' | 'blank';
  layout?: 'small' | 'large';
  width?: 'large' | 'medium' | 'small' | 'xsmall';
}

interface GridProps extends BaseContainerProps {
  gutter?: 'small' | 'medium' | 'large' | 'collapse';
  divider?: boolean;
  match?: boolean;
  options?: string;
}

interface IconProps extends BaseProps {
  options: string;
  href?: string;
  button?: boolean;
  image?: string;
}

interface ImageProps extends React.HTMLProps<HTMLImageElement> {
  options?: string;
}

interface LabelProps extends BaseProps {
  color?: string;
  content: string;
}

interface LightboxProps extends BaseProps {
  options: string;
  children: any;
}

interface LightboxItemProps extends BaseProps {
  href: string;
  caption?: string;
  children: any;
}

interface LinkProps extends BaseProps {
  type?: 'muted' | 'text' | 'heading' | 'reset';
  href?: string;
  toggleOptions?: string;
  children: any;
}

interface ListProps extends BaseContainerProps {
  type?: 'bullet' | 'divider' | 'striped';
}

interface MarginProps extends BaseContainerProps {
  type: string;
  dynamicWrapping?: boolean;
}

interface NavProps extends BaseProps {
  preset?: 'default' | 'primary' | 'center';
  options?: string;
  accordion?: boolean;
  child?: boolean;
  children: any;
}

interface NavItemProps extends BaseProps {
  type?: 'header' | 'divider';
  parent?: boolean;
  children: any;
}

interface NavbarProps extends BaseProps {
  left?: boolean;
  right?: boolean;
  children: any;
}

interface NavbarContainerProps extends BaseProps {
  options?: string;
  dropbar?: boolean;
  transparent?: boolean;
  children: any;
}

interface NavbarStickyProps extends BaseProps {
  id?: string;
  options?: string;
  onActive?: any;
  onInactive?: any;
  children: any;
}

interface OffcanvasProps extends BaseProps {
  id: string;
  options?: string;
  onBeforeShow?: Function;
  onShow?: Function;
  onShown?: Function;
  onBeforeHide?: Function;
  onHide?: Function;
  onHidden?: Function;
  children: any;
}

interface OverlayProps extends BaseProps {
  position?: string;
  type?: 'default' | 'primary';
  showIcon?: boolean;
}

interface PanelProps extends BaseProps {
  isScrollable?: boolean;
  children: any;
}

interface ParallaxProps extends BaseProps {
  options: string;
  children: any;
}

interface ProgressProps extends BaseProps {
  value: number;
  max: number;
}

interface ProgressState {
  value: number;
}

interface ScrollspyProps extends BaseProps {
  options: string;
  children: any;
}

interface SectionProps extends BaseContainerProps {
  padding?: boolean;
  color?: string;
  size?: string;
  preserveColor?: boolean;
}

interface SidebarProps extends BaseContainerProps {
  visibility?: string;
}

interface SlideshowProps extends BaseProps {
  options?: string;
  navigation?: boolean;
  navigationStyle?: 'dark' | 'light';
  children: any;
}

interface SlideshowItemProps extends BaseProps {
  src: string;
  alt?: string;
  type: 'image' | 'video';
  videoFormat?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

interface TabContainerProps extends BaseProps {
  id?: string;
  options?: string;
  onBeforeShow?: Function;
  onShow?: Function;
  onShown?: Function;
  onBeforeHide?: Function;
  onHide?: Function;
  onHidden?: Function;
  children: any;
}

interface TableProps extends BaseProps {
  divider?: boolean;
  striped?: boolean;
  hover?: boolean;
  justify?: boolean;
  center?: boolean;
  responsive?: boolean;
  size?: string;
  children: any;
}

declare interface TableDataProps extends BaseProps {
  shrink?: boolean;
  expand?: boolean;
  width?: string;
  children: any;
}

declare interface TableHeadProps extends BaseProps {
  shrink?: boolean;
  expand?: boolean;
  width?: string;
  children: any;
}

declare interface TableHeaderProps extends BaseProps {
  shrink?: boolean;
  expand?: boolean;
  width?: string;
  children: any;
}
