declare function require(name:string);
declare var UIkit;

declare module "react-element-to-jsx-string" {
    const value: any;
    export default value;
}

declare module "marksy" {
    const value: any
    export default value
  }
  declare module "marksy/components" {
    const value: any
    export default value
  }

interface BaseProps {
    className?: string;
    style?: string;
    align?: string;
    height?: string;
    width?: string;
    background?: string;
    position?: string;
}